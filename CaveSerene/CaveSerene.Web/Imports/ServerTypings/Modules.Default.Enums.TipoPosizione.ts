namespace CaveSerene.Modules.Default.Enums {
    export enum TipoPosizione {
        Cresta = 1,
        Fondovalle = 2,
        Pianura = 3,
        PianuraGolena = 4,
        PianuraSottoFalda = 5,
        PianuraSopraFalda = 6,
        Versante = 7
    }
    Serenity.Decorators.registerEnumType(TipoPosizione, 'CaveSerene.Modules.Default.Enums.TipoPosizione', 'Default.TipoPosizione');
}
