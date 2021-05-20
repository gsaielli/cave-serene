namespace CaveSerene.Default {
    export interface ScartoRow {
        Id?: number;
        IdRendiconto?: number;
        TipoScarto?: Modules.Default.Enums.TipoScarto;
        Peso?: number;
        Volume?: number;
        DescrizioneAltro?: string;
    }

    export namespace ScartoRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.Scarto';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IdRendiconto = "IdRendiconto",
            TipoScarto = "TipoScarto",
            Peso = "Peso",
            Volume = "Volume",
            DescrizioneAltro = "DescrizioneAltro"
        }
    }
}
