namespace CaveSerene.Modules.Default.Enums {
    export enum TipoDissesto {
        Assente = 1,
        NonRilevabile = 2,
        Frana = 3,
        Calanco = 4,
        ErosioneFluviale = 5
    }
    Serenity.Decorators.registerEnumType(TipoDissesto, 'CaveSerene.Modules.Default.Enums.TipoDissesto', 'Default.TipoDissesto');
}
