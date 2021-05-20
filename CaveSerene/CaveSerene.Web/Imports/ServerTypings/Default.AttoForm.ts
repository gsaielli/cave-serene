namespace CaveSerene.Default {
    export interface AttoForm {
        NumAtto: Serenity.IntegerEditor;
        DataAtto: Serenity.DateEditor;
        TipoAtto: Serenity.EnumEditor;
    }

    export class AttoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Atto';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AttoForm.init)  {
                AttoForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.EnumEditor;

                Q.initFormType(AttoForm, [
                    'NumAtto', w0,
                    'DataAtto', w1,
                    'TipoAtto', w2
                ]);
            }
        }
    }
}
