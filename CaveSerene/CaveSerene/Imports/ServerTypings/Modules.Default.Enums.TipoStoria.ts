namespace CaveSerene.Modules.Default.Enums {
    export enum TipoStoria {
        Ampliamento = 1,
        Nuovo = 2,
        Completamento = 3,
        Pregresso = 98
    }
    Serenity.Decorators.registerEnumType(TipoStoria, 'CaveSerene.Modules.Default.Enums.TipoStoria', 'Default.TipoStoria');
}

