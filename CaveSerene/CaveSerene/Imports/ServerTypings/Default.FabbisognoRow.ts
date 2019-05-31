
namespace CaveSerene.Default {
    export interface FabbisognoRow {
        Id?: string;
        IdPiano?: number;
        IdMateriale?: number;
        Fabbisogno?: number;
        Potenziale?: number;
        Residuo?: number;
        IdMaterialeDescrizione?: string;
    }

    export namespace FabbisognoRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.Fabbisogno';

        export declare const enum Fields {
            Id = "Id",
            IdPiano = "IdPiano",
            IdMateriale = "IdMateriale",
            Fabbisogno = "Fabbisogno",
            Potenziale = "Potenziale",
            Residuo = "Residuo",
            IdMaterialeDescrizione = "IdMaterialeDescrizione"
        }
    }
}

