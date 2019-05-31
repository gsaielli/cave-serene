using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.PianoArea")]
    [BasedOnRow(typeof(Entities.PianoAreaRow), CheckNames = true)]
    public class PianoAreaColumns
    {
        [EditLink, Width(150)]
        public String IdAreaNome { get; set; }
        [Width(150)]
        public TipoStato TipoStato { get; set; }
        public Decimal ProfMax { get; set; }
        public Int32 Sup { get; set; }
    }
}