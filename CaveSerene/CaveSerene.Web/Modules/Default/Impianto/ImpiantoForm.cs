
using System.ComponentModel;
using Serenity.Data.Mapping;

namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Impianto")]
    [BasedOnRow(typeof(Entities.ImpiantoRow), CheckNames = true)]
    public class ImpiantoForm
    {
        [Tab("Dati Generali")]
        public String Nome { get; set; }
        public String IdComune { get; set; }
        public String TipoImpianto { get; set; }
        public Int32 Progressivo { get; set; }
        public String Frazione { get; set; }
        public String CatastoProvinciale { get; set; }
        public DateTime DataInstallazioneImpianto { get; set; }
        [Tab("GIS")]
        public Decimal CoordinataX { get; set; }
        public Decimal CoordinataY { get; set; }
        [DisplayName("Mappa"), NotMapped]
        [StaticTextBlock(Text = "<div id='mapid'></div>", IsHtml = true)]
        public String GIS { get; set; }
    }
}