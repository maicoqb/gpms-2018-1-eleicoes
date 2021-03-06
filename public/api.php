<?php

require __DIR__ . '/../vendor/autoload.php';

use GMPS\Eleicoes_2018\Base\Application;
use GMPS\Eleicoes_2018\Controllers\CandidatoController;
use GMPS\Eleicoes_2018\Controllers\NoticiaController;
use GMPS\Eleicoes_2018\Controllers\VotoController;

$api = new Application(realpath(dirname(__DIR__)));

$api->get('/candidatos/random', [CandidatoController::class, 'random']);

$api->get('/noticias/latest', [NoticiaController::class, 'latest']);

$api->post('/votos', [VotoController::class, 'createVoto']);
$api->get('/votos/top-rated', [VotoController::class, 'topRated']);
$api->get('/votos/cargos', [VotoController::class, 'getCargos']);
$api->get('/votos/regioes', [VotoController::class, 'getRegioes']);

$api->run();