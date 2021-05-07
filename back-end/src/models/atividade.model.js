import { v4 } from 'uuid';

export default class Atividade {

    constructor(titulo, descricao, periodo, estagio, isImportante = false) {
        this.id = v4();
        this.titulo = titulo;
        this.descricao = descricao;
        this.periodo = periodo;
        this.estagio = estagio;
        this.isImportante = isImportante;
    }
}