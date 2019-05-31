
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Proroga")]
    [BasedOnRow(typeof(Entities.ProrogaRow), CheckNames = true)]
    public class ProrogaForm
    {
        public DateTime NuovaDataSistemazione { get; set; }
        public String Protocollo { get; set; }
        public DateTime Data { get; set; }

        [TextAreaEditor(Rows = 3)]
        public String Note { get; set; }
    }
}