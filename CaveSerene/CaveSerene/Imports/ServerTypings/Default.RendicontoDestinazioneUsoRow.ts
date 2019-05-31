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

        export declare const enum Fields {
            Id = "Id",
            IdRendiconto = "IdRendiconto",
            TipoDestinazioneUso = "TipoDestinazioneUso",
            Percentuale = "Percentuale"
        }
    }
}

