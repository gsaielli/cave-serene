
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Rendiconto3")]
    [BasedOnRow(typeof(Entities.Rendiconto3Row), CheckNames = true)]
    public class Rendiconto3Columns
    {
        [EditLink, DisplayName("Impianto")]
        public String IdStrutturaNome { get; set; }
        [EditLink, AlignRight]
        public Int32 Anno { get; set; }
    }
}