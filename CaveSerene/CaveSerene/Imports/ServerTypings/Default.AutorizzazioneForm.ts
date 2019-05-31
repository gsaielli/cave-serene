namespace CaveSerene.Default {
    export interface AutorizzazioneForm {
        IdStruttura: Serenity.LookupEditor;
        IdEsercente: Serenity.LookupEditor;
        IdPiano: Serenity.LookupEditor;
        IdPianoArea: Serenity.LookupEditor;
        NumeroAtto: Serenity.StringEditor;
        DataAutorizzazione: Serenity.DateEditor;
        DataSistemazione: Serenity.DateEditor;
        DataScadenza: Serenity.DateEditor;
        NumeroAttoNotifica: Serenity.StringEditor;
        DataNotifica: Serenity.DateEditor;
        SuperficieAutorizzata: Serenity.DecimalEditor;
        SuperficieScavo: Serenity.DecimalEditor;
        ProfonditaScavo: Serenity.DecimalEditor;
        VolumeAutorizzato: Serenity.DecimalEditor;
        PesoAutorizzato: Serenity.DecimalEditor;
        TipoDisponibilita: Serenity.EnumEditor;
        ProprietaTerreni: Serenity.StringEditor;
        DenunciaEsercizioN: Serenity.StringEditor;
        DenunciaEsercizioData: Serenity.DateEditor;
        ConvenzioneN: Serenity.StringEditor;
        ConvenzioneData: Serenity.DateEditor;
        Autorizzazione104N: Serenity.StringEditor;
        Autorizzazione104Data: Serenity.DateEditor;
        Autorizzazione104Note: Serenity.TextAreaEditor;
        Volume104: Serenity.DecimalEditor;
        SvincoloFidejussioneN: Serenity.StringEditor;
        SvincoloFidejussioneData: Serenity.DateEditor;
        SvincoloFidejussioneNote: Serenity.TextAreaEditor;
        CollaudoN: Serenity.StringEditor;
        CollaudoData: Serenity.DateEditor;
        CollaudoNote: Serenity.TextAreaEditor;
        SospensioneN: Serenity.StringEditor;
        SospensioneData: Serenity.DateEditor;
        RevocaN: Serenity.StringEditor;
        RevocaData: Serenity.DateEditor;
        DecadenzaN: Serenity.StringEditor;
        DecadenzaData: Serenity.DateEditor;
        RinunciaN: Serenity.StringEditor;
        RinunciaData: Serenity.DateEditor;
        ParereAgenzia: Serenity.TextAreaEditor;
        Via: Serenity.BooleanEditor;
        Screening: Serenity.BooleanEditor;
        ParereMotivato: Serenity.TextAreaEditor;
        AutorizzazioneMaterialeList: AutorizzazioneMaterialeEditor;
        DerogaList: DerogaEditor;
        ProrogaList: ProrogaEditor;
        TipoRecuperoMorfologico: Serenity.EnumEditor;
        TipoRecuperoFinale: Serenity.EnumEditor;
        PendenzaScarpate: Serenity.StringEditor;
        QuotaPianoCampagna: Serenity.StringEditor;
        NoteSistemazione: Serenity.TextAreaEditor;
    }

    export class AutorizzazioneForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Autorizzazione';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AutorizzazioneForm.init)  {
                AutorizzazioneForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.EnumEditor;
                var w5 = s.TextAreaEditor;
                var w6 = s.BooleanEditor;
                var w7 = AutorizzazioneMaterialeEditor;
                var w8 = DerogaEditor;
                var w9 = ProrogaEditor;

                Q.initFormType(AutorizzazioneForm, [
                    'IdStruttura', w0,
                    'IdEsercente', w0,
                    'IdPiano', w0,
                    'IdPianoArea', w0,
                    'NumeroAtto', w1,
                    'DataAutorizzazione', w2,
                    'DataSistemazione', w2,
                    'DataScadenza', w2,
                    'NumeroAttoNotifica', w1,
                    'DataNotifica', w2,
                    'SuperficieAutorizzata', w3,
                    'SuperficieScavo', w3,
                    'ProfonditaScavo', w3,
                    'VolumeAutorizzato', w3,
                    'PesoAutorizzato', w3,
                    'TipoDisponibilita', w4,
                    'ProprietaTerreni', w1,
                    'DenunciaEsercizioN', w1,
                    'DenunciaEsercizioData', w2,
                    'ConvenzioneN', w1,
                    'ConvenzioneData', w2,
                    'Autorizzazione104N', w1,
                    'Autorizzazione104Data', w2,
                    'Autorizzazione104Note', w5,
                    'Volume104', w3,
                    'SvincoloFidejussioneN', w1,
                    'SvincoloFidejussioneData', w2,
                    'SvincoloFidejussioneNote', w5,
                    'CollaudoN', w1,
                    'CollaudoData', w2,
                    'CollaudoNote', w5,
                    'SospensioneN', w1,
                    'SospensioneData', w2,
                    'RevocaN', w1,
                    'RevocaData', w2,
                    'DecadenzaN', w1,
                    'DecadenzaData', w2,
                    'RinunciaN', w1,
                    'RinunciaData', w2,
                    'ParereAgenzia', w5,
                    'Via', w6,
                    'Screening', w6,
                    'ParereMotivato', w5,
                    'AutorizzazioneMaterialeList', w7,
                    'DerogaList', w8,
                    'ProrogaList', w9,
                    'TipoRecuperoMorfologico', w4,
                    'TipoRecuperoFinale', w4,
                    'PendenzaScarpate', w1,
                    'QuotaPianoCampagna', w1,
                    'NoteSistemazione', w5
                ]);
            }
        }
    }
}

