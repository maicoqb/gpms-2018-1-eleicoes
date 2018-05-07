<?php

namespace GMPS\Eleicoes_2018\Base;

use Dotenv\Dotenv;
use FastRoute\DataGenerator\GroupCountBased as GroupCountBased;
use FastRoute\Dispatcher;
use FastRoute\Dispatcher\GroupCountBased as GroupCountBased_Dispatcher;
use FastRoute\RouteCollector;
use FastRoute\RouteParser\Std as Std_RouteParser;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


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
     * Application constructor.
     * @param string $workDir
     */
    public function __construct($workDir)
    {
        $this->loadConfigurations($workDir);

        $this->request = Request::createFromGlobals();
        $this->routeCollector = new RouteCollector(new Std_RouteParser, new GroupCountBased());
    }

    public function get($route, $handler)
    {
        $this->routeCollector->get($route, $this->handlerDefault($handler));
    }

    public function post($route, $handler)
    {
        $this->routeCollector->post($route, $this->handlerDefault($handler));
    }

    public function run()
    {
        $dispatcher = new GroupCountBased_Dispatcher($this->routeCollector->getData());

        $routeInfo = $dispatcher->dispatch(
            $this->request->getMethod(),
            $this->request->getRequestUri()
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
                $vars = $routeInfo[2];
                if (is_callable($handler)) {
                    $handler($vars ?? []);
                }
                break;
        }
    }

    private function handlerDefault($handler)
    {
        return function() use ($handler) {

            $response = $this->callHandler($handler);

            if(!($response instanceof Response)) {
                $response = new Response($response);
            }
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
            "Try using: ".implode($allowedMethods, ', ')
        ],"\n"), 405))->send();
    }

    /**
     * @param $workDir
     */
    private function loadConfigurations($workDir): void
    {
        (new Dotenv($workDir))->load();

        if ($basePath = getenv("BASE_PATH")) {
            $_SERVER['REQUEST_URI'] = str_replace($basePath, '', $_SERVER['REQUEST_URI']);
            $_SERVER['REQUEST_URI'] = str_replace('//', '/', $_SERVER['REQUEST_URI']);
        }
    }

    private function callHandler($handler)
    {
        if(is_array($handler)) {
            if(class_exists($handler[0])) {
                $handler[0] = new $handler[0];
            }
        }

        return call_user_func($handler);
    }
}