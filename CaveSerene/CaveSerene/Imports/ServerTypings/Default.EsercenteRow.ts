namespace CaveSerene.Default {
    export interface EsercenteRow {
        Id?: number;
        CodCcia?: string;
        RagSoc?: string;
        Indirizzo?: string;
        Cap?: number;
        Frazione?: string;
        IdComune?: string;
        CodiceFiscale?: string;
        PartitaIva?: string;
        CodiceFiscaleCompilatore?: string;
        Telefono?: string;
        EMail?: string;
        LegaleRappresentante?: string;
        DatiFallimento?: string;
        IdComuneNome?: string;
    }

    export namespace EsercenteRow {
        export const idProperty = 'Id';
        export const nameProperty = 'RagSoc';
        export const localTextPrefix = 'Default.Esercente';
        export const lookupKey = 'Default.Esercente';

        export function getLookup(): Q.Lookup<EsercenteRow> {
            return Q.getLookup<EsercenteRow>('Default.Esercente');
        }

        export declare const enum Fields {
            Id = "Id",
            CodCcia = "CodCcia",
            RagSoc = "RagSoc",
            Indirizzo = "Indirizzo",
            Cap = "Cap",
            Frazione = "Frazione",
            IdComune = "IdComune",
            CodiceFiscale = "CodiceFiscale",
            PartitaIva = "PartitaIva",
            CodiceFiscaleCompilatore = "CodiceFiscaleCompilatore",
            Telefono = "Telefono",
            EMail = "EMail",
            LegaleRappresentante = "LegaleRappresentante",
            DatiFallimento = "DatiFallimento",
            IdComuneNome = "IdComuneNome"
        }
    }
}

