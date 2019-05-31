namespace CaveSerene.Default {
    export interface RendicontoDestinazioneTerritorialeForm {
        TipoDestinazioneTerritoriale: Serenity.EnumEditor;
        Percentuale: Serenity.IntegerEditor;
    }

    export class RendicontoDestinazioneTerritorialeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.RendicontoDestinazioneTerritoriale';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RendicontoDestinazioneTerritorialeForm.init)  {
                RendicontoDestinazioneTerritorialeForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(RendicontoDestinazioneTerritorialeForm, [
                    'TipoDestinazioneTerritoriale', w0,
                    'Percentuale', w1
                ]);
            }
        }
    }
}

