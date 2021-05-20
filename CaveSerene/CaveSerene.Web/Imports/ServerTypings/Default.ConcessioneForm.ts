namespace CaveSerene.Default {
    export interface ConcessioneForm {
        IdStruttura: Serenity.LookupEditor;
        IdEsercente: Serenity.LookupEditor;
        NumeroAtto: Serenity.StringEditor;
        DataAutorizzazione: Serenity.DateEditor;
        DataSistemazione: Serenity.DateEditor;
        SuperficieAutorizzata: Serenity.DecimalEditor;
        SuperficieScavo: Serenity.DecimalEditor;
        ParereAgenzia: Serenity.TextAreaEditor;
        Via: Serenity.BooleanEditor;
        DenunciaEsercizioN: Serenity.StringEditor;
        DenunciaEsercizioData: Serenity.DateEditor;
        SospensioneN: Serenity.StringEditor;
        SospensioneData: Serenity.DateEditor;
        RevocaN: Serenity.StringEditor;
        RevocaData: Serenity.DateEditor;
        DecadenzaN: Serenity.StringEditor;
        DecadenzaData: Serenity.DateEditor;
        RinunciaN: Serenity.StringEditor;
        RinunciaData: Serenity.DateEditor;
        ConcessioneMaterialeList: AutorizzazioneMaterialeEditor;
        ProrogaList: ProrogaEditor;
        TipoRecuperoMorfologico: Serenity.EnumEditor;
        TipoRecuperoFinale: Serenity.EnumEditor;
        PendenzaScarpate: Serenity.StringEditor;
        QuotaPianoCampagna: Serenity.StringEditor;
    }

    export class ConcessioneForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Concessione';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ConcessioneForm.init)  {
                ConcessioneForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.BooleanEditor;
                var w6 = AutorizzazioneMaterialeEditor;
                var w7 = ProrogaEditor;
                var w8 = s.EnumEditor;

                Q.initFormType(ConcessioneForm, [
                    'IdStruttura', w0,
                    'IdEsercente', w0,
                    'NumeroAtto', w1,
                    'DataAutorizzazione', w2,
                    'DataSistemazione', w2,
                    'SuperficieAutorizzata', w3,
                    'SuperficieScavo', w3,
                    'ParereAgenzia', w4,
                    'Via', w5,
                    'DenunciaEsercizioN', w1,
                    'DenunciaEsercizioData', w2,
                    'SospensioneN', w1,
                    'SospensioneData', w2,
                    'RevocaN', w1,
                    'RevocaData', w2,
                    'DecadenzaN', w1,
                    'DecadenzaData', w2,
                    'RinunciaN', w1,
                    'RinunciaData', w2,
                    'ConcessioneMaterialeList', w6,
                    'ProrogaList', w7,
                    'TipoRecuperoMorfologico', w8,
                    'TipoRecuperoFinale', w8,
                    'PendenzaScarpate', w1,
                    'QuotaPianoCampagna', w1
                ]);
            }
        }
    }
}
