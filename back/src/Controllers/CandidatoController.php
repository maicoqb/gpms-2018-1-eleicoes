<?php

namespace GMPS\Eleicoes_2018\Controllers;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

class CandidatoController
{

    public function search(RequestInterface $request, ResponseInterface $response)
    {
        $testObject = [
            "key" => "value"
        ];

        $response->getBody()->write(json_encode($testObject));
        $response->withHeader('Content-Type', 'application/json');

        return $response;
    }

}