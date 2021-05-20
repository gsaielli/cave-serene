namespace CaveSerene.Default {
    export interface TipoMaterialeRow {
        Id?: number;
        Descrizione?: string;
    }

    export namespace TipoMaterialeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Descrizione';
        export const localTextPrefix = 'Default.TipoMateriale';
        export const lookupKey = 'Default.TipoMateriale';

        export function getLookup(): Q.Lookup<TipoMaterialeRow> {
            return Q.getLookup<TipoMaterialeRow>('Default.TipoMateriale');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Descrizione = "Descrizione"
        }
    }
}
