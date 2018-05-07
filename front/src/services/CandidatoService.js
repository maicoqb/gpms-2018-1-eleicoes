
const candidatosNomes = [
    "Zubaida Câmara",
    "Eduarda Espírito Santo",
    "Máximo Rodrigues",
    "Abel Furquim",
    "Cristina Cedro",
    "Natacha Mondragão",
    "Elia Rios",
    "Nicanor Negromonte",
    "Veríssimo Landim"
];

const candidatosPartidos = [ "PAB", "PBC", "PCD", "PDE", "PEF" ];

const candidatosCargos = ["Presidente", "Governador", "Senador", "Deputado Federal", "DeputadoEstadual"];

class CandidatoService {
    getCandidatos(limit = 10) {
        let candidatos = [];
        for (let i = 0; i < limit; i++) {
            candidatos.push({
                id: i,
                nome: candidatosNomes[Math.floor(Math.random() * candidatosNomes.length)],
                partido: candidatosPartidos[Math.floor(Math.random() * candidatosPartidos.length)],
                cargo: candidatosCargos[Math.floor(Math.random() * candidatosCargos.length)],
                foto: "http://lorempixel.com/300/300/cats/" + i
            });
        }
        return candidatos;
    }
}

export default new CandidatoService();