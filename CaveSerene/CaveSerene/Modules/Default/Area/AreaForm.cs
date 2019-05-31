
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Default.Area")]
    [BasedOnRow(typeof(Entities.AreaRow), CheckNames = true)]
    public class AreaForm
    {
        public String Nome { get; set; }
        public Int32 TipoArea { get; set; }
        public Int32 TipoStoria { get; set; }
        public Int32 TipoPosizione { get; set; }
        [DisplayName("Progressivo"), Width(50), AlignRight]
        public Int32 Progressivo { get; set; }
        public String CodiceAreaProv { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Note { get; set; }
    }
}