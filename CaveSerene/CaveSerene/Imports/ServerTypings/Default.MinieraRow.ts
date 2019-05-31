namespace CaveSerene.Default {
    export interface MinieraRow {
        Id?: number;
        IdComune?: string;
        TipoPosizione?: Modules.Default.Enums.TipoPosizione;
        TipoDissesto?: Modules.Default.Enums.TipoDissesto;
        TipoColtivazione?: Modules.Default.Enums.TipoColtivazione;
        Progressivo?: number;
        Nome?: string;
        Frazione?: string;
        CatastoProvinciale?: string;
        CoordinataX?: number;
        CoordinataY?: number;
        VincoloAmbientale?: number;
        AreaProtetta?: boolean;
        ProfonditaFalda?: number;
        TipoStruttura?: Modules.Default.Enums.TipoStruttura;
        IdComuneNome?: string;
    }

    export namespace MinieraRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Miniera';
        export const lookupKey = 'Default.Miniera';

        export function getLookup(): Q.Lookup<MinieraRow> {
            return Q.getLookup<MinieraRow>('Default.Miniera');
        }

        export declare const enum Fields {
            Id = "Id",
            IdComune = "IdComune",
            TipoPosizione = "TipoPosizione",
            TipoDissesto = "TipoDissesto",
            TipoColtivazione = "TipoColtivazione",
            Progressivo = "Progressivo",
            Nome = "Nome",
            Frazione = "Frazione",
            CatastoProvinciale = "CatastoProvinciale",
            CoordinataX = "CoordinataX",
            CoordinataY = "CoordinataY",
            VincoloAmbientale = "VincoloAmbientale",
            AreaProtetta = "AreaProtetta",
            ProfonditaFalda = "ProfonditaFalda",
            TipoStruttura = "TipoStruttura",
            IdComuneNome = "IdComuneNome"
        }
    }
}

