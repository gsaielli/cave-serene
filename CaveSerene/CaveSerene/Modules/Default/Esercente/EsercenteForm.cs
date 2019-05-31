namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Esercente")]
    [BasedOnRow(typeof(Entities.EsercenteRow), CheckNames = true)]
    public class EsercenteForm
    {
        [Tab("Dati Generali")]
        public String RagSoc { get; set; }
        public String CodCcia { get; set; }
        public String Indirizzo { get; set; }
        public Int32 Cap { get; set; }
        public String Frazione { get; set; }
        public String IdComune { get; set; }
        public String CodiceFiscale { get; set; }
        public String PartitaIva { get; set; }
        public String CodiceFiscaleCompilatore { get; set; }
        public String Telefono { get; set; }
        public String EMail { get; set; }
        public String LegaleRappresentante { get; set; }
        [TextAreaEditor(Rows = 8), Tab("Dati Fallimento")]
        public String DatiFallimento { get; set; }
    }
}