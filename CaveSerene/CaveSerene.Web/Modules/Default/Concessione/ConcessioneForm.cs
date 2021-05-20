
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;

    [FormScript("Default.Concessione")]
    [BasedOnRow(typeof(Entities.ConcessioneRow), CheckNames = true)]
    public class ConcessioneForm
    {
        [Tab("Dati Generali")]
        [Category("Atto Concessione")]
        public Int32 IdStruttura { get; set; }
        public Int32 IdEsercente { get; set; }
        public String NumeroAtto { get; set; }
        public DateTime DataAutorizzazione { get; set; }
        public DateTime DataSistemazione { get; set; }
        [Category("Superfici autorizzate")]
        public Decimal SuperficieAutorizzata { get; set; }
        public Decimal SuperficieScavo { get; set; }
        [Category("VIA")]
        [TextAreaEditor(Rows = 3)]
        public String ParereAgenzia { get; set; }
        public Boolean Via { get; set; }

        [Tab("Iter")]
        [Category("Denuncia Esercizio")]
        public String DenunciaEsercizioN { get; set; }
        public DateTime DenunciaEsercizioData { get; set; }
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

        [Tab("Materiali")]
        [Category("Materiali Autorizzati")]
        [AutorizzazioneMaterialeEditor]
        public List<Entities.AutorizzazioneMaterialeRow> ConcessioneMaterialeList { get; set; }

        [Tab("Proroghe")]
        [Category("Proroghe")]
        [ProrogaEditor]
        public List<Entities.ProrogaRow> ProrogaList { get; set; }

        [Tab("Sistemazione")]
        [Category]
        public Int32 TipoRecuperoMorfologico { get; set; }
        public Int32 TipoRecuperoFinale { get; set; }
        public String PendenzaScarpate { get; set; }
        public String QuotaPianoCampagna { get; set; }
        //[Tab("Rendiconti")]
    }
}