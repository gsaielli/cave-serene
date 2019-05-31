namespace CaveSerene.Default {
    export interface PotenzialeRow {
        Id?: number;
        IdMateriale?: number;
        IdPianoArea?: number;
        Potenziale?: number;
        Residuo?: number;
        IdMaterialeDescrizione?: string;
    }

    export namespace PotenzialeRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.Potenziale';

        export declare const enum Fields {
            Id = "Id",
            IdMateriale = "IdMateriale",
            IdPianoArea = "IdPianoArea",
            Potenziale = "Potenziale",
            Residuo = "Residuo",
            IdMaterialeDescrizione = "IdMaterialeDescrizione"
        }
    }
}

