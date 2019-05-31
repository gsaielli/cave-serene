namespace CaveSerene.Default {
    export interface ProdottoForm {
        IdMateriale: Serenity.LookupEditor;
        QuantitaEstratta: Serenity.DecimalEditor;
        Peso: Serenity.DecimalEditor;
        PesoSpecifico: Serenity.DecimalEditor;
        Oneri: Serenity.DecimalEditor;
        NumeroMesiAttivita: Serenity.DecimalEditor;
        PrimaLavorazione: Serenity.BooleanEditor;
        QuantitaLavorazione: Serenity.DecimalEditor;
        TipoLavorazione1: Serenity.EnumEditor;
        TipoLavorazione2: Serenity.EnumEditor;
        TipoLavorazione3: Serenity.EnumEditor;
        TipoCommercializzazione1: Serenity.EnumEditor;
        Quantita1: Serenity.DecimalEditor;
        Prezzo1: Serenity.DecimalEditor;
        Um1: Serenity.StringEditor;
        TipoCommercializzazione2: Serenity.EnumEditor;
        Quantita2: Serenity.DecimalEditor;
        Prezzo2: Serenity.DecimalEditor;
        Um2: Serenity.StringEditor;
        TipoCommercializzazione3: Serenity.EnumEditor;
        Quantita3: Serenity.DecimalEditor;
        Prezzo3: Serenity.DecimalEditor;
        Um3: Serenity.StringEditor;
    }

    export class ProdottoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Prodotto';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProdottoForm.init)  {
                ProdottoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.EnumEditor;
                var w4 = s.StringEditor;

                Q.initFormType(ProdottoForm, [
                    'IdMateriale', w0,
                    'QuantitaEstratta', w1,
                    'Peso', w1,
                    'PesoSpecifico', w1,
                    'Oneri', w1,
                    'NumeroMesiAttivita', w1,
                    'PrimaLavorazione', w2,
                    'QuantitaLavorazione', w1,
                    'TipoLavorazione1', w3,
                    'TipoLavorazione2', w3,
                    'TipoLavorazione3', w3,
                    'TipoCommercializzazione1', w3,
                    'Quantita1', w1,
                    'Prezzo1', w1,
                    'Um1', w4,
                    'TipoCommercializzazione2', w3,
                    'Quantita2', w1,
                    'Prezzo2', w1,
                    'Um2', w4,
                    'TipoCommercializzazione3', w3,
                    'Quantita3', w1,
                    'Prezzo3', w1,
                    'Um3', w4
                ]);
            }
        }
    }
}

