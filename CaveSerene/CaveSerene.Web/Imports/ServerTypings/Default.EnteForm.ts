namespace CaveSerene.Default {
    export interface EnteForm {
        Id: Serenity.StringEditor;
        IdRegione: Serenity.LookupEditor;
        Nome: Serenity.StringEditor;
        Sigla: Serenity.StringEditor;
    }

    export class EnteForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Ente';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EnteForm.init)  {
                EnteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(EnteForm, [
                    'Id', w0,
                    'IdRegione', w1,
                    'Nome', w0,
                    'Sigla', w0
                ]);
            }
        }
    }
}
