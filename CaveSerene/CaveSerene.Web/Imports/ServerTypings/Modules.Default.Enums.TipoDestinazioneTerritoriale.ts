namespace CaveSerene.Modules.Default.Enums {
    export enum TipoDestinazioneTerritoriale {
        NelComune = 1,
        NellaProvincia = 2,
        NellaRegione = 3,
        FuoriRegione = 4
    }
    Serenity.Decorators.registerEnumType(TipoDestinazioneTerritoriale, 'CaveSerene.Modules.Default.Enums.TipoDestinazioneTerritoriale', 'Default.TipoDestinazioneTerritoriale');
}
