namespace CaveSerene.Default {
    export interface CavaRow {
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

    export namespace CavaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Cava';
        export const lookupKey = 'Default.Cava';

        export function getLookup(): Q.Lookup<CavaRow> {
            return Q.getLookup<CavaRow>('Default.Cava');
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

