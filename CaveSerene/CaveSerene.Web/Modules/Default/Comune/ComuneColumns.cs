
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Comune")]
    [BasedOnRow(typeof(Entities.ComuneRow), CheckNames = true)]
    public class ComuneColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Id { get; set; }
        public String CodiceRegione { get; set; }
        public String SiglaProvincia { get; set; }
        public String Nome { get; set; }
        public String Cap { get; set; }
        public String ZonaAlt { get; set; }
        public String EntCod { get; set; }
        public String CodCatastale { get; set; }
    }
}