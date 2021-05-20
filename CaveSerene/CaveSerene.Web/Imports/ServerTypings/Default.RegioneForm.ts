namespace CaveSerene.Default {
    export interface RegioneForm {
        Nome: Serenity.StringEditor;
    }

    export class RegioneForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Regione';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegioneForm.init)  {
                RegioneForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RegioneForm, [
                    'Nome', w0
                ]);
            }
        }
    }
}
