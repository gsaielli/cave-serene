
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.RendicontoDestinazioneUso")]
    [BasedOnRow(typeof(Entities.RendicontoDestinazioneUsoRow), CheckNames = true)]
    public class RendicontoDestinazioneUsoColumns
    {
        [EditLink, Width(200)]
        public Int32 TipoDestinazioneUso { get; set; }
        [Width(200)]
        public Int32 Percentuale { get; set; }
    }
}