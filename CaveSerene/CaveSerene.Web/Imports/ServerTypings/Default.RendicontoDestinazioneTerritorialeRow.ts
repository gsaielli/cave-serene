namespace CaveSerene.Default {
    export interface RendicontoDestinazioneTerritorialeRow {
        Id?: string;
        IdRendiconto?: number;
        TipoDestinazioneTerritoriale?: Modules.Default.Enums.TipoDestinazioneTerritoriale;
        Percentuale?: number;
    }

    export namespace RendicontoDestinazioneTerritorialeRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.RendicontoDestinazioneTerritoriale';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IdRendiconto = "IdRendiconto",
            TipoDestinazioneTerritoriale = "TipoDestinazioneTerritoriale",
            Percentuale = "Percentuale"
        }
    }
}
