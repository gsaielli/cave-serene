
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Potenziale")]
    [BasedOnRow(typeof(Entities.PotenzialeRow), CheckNames = true)]
    public class PotenzialeColumns
    {
        [EditLink, DisplayName("Materiale")]
        public String IdMaterialeDescrizione { get; set; }
        public Int32 Potenziale { get; set; }
        public Int32 Residuo { get; set; }
    }
}