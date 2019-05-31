namespace CaveSerene.Modules.Default.Enums {
    export enum TipoDestinazioneUso {
        Riempimenti = 1,
        RilevatiStradali = 2,
        OpereIdrauliche = 3,
        ConglomeratiCementiziBituminosi = 4,
        PietraTaglio = 5,
        Leganti = 6,
        IndustriaLaterizi = 7,
        IndustriaCeramica = 8,
        Impermeabilizzazioni = 9,
        AltroIndustria = 10,
        Litoidi = 11,
        InertiStabilizzanti = 12,
        Calcestruzzi = 13,
        Bitumi = 14,
        ProduzioneLaterizi = 15,
        Cementificio = 16
    }
    Serenity.Decorators.registerEnumType(TipoDestinazioneUso, 'CaveSerene.Modules.Default.Enums.TipoDestinazioneUso', 'Default.TipoDestinazioneUso');
}

