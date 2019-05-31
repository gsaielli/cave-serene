namespace CaveSerene.Default {
    export interface PianoAreaForm {
        IdArea: Serenity.LookupEditor;
        TipoStato: Serenity.EnumEditor;
        ProfMax: Serenity.DecimalEditor;
        Sup: Serenity.IntegerEditor;
        PotenzialeList: PotenzialeEditor;
    }

    export class PianoAreaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.PianoArea';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PianoAreaForm.init)  {
                PianoAreaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;
                var w4 = PotenzialeEditor;

                Q.initFormType(PianoAreaForm, [
                    'IdArea', w0,
                    'TipoStato', w1,
                    'ProfMax', w2,
                    'Sup', w3,
                    'PotenzialeList', w4
                ]);
            }
        }
    }
}

