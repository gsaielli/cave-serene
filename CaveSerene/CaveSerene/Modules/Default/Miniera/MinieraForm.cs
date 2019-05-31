
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Miniera")]
    [BasedOnRow(typeof(Entities.MinieraRow), CheckNames = true)]
    public class MinieraForm
    {
        public String Nome { get; set; }
        public String IdComune { get; set; }
        public Int32 TipoPosizione { get; set; }
        public Int32 TipoDissesto { get; set; }
        public Int32 TipoColtivazione { get; set; }
        public Int32 Progressivo { get; set; }
        public String Frazione { get; set; }
        public String CatastoProvinciale { get; set; }
        public Decimal CoordinataX { get; set; }
        public Decimal CoordinataY { get; set; }
        public Int32 VincoloAmbientale { get; set; }
        public Boolean AreaProtetta { get; set; }
        public Decimal ProfonditaFalda { get; set; }
    }
}