namespace CaveSerene.Default {
    export interface RendicontoApprovvigionamentoForm {
        TipoApprovvigionamento: Serenity.EnumEditor;
        IdStrutturaCava: Serenity.IntegerEditor;
        QtaApprov: Serenity.DecimalEditor;
        Note: Serenity.StringEditor;
    }

    export class RendicontoApprovvigionamentoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.RendicontoApprovvigionamento';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RendicontoApprovvigionamentoForm.init)  {
                RendicontoApprovvigionamentoForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(RendicontoApprovvigionamentoForm, [
                    'TipoApprovvigionamento', w0,
                    'IdStrutturaCava', w1,
                    'QtaApprov', w2,
                    'Note', w3
                ]);
            }
        }
    }
}

