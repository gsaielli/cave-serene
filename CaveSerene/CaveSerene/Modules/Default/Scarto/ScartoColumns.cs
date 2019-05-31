
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Scarto")]
    [BasedOnRow(typeof(Entities.ScartoRow), CheckNames = true)]
    public class ScartoColumns
    {
        [EditLink, DisplayName("Tipo"), Width(200)]
        public String TipoScarto { get; set; }
        public Decimal Peso { get; set; }
        public Decimal Volume { get; set; }
    }
}