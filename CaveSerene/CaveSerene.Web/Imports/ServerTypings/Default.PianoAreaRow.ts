namespace CaveSerene.Default {
    export interface PianoAreaRow {
        Id?: number;
        IdPiano?: number;
        IdArea?: number;
        TipoStato?: Modules.Default.Enums.TipoStato;
        ProfMax?: number;
        Sup?: number;
        IdAreaNome?: string;
        PotenzialeList?: PotenzialeRow[];
    }

    export namespace PianoAreaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'IdAreaNome';
        export const localTextPrefix = 'Default.PianoArea';
        export const lookupKey = 'Default.PianoArea';

        export function getLookup(): Q.Lookup<PianoAreaRow> {
            return Q.getLookup<PianoAreaRow>('Default.PianoArea');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IdPiano = "IdPiano",
            IdArea = "IdArea",
            TipoStato = "TipoStato",
            ProfMax = "ProfMax",
            Sup = "Sup",
            IdAreaNome = "IdAreaNome",
            PotenzialeList = "PotenzialeList"
        }
    }
}
