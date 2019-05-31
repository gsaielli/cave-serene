
namespace CaveSerene.Default {
    export interface PianoForm {
        IdEnte: Serenity.LookupEditor;
        Progressivo: Serenity.IntegerEditor;
        Variante: Serenity.IntegerEditor;
        Descrizione: Serenity.StringEditor;
        DataInizio: Serenity.DateEditor;
        DataFine: Serenity.DateEditor;
        Note: Serenity.TextAreaEditor;
        AttoList: AttoEditor;
        FabbisognoList: FabbisognoEditor;
        PianoAreaList: PianoAreaEditor;
    }

    export class PianoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Piano';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PianoForm.init)  {
                PianoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;
                var w4 = s.TextAreaEditor;
                var w5 = AttoEditor;
                var w6 = FabbisognoEditor;
                var w7 = PianoAreaEditor;

                Q.initFormType(PianoForm, [
                    'IdEnte', w0,
                    'Progressivo', w1,
                    'Variante', w1,
                    'Descrizione', w2,
                    'DataInizio', w3,
                    'DataFine', w3,
                    'Note', w4,
                    'AttoList', w5,
                    'FabbisognoList', w6,
                    'PianoAreaList', w7
                ]);
            }
        }
    }
}

