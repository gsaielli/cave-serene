namespace CaveSerene.Default {
    export interface ConcessioneRow {
        Descrizione?: string;
        Id?: number;
        IdStruttura?: number;
        TipoRecuperoMorfologico?: Modules.Default.Enums.TipoRecuperoMorfologico;
        TipoRecuperoFinale?: Modules.Default.Enums.TipoRecuperoFinale;
        TipoDisponibilita?: Modules.Default.Enums.TipoDisponibilita;
        NumeroAtto?: string;
        SuperficieAutorizzata?: number;
        SuperficieScavo?: number;
        DataAutorizzazione?: string;
        DataSistemazione?: string;
        DenunciaEsercizioN?: string;
        DenunciaEsercizioData?: string;
        SospensioneN?: string;
        SospensioneData?: string;
        ParereAgenzia?: string;
        Via?: boolean;
        RevocaN?: string;
        RevocaData?: string;
        DecadenzaN?: string;
        DecadenzaData?: string;
        RinunciaN?: string;
        RinunciaData?: string;
        PendenzaScarpate?: string;
        QuotaPianoCampagna?: string;
        IdEsercente?: number;
        IdStrutturaNome?: string;
        IdEsercenteRagSoc?: string;
        ConcessioneMaterialeList?: AutorizzazioneMaterialeRow[];
        ProrogaList?: ProrogaRow[];
    }

    export namespace ConcessioneRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Descrizione';
        export const localTextPrefix = 'Default.Concessione';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Descrizione = "Descrizione",
            Id = "Id",
            IdStruttura = "IdStruttura",
            TipoRecuperoMorfologico = "TipoRecuperoMorfologico",
            TipoRecuperoFinale = "TipoRecuperoFinale",
            TipoDisponibilita = "TipoDisponibilita",
            NumeroAtto = "NumeroAtto",
            SuperficieAutorizzata = "SuperficieAutorizzata",
            SuperficieScavo = "SuperficieScavo",
            DataAutorizzazione = "DataAutorizzazione",
            DataSistemazione = "DataSistemazione",
            DenunciaEsercizioN = "DenunciaEsercizioN",
            DenunciaEsercizioData = "DenunciaEsercizioData",
            SospensioneN = "SospensioneN",
            SospensioneData = "SospensioneData",
            ParereAgenzia = "ParereAgenzia",
            Via = "Via",
            RevocaN = "RevocaN",
            RevocaData = "RevocaData",
            DecadenzaN = "DecadenzaN",
            DecadenzaData = "DecadenzaData",
            RinunciaN = "RinunciaN",
            RinunciaData = "RinunciaData",
            PendenzaScarpate = "PendenzaScarpate",
            QuotaPianoCampagna = "QuotaPianoCampagna",
            IdEsercente = "IdEsercente",
            IdStrutturaNome = "IdStrutturaNome",
            IdEsercenteRagSoc = "IdEsercenteRagSoc",
            ConcessioneMaterialeList = "ConcessioneMaterialeList",
            ProrogaList = "ProrogaList"
        }
    }
}
