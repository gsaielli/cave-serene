namespace CaveSerene.Default {
    export interface MaterialeRow {
        Id?: number;
        Descrizione?: string;
        IdTipoMateriale?: number;
        TariffaRiferimento?: number;
        PesoSpecificoRiferimento?: number;
        NomeRisorsaMineraleIstat?: Modules.Default.Enums.TipoISTAT;
        IdTipoMaterialeDescrizione?: string;
    }

    export namespace MaterialeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Descrizione';
        export const localTextPrefix = 'Default.Materiale';
        export const lookupKey = 'Default.Materiale';

        export function getLookup(): Q.Lookup<MaterialeRow> {
            return Q.getLookup<MaterialeRow>('Default.Materiale');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Descrizione = "Descrizione",
            IdTipoMateriale = "IdTipoMateriale",
            TariffaRiferimento = "TariffaRiferimento",
            PesoSpecificoRiferimento = "PesoSpecificoRiferimento",
            NomeRisorsaMineraleIstat = "NomeRisorsaMineraleIstat",
            IdTipoMaterialeDescrizione = "IdTipoMaterialeDescrizione"
        }
    }
}
