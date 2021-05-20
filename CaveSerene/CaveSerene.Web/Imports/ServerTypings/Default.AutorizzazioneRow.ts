namespace CaveSerene.Default {
    export interface AutorizzazioneRow {
        Descrizione?: string;
        Id?: number;
        IdPiano?: number;
        IdPianoArea?: number;
        IdStruttura?: number;
        TipoRecuperoMorfologico?: Modules.Default.Enums.TipoRecuperoMorfologico;
        TipoRecuperoFinale?: Modules.Default.Enums.TipoRecuperoFinale;
        TipoDisponibilita?: Modules.Default.Enums.TipoDisponibilita;
        NumeroAtto?: string;
        NumeroAttoNotifica?: string;
        VolumeAutorizzato?: number;
        PesoAutorizzato?: number;
        SuperficieAutorizzata?: number;
        SuperficieScavo?: number;
        ProfonditaScavo?: number;
        DataAutorizzazione?: string;
        DataNotifica?: string;
        DataScadenza?: string;
        DataSistemazione?: string;
        DenunciaEsercizioN?: string;
        DenunciaEsercizioData?: string;
        ConvenzioneN?: string;
        ConvenzioneData?: string;
        SospensioneN?: string;
        SospensioneData?: string;
        RevocaN?: string;
        RevocaData?: string;
        DecadenzaN?: string;
        DecadenzaData?: string;
        RinunciaN?: string;
        RinunciaData?: string;
        Autorizzazione104N?: string;
        Autorizzazione104Data?: string;
        Autorizzazione104Note?: string;
        Volume104?: number;
        SvincoloFidejussioneN?: string;
        SvincoloFidejussioneData?: string;
        SvincoloFidejussioneNote?: string;
        CollaudoN?: string;
        CollaudoData?: string;
        CollaudoNote?: string;
        PendenzaScarpate?: string;
        QuotaPianoCampagna?: string;
        ParereAgenzia?: string;
        Via?: boolean;
        Screening?: boolean;
        ParereMotivato?: string;
        ProprietaTerreni?: string;
        NoteSistemazione?: string;
        IdEsercente?: number;
        IdStrutturaNome?: string;
        IdEsercenteRagSoc?: string;
        AutorizzazioneMaterialeList?: AutorizzazioneMaterialeRow[];
        DerogaList?: DerogaRow[];
        ProrogaList?: ProrogaRow[];
    }

    export namespace AutorizzazioneRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Descrizione';
        export const localTextPrefix = 'Default.Autorizzazione';
        export const lookupKey = 'Default.Autorizzazione';

        export function getLookup(): Q.Lookup<AutorizzazioneRow> {
            return Q.getLookup<AutorizzazioneRow>('Default.Autorizzazione');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Descrizione = "Descrizione",
            Id = "Id",
            IdPiano = "IdPiano",
            IdPianoArea = "IdPianoArea",
            IdStruttura = "IdStruttura",
            TipoRecuperoMorfologico = "TipoRecuperoMorfologico",
            TipoRecuperoFinale = "TipoRecuperoFinale",
            TipoDisponibilita = "TipoDisponibilita",
            NumeroAtto = "NumeroAtto",
            NumeroAttoNotifica = "NumeroAttoNotifica",
            VolumeAutorizzato = "VolumeAutorizzato",
            PesoAutorizzato = "PesoAutorizzato",
            SuperficieAutorizzata = "SuperficieAutorizzata",
            SuperficieScavo = "SuperficieScavo",
            ProfonditaScavo = "ProfonditaScavo",
            DataAutorizzazione = "DataAutorizzazione",
            DataNotifica = "DataNotifica",
            DataScadenza = "DataScadenza",
            DataSistemazione = "DataSistemazione",
            DenunciaEsercizioN = "DenunciaEsercizioN",
            DenunciaEsercizioData = "DenunciaEsercizioData",
            ConvenzioneN = "ConvenzioneN",
            ConvenzioneData = "ConvenzioneData",
            SospensioneN = "SospensioneN",
            SospensioneData = "SospensioneData",
            RevocaN = "RevocaN",
            RevocaData = "RevocaData",
            DecadenzaN = "DecadenzaN",
            DecadenzaData = "DecadenzaData",
            RinunciaN = "RinunciaN",
            RinunciaData = "RinunciaData",
            Autorizzazione104N = "Autorizzazione104N",
            Autorizzazione104Data = "Autorizzazione104Data",
            Autorizzazione104Note = "Autorizzazione104Note",
            Volume104 = "Volume104",
            SvincoloFidejussioneN = "SvincoloFidejussioneN",
            SvincoloFidejussioneData = "SvincoloFidejussioneData",
            SvincoloFidejussioneNote = "SvincoloFidejussioneNote",
            CollaudoN = "CollaudoN",
            CollaudoData = "CollaudoData",
            CollaudoNote = "CollaudoNote",
            PendenzaScarpate = "PendenzaScarpate",
            QuotaPianoCampagna = "QuotaPianoCampagna",
            ParereAgenzia = "ParereAgenzia",
            Via = "Via",
            Screening = "Screening",
            ParereMotivato = "ParereMotivato",
            ProprietaTerreni = "ProprietaTerreni",
            NoteSistemazione = "NoteSistemazione",
            IdEsercente = "IdEsercente",
            IdStrutturaNome = "IdStrutturaNome",
            IdEsercenteRagSoc = "IdEsercenteRagSoc",
            AutorizzazioneMaterialeList = "AutorizzazioneMaterialeList",
            DerogaList = "DerogaList",
            ProrogaList = "ProrogaList"
        }
    }
}
