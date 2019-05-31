
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.AutorizzazioneMateriale")]
    [BasedOnRow(typeof(Entities.AutorizzazioneMaterialeRow), CheckNames = true)]
    public class AutorizzazioneMaterialeForm
    {
        public Int32 IdMateriale { get; set; }
        public Decimal QuantitaAutorizzata { get; set; }
        public Decimal PesoAutorizzato { get; set; }
    }
}