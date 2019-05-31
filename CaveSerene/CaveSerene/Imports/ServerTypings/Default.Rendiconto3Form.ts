namespace CaveSerene.Default {
    export interface Rendiconto3Form {
        IdStruttura: Serenity.LookupEditor;
        Anno: Serenity.IntegerEditor;
        NumOperai: Serenity.IntegerEditor;
        NumAmministrativi: Serenity.IntegerEditor;
        NumTecnici: Serenity.IntegerEditor;
        LavoratoM3: Serenity.DecimalEditor;
        LavoratoQ: Serenity.DecimalEditor;
        MetodoLavorazione: Serenity.StringEditor;
        MaterialeTradizionale: Serenity.BooleanEditor;
        MaterialeRiciclato: Serenity.BooleanEditor;
        ApprovvigionamentoList: RendicontoApprovvigionamentoEditor;
        DestinazioneTerritorialeList: RendicontoDestinazioneTerritorialeEditor;
        DestinazioneUsoList: RendicontoDestinazioneUsoEditor;
    }

    export class Rendiconto3Form extends Serenity.PrefixedContext {
        static formKey = 'Default.Rendiconto3';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!Rendiconto3Form.init)  {
                Rendiconto3Form.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;
                var w4 = s.BooleanEditor;
                var w5 = RendicontoApprovvigionamentoEditor;
                var w6 = RendicontoDestinazioneTerritorialeEditor;
                var w7 = RendicontoDestinazioneUsoEditor;

                Q.initFormType(Rendiconto3Form, [
                    'IdStruttura', w0,
                    'Anno', w1,
                    'NumOperai', w1,
                    'NumAmministrativi', w1,
                    'NumTecnici', w1,
                    'LavoratoM3', w2,
                    'LavoratoQ', w2,
                    'MetodoLavorazione', w3,
                    'MaterialeTradizionale', w4,
                    'MaterialeRiciclato', w4,
                    'ApprovvigionamentoList', w5,
                    'DestinazioneTerritorialeList', w6,
                    'DestinazioneUsoList', w7
                ]);
            }
        }
    }
}

