
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Impianto")]
    [BasedOnRow(typeof(Entities.ImpiantoRow), CheckNames = true)]
    public class ImpiantoForm
    {
        public String Nome { get; set; }
        public String IdComune { get; set; }
        public String TipoImpianto { get; set; }
        public Int32 Progressivo { get; set; }
        public String Frazione { get; set; }
        public String CatastoProvinciale { get; set; }
        public Decimal CoordinataX { get; set; }
        public Decimal CoordinataY { get; set; }
        public DateTime DataInstallazioneImpianto { get; set; }
    }
}