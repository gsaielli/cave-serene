
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.RendicontoApprovvigionamento")]
    [BasedOnRow(typeof(Entities.RendicontoApprovvigionamentoRow), CheckNames = true)]
    public class RendicontoApprovvigionamentoForm
    {
        public Int32 TipoApprovvigionamento { get; set; }
        public Int32 IdStrutturaCava { get; set; }
        public Decimal QtaApprov { get; set; }
        public String Note { get; set; }
    }
}