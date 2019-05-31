
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Regione")]
    [BasedOnRow(typeof(Entities.RegioneRow), CheckNames = true)]
    public class RegioneColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Id { get; set; }
        public String Nome { get; set; }
    }
}