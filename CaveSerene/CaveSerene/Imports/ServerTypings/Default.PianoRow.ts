namespace CaveSerene.Default {
    export interface PianoRow {
        Id?: number;
        Descrizione?: string;
        IdEnte?: string;
        Progressivo?: number;
        Variante?: number;
        DataInizio?: string;
        DataFine?: string;
        Note?: string;
        IdEnteNome?: string;
        AttoList?: AttoRow[];
        PianoAreaList?: PianoAreaRow[];
        FabbisognoList?: FabbisognoRow[];
    }

    export namespace PianoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Descrizione';
        export const localTextPrefix = 'Default.Piano';
        export const lookupKey = 'Default.Piano';

        export function getLookup(): Q.Lookup<PianoRow> {
            return Q.getLookup<PianoRow>('Default.Piano');
        }

        export declare const enum Fields {
            Id = "Id",
            Descrizione = "Descrizione",
            IdEnte = "IdEnte",
            Progressivo = "Progressivo",
            Variante = "Variante",
            DataInizio = "DataInizio",
            DataFine = "DataFine",
            Note = "Note",
            IdEnteNome = "IdEnteNome",
            AttoList = "AttoList",
            PianoAreaList = "PianoAreaList",
            FabbisognoList = "FabbisognoList"
        }
    }
}

