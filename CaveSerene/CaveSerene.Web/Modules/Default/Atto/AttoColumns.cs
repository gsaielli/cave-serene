using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Atto")]
    [BasedOnRow(typeof(Entities.AttoRow), CheckNames = true)]
    public class AttoColumns
    {
        [EditLink, DisplayName("Numero")]
        public Int32 NumAtto { get; set; }
        [DisplayName("Data")]
        public DateTime DataAtto { get; set; }
        [Width(200)]
        public TipoAtto TipoAtto { get; set; }
    }
}