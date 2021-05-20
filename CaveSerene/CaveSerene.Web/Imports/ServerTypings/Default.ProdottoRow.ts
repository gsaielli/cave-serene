namespace CaveSerene.Default {
    export interface ProdottoRow {
        Id?: number;
        IdRendiconto?: number;
        IdMateriale?: number;
        NumeroMesiAttivita?: number;
        TipoLavorazione1?: Modules.Default.Enums.TipoLavorazione;
        TipoLavorazione2?: Modules.Default.Enums.TipoLavorazione;
        TipoLavorazione3?: Modules.Default.Enums.TipoLavorazione;
        QuantitaEstratta?: number;
        Oneri?: number;
        Peso?: number;
        PesoSpecifico?: number;
        PrimaLavorazione?: boolean;
        QuantitaLavorazione?: number;
        TipoCommercializzazione1?: Modules.Default.Enums.TipoCommercializzazione;
        Quantita1?: number;
        Prezzo1?: number;
        Um1?: string;
        TipoCommercializzazione2?: Modules.Default.Enums.TipoCommercializzazione;
        Quantita2?: number;
        Prezzo2?: number;
        Um2?: string;
        TipoCommercializzazione3?: Modules.Default.Enums.TipoCommercializzazione;
        Quantita3?: number;
        Prezzo3?: number;
        Um3?: string;
        IdRendicontoIdAutorizzazione?: number;
        IdMaterialeDescrizione?: string;
        IdMaterialeIdTipoMateriale?: number;
        IdMaterialeTariffaRiferimento?: number;
        IdMaterialePesoSpecificoRiferimento?: number;
        IdMaterialeNomeRisorsaMineraleIstat?: number;
    }

    export namespace ProdottoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'IdMaterialeDescrizione';
        export const localTextPrefix = 'Default.Prodotto';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IdRendiconto = "IdRendiconto",
            IdMateriale = "IdMateriale",
            NumeroMesiAttivita = "NumeroMesiAttivita",
            TipoLavorazione1 = "TipoLavorazione1",
            TipoLavorazione2 = "TipoLavorazione2",
            TipoLavorazione3 = "TipoLavorazione3",
            QuantitaEstratta = "QuantitaEstratta",
            Oneri = "Oneri",
            Peso = "Peso",
            PesoSpecifico = "PesoSpecifico",
            PrimaLavorazione = "PrimaLavorazione",
            QuantitaLavorazione = "QuantitaLavorazione",
            TipoCommercializzazione1 = "TipoCommercializzazione1",
            Quantita1 = "Quantita1",
            Prezzo1 = "Prezzo1",
            Um1 = "Um1",
            TipoCommercializzazione2 = "TipoCommercializzazione2",
            Quantita2 = "Quantita2",
            Prezzo2 = "Prezzo2",
            Um2 = "Um2",
            TipoCommercializzazione3 = "TipoCommercializzazione3",
            Quantita3 = "Quantita3",
            Prezzo3 = "Prezzo3",
            Um3 = "Um3",
            IdRendicontoIdAutorizzazione = "IdRendicontoIdAutorizzazione",
            IdMaterialeDescrizione = "IdMaterialeDescrizione",
            IdMaterialeIdTipoMateriale = "IdMaterialeIdTipoMateriale",
            IdMaterialeTariffaRiferimento = "IdMaterialeTariffaRiferimento",
            IdMaterialePesoSpecificoRiferimento = "IdMaterialePesoSpecificoRiferimento",
            IdMaterialeNomeRisorsaMineraleIstat = "IdMaterialeNomeRisorsaMineraleIstat"
        }
    }
}
