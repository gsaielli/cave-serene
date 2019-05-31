
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.Deroga")]
    [BasedOnRow(typeof(Entities.DerogaRow), CheckNames = true)]
    public class DerogaColumns
    {
        [EditLink]
        public String Protocollo { get; set; }
        [EditLink]
        public DateTime Data { get; set; }
        [EditLink]
        public Decimal VolumeDeroga { get; set; }
        public String Note { get; set; }
    }
}