namespace CaveSerene.Default {
    export interface ProrogaForm {
        NuovaDataSistemazione: Serenity.DateEditor;
        Protocollo: Serenity.StringEditor;
        Data: Serenity.DateEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class ProrogaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Proroga';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProrogaForm.init)  {
                ProrogaForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(ProrogaForm, [
                    'NuovaDataSistemazione', w0,
                    'Protocollo', w1,
                    'Data', w0,
                    'Note', w2
                ]);
            }
        }
    }
}
