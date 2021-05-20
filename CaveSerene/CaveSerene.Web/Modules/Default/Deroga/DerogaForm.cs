
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Deroga")]
    [BasedOnRow(typeof(Entities.DerogaRow), CheckNames = true)]
    public class DerogaForm
    {
        public Decimal VolumeDeroga { get; set; }
        public String Protocollo { get; set; }
        public DateTime Data { get; set; }

        [TextAreaEditor(Rows = 3)]
        public String Note { get; set; }
    }
}