namespace CaveSerene.Default {
    export interface AutorizzazioneMaterialeForm {
        IdMateriale: Serenity.LookupEditor;
        QuantitaAutorizzata: Serenity.DecimalEditor;
        PesoAutorizzato: Serenity.DecimalEditor;
    }

    export class AutorizzazioneMaterialeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.AutorizzazioneMateriale';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AutorizzazioneMaterialeForm.init)  {
                AutorizzazioneMaterialeForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(AutorizzazioneMaterialeForm, [
                    'IdMateriale', w0,
                    'QuantitaAutorizzata', w1,
                    'PesoAutorizzato', w1
                ]);
            }
        }
    }
}
