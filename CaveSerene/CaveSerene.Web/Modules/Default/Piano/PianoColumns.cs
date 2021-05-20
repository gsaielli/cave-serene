
using CaveSerene.Default.Entities;

namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Piano")]
    [BasedOnRow(typeof(Entities.PianoRow), CheckNames = true)]
    public class PianoColumns
    {
        [EditLink]
        public String Descrizione { get; set; }
        [DisplayName("Ente Emissione"), LookupEditor(typeof(EnteRow))]
        public String IdEnteNome { get; set; }
        [DisplayName("Progr.")]
        public Int32 Progressivo { get; set; }
        [DisplayName("Var.")]
        public Int32 Variante { get; set; }
        [DisplayName("Inzio"), Width(100)]
        public DateTime DataInizio { get; set; }
        [DisplayName("Fine"), Width(100)]
        public DateTime DataFine { get; set; }
        public String Note { get; set; }
    }
}