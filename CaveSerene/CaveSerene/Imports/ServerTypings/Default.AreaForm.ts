
namespace CaveSerene.Default {
    export interface AreaForm {
        Nome: Serenity.StringEditor;
        TipoArea: Serenity.EnumEditor;
        TipoStoria: Serenity.EnumEditor;
        TipoPosizione: Serenity.EnumEditor;
        Progressivo: Serenity.IntegerEditor;
        CodiceAreaProv: Serenity.StringEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class AreaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Area';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AreaForm.init)  {
                AreaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(AreaForm, [
                    'Nome', w0,
                    'TipoArea', w1,
                    'TipoStoria', w1,
                    'TipoPosizione', w1,
                    'Progressivo', w2,
                    'CodiceAreaProv', w0,
                    'Note', w3
                ]);
            }
        }
    }
}

