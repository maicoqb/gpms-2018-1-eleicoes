<?php

namespace GMPS\Eleicoes_2018\Services;


use Medoo\Medoo;
use PDO;

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

    public function getTopRated($limit, $offset)
    {
        $sqlTopRated = <<<SQL
select
  candidato.*,
  x.votos
from candidato
join
  (select
    numero_candidato,
    cargo,
    count(titulo_eleitor) as votos
  from voto
  GROUP BY numero_candidato, cargo
  ) x
  on candidato.numero = x.numero_candidato
    and candidato.cargo = x.cargo
ORDER BY x.votos desc
LIMIT $offset, $limit 
SQL;

        return $this->database->query($sqlTopRated)->fetchAll(PDO::FETCH_ASSOC);
    }

}