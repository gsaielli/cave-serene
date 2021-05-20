
using CaveSerene.Default.Entities;
using Serenity.Data.Mapping;

namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;

    [FormScript("Default.Autorizzazione")]
    [BasedOnRow(typeof(Entities.AutorizzazioneRow), CheckNames = true)]
    public class AutorizzazioneForm
    {
        [Tab("Dati Generali")]
        [Category("Atto Autorizzazione")]
        public Int32 IdStruttura { get; set; }
        public Int32 IdEsercente { get; set; }
        [LookupEditor(typeof(PianoRow))]
        public Int32 IdPiano { get; set; }
        [LookupEditor(typeof(PianoAreaRow), CascadeFrom = "IdPiano", CascadeField = "IdPiano"), LookupInclude]
        public Int32 IdPianoArea { get; set; }
        public String NumeroAtto { get; set; }
        public DateTime DataAutorizzazione { get; set; }
        public DateTime DataSistemazione { get; set; }
        public DateTime DataScadenza { get; set; }
        public String NumeroAttoNotifica { get; set; }
        public DateTime DataNotifica { get; set; }
        [Category("Quantità autorizzate")]
        public Decimal SuperficieAutorizzata { get; set; }
        public Decimal SuperficieScavo { get; set; }
        public Decimal ProfonditaScavo { get; set; }
        public Decimal VolumeAutorizzato { get; set; }
        public Decimal PesoAutorizzato { get; set; }
        [Category("Terreno")]
        public Int32 TipoDisponibilita { get; set; }
        public String ProprietaTerreni { get; set; }
        [Tab("Iter")]
        [Category("Denuncia Esercizio")]
        public String DenunciaEsercizioN { get; set; }
        public DateTime DenunciaEsercizioData { get; set; }
        [Category("Convenzione")]
        public String ConvenzioneN { get; set; }
        public DateTime ConvenzioneData { get; set; }
        [Category("Autorizzazione 104")]
        public String Autorizzazione104N { get; set; }
        public DateTime Autorizzazione104Data { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Autorizzazione104Note { get; set; }
        public Decimal Volume104 { get; set; }
        [Category("Svincolo Fidejussione")]
        public String SvincoloFidejussioneN { get; set; }
        public DateTime SvincoloFidejussioneData { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String SvincoloFidejussioneNote { get; set; }
        [Category("Collaudo")]
        public String CollaudoN { get; set; }
        public DateTime CollaudoData { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String CollaudoNote { get; set; }
        [Tab("Sospensioni")]
        [Category("Sospensione")]
        public String SospensioneN { get; set; }
        public DateTime SospensioneData { get; set; }
        [Category("Revoca")]
        public String RevocaN { get; set; }
        public DateTime RevocaData { get; set; }
        [Category("Decadenza")]
        public String DecadenzaN { get; set; }
        public DateTime DecadenzaData { get; set; }
        [Category("Rinuncia")]
        public String RinunciaN { get; set; }
        public DateTime RinunciaData { get; set; }
        [Tab("VIA")]
        [Category("VIA")]
        [TextAreaEditor(Rows = 3)]
        public String ParereAgenzia { get; set; }
        public Boolean Via { get; set; }
        public Boolean Screening { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String ParereMotivato { get; set; }

        [Tab("Materiali")]
        [Category("Materiali Autorizzati")]
        [AutorizzazioneMaterialeEditor]
        public List<Entities.AutorizzazioneMaterialeRow> AutorizzazioneMaterialeList { get; set; }

        [Tab("Deroghe/Proroghe")]
        [Category("Deroghe")]
        [DerogaEditor]
        public List<Entities.DerogaRow> DerogaList { get; set; }
        [Category("Proroghe")]
        [ProrogaEditor]
        public List<Entities.ProrogaRow> ProrogaList { get; set; }

        [Tab("Sistemazione")]
        [Category]
        public Int32 TipoRecuperoMorfologico { get; set; }
        public Int32 TipoRecuperoFinale { get; set; }
        public String PendenzaScarpate { get; set; }
        public String QuotaPianoCampagna { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String NoteSistemazione { get; set; }
        //[Tab("Rendiconti")]
    }
}