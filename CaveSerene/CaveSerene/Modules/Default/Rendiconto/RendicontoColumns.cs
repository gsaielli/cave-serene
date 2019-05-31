
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Rendiconto")]
    [BasedOnRow(typeof(Entities.RendicontoRow), CheckNames = true)]
    public class RendicontoColumns
    {
        [EditLink, DisplayName("Autorizzazione")]
        public String Autorizzazione { get; set; }
        public String Comune { get; set; }
        [AlignRight]
        public Int32 Anno { get; set; }
    }
}