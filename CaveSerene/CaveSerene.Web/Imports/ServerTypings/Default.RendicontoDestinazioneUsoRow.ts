namespace CaveSerene.Default {
    export interface RendicontoDestinazioneUsoRow {
        Id?: string;
        IdRendiconto?: number;
        TipoDestinazioneUso?: Modules.Default.Enums.TipoDestinazioneUso;
        Percentuale?: number;
    }

    export namespace RendicontoDestinazioneUsoRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.RendicontoDestinazioneUso';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IdRendiconto = "IdRendiconto",
            TipoDestinazioneUso = "TipoDestinazioneUso",
            Percentuale = "Percentuale"
        }
    }
}
