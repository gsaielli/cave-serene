
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.RendicontoDestinazioneTerritoriale")]
    [BasedOnRow(typeof(Entities.RendicontoDestinazioneTerritorialeRow), CheckNames = true)]
    public class RendicontoDestinazioneTerritorialeColumns
    {
        [EditLink, Width(200)]
        public Int32 TipoDestinazioneTerritoriale { get; set; }
        [Width(200)]
        public Int32 Percentuale { get; set; }
    }
}