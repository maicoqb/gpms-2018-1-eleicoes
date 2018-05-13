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

    public function getTopRated($limit, $offset, $params=[])
    {
        $where = ['1=1'];
        foreach($params as $k => $v) {
            if($v) $where[] = "$k => '$v'";
        }
        $where = implode(' AND ', $where);

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
  WHERE $where
  GROUP BY numero_candidato, cargo
  ) x
  on candidato.numero = x.numero_candidato
    and candidato.cargo = x.cargo
ORDER BY x.votos desc
LIMIT $offset, $limit 
SQL;

        return $this->database->query($sqlTopRated)->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getRegioes()
    {
        $sqlRegioes = <<<SQL
select DISTINCT (regiao) as regiao
from (
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
) x
SQL;

        return $this->database->query($sqlRegioes)->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getCargos()
    {
        $sqlRegioes = <<<SQL
select DISTINCT (cargo) as cargo
from (
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
) x
SQL;

        return $this->database->query($sqlRegioes)->fetchAll(PDO::FETCH_ASSOC);
    }

}