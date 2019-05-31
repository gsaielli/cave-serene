namespace CaveSerene.Default {
    export interface ComuneForm {
        CodiceRegione: Serenity.StringEditor;
        SiglaProvincia: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        Cap: Serenity.StringEditor;
        ZonaAlt: Serenity.StringEditor;
        EntCod: Serenity.StringEditor;
        CodCatastale: Serenity.StringEditor;
    }

    export class ComuneForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Comune';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ComuneForm.init)  {
                ComuneForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ComuneForm, [
                    'CodiceRegione', w0,
                    'SiglaProvincia', w0,
                    'Nome', w0,
                    'Cap', w0,
                    'ZonaAlt', w0,
                    'EntCod', w0,
                    'CodCatastale', w0
                ]);
            }
        }
    }
}

