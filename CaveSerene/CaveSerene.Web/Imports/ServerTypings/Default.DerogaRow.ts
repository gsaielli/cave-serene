namespace CaveSerene.Default {
    export interface DerogaRow {
        Id?: number;
        IdAutorizzazione?: number;
        Protocollo?: string;
        Data?: string;
        VolumeDeroga?: number;
        Note?: string;
        IdAutorizzazioneIdPianoArea?: number;
        IdAutorizzazioneIdStruttura?: number;
        IdAutorizzazioneTipoRecuperoMorfologico?: number;
        IdAutorizzazioneTipoRecuperoFinale?: number;
        IdAutorizzazioneTipoDisponibilita?: number;
        IdAutorizzazioneNumeroAtto?: string;
        IdAutorizzazioneNumeroAttoNotifica?: string;
        IdAutorizzazioneVolumeAutorizzato?: number;
        IdAutorizzazionePesoAutorizzato?: number;
        IdAutorizzazioneSuperficieAutorizzata?: number;
        IdAutorizzazioneSuperficieScavo?: number;
        IdAutorizzazioneProfonditaScavo?: number;
        IdAutorizzazioneDataAutorizzazione?: string;
        IdAutorizzazioneDataNotifica?: string;
        IdAutorizzazioneDataScadenza?: string;
        IdAutorizzazioneDataSistemazione?: string;
        IdAutorizzazioneDenunciaEsercizioN?: string;
        IdAutorizzazioneDenunciaEsercizioData?: string;
        IdAutorizzazioneConvenzioneN?: string;
        IdAutorizzazioneConvenzioneData?: string;
        IdAutorizzazioneSospensioneN?: string;
        IdAutorizzazioneSospensioneData?: string;
        IdAutorizzazioneRevocaN?: string;
        IdAutorizzazioneRevocaData?: string;
        IdAutorizzazioneDecadenzaN?: string;
        IdAutorizzazioneDecadenzaData?: string;
        IdAutorizzazioneRinunciaN?: string;
        IdAutorizzazioneRinunciaData?: string;
        IdAutorizzazioneAutorizzazione104N?: string;
        IdAutorizzazioneAutorizzazione104Data?: string;
        IdAutorizzazioneAutorizzazione104Note?: string;
        IdAutorizzazioneVolume104?: number;
        IdAutorizzazioneSvincoloFidejussioneN?: string;
        IdAutorizzazioneSvincoloFidejussioneData?: string;
        IdAutorizzazioneSvincoloFidejussioneNote?: string;
        IdAutorizzazioneCollaudoN?: string;
        IdAutorizzazioneCollaudoData?: string;
        IdAutorizzazioneCollaudoNote?: string;
        IdAutorizzazionePendenzaScarpate?: string;
        IdAutorizzazioneQuotaPianoCampagna?: string;
        IdAutorizzazioneParereAgenzia?: string;
        IdAutorizzazioneVia?: boolean;
        IdAutorizzazioneScreening?: boolean;
        IdAutorizzazioneParereMotivato?: string;
        IdAutorizzazioneProprietaTerreni?: string;
        IdAutorizzazioneNoteSistemazione?: string;
        IdAutorizzazioneIdEsercente?: number;
    }

    export namespace DerogaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Protocollo';
        export const localTextPrefix = 'Default.Deroga';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IdAutorizzazione = "IdAutorizzazione",
            Protocollo = "Protocollo",
            Data = "Data",
            VolumeDeroga = "VolumeDeroga",
            Note = "Note",
            IdAutorizzazioneIdPianoArea = "IdAutorizzazioneIdPianoArea",
            IdAutorizzazioneIdStruttura = "IdAutorizzazioneIdStruttura",
            IdAutorizzazioneTipoRecuperoMorfologico = "IdAutorizzazioneTipoRecuperoMorfologico",
            IdAutorizzazioneTipoRecuperoFinale = "IdAutorizzazioneTipoRecuperoFinale",
            IdAutorizzazioneTipoDisponibilita = "IdAutorizzazioneTipoDisponibilita",
            IdAutorizzazioneNumeroAtto = "IdAutorizzazioneNumeroAtto",
            IdAutorizzazioneNumeroAttoNotifica = "IdAutorizzazioneNumeroAttoNotifica",
            IdAutorizzazioneVolumeAutorizzato = "IdAutorizzazioneVolumeAutorizzato",
            IdAutorizzazionePesoAutorizzato = "IdAutorizzazionePesoAutorizzato",
            IdAutorizzazioneSuperficieAutorizzata = "IdAutorizzazioneSuperficieAutorizzata",
            IdAutorizzazioneSuperficieScavo = "IdAutorizzazioneSuperficieScavo",
            IdAutorizzazioneProfonditaScavo = "IdAutorizzazioneProfonditaScavo",
            IdAutorizzazioneDataAutorizzazione = "IdAutorizzazioneDataAutorizzazione",
            IdAutorizzazioneDataNotifica = "IdAutorizzazioneDataNotifica",
            IdAutorizzazioneDataScadenza = "IdAutorizzazioneDataScadenza",
            IdAutorizzazioneDataSistemazione = "IdAutorizzazioneDataSistemazione",
            IdAutorizzazioneDenunciaEsercizioN = "IdAutorizzazioneDenunciaEsercizioN",
            IdAutorizzazioneDenunciaEsercizioData = "IdAutorizzazioneDenunciaEsercizioData",
            IdAutorizzazioneConvenzioneN = "IdAutorizzazioneConvenzioneN",
            IdAutorizzazioneConvenzioneData = "IdAutorizzazioneConvenzioneData",
            IdAutorizzazioneSospensioneN = "IdAutorizzazioneSospensioneN",
            IdAutorizzazioneSospensioneData = "IdAutorizzazioneSospensioneData",
            IdAutorizzazioneRevocaN = "IdAutorizzazioneRevocaN",
            IdAutorizzazioneRevocaData = "IdAutorizzazioneRevocaData",
            IdAutorizzazioneDecadenzaN = "IdAutorizzazioneDecadenzaN",
            IdAutorizzazioneDecadenzaData = "IdAutorizzazioneDecadenzaData",
            IdAutorizzazioneRinunciaN = "IdAutorizzazioneRinunciaN",
            IdAutorizzazioneRinunciaData = "IdAutorizzazioneRinunciaData",
            IdAutorizzazioneAutorizzazione104N = "IdAutorizzazioneAutorizzazione104N",
            IdAutorizzazioneAutorizzazione104Data = "IdAutorizzazioneAutorizzazione104Data",
            IdAutorizzazioneAutorizzazione104Note = "IdAutorizzazioneAutorizzazione104Note",
            IdAutorizzazioneVolume104 = "IdAutorizzazioneVolume104",
            IdAutorizzazioneSvincoloFidejussioneN = "IdAutorizzazioneSvincoloFidejussioneN",
            IdAutorizzazioneSvincoloFidejussioneData = "IdAutorizzazioneSvincoloFidejussioneData",
            IdAutorizzazioneSvincoloFidejussioneNote = "IdAutorizzazioneSvincoloFidejussioneNote",
            IdAutorizzazioneCollaudoN = "IdAutorizzazioneCollaudoN",
            IdAutorizzazioneCollaudoData = "IdAutorizzazioneCollaudoData",
            IdAutorizzazioneCollaudoNote = "IdAutorizzazioneCollaudoNote",
            IdAutorizzazionePendenzaScarpate = "IdAutorizzazionePendenzaScarpate",
            IdAutorizzazioneQuotaPianoCampagna = "IdAutorizzazioneQuotaPianoCampagna",
            IdAutorizzazioneParereAgenzia = "IdAutorizzazioneParereAgenzia",
            IdAutorizzazioneVia = "IdAutorizzazioneVia",
            IdAutorizzazioneScreening = "IdAutorizzazioneScreening",
            IdAutorizzazioneParereMotivato = "IdAutorizzazioneParereMotivato",
            IdAutorizzazioneProprietaTerreni = "IdAutorizzazioneProprietaTerreni",
            IdAutorizzazioneNoteSistemazione = "IdAutorizzazioneNoteSistemazione",
            IdAutorizzazioneIdEsercente = "IdAutorizzazioneIdEsercente"
        }
    }
}
