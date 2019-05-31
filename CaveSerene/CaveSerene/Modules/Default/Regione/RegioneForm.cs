
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Regione")]
    [BasedOnRow(typeof(Entities.RegioneRow), CheckNames = true)]
    public class RegioneForm
    {
        public String Nome { get; set; }
    }
}