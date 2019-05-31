namespace CaveSerene.Modules.Default.Enums {
    export enum TipoCommercializzazione {
        TAL_QUALE = 1,
        STABILIZZATI = 2,
        GHIAIA = 3,
        SABBIA = 4,
        BLOCCHI = 5,
        PEZZAME = 6,
        LASTRE = 7,
        LAVORATI = 8
    }
    Serenity.Decorators.registerEnumType(TipoCommercializzazione, 'CaveSerene.Modules.Default.Enums.TipoCommercializzazione', 'Default.TipoCommercializzazione');
}

