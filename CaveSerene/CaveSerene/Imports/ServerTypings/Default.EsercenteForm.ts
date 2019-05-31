namespace CaveSerene.Default {
    export interface EsercenteForm {
        RagSoc: Serenity.StringEditor;
        CodCcia: Serenity.StringEditor;
        Indirizzo: Serenity.StringEditor;
        Cap: Serenity.IntegerEditor;
        Frazione: Serenity.StringEditor;
        IdComune: Serenity.LookupEditor;
        CodiceFiscale: Serenity.StringEditor;
        PartitaIva: Serenity.StringEditor;
        CodiceFiscaleCompilatore: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        EMail: Serenity.StringEditor;
        LegaleRappresentante: Serenity.StringEditor;
        DatiFallimento: Serenity.TextAreaEditor;
    }

    export class EsercenteForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Esercente';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EsercenteForm.init)  {
                EsercenteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(EsercenteForm, [
                    'RagSoc', w0,
                    'CodCcia', w0,
                    'Indirizzo', w0,
                    'Cap', w1,
                    'Frazione', w0,
                    'IdComune', w2,
                    'CodiceFiscale', w0,
                    'PartitaIva', w0,
                    'CodiceFiscaleCompilatore', w0,
                    'Telefono', w0,
                    'EMail', w0,
                    'LegaleRappresentante', w0,
                    'DatiFallimento', w3
                ]);
            }
        }
    }
}

