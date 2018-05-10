<?php

namespace GMPS\Eleicoes_2018\Controllers;


use GMPS\Eleicoes_2018\Services\VotoService;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

class VotoController
{
    /**
     * @var VotoService
     */
    private $votoService;

    /**
     * VotoController constructor.
     * @param VotoService $votoService
     */
    public function __construct(VotoService $votoService)
    {
        $this->votoService = $votoService;
    }

    public function createVoto(RequestInterface $request, ResponseInterface $response)
    {
        $inputStream = $request->getBody()->__toString();
        $inputData = json_decode($inputStream, true);

        if ($this->votoService->has($inputData)) {
            $response->getBody()->write(json_encode(['errors' => ["Você só pode votar uma vez para cada cargo"]]));
            return $response->withStatus(400, "Você só pode votar uma vez para cada cargo");
        }

        $this->votoService->createVoto($inputData);
        return $response->withStatus(204, "Voto incluído");
    }

    public function topRated(RequestInterface $req, ResponseInterface $res, $limit=100, $offset=0)
    {
        $resultado = $this->votoService->getTopRated($limit, $offset);

        $res->getBody()->write(json_encode($resultado));

        return $res->withHeader('Content-Type', 'application/json');
    }
}