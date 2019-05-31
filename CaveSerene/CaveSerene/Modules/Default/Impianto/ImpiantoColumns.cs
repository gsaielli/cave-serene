
using CaveSerene.Default.Entities;

namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Impianto")]
    [BasedOnRow(typeof(Entities.ImpiantoRow), CheckNames = true)]
    public class ImpiantoColumns
    {
        [EditLink, DisplayName("Nome")]
        public String Nome { get; set; }
        [LookupEditor(typeof(ComuneRow))]
        public String IdComuneNome { get; set; }
        public String Frazione { get; set; }
        public String CatastoProvinciale { get; set; }
        public String TipoImpianto { get; set; }
        public DateTime DataInstallazioneImpianto { get; set; }
        public Int32 Progressivo { get; set; }
    }
}