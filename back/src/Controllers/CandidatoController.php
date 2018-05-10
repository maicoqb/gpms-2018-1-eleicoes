<?php

namespace GMPS\Eleicoes_2018\Controllers;

use GMPS\Eleicoes_2018\Services\CandidatoService;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

class CandidatoController
{
    /**
     * @var CandidatoService
     */
    private $candidatoService;

    /**
     * CandidatoController constructor.
     * @param CandidatoService $candidatoService
     */
    public function __construct(CandidatoService $candidatoService)
    {
        $this->candidatoService = $candidatoService;
    }

    public function top(RequestInterface $req, ResponseInterface $res, $top = 10)
    {
        $candidatos = $this->candidatoService->getTop($top);

        $res->getBody()->write(json_encode($candidatos));

        return $res->withHeader('Content-Type', 'application/json');
    }
}