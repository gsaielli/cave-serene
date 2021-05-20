
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;

    [FormScript("Default.PianoArea"), DisplayName("Potenziale dell'Area")]
    [BasedOnRow(typeof(Entities.PianoAreaRow), CheckNames = true)]
    public class PianoAreaForm
    {
        public Int32 IdArea { get; set; }
        public Int32 TipoStato { get; set; }
        public Decimal ProfMax { get; set; }
        public Int32 Sup { get; set; }

        [PotenzialeEditor]
        public List<Entities.PotenzialeRow> PotenzialeList { get; set; }

    }
}