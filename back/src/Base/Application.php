<?php

namespace GMPS\Eleicoes_2018\Base;

use DI\Container;
use DI\ContainerBuilder;
use Dotenv\Dotenv;
use FastRoute\DataGenerator\GroupCountBased as GroupCountBased;
use FastRoute\Dispatcher;
use FastRoute\Dispatcher\GroupCountBased as GroupCountBased_Dispatcher;
use FastRoute\RouteCollector;
use FastRoute\RouteParser\Std as Std_RouteParser;
use Medoo\Medoo;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Symfony\Bridge\PsrHttpMessage\Factory\DiactorosFactory;
use Symfony\Bridge\PsrHttpMessage\Factory\HttpFoundationFactory;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use function DI\autowire;
use function DI\env;


class Application
{
    /**
     * @var Request
     */
    private $request;
    /**
     * @var RouteCollector
     */
    private $routeCollector;
    /**
     * @var DiactorosFactory
     */
    private $psr7factory;
    /**
     * @var HttpFoundationFactory
     */
    private $httpFoundationFactory;
    /**
     * @var Container
     */
    private $container;

    /**
     * Application constructor.
     * @param string $workDir
     */
    public function __construct($workDir)
    {
        $this->loadConfigurations($workDir);

        $this->request = Request::createFromGlobals();
        $this->routeCollector = new RouteCollector(new Std_RouteParser, new GroupCountBased());

        $this->psr7factory = new DiactorosFactory();
        $this->httpFoundationFactory = new HttpFoundationFactory();

    }

    public function get($route, $handler)
    {
        $this->routeCollector->get($route, $this->handlerDefault($handler));
        $this->options($route, ['GET']);
    }

    public function post($route, $handler)
    {
        $this->routeCollector->post($route, $this->handlerDefault($handler));
        $this->options($route, ['POST']);
    }

    private function options($route, $allowedMethods)
    {
        $this->routeCollector->addRoute(
            'OPTIONS',
            $route,
            $this->handlerOptions($route, $allowedMethods)
        );
    }

    public function run()
    {
        $dispatcher = new GroupCountBased_Dispatcher($this->routeCollector->getData());

        $psr7Request = $this->psr7factory->createRequest($this->request);
        $uri = $psr7Request->getUri()->getPath();

        $routeInfo = $dispatcher->dispatch(
            $psr7Request->getMethod(),
            $uri
        );

        switch ($routeInfo[0]) {
            case Dispatcher::NOT_FOUND:
                $this->handlerNotFound();
                break;

            case Dispatcher::METHOD_NOT_ALLOWED:
                $allowedMethods = $routeInfo[1];
                $this->handlerNotAllowedMethod($allowedMethods);
                break;

            case Dispatcher::FOUND:
                $handler = $routeInfo[1];
                $vars = $routeInfo[2] ?? [];
                if (is_callable($handler)) {
                    $handler(...array_values($vars));
                }
                break;
        }
    }

    private function handlerDefault($handler)
    {
        return function (...$args) use ($handler) {

            $psr7Response = $this->psr7factory->createResponse(new Response());
            $psr7Request = $this->psr7factory->createRequest($this->request);

            $psr7Response = $this->addCORS($psr7Response);

            $response = $this->callHandler($handler, $psr7Request, $psr7Response, ...$args);

            $response = $this->httpFoundationFactory->createResponse($response);
            $response->send();
        };
    }

    private function handlerNotFound()
    {
        (new Response('NOT FOUND', 404))->send();
    }

    private function handlerNotAllowedMethod($allowedMethods)
    {
        (new Response(implode([
            "NOT ALLOWED METHOD!",
            "Try using: " . implode($allowedMethods, ', ')
        ], "\n"), 405))->send();
    }

    private function handlerOptions($route, $allowedMethods)
    {
        $allowedMethods = array_merge($allowedMethods, ['OPTIONS']);

        return function (...$args) use ($allowedMethods) {
            $psr7Response = $this->psr7factory->createResponse(new Response());

            $psr7Response = $this->addCORS($psr7Response)
                ->withHeader('Access-Control-Allow-Methods', implode(', ', $allowedMethods));

            $response = $this->httpFoundationFactory->createResponse($psr7Response);
            $response->send();
        };
    }

    /**
     * @param $workDir
     */
    private function loadConfigurations($workDir): void
    {
        (new Dotenv($workDir))->load();

        if(getenv("FROM_QS")) {
            $_SERVER['REQUEST_URI'] = $_GET['p'];
            unset($_GET['p']);
            $_SERVER["QUERY_STRING"] = http_build_query($_GET);
            if( $_SERVER["QUERY_STRING"] ) {
                $_SERVER['REQUEST_URI'] .= '?'.$_SERVER["QUERY_STRING"];
            }
        }
        else if ($basePath = getenv("BASE_PATH")) {
            $_SERVER['REQUEST_URI'] = str_replace($basePath, '', $_SERVER['REQUEST_URI']);
            $_SERVER['REQUEST_URI'] = str_replace('//', '/', $_SERVER['REQUEST_URI']);
        }

        $containerBuilder = new ContainerBuilder();
        $containerBuilder->addDefinitions([
            Medoo::class => autowire()
                ->constructorParameter('options', [
                    'database_type' => env('DB_TYPE'),
                    'database_name' => env('DB_NAME'),
                    'server'        => env('DB_HOST'),
                    'port'          => env('DB_PORT'),
                    'username'      => env('DB_USER'),
                    'password'      => env('DB_PASSWORD')
                ])
        ]);
        $this->container = $containerBuilder->build();

    }

    private function callHandler($handler, RequestInterface $request, ResponseInterface $response, ...$args)
    {
        if (is_array($handler)) {
            if( $this->container->has($handler[0]) ) {
                $handler[0] = $this->container->get($handler[0]);
            }
        }

        return call_user_func_array($handler, array_merge([$request, $response], $args));
    }

    private function addCORS(ResponseInterface $psr7Response)
    {
        return $psr7Response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withAddedHeader('Access-Control-Allow-Headers', 'Content-Type');
    }
}