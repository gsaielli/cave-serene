namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Materiale")]
    [BasedOnRow(typeof(Entities.MaterialeRow), CheckNames = true)]
    public class MaterialeColumns
    {
        [EditLink, DisplayName("Nome")]
        public String Descrizione { get; set; }
        [Width(150)]
        public String IdTipoMaterialeDescrizione { get; set; }
        [Width(250)]
        public String NomeRisorsaMineraleIstat { get; set; }
        [Width(100), AlignRight]
        public Decimal TariffaRiferimento { get; set; }
        [DisplayName("P.Spec.Rif."), Width(100), AlignRight]
        public Decimal PesoSpecificoRiferimento { get; set; }
    }
}