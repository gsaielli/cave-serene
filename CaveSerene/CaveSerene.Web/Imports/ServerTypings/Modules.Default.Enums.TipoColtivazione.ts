namespace CaveSerene.Modules.Default.Enums {
    export enum TipoColtivazione {
        AFossa = 1,
        PareteGradoni = 2,
        PareteScarpataUnica = 3,
        InSotterraneo = 4,
        Misto = 5,
        MinieraCieloAperto = 6
    }
    Serenity.Decorators.registerEnumType(TipoColtivazione, 'CaveSerene.Modules.Default.Enums.TipoColtivazione', 'Default.TipoColtivazione');
}
