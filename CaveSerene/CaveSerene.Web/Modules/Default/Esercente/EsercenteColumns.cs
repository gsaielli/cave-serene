
using CaveSerene.Default.Entities;

namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.Esercente")]
    [BasedOnRow(typeof(Entities.EsercenteRow), CheckNames = true)]
    public class EsercenteColumns
    {
        [EditLink]
        public String RagSoc { get; set; }
        [LookupEditor(typeof(ComuneRow))]
        public String IdComuneNome { get; set; }
        public String Indirizzo { get; set; }
        public String Frazione { get; set; }
        public String CodiceFiscale { get; set; }
        public String PartitaIva { get; set; }
        public String CodiceFiscaleCompilatore { get; set; }
        public String EMail { get; set; }
    }
}