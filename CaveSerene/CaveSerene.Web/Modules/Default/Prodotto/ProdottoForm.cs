
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Default.Prodotto")]
    [BasedOnRow(typeof(Entities.ProdottoRow), CheckNames = true)]
    public class ProdottoForm
    {
        [Tab("Dati Generali")]
        [Category("Dati Generali")]
        public Int32 IdMateriale { get; set; }
        public Decimal QuantitaEstratta { get; set; }
        public Decimal Peso { get; set; }
        public Decimal PesoSpecifico { get; set; }
        public Decimal Oneri { get; set; }
        public Decimal NumeroMesiAttivita { get; set; }


        [Tab("Lavorazione")]
        [Category("Lavorazione")]
        public Boolean PrimaLavorazione { get; set; }
        public Decimal QuantitaLavorazione { get; set; }
        public String TipoLavorazione1 { get; set; }
        public String TipoLavorazione2 { get; set; }
        public String TipoLavorazione3 { get; set; }

        [Tab("Vendita")]
        [Category("Commercializzazione 1")]
        public String TipoCommercializzazione1 { get; set; }
        public Decimal Quantita1 { get; set; }
        public Decimal Prezzo1 { get; set; }
        public String Um1 { get; set; }
        [Category("Commercializzazione 2")]
        public String TipoCommercializzazione2 { get; set; }
        public Decimal Quantita2 { get; set; }
        public Decimal Prezzo2 { get; set; }
        public String Um2 { get; set; }
        [Category("Commercializzazione 3")]
        public String TipoCommercializzazione3 { get; set; }
        public Decimal Quantita3 { get; set; }
        public Decimal Prezzo3 { get; set; }
        public String Um3 { get; set; }
    }
}