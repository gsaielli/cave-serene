
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.Concessione")]
    [BasedOnRow(typeof(Entities.ConcessioneRow), CheckNames = true)]
    public class ConcessioneColumns
    {
        [EditLink]
        public String Descrizione { get; set; }
        public String IdEsercenteRagSoc { get; set; }
        public String NumeroAtto { get; set; }
        public DateTime DataAutorizzazione { get; set; }
        public DateTime DataSistemazione { get; set; }
    }
}