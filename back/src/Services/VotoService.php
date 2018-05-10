<?php

namespace GMPS\Eleicoes_2018\Services;


use Medoo\Medoo;

class VotoService
{
    const VOTO_TABLE = 'voto';
    const VOTO_COLUMNS = [
        'id',
        'titulo_eleitor',
        'numero_candidato',
        'cargo'
    ];

    /**
     * @var Medoo
     */
    private $database;

    /**
     * @param Medoo $database
     */
    public function __construct(Medoo $database)
    {
        $this->database = $database;
    }

    public function has($data)
    {
        return $this->database->has(self::VOTO_TABLE, $data);
    }

    public function createVoto($data)
    {
        return $this->database->insert(self::VOTO_TABLE, $data);
    }

}