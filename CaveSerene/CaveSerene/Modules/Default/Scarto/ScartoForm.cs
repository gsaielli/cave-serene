
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Scarto")]
    [BasedOnRow(typeof(Entities.ScartoRow), CheckNames = true)]
    public class ScartoForm
    {
        public String TipoScarto { get; set; }
        public Decimal Peso { get; set; }
        public Decimal Volume { get; set; }
        public String DescrizioneAltro { get; set; }
    }
}