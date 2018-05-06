<?php

$loader = require __DIR__ . '/../vendor/autoload.php';

use GMPS\Eleicoes_2018\Base\Application;

$WD = realpath(dirname(__DIR__));
$api = new Application($WD);

$api->get('/home', function() {
    return 'hello home';
});

$api->post('/etc', function() {
    return 'hello home';
});

$api->run();