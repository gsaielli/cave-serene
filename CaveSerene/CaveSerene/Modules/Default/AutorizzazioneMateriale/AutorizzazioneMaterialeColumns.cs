
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.AutorizzazioneMateriale")]
    [BasedOnRow(typeof(Entities.AutorizzazioneMaterialeRow), CheckNames = true)]
    public class AutorizzazioneMaterialeColumns
    {
        [EditLink, DisplayName("Materiale")]
        public String IdMaterialeDescrizione { get; set; }
        public Decimal QuantitaAutorizzata { get; set; }
        public Decimal PesoAutorizzato { get; set; }
    }
}