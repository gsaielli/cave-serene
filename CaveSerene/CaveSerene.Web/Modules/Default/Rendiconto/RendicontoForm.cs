﻿
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;

    [FormScript("Default.Rendiconto")]
    [BasedOnRow(typeof(Entities.RendicontoRow), CheckNames = true)]
    public class RendicontoForm
    {
        [Tab("Dati Generali")]
        public Int32 IdAutorizzazione { get; set; }
        public Int32 Anno { get; set; }
        public Int32 NumOperai { get; set; }
        public Int32 NumAmministrativi { get; set; }
        public Int32 NumTecnici { get; set; }
        public Int32 NumAddetti { get; set; }
        public Decimal OreLavorate { get; set; }
        public Decimal NumeroMesiAttivita { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String DirettoreResponsabile { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Sorvegliante { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String ResponsabileSicurezza { get; set; }


        [Tab("Materiali Estratti")]
        [ProdottoEditor]
        public List<Entities.ProdottoRow> ProdottoList { get; set; }

        [Tab("Materiali Inutilizzati")]
        public Boolean StruttDepMatInut { get; set; }
        [ScartoEditor]
        public List<Entities.ScartoRow> ScartoList { get; set; }

        [Tab("Mezzi Produttivi")]
        [Category("Acqua")]
        public Decimal VolAcquaEstrazione { get; set; }
        public Decimal VolAcquaLavorazioni { get; set; }
        [Category("Mezzi di Abbattimento")]
        public Decimal Esplosivo { get; set; }
        public Int32 Detonatori { get; set; }
        public Decimal FiloElicoidale { get; set; }
        public Decimal MezzoMeccanico { get; set; }
        public Decimal MicceLentaCombustione { get; set; }

        [Tab("Energia")]
        [Category("Fonti di Energia")]
        public Decimal QuantitaKw { get; set; }
        public Decimal ImportoKw { get; set; }
        public Decimal QuantitaGasolio { get; set; }
        public Decimal ImportoGasolio { get; set; }
        public Decimal QuantitaBenzina { get; set; }
        public Decimal ImportoBenzina { get; set; }
        public String DescrizioneAltreFontiEnergia { get; set; }
        public String UnitaMisuraAltreFontiEnergia { get; set; }
        public Decimal QuantitaAltreFontiEnergia { get; set; }
        public Decimal ImportoAltreFontiEnergia { get; set; }
    }
}