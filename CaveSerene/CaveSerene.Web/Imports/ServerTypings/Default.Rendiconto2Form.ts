namespace CaveSerene.Default {
    export interface Rendiconto2Form {
        IdAutorizzazione: Serenity.LookupEditor;
        Anno: Serenity.IntegerEditor;
        NumOperai: Serenity.IntegerEditor;
        NumAmministrativi: Serenity.IntegerEditor;
        NumTecnici: Serenity.IntegerEditor;
        NumAddetti: Serenity.IntegerEditor;
        OreLavorate: Serenity.DecimalEditor;
        NumeroMesiAttivita: Serenity.DecimalEditor;
        DirittoProp: Serenity.DecimalEditor;
        DirettoreResponsabile: Serenity.TextAreaEditor;
        Sorvegliante: Serenity.TextAreaEditor;
        ResponsabileSicurezza: Serenity.TextAreaEditor;
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
        ProdottoList: ProdottoEditor;
        StruttDepMatInut: Serenity.BooleanEditor;
        ScartoList: ScartoEditor;
    }

    export class Rendiconto2Form extends Serenity.PrefixedContext {
        static formKey = 'Default.Rendiconto2';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!Rendiconto2Form.init)  {
                Rendiconto2Form.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.StringEditor;
                var w5 = ProdottoEditor;
                var w6 = s.BooleanEditor;
                var w7 = ScartoEditor;

                Q.initFormType(Rendiconto2Form, [
                    'IdAutorizzazione', w0,
                    'Anno', w1,
                    'NumOperai', w1,
                    'NumAmministrativi', w1,
                    'NumTecnici', w1,
                    'NumAddetti', w1,
                    'OreLavorate', w2,
                    'NumeroMesiAttivita', w2,
                    'DirittoProp', w2,
                    'DirettoreResponsabile', w3,
                    'Sorvegliante', w3,
                    'ResponsabileSicurezza', w3,
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
                    'DescrizioneAltreFontiEnergia', w4,
                    'UnitaMisuraAltreFontiEnergia', w4,
                    'QuantitaAltreFontiEnergia', w2,
                    'ImportoAltreFontiEnergia', w2,
                    'ProdottoList', w5,
                    'StruttDepMatInut', w6,
                    'ScartoList', w7
                ]);
            }
        }
    }
}
