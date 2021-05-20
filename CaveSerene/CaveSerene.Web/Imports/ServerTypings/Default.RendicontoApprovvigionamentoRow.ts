namespace CaveSerene.Default {
    export interface RendicontoApprovvigionamentoRow {
        Id?: number;
        IdRendiconto?: number;
        TipoApprovvigionamento?: Modules.Default.Enums.TipoApprovvigionamento;
        IdStrutturaCava?: number;
        QtaApprov?: number;
        Note?: string;
    }

    export namespace RendicontoApprovvigionamentoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Note';
        export const localTextPrefix = 'Default.RendicontoApprovvigionamento';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IdRendiconto = "IdRendiconto",
            TipoApprovvigionamento = "TipoApprovvigionamento",
            IdStrutturaCava = "IdStrutturaCava",
            QtaApprov = "QtaApprov",
            Note = "Note"
        }
    }
}
