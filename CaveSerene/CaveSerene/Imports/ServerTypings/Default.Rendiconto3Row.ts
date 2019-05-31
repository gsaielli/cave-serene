namespace CaveSerene.Default {
    export interface Rendiconto3Row {
        Id?: number;
        IdStruttura?: number;
        Anno?: number;
        NumOperai?: number;
        NumAmministrativi?: number;
        NumTecnici?: number;
        LavoratoM3?: number;
        LavoratoQ?: number;
        MetodoLavorazione?: string;
        MaterialeTradizionale?: boolean;
        MaterialeRiciclato?: boolean;
        IdStrutturaNome?: string;
        ApprovvigionamentoList?: RendicontoApprovvigionamentoRow[];
        DestinazioneTerritorialeList?: RendicontoDestinazioneTerritorialeRow[];
        DestinazioneUsoList?: RendicontoDestinazioneUsoRow[];
    }

    export namespace Rendiconto3Row {
        export const idProperty = 'Id';
        export const nameProperty = 'IdStrutturaNome';
        export const localTextPrefix = 'Default.Rendiconto3';

        export declare const enum Fields {
            Id = "Id",
            IdStruttura = "IdStruttura",
            Anno = "Anno",
            NumOperai = "NumOperai",
            NumAmministrativi = "NumAmministrativi",
            NumTecnici = "NumTecnici",
            LavoratoM3 = "LavoratoM3",
            LavoratoQ = "LavoratoQ",
            MetodoLavorazione = "MetodoLavorazione",
            MaterialeTradizionale = "MaterialeTradizionale",
            MaterialeRiciclato = "MaterialeRiciclato",
            IdStrutturaNome = "IdStrutturaNome",
            ApprovvigionamentoList = "ApprovvigionamentoList",
            DestinazioneTerritorialeList = "DestinazioneTerritorialeList",
            DestinazioneUsoList = "DestinazioneUsoList"
        }
    }
}

