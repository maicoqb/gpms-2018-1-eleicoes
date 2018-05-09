<?php

namespace GMPS\Eleicoes_2018\Services;


use Medoo\Medoo;

class CandidatoService
{
    const CANDIDATO_TABLE = 'candidato';
    const CANDIDATO_COLUMNS = [
        'id',
        'nome_candidato',
        'nome_real',
        'numero',
        'cargo',
        'regiao',
        'partido'
    ];

    /**
     * @var Medoo
     */
    private $database;

    /**
     * CandidatoService constructor.
     * @param Medoo $database
     */
    public function __construct(Medoo $database)
    {
        $this->database = $database;
    }

    public function getTop($top)
    {
        return $this->database->select(
            self::CANDIDATO_TABLE,
            self::CANDIDATO_COLUMNS,
            [ 'LIMIT' => [0, $top] ]
        );
    }
}