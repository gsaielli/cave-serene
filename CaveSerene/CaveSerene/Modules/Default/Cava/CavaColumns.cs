
using CaveSerene.Default.Entities;

namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Cava")]
    [BasedOnRow(typeof(Entities.CavaRow), CheckNames = true)]
    public class CavaColumns
    {
        [EditLink, DisplayName("Nome")]
        public String Nome { get; set; }
        [LookupEditor(typeof(ComuneRow))]
        public String IdComuneNome { get; set; }
        public String Frazione { get; set; }
        public String CatastoProvinciale { get; set; }
        public Int32 Progressivo { get; set; }
    }
}