
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Prodotto")]
    [BasedOnRow(typeof(Entities.ProdottoRow), CheckNames = true)]
    public class ProdottoColumns
    {
        [EditLink, DisplayName("Materiale")]
        public String IdMaterialeDescrizione { get; set; }
        public Decimal QuantitaEstratta { get; set; }
        public Decimal Oneri { get; set; }
        public Decimal Peso { get; set; }
        public Decimal PesoSpecifico { get; set; }
    }
}