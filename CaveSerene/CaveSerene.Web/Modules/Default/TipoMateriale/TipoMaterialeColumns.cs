
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.TipoMateriale")]
    [BasedOnRow(typeof(Entities.TipoMaterialeRow), CheckNames = true)]
    public class TipoMaterialeColumns
    {
        [EditLink, DisplayName("Nome")]
        public String Descrizione { get; set; }
    }
}