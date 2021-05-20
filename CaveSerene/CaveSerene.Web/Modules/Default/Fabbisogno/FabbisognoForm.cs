
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Fabbisogno")]
    [BasedOnRow(typeof(Entities.FabbisognoRow), CheckNames = true)]
    public class FabbisognoForm
    {
        public Int32 IdMateriale { get; set; }
        public Int32 Fabbisogno { get; set; }
        public Int32 Potenziale { get; set; }
        public Int32 Residuo { get; set; }
    }
}