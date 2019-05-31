
using System.ComponentModel;
using Serenity.Data.Mapping;

namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Cava")]
    [BasedOnRow(typeof(Entities.CavaRow), CheckNames = true)]
    public class CavaForm
    {
        [Tab("Dati Generali")]
        public String Nome { get; set; }
        public String IdComune { get; set; }
        public Int32 TipoPosizione { get; set; }
        public Int32 TipoDissesto { get; set; }
        public Int32 TipoColtivazione { get; set; }
        public Int32 Progressivo { get; set; }
        public String Frazione { get; set; }
        public String CatastoProvinciale { get; set; }
        public Int32 VincoloAmbientale { get; set; }
        public Boolean AreaProtetta { get; set; }
        public Decimal ProfonditaFalda { get; set; }
        [Tab("GIS")]
        [DisplayName("Mappa"), NotMapped]
        [StaticTextBlock(Text = "<div id='mapid'></div>", IsHtml = true)]
        public String GIS { get; set; }
        public Decimal CoordinataX { get; set; }
        public Decimal CoordinataY { get; set; }
    }
}