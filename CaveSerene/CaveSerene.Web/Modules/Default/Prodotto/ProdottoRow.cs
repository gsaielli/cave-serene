
using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Prodotto")]
    [DisplayName("Prodotto"), InstanceName("Prodotto")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProdottoRow : Row<ProdottoRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Rendiconto"), Column("IDRendiconto"), NotNull, ForeignKey("Rendiconto", "ID"), LeftJoin("jIdRendiconto")]
        public Int32? IdRendiconto
        {
            get { return Fields.IdRendiconto[this]; }
            set { Fields.IdRendiconto[this] = value; }
        }

        [DisplayName("Materiale"), Column("IDMateriale"), NotNull, ForeignKey("Materiale", "ID"), LeftJoin("jIdMateriale"), TextualField("IdMaterialeDescrizione")]
        [LookupEditor(typeof(MaterialeRow))]
        public Int32? IdMateriale
        {
            get { return Fields.IdMateriale[this]; }
            set { Fields.IdMateriale[this] = value; }
        }

        [DisplayName("MC Estratti"), Size(10), Scale(1)]
        public Decimal? QuantitaEstratta
        {
            get { return Fields.QuantitaEstratta[this]; }
            set { Fields.QuantitaEstratta[this] = value; }
        }

        [DisplayName("N.Mesi Attivita"), Size(9), Scale(2)]
        public Decimal? NumeroMesiAttivita
        {
            get { return Fields.NumeroMesiAttivita[this]; }
            set { Fields.NumeroMesiAttivita[this] = value; }
        }

        [DisplayName("Prima lav."), Size(3), QuickSearch]
        public TipoLavorazione? TipoLavorazione1
        {
            get { return (TipoLavorazione?)Fields.TipoLavorazione1[this]; }
            set { Fields.TipoLavorazione1[this] = (int)value; }
        }

        [DisplayName("Seconda lav."), Size(3)]
        public TipoLavorazione? TipoLavorazione2
        {
            get { return (TipoLavorazione?)Fields.TipoLavorazione2[this]; }
            set { Fields.TipoLavorazione2[this] = (int)value; }
        }

        [DisplayName("Terza lav."), Size(3)]
        public TipoLavorazione? TipoLavorazione3
        {
            get { return (TipoLavorazione?)Fields.TipoLavorazione3[this]; }
            set { Fields.TipoLavorazione3[this] = (int)value; }
        }


        [DisplayName("Oneri"), Size(11), Scale(2)]
        public Decimal? Oneri
        {
            get { return Fields.Oneri[this]; }
            set { Fields.Oneri[this] = value; }
        }

        [DisplayName("T Estratte"), Size(9), Scale(2)]
        public Decimal? Peso
        {
            get { return Fields.Peso[this]; }
            set { Fields.Peso[this] = value; }
        }

        [DisplayName("Peso Specifico"), Size(9), Scale(2)]
        public Decimal? PesoSpecifico
        {
            get { return Fields.PesoSpecifico[this]; }
            set { Fields.PesoSpecifico[this] = value; }
        }

        [DisplayName("Prima Lav.in Sito")]
        public Boolean? PrimaLavorazione
        {
            get { return Fields.PrimaLavorazione[this]; }
            set { Fields.PrimaLavorazione[this] = value; }
        }

        [DisplayName("Quantita"), Size(9), Scale(2)]
        public Decimal? QuantitaLavorazione
        {
            get { return Fields.QuantitaLavorazione[this]; }
            set { Fields.QuantitaLavorazione[this] = value; }
        }

        [DisplayName("Tipo"), Size(3)]
        public TipoCommercializzazione? TipoCommercializzazione1
        {
            get { return (TipoCommercializzazione?)Fields.TipoCommercializzazione1[this]; }
            set { Fields.TipoCommercializzazione1[this] = (int)value; }
        }

        [DisplayName("Quantita"), Size(9), Scale(2)]
        public Decimal? Quantita1
        {
            get { return Fields.Quantita1[this]; }
            set { Fields.Quantita1[this] = value; }
        }

        [DisplayName("Prezzo"), Size(11), Scale(2)]
        public Decimal? Prezzo1
        {
            get { return Fields.Prezzo1[this]; }
            set { Fields.Prezzo1[this] = value; }
        }

        [DisplayName("UM"), Column("UM1"), Size(10)]
        public String Um1
        {
            get { return Fields.Um1[this]; }
            set { Fields.Um1[this] = value; }
        }

        [DisplayName("Tipo"), Size(3)]
        public TipoCommercializzazione? TipoCommercializzazione2
        {
            get { return (TipoCommercializzazione?)Fields.TipoCommercializzazione2[this]; }
            set { Fields.TipoCommercializzazione2[this] = (int)value; }
        }

        [DisplayName("Quantita"), Size(9), Scale(2)]
        public Decimal? Quantita2
        {
            get { return Fields.Quantita2[this]; }
            set { Fields.Quantita2[this] = value; }
        }

        [DisplayName("Prezzo"), Size(11), Scale(2)]
        public Decimal? Prezzo2
        {
            get { return Fields.Prezzo2[this]; }
            set { Fields.Prezzo2[this] = value; }
        }

        [DisplayName("UM"), Column("UM2"), Size(10)]
        public String Um2
        {
            get { return Fields.Um2[this]; }
            set { Fields.Um2[this] = value; }
        }

        [DisplayName("Tipo"), Size(3)]
        public TipoCommercializzazione? TipoCommercializzazione3
        {
            get { return (TipoCommercializzazione?)Fields.TipoCommercializzazione3[this]; }
            set { Fields.TipoCommercializzazione3[this] = (int)value; }
        }

        [DisplayName("Quantita"), Size(9), Scale(2)]
        public Decimal? Quantita3
        {
            get { return Fields.Quantita3[this]; }
            set { Fields.Quantita3[this] = value; }
        }

        [DisplayName("Prezzo"), Size(11), Scale(2)]
        public Decimal? Prezzo3
        {
            get { return Fields.Prezzo3[this]; }
            set { Fields.Prezzo3[this] = value; }
        }

        [DisplayName("UM"), Column("UM3"), Size(10)]
        public String Um3
        {
            get { return Fields.Um3[this]; }
            set { Fields.Um3[this] = value; }
        }

        [DisplayName("Id Rendiconto Id Autorizzazione"), Expression("jIdRendiconto.[IDAutorizzazione]")]
        public Int32? IdRendicontoIdAutorizzazione
        {
            get { return Fields.IdRendicontoIdAutorizzazione[this]; }
            set { Fields.IdRendicontoIdAutorizzazione[this] = value; }
        }

        [DisplayName("Descrizione"), Expression("jIdMateriale.[Descrizione]"), MinSelectLevel(SelectLevel.List), NameProperty]
        public String IdMaterialeDescrizione
        {
            get { return Fields.IdMaterialeDescrizione[this]; }
            set { Fields.IdMaterialeDescrizione[this] = value; }
        }

        [DisplayName("Id Materiale Id Tipo Materiale"), Expression("jIdMateriale.[IDTipoMateriale]")]
        public Int32? IdMaterialeIdTipoMateriale
        {
            get { return Fields.IdMaterialeIdTipoMateriale[this]; }
            set { Fields.IdMaterialeIdTipoMateriale[this] = value; }
        }

        [DisplayName("Id Materiale Tariffa Riferimento"), Expression("jIdMateriale.[TariffaRiferimento]")]
        public Decimal? IdMaterialeTariffaRiferimento
        {
            get { return Fields.IdMaterialeTariffaRiferimento[this]; }
            set { Fields.IdMaterialeTariffaRiferimento[this] = value; }
        }

        [DisplayName("Id Materiale Peso Specifico Riferimento"), Expression("jIdMateriale.[PesoSpecificoRiferimento]")]
        public Decimal? IdMaterialePesoSpecificoRiferimento
        {
            get { return Fields.IdMaterialePesoSpecificoRiferimento[this]; }
            set { Fields.IdMaterialePesoSpecificoRiferimento[this] = value; }
        }

        [DisplayName("Id Materiale Nome Risorsa Minerale Istat"), Expression("jIdMateriale.[NomeRisorsaMineraleISTAT]")]
        public Int32? IdMaterialeNomeRisorsaMineraleIstat
        {
            get { return Fields.IdMaterialeNomeRisorsaMineraleIstat[this]; }
            set { Fields.IdMaterialeNomeRisorsaMineraleIstat[this] = value; }
        }

        public ProdottoRow()
            : base(Fields)
        {
        }

        public ProdottoRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdRendiconto;
            public Int32Field IdMateriale;
            public DecimalField NumeroMesiAttivita;
            public Int32Field TipoLavorazione1;
            public Int32Field TipoLavorazione2;
            public Int32Field TipoLavorazione3;
            public DecimalField QuantitaEstratta;
            public DecimalField Oneri;
            public DecimalField Peso;
            public DecimalField PesoSpecifico;
            public BooleanField PrimaLavorazione;
            public DecimalField QuantitaLavorazione;
            public Int32Field TipoCommercializzazione1;
            public DecimalField Quantita1;
            public DecimalField Prezzo1;
            public StringField Um1;
            public Int32Field TipoCommercializzazione2;
            public DecimalField Quantita2;
            public DecimalField Prezzo2;
            public StringField Um2;
            public Int32Field TipoCommercializzazione3;
            public DecimalField Quantita3;
            public DecimalField Prezzo3;
            public StringField Um3;

            public Int32Field IdRendicontoIdAutorizzazione;

            public StringField IdMaterialeDescrizione;
            public Int32Field IdMaterialeIdTipoMateriale;
            public DecimalField IdMaterialeTariffaRiferimento;
            public DecimalField IdMaterialePesoSpecificoRiferimento;
            public Int32Field IdMaterialeNomeRisorsaMineraleIstat;
        }
    }
}
