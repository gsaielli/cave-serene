namespace CaveSerene.Default {
    export interface DerogaForm {
        VolumeDeroga: Serenity.DecimalEditor;
        Protocollo: Serenity.StringEditor;
        Data: Serenity.DateEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class DerogaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Deroga';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DerogaForm.init)  {
                DerogaForm.init = true;

                var s = Serenity;
                var w0 = s.DecimalEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(DerogaForm, [
                    'VolumeDeroga', w0,
                    'Protocollo', w1,
                    'Data', w2,
                    'Note', w3
                ]);
            }
        }
    }
}
