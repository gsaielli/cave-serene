
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;

    [FormScript("Default.Rendiconto3")]
    [BasedOnRow(typeof(Entities.Rendiconto3Row), CheckNames = true)]
    public class Rendiconto3Form
    {
        [Tab("Dati Generali")]
        public Int32 IdStruttura { get; set; }
        public Int32 Anno { get; set; }
        public Int32 NumOperai { get; set; }
        public Int32 NumAmministrativi { get; set; }
        public Int32 NumTecnici { get; set; }
        public Decimal LavoratoM3 { get; set; }
        public Decimal LavoratoQ { get; set; }
        public String MetodoLavorazione { get; set; }
        public Boolean MaterialeTradizionale { get; set; }
        public Boolean MaterialeRiciclato { get; set; }

        [Tab("Flussi")]
        [Category("Approvvigionamento")]
        [RendicontoApprovvigionamentoEditor]
        public List<Entities.RendicontoApprovvigionamentoRow> ApprovvigionamentoList { get; set; }

        [Category("Destinazione Territoriale")]
        [RendicontoDestinazioneTerritorialeEditor]
        public List<Entities.RendicontoDestinazioneTerritorialeRow> DestinazioneTerritorialeList { get; set; }

        [Tab("Utilizzi")]
        [Category("Destinazione Uso")]
        [RendicontoDestinazioneUsoEditor]
        public List<Entities.RendicontoDestinazioneUsoRow> DestinazioneUsoList { get; set; }
    }
}