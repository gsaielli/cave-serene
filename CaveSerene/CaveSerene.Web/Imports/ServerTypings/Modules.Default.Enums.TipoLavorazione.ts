namespace CaveSerene.Modules.Default.Enums {
    export enum TipoLavorazione {
        LAVAGGIO = 1,
        VAGLIATURA = 2,
        FRANTUMAZIONE = 3,
        MACINAZIONE = 4,
        SEGAGIONE = 5,
        ESSICCAZIONI = 6,
        ARATURA = 7,
        RIPPATURA = 8,
        ALTRO = 9
    }
    Serenity.Decorators.registerEnumType(TipoLavorazione, 'CaveSerene.Modules.Default.Enums.TipoLavorazione', 'Default.TipoLavorazione');
}
