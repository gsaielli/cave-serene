namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Area")]
    [BasedOnRow(typeof(Entities.AreaRow), CheckNames = true)]
    public class AreaColumns
    {
        [EditLink, DisplayName("Nome"), Width(200)]
        public String Nome { get; set; }
        [Width(100)]
        public Int32 TipoArea { get; set; }
        [Width(100)]
        public Int32 TipoStoria { get; set; }
        [Width(100)]
        public Int32 TipoPosizione { get; set; }
        [Width(100)]
        public Int32 Progressivo { get; set; }
        [Width(100)]
        public String CodiceAreaProv { get; set; }
        public String Note { get; set; }
        public String Polygon { get; set; }
    }
}