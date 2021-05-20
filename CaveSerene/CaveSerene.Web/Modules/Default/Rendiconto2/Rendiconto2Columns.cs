
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Rendiconto2")]
    [BasedOnRow(typeof(Entities.Rendiconto2Row), CheckNames = true)]
    public class Rendiconto2Columns
    {
        [EditLink, DisplayName("Autorizzazione")]
        public String Autorizzazione { get; set; }
        public String Comune { get; set; }
        [AlignRight]
        public Int32 Anno { get; set; }
    }
}