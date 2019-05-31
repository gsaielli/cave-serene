namespace CaveSerene.Modules.Default.Enums {
    export enum TipoApprovvigionamento {
        DaCavaRegionale = 1,
        DaCavaExtraRegionale = 2,
        DaSistemazioneIdraulica = 3,
        CostruzioneDemolizione = 4,
        Altro = 5
    }
    Serenity.Decorators.registerEnumType(TipoApprovvigionamento, 'CaveSerene.Modules.Default.Enums.TipoApprovvigionamento', 'Default.TipoApprovvigionamento');
}

