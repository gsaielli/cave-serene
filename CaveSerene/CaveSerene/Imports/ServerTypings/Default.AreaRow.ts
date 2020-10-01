namespace CaveSerene.Default {
    export interface AreaRow {
        Id?: number;
        Nome?: string;
        TipoArea?: Modules.Default.Enums.TipoArea;
        TipoStoria?: Modules.Default.Enums.TipoStoria;
        TipoPosizione?: Modules.Default.Enums.TipoPosizione;
        Progressivo?: number;
        CodiceAreaProv?: string;
        CoordinataX?: number;
        CoordinataY?: number;
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

        export declare const enum Fields {
            Id = "Id",
            Nome = "Nome",
            TipoArea = "TipoArea",
            TipoStoria = "TipoStoria",
            TipoPosizione = "TipoPosizione",
            Progressivo = "Progressivo",
            CodiceAreaProv = "CodiceAreaProv",
            CoordinataX = "CoordinataX",
            CoordinataY = "CoordinataY",
            Note = "Note"
        }
    }
}

