
using System.ComponentModel;
using Serenity.Data.Mapping;

namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Default.Area")]
    [BasedOnRow(typeof(Entities.AreaRow), CheckNames = true)]
    public class AreaForm
    {
        [Tab("Dati Generali")]
        public String Nome { get; set; }
        public Int32 TipoArea { get; set; }
        public Int32 TipoStoria { get; set; }
        public Int32 TipoPosizione { get; set; }
        [DisplayName("Progressivo"), Width(50), AlignRight]
        public Int32 Progressivo { get; set; }
        public String CodiceAreaProv { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Note { get; set; }
        [Tab("GIS")]
        public Decimal CoordinataX { get; set; }
        public Decimal CoordinataY { get; set; }
        [DisplayName("Mappa"), NotMapped]
        [StaticTextBlock(Text = "<div id='mapid'></div>", IsHtml = true)]
        public String GIS { get; set; }
    }
}