
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;

    [FormScript("Default.Piano"), DisplayName("PIAE")]
    [BasedOnRow(typeof(Entities.PianoRow), CheckNames = true)]
    public class PianoForm
    {
        [Tab("Dati Generali")]
        public Int32 IdEnte { get; set; }
        public Int32 Progressivo { get; set; }
        public Int32 Variante { get; set; }
        public String Descrizione { get; set; }
        public DateTime DataInizio { get; set; }
        public DateTime DataFine { get; set; }
        [TextAreaEditor(Rows = 8)]
        public String Note { get; set; }

        [Tab("Atti")]
        [AttoEditor]
        public List<Entities.AttoRow> AttoList { get; set; }

        [Tab("Fabbisogni")]
        [FabbisognoEditor]
        public List<Entities.FabbisognoRow> FabbisognoList { get; set; }

        [Tab("Aree")]
        [PianoAreaEditor]
        public List<Entities.PianoAreaRow> PianoAreaList { get; set; }

    }
}