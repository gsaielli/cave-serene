namespace CaveSerene.Default {
    export interface AreaRow {
        Id?: number;
        Nome?: string;
        TipoArea?: Modules.Default.Enums.TipoArea;
        TipoStoria?: Modules.Default.Enums.TipoStoria;
        TipoPosizione?: Modules.Default.Enums.TipoPosizione;
        Progressivo?: number;
        CodiceAreaProv?: string;
        Polygon?: string;
        Note?: string;
    }

    export namespace AreaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Area';
        export const lookupKey = 'Default.Area';

        export function getLookup(): Q.Lookup<AreaRow> {
            return Q.getLookup<AreaRow>('Default.Area');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Nome = "Nome",
            TipoArea = "TipoArea",
            TipoStoria = "TipoStoria",
            TipoPosizione = "TipoPosizione",
            Progressivo = "Progressivo",
            CodiceAreaProv = "CodiceAreaProv",
            Polygon = "Polygon",
            Note = "Note"
        }
    }
}
