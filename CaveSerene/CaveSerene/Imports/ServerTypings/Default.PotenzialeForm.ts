namespace CaveSerene.Default {
    export interface PotenzialeForm {
        IdMateriale: Serenity.LookupEditor;
        Potenziale: Serenity.IntegerEditor;
        Residuo: Serenity.IntegerEditor;
    }

    export class PotenzialeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Potenziale';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PotenzialeForm.init)  {
                PotenzialeForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(PotenzialeForm, [
                    'IdMateriale', w0,
                    'Potenziale', w1,
                    'Residuo', w1
                ]);
            }
        }
    }
}

