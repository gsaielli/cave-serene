namespace CaveSerene.Default {
    export interface CavaForm {
        Nome: Serenity.StringEditor;
        IdComune: Serenity.LookupEditor;
        TipoPosizione: Serenity.EnumEditor;
        TipoDissesto: Serenity.EnumEditor;
        TipoColtivazione: Serenity.EnumEditor;
        Progressivo: Serenity.IntegerEditor;
        Frazione: Serenity.StringEditor;
        CatastoProvinciale: Serenity.StringEditor;
        VincoloAmbientale: Serenity.IntegerEditor;
        AreaProtetta: Serenity.BooleanEditor;
        ProfonditaFalda: Serenity.DecimalEditor;
        CoordinataX: Serenity.DecimalEditor;
        CoordinataY: Serenity.DecimalEditor;
        GIS: StaticTextBlock;
    }

    export class CavaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Cava';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CavaForm.init)  {
                CavaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.DecimalEditor;
                var w6 = StaticTextBlock;

                Q.initFormType(CavaForm, [
                    'Nome', w0,
                    'IdComune', w1,
                    'TipoPosizione', w2,
                    'TipoDissesto', w2,
                    'TipoColtivazione', w2,
                    'Progressivo', w3,
                    'Frazione', w0,
                    'CatastoProvinciale', w0,
                    'VincoloAmbientale', w3,
                    'AreaProtetta', w4,
                    'ProfonditaFalda', w5,
                    'CoordinataX', w5,
                    'CoordinataY', w5,
                    'GIS', w6
                ]);
            }
        }
    }
}
