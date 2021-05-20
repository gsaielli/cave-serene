
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.RendicontoApprovvigionamento")]
    [BasedOnRow(typeof(Entities.RendicontoApprovvigionamentoRow), CheckNames = true)]
    public class RendicontoApprovvigionamentoColumns
    {
        [EditLink, Width(200)]
        public Int32 TipoApprovvigionamento { get; set; }
        [Width(200)]
        public Decimal QtaApprov { get; set; }
        [Width(200)]
        public String Note { get; set; }
    }
}