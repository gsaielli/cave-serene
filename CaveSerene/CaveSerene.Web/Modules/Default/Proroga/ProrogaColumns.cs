
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.Proroga")]
    [BasedOnRow(typeof(Entities.ProrogaRow), CheckNames = true)]
    public class ProrogaColumns
    {
        [EditLink]
        public DateTime NuovaDataSistemazione { get; set; }
        [EditLink]
        public String Protocollo { get; set; }
        [EditLink]
        public DateTime Data { get; set; }
        public String Note { get; set; }
    }
}