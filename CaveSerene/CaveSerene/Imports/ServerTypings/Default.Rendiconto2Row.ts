namespace CaveSerene.Default {
    export interface Rendiconto2Row {
        Id?: number;
        IdAutorizzazione?: number;
        Anno?: number;
        NumOperai?: number;
        NumAmministrativi?: number;
        NumTecnici?: number;
        NumAddetti?: number;
        OreLavorate?: number;
        NumeroMesiAttivita?: number;
        VolAcquaEstrazione?: number;
        VolAcquaLavorazioni?: number;
        StruttDepMatInut?: boolean;
        Esplosivo?: number;
        Detonatori?: number;
        FiloElicoidale?: number;
        MezzoMeccanico?: number;
        MicceLentaCombustione?: number;
        QuantitaKw?: number;
        ImportoKw?: number;
        QuantitaGasolio?: number;
        ImportoGasolio?: number;
        QuantitaBenzina?: number;
        ImportoBenzina?: number;
        DescrizioneAltreFontiEnergia?: string;
        UnitaMisuraAltreFontiEnergia?: string;
        QuantitaAltreFontiEnergia?: number;
        ImportoAltreFontiEnergia?: number;
        DirittoProp?: number;
        DirettoreResponsabile?: string;
        Sorvegliante?: string;
        ResponsabileSicurezza?: string;
        Autorizzazione?: string;
        Comune?: string;
        ProdottoList?: ProdottoRow[];
        ScartoList?: ScartoRow[];
    }

    export namespace Rendiconto2Row {
        export const idProperty = 'Id';
        export const nameProperty = 'Autorizzazione';
        export const localTextPrefix = 'Default.Rendiconto2';

        export declare const enum Fields {
            Id = "Id",
            IdAutorizzazione = "IdAutorizzazione",
            Anno = "Anno",
            NumOperai = "NumOperai",
            NumAmministrativi = "NumAmministrativi",
            NumTecnici = "NumTecnici",
            NumAddetti = "NumAddetti",
            OreLavorate = "OreLavorate",
            NumeroMesiAttivita = "NumeroMesiAttivita",
            VolAcquaEstrazione = "VolAcquaEstrazione",
            VolAcquaLavorazioni = "VolAcquaLavorazioni",
            StruttDepMatInut = "StruttDepMatInut",
            Esplosivo = "Esplosivo",
            Detonatori = "Detonatori",
            FiloElicoidale = "FiloElicoidale",
            MezzoMeccanico = "MezzoMeccanico",
            MicceLentaCombustione = "MicceLentaCombustione",
            QuantitaKw = "QuantitaKw",
            ImportoKw = "ImportoKw",
            QuantitaGasolio = "QuantitaGasolio",
            ImportoGasolio = "ImportoGasolio",
            QuantitaBenzina = "QuantitaBenzina",
            ImportoBenzina = "ImportoBenzina",
            DescrizioneAltreFontiEnergia = "DescrizioneAltreFontiEnergia",
            UnitaMisuraAltreFontiEnergia = "UnitaMisuraAltreFontiEnergia",
            QuantitaAltreFontiEnergia = "QuantitaAltreFontiEnergia",
            ImportoAltreFontiEnergia = "ImportoAltreFontiEnergia",
            DirittoProp = "DirittoProp",
            DirettoreResponsabile = "DirettoreResponsabile",
            Sorvegliante = "Sorvegliante",
            ResponsabileSicurezza = "ResponsabileSicurezza",
            Autorizzazione = "Autorizzazione",
            Comune = "Comune",
            ProdottoList = "ProdottoList",
            ScartoList = "ScartoList"
        }
    }
}

