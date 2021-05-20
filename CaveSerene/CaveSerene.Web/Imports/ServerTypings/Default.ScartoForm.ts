namespace CaveSerene.Default {
    export interface ScartoForm {
        TipoScarto: Serenity.EnumEditor;
        Peso: Serenity.DecimalEditor;
        Volume: Serenity.DecimalEditor;
        DescrizioneAltro: Serenity.StringEditor;
    }

    export class ScartoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Scarto';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ScartoForm.init)  {
                ScartoForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;

                Q.initFormType(ScartoForm, [
                    'TipoScarto', w0,
                    'Peso', w1,
                    'Volume', w1,
                    'DescrizioneAltro', w2
                ]);
            }
        }
    }
}
