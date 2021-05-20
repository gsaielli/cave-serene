namespace CaveSerene.Default {
    export interface ImpiantoRow {
        Id?: number;
        IdComune?: string;
        Progressivo?: number;
        Nome?: string;
        Frazione?: string;
        CatastoProvinciale?: string;
        CoordinataX?: number;
        CoordinataY?: number;
        TipoImpianto?: Modules.Default.Enums.TipoImpianto;
        DataInstallazioneImpianto?: string;
        TipoStruttura?: Modules.Default.Enums.TipoStruttura;
        IdComuneNome?: string;
    }

    export namespace ImpiantoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Impianto';
        export const lookupKey = 'Default.Impianto';

        export function getLookup(): Q.Lookup<ImpiantoRow> {
            return Q.getLookup<ImpiantoRow>('Default.Impianto');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IdComune = "IdComune",
            Progressivo = "Progressivo",
            Nome = "Nome",
            Frazione = "Frazione",
            CatastoProvinciale = "CatastoProvinciale",
            CoordinataX = "CoordinataX",
            CoordinataY = "CoordinataY",
            TipoImpianto = "TipoImpianto",
            DataInstallazioneImpianto = "DataInstallazioneImpianto",
            TipoStruttura = "TipoStruttura",
            IdComuneNome = "IdComuneNome"
        }
    }
}
