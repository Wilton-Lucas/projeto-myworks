import EstagioEnum from '../enums/estagio-enum.enum';

export interface AtividadeModel {
    id: any;
    titulo: string;
    descricao: string;
    periodo: string;
    estagio: EstagioEnum;
    isImportante: boolean;


}