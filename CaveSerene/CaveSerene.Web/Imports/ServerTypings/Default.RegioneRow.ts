﻿namespace CaveSerene.Default {
    export interface RegioneRow {
        Id?: string;
        Nome?: string;
    }

    export namespace RegioneRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Regione';
        export const lookupKey = 'Default.Regione';

        export function getLookup(): Q.Lookup<RegioneRow> {
            return Q.getLookup<RegioneRow>('Default.Regione');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Nome = "Nome"
        }
    }
}
