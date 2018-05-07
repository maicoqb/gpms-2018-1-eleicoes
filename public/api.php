<?php

$loader = require __DIR__ . '/../vendor/autoload.php';

use GMPS\Eleicoes_2018\Base\Application;
use GMPS\Eleicoes_2018\Controllers\Home;

$api = new Application(realpath(dirname(__DIR__)));

$api->get('/home', [Home::class, 'home']);

$api->post('/etc', function() {
    return 'hello home';
});

$api->run();