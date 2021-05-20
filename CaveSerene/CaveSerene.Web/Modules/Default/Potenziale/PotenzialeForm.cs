
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;

    [FormScript("Default.Potenziale")]
    [InstanceName("Potenzialità")]
    [BasedOnRow(typeof(Entities.PotenzialeRow), CheckNames = true)]
    public class PotenzialeForm
    {
        [DisplayName("Materiale")]
        public Int32 IdMateriale { get; set; }
        public Int32 Potenziale { get; set; }
        public Int32 Residuo { get; set; }
    }
}