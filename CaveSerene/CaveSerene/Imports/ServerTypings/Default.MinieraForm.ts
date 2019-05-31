namespace CaveSerene.Default {
    export interface MinieraForm {
        Nome: Serenity.StringEditor;
        IdComune: Serenity.LookupEditor;
        TipoPosizione: Serenity.EnumEditor;
        TipoDissesto: Serenity.EnumEditor;
        TipoColtivazione: Serenity.EnumEditor;
        Progressivo: Serenity.IntegerEditor;
        Frazione: Serenity.StringEditor;
        CatastoProvinciale: Serenity.StringEditor;
        CoordinataX: Serenity.DecimalEditor;
        CoordinataY: Serenity.DecimalEditor;
        VincoloAmbientale: Serenity.IntegerEditor;
        AreaProtetta: Serenity.BooleanEditor;
        ProfonditaFalda: Serenity.DecimalEditor;
    }

    export class MinieraForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Miniera';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MinieraForm.init)  {
                MinieraForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(MinieraForm, [
                    'Nome', w0,
                    'IdComune', w1,
                    'TipoPosizione', w2,
                    'TipoDissesto', w2,
                    'TipoColtivazione', w2,
                    'Progressivo', w3,
                    'Frazione', w0,
                    'CatastoProvinciale', w0,
                    'CoordinataX', w4,
                    'CoordinataY', w4,
                    'VincoloAmbientale', w3,
                    'AreaProtetta', w5,
                    'ProfonditaFalda', w4
                ]);
            }
        }
    }
}

