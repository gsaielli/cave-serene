namespace CaveSerene.Default {
    export interface EnteRow {
        Id?: string;
        IdRegione?: string;
        Nome?: string;
        Sigla?: string;
        IdRegioneNome?: string;
    }

    export namespace EnteRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Ente';
        export const lookupKey = 'Default.Ente';

        export function getLookup(): Q.Lookup<EnteRow> {
            return Q.getLookup<EnteRow>('Default.Ente');
        }

        export declare const enum Fields {
            Id = "Id",
            IdRegione = "IdRegione",
            Nome = "Nome",
            Sigla = "Sigla",
            IdRegioneNome = "IdRegioneNome"
        }
    }
}

