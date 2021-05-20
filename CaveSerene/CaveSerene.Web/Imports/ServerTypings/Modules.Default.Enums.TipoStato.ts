namespace CaveSerene.Modules.Default.Enums {
    export enum TipoStato {
        Attivo = 1,
        NonUtilizzato = 2,
        Esaurito = 3
    }
    Serenity.Decorators.registerEnumType(TipoStato, 'CaveSerene.Modules.Default.Enums.TipoStato', 'Default.TipoStato');
}
