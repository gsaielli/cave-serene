namespace CaveSerene.Default {
    export interface TipoMaterialeForm {
        Descrizione: Serenity.StringEditor;
    }

    export class TipoMaterialeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TipoMateriale';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TipoMaterialeForm.init)  {
                TipoMaterialeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TipoMaterialeForm, [
                    'Descrizione', w0
                ]);
            }
        }
    }
}
