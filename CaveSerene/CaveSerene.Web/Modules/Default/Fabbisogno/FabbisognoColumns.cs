
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Fabbisogno")]
    [BasedOnRow(typeof(Entities.FabbisognoRow), CheckNames = true)]
    public class FabbisognoColumns
    {
        [EditLink, DisplayName("Materiale")]
        public String IdMaterialeDescrizione { get; set; }
        public Int32 Fabbisogno { get; set; }
        public Int32 Potenziale { get; set; }
        public Int32 Residuo { get; set; }
    }
}