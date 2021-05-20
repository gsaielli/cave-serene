namespace CaveSerene.Default {
    export interface MaterialeForm {
        Descrizione: Serenity.StringEditor;
        IdTipoMateriale: Serenity.LookupEditor;
        TariffaRiferimento: Serenity.DecimalEditor;
        PesoSpecificoRiferimento: Serenity.DecimalEditor;
        NomeRisorsaMineraleIstat: Serenity.EnumEditor;
    }

    export class MaterialeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Materiale';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaterialeForm.init)  {
                MaterialeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.EnumEditor;

                Q.initFormType(MaterialeForm, [
                    'Descrizione', w0,
                    'IdTipoMateriale', w1,
                    'TariffaRiferimento', w2,
                    'PesoSpecificoRiferimento', w2,
                    'NomeRisorsaMineraleIstat', w3
                ]);
            }
        }
    }
}
