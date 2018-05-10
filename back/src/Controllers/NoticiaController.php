<?php

namespace GMPS\Eleicoes_2018\Controllers;


use GMPS\Eleicoes_2018\Services\NoticiaService;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

class NoticiaController
{
    /**
     * @var NoticiaService
     */
    private $noticiaService;

    /**
     * @param NoticiaService $noticiaService
     */
    public function __construct(NoticiaService $noticiaService)
    {
        $this->noticiaService = $noticiaService;
    }

    public function recent(RequestInterface $req, ResponseInterface $res, $limit=100, $offset=0)
    {
        $noticias = $this->noticiaService->getRecent($limit, $offset);

        $res->getBody()->write(json_encode($noticias));

        return $res->withHeader('Content-Type', 'application/json');
    }
}