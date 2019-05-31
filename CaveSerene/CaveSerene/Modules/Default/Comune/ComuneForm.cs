
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Comune")]
    [BasedOnRow(typeof(Entities.ComuneRow), CheckNames = true)]
    public class ComuneForm
    {
        public String CodiceRegione { get; set; }
        public String SiglaProvincia { get; set; }
        public String Nome { get; set; }
        public String Cap { get; set; }
        public String ZonaAlt { get; set; }
        public String EntCod { get; set; }
        public String CodCatastale { get; set; }
    }
}