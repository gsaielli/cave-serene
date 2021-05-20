namespace CaveSerene.Default {
    export interface AutorizzazioneMaterialeRow {
        Id?: number;
        IdAutorizzazione?: number;
        IdMateriale?: number;
        QuantitaAutorizzata?: number;
        PesoAutorizzato?: number;
        IdMaterialeDescrizione?: string;
    }

    export namespace AutorizzazioneMaterialeRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.AutorizzazioneMateriale';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IdAutorizzazione = "IdAutorizzazione",
            IdMateriale = "IdMateriale",
            QuantitaAutorizzata = "QuantitaAutorizzata",
            PesoAutorizzato = "PesoAutorizzato",
            IdMaterialeDescrizione = "IdMaterialeDescrizione"
        }
    }
}
