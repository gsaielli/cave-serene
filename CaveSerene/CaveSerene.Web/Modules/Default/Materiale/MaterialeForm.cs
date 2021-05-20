
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Materiale")]
    [BasedOnRow(typeof(Entities.MaterialeRow), CheckNames = true)]
    public class MaterialeForm
    {
        public String Descrizione { get; set; }
        public Int32 IdTipoMateriale { get; set; }
        public Decimal TariffaRiferimento { get; set; }
        public Decimal PesoSpecificoRiferimento { get; set; }
        public String NomeRisorsaMineraleIstat { get; set; }
    }
}