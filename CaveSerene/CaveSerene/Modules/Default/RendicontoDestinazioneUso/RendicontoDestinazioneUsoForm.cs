
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.RendicontoDestinazioneUso")]
    [BasedOnRow(typeof(Entities.RendicontoDestinazioneUsoRow), CheckNames = true)]
    public class RendicontoDestinazioneUsoForm
    {
        public Int32 TipoDestinazioneUso { get; set; }
        public Int32 Percentuale { get; set; }
    }
}