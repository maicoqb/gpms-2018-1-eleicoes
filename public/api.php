<?php

$loader = require __DIR__ . '/../vendor/autoload.php';

use GMPS\Eleicoes_2018\Base\Application;
use GMPS\Eleicoes_2018\Controllers\CandidatoController;

$api = new Application(realpath(dirname(__DIR__)));

$api->get('/candidatos', [CandidatoController::class, 'search']);

$api->run();