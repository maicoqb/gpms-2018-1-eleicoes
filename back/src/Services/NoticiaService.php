<?php
namespace GMPS\Eleicoes_2018\Services;


use Medoo\Medoo;

class NoticiaService
{

    const NOTICIA_TABLE = 'noticia';
    const NOTICIA_COLUMNS = [
        'id',
        'titulo',
        'texto',
        'data'
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

    public function getLatest($limit, $offset)
    {
        return $this->database->select(
            self::NOTICIA_TABLE,
            self::NOTICIA_COLUMNS,
            [
                "ORDER" => ["data" => "DESC"],
                'LIMIT' => [$offset, $limit]
            ]
        );
    }
}