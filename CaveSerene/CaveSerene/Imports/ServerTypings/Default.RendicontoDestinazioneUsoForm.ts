namespace CaveSerene.Default {
    export interface RendicontoDestinazioneUsoForm {
        TipoDestinazioneUso: Serenity.EnumEditor;
        Percentuale: Serenity.IntegerEditor;
    }

    export class RendicontoDestinazioneUsoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.RendicontoDestinazioneUso';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RendicontoDestinazioneUsoForm.init)  {
                RendicontoDestinazioneUsoForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(RendicontoDestinazioneUsoForm, [
                    'TipoDestinazioneUso', w0,
                    'Percentuale', w1
                ]);
            }
        }
    }
}

