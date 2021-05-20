namespace CaveSerene.Default {
    export interface ComuneRow {
        Id?: string;
        CodiceRegione?: string;
        SiglaProvincia?: string;
        Nome?: string;
        Cap?: string;
        ZonaAlt?: string;
        EntCod?: string;
        CodCatastale?: string;
    }

    export namespace ComuneRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Comune';
        export const lookupKey = 'Default.Comune';

        export function getLookup(): Q.Lookup<ComuneRow> {
            return Q.getLookup<ComuneRow>('Default.Comune');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CodiceRegione = "CodiceRegione",
            SiglaProvincia = "SiglaProvincia",
            Nome = "Nome",
            Cap = "Cap",
            ZonaAlt = "ZonaAlt",
            EntCod = "EntCod",
            CodCatastale = "CodCatastale"
        }
    }
}
