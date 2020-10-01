namespace CaveSerene.Default {
    export interface ImpiantoForm {
        Nome: Serenity.StringEditor;
        IdComune: Serenity.LookupEditor;
        TipoImpianto: Serenity.EnumEditor;
        Progressivo: Serenity.IntegerEditor;
        Frazione: Serenity.StringEditor;
        CatastoProvinciale: Serenity.StringEditor;
        DataInstallazioneImpianto: Serenity.DateEditor;
        CoordinataX: Serenity.DecimalEditor;
        CoordinataY: Serenity.DecimalEditor;
        GIS: StaticTextBlock;
    }

    export class ImpiantoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Impianto';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImpiantoForm.init)  {
                ImpiantoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DateEditor;
                var w5 = s.DecimalEditor;
                var w6 = StaticTextBlock;

                Q.initFormType(ImpiantoForm, [
                    'Nome', w0,
                    'IdComune', w1,
                    'TipoImpianto', w2,
                    'Progressivo', w3,
                    'Frazione', w0,
                    'CatastoProvinciale', w0,
                    'DataInstallazioneImpianto', w4,
                    'CoordinataX', w5,
                    'CoordinataY', w5,
                    'GIS', w6
                ]);
            }
        }
    }
}

