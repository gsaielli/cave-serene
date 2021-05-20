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
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

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
