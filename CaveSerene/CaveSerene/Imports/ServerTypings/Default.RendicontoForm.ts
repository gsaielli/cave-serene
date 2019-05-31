namespace CaveSerene.Default {
    export interface RendicontoForm {
        IdAutorizzazione: Serenity.LookupEditor;
        Anno: Serenity.IntegerEditor;
        NumOperai: Serenity.IntegerEditor;
        NumAmministrativi: Serenity.IntegerEditor;
        NumTecnici: Serenity.IntegerEditor;
        NumAddetti: Serenity.IntegerEditor;
        OreLavorate: Serenity.DecimalEditor;
        NumeroMesiAttivita: Serenity.DecimalEditor;
        DirettoreResponsabile: Serenity.TextAreaEditor;
        Sorvegliante: Serenity.TextAreaEditor;
        ResponsabileSicurezza: Serenity.TextAreaEditor;
        ProdottoList: ProdottoEditor;
        StruttDepMatInut: Serenity.BooleanEditor;
        ScartoList: ScartoEditor;
        VolAcquaEstrazione: Serenity.DecimalEditor;
        VolAcquaLavorazioni: Serenity.DecimalEditor;
        Esplosivo: Serenity.DecimalEditor;
        Detonatori: Serenity.IntegerEditor;
        FiloElicoidale: Serenity.DecimalEditor;
        MezzoMeccanico: Serenity.DecimalEditor;
        MicceLentaCombustione: Serenity.DecimalEditor;
        QuantitaKw: Serenity.DecimalEditor;
        ImportoKw: Serenity.DecimalEditor;
        QuantitaGasolio: Serenity.DecimalEditor;
        ImportoGasolio: Serenity.DecimalEditor;
        QuantitaBenzina: Serenity.DecimalEditor;
        ImportoBenzina: Serenity.DecimalEditor;
        DescrizioneAltreFontiEnergia: Serenity.StringEditor;
        UnitaMisuraAltreFontiEnergia: Serenity.StringEditor;
        QuantitaAltreFontiEnergia: Serenity.DecimalEditor;
        ImportoAltreFontiEnergia: Serenity.DecimalEditor;
    }

    export class RendicontoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Rendiconto';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RendicontoForm.init)  {
                RendicontoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.TextAreaEditor;
                var w4 = ProdottoEditor;
                var w5 = s.BooleanEditor;
                var w6 = ScartoEditor;
                var w7 = s.StringEditor;

                Q.initFormType(RendicontoForm, [
                    'IdAutorizzazione', w0,
                    'Anno', w1,
                    'NumOperai', w1,
                    'NumAmministrativi', w1,
                    'NumTecnici', w1,
                    'NumAddetti', w1,
                    'OreLavorate', w2,
                    'NumeroMesiAttivita', w2,
                    'DirettoreResponsabile', w3,
                    'Sorvegliante', w3,
                    'ResponsabileSicurezza', w3,
                    'ProdottoList', w4,
                    'StruttDepMatInut', w5,
                    'ScartoList', w6,
                    'VolAcquaEstrazione', w2,
                    'VolAcquaLavorazioni', w2,
                    'Esplosivo', w2,
                    'Detonatori', w1,
                    'FiloElicoidale', w2,
                    'MezzoMeccanico', w2,
                    'MicceLentaCombustione', w2,
                    'QuantitaKw', w2,
                    'ImportoKw', w2,
                    'QuantitaGasolio', w2,
                    'ImportoGasolio', w2,
                    'QuantitaBenzina', w2,
                    'ImportoBenzina', w2,
                    'DescrizioneAltreFontiEnergia', w7,
                    'UnitaMisuraAltreFontiEnergia', w7,
                    'QuantitaAltreFontiEnergia', w2,
                    'ImportoAltreFontiEnergia', w2
                ]);
            }
        }
    }
}

