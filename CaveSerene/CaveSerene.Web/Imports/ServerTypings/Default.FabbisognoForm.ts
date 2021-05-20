namespace CaveSerene.Default {
    export interface FabbisognoForm {
        IdMateriale: Serenity.LookupEditor;
        Fabbisogno: Serenity.IntegerEditor;
        Potenziale: Serenity.IntegerEditor;
        Residuo: Serenity.IntegerEditor;
    }

    export class FabbisognoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Fabbisogno';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FabbisognoForm.init)  {
                FabbisognoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(FabbisognoForm, [
                    'IdMateriale', w0,
                    'Fabbisogno', w1,
                    'Potenziale', w1,
                    'Residuo', w1
                ]);
            }
        }
    }
}
