
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.RendicontoDestinazioneTerritoriale")]
    [BasedOnRow(typeof(Entities.RendicontoDestinazioneTerritorialeRow), CheckNames = true)]
    public class RendicontoDestinazioneTerritorialeForm
    {
        public Int32 TipoDestinazioneTerritoriale { get; set; }
        public Int32 Percentuale { get; set; }
    }
}