
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.TipoMateriale")]
    [BasedOnRow(typeof(Entities.TipoMaterialeRow), CheckNames = true)]
    public class TipoMaterialeForm
    {
        public String Descrizione { get; set; }
    }
}