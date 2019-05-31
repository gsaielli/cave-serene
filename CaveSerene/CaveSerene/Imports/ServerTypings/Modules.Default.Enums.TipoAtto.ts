namespace CaveSerene.Modules.Default.Enums {
    export enum TipoAtto {
        AdozioneProvinciale = 1,
        AdozioneAssembleaComuni = 2,
        ApprovazioneRegionaleParziale = 3
    }
    Serenity.Decorators.registerEnumType(TipoAtto, 'CaveSerene.Modules.Default.Enums.TipoAtto', 'Default.TipoAtto');
}

