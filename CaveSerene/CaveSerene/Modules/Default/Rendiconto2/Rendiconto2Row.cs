
using System.Collections.Generic;
using CaveSerene.Modules.Default.Autorizzazione;

namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RendicontoExt]")]
    [DisplayName("Rendiconti delle Miniere"), InstanceName("Rendiconto Miniera")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class Rendiconto2Row : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Concessione"), Column("IDAutorizzazione"), ForeignKey("[dbo].[Autorizzazione]", "ID"), LeftJoin("jIdAutorizzazione"), 
            TextualField("IdAutorizzazioneNumeroAtto"), NotNull]
        [LookupEditor(typeof(ConcessioneLookup))]
        public Int32? IdAutorizzazione
        {
            get { return Fields.IdAutorizzazione[this]; }
            set { Fields.IdAutorizzazione[this] = value; }
        }

        [DisplayName("Autorizzazione"), Column("Descrizione"), QuickSearch]
        public String Autorizzazione
        {
            get { return Fields.Autorizzazione[this]; }
            set { Fields.Autorizzazione[this] = value; }
        }

        [DisplayName("Comune"), Column("Comune"), QuickSearch]
        public String Comune
        {
            get { return Fields.Comune[this]; }
            set { Fields.Comune[this] = value; }
        }

        [DisplayName("Anno"), NotNull]
        public Int32? Anno
        {
            get { return Fields.Anno[this]; }
            set { Fields.Anno[this] = value; }
        }

        [DisplayName("N.Operai")]
        public Int32? NumOperai
        {
            get { return Fields.NumOperai[this]; }
            set { Fields.NumOperai[this] = value; }
        }

        [DisplayName("N.Amministr.")]
        public Int32? NumAmministrativi
        {
            get { return Fields.NumAmministrativi[this]; }
            set { Fields.NumAmministrativi[this] = value; }
        }

        [DisplayName("N.Tecnici")]
        public Int32? NumTecnici
        {
            get { return Fields.NumTecnici[this]; }
            set { Fields.NumTecnici[this] = value; }
        }

        [DisplayName("N.Addetti")]
        public Int32? NumAddetti
        {
            get { return Fields.NumAddetti[this]; }
            set { Fields.NumAddetti[this] = value; }
        }

        [DisplayName("Ore Lavorate"), Size(9), Scale(2)]
        public Decimal? OreLavorate
        {
            get { return Fields.OreLavorate[this]; }
            set { Fields.OreLavorate[this] = value; }
        }

        [DisplayName("N.Mesi Attivita"), Size(9), Scale(2)]
        public Decimal? NumeroMesiAttivita
        {
            get { return Fields.NumeroMesiAttivita[this]; }
            set { Fields.NumeroMesiAttivita[this] = value; }
        }

        [DisplayName("Vol.Estrazione"), Size(11), Scale(2)]
        public Decimal? VolAcquaEstrazione
        {
            get { return Fields.VolAcquaEstrazione[this]; }
            set { Fields.VolAcquaEstrazione[this] = value; }
        }

        [DisplayName("Vol.Lavorazioni"), Size(11), Scale(2)]
        public Decimal? VolAcquaLavorazioni
        {
            get { return Fields.VolAcquaLavorazioni[this]; }
            set { Fields.VolAcquaLavorazioni[this] = value; }
        }

        [DisplayName("Presenza Strutt.Mat.Inut?")]
        public Boolean? StruttDepMatInut
        {
            get { return Fields.StruttDepMatInut[this]; }
            set { Fields.StruttDepMatInut[this] = value; }
        }

        [DisplayName("Esplosivo"), Size(11), Scale(2)]
        public Decimal? Esplosivo
        {
            get { return Fields.Esplosivo[this]; }
            set { Fields.Esplosivo[this] = value; }
        }

        [DisplayName("Detonatori")]
        public Int32? Detonatori
        {
            get { return Fields.Detonatori[this]; }
            set { Fields.Detonatori[this] = value; }
        }

        [DisplayName("Filo Elicoidale"), Size(11), Scale(2)]
        public Decimal? FiloElicoidale
        {
            get { return Fields.FiloElicoidale[this]; }
            set { Fields.FiloElicoidale[this] = value; }
        }

        [DisplayName("Mezzo Mecc."), Size(11), Scale(2)]
        public Decimal? MezzoMeccanico
        {
            get { return Fields.MezzoMeccanico[this]; }
            set { Fields.MezzoMeccanico[this] = value; }
        }

        [DisplayName("Micce L.Comb."), Size(11), Scale(2)]
        public Decimal? MicceLentaCombustione
        {
            get { return Fields.MicceLentaCombustione[this]; }
            set { Fields.MicceLentaCombustione[this] = value; }
        }

        [DisplayName("Elettricità Kw"), Column("QuantitaKW"), Size(11), Scale(2)]
        public Decimal? QuantitaKw
        {
            get { return Fields.QuantitaKw[this]; }
            set { Fields.QuantitaKw[this] = value; }
        }

        [DisplayName("Elettricità €"), Column("ImportoKW"), Size(11), Scale(2)]
        public Decimal? ImportoKw
        {
            get { return Fields.ImportoKw[this]; }
            set { Fields.ImportoKw[this] = value; }
        }

        [DisplayName("Gasolio L"), Size(11), Scale(2)]
        public Decimal? QuantitaGasolio
        {
            get { return Fields.QuantitaGasolio[this]; }
            set { Fields.QuantitaGasolio[this] = value; }
        }

        [DisplayName("Gasolio €"), Size(11), Scale(2)]
        public Decimal? ImportoGasolio
        {
            get { return Fields.ImportoGasolio[this]; }
            set { Fields.ImportoGasolio[this] = value; }
        }

        [DisplayName("Benzina L"), Size(11), Scale(2)]
        public Decimal? QuantitaBenzina
        {
            get { return Fields.QuantitaBenzina[this]; }
            set { Fields.QuantitaBenzina[this] = value; }
        }

        [DisplayName("Benzina €"), Size(11), Scale(2)]
        public Decimal? ImportoBenzina
        {
            get { return Fields.ImportoBenzina[this]; }
            set { Fields.ImportoBenzina[this] = value; }
        }

        [DisplayName("Altro Descr."), Size(100), QuickSearch]
        public String DescrizioneAltreFontiEnergia
        {
            get { return Fields.DescrizioneAltreFontiEnergia[this]; }
            set { Fields.DescrizioneAltreFontiEnergia[this] = value; }
        }

        [DisplayName("Altro UM"), Size(50)]
        public String UnitaMisuraAltreFontiEnergia
        {
            get { return Fields.UnitaMisuraAltreFontiEnergia[this]; }
            set { Fields.UnitaMisuraAltreFontiEnergia[this] = value; }
        }

        [DisplayName("Altro Q"), Size(11), Scale(2)]
        public Decimal? QuantitaAltreFontiEnergia
        {
            get { return Fields.QuantitaAltreFontiEnergia[this]; }
            set { Fields.QuantitaAltreFontiEnergia[this] = value; }
        }

        [DisplayName("Altro €"), Size(11), Scale(2)]
        public Decimal? ImportoAltreFontiEnergia
        {
            get { return Fields.ImportoAltreFontiEnergia[this]; }
            set { Fields.ImportoAltreFontiEnergia[this] = value; }
        }

        [DisplayName("Canone Annuo"), Size(11), Scale(2)]
        public Decimal? DirittoProp
        {
            get { return Fields.DirittoProp[this]; }
            set { Fields.DirittoProp[this] = value; }
        }

        [DisplayName("Direttore Responsabile"), Size(100)]
        public String DirettoreResponsabile
        {
            get { return Fields.DirettoreResponsabile[this]; }
            set { Fields.DirettoreResponsabile[this] = value; }
        }

        [DisplayName("Sorvegliante"), Size(100)]
        public String Sorvegliante
        {
            get { return Fields.Sorvegliante[this]; }
            set { Fields.Sorvegliante[this] = value; }
        }

        [DisplayName("Responsabile Sicurezza"), Size(100)]
        public String ResponsabileSicurezza
        {
            get { return Fields.ResponsabileSicurezza[this]; }
            set { Fields.ResponsabileSicurezza[this] = value; }
        }

        [DisplayName("Prodotti"), MasterDetailRelation(foreignKey: "IDRendiconto"), NotMapped]
        public List<ProdottoRow> ProdottoList
        {
            get { return Fields.ProdottoList[this]; }
            set { Fields.ProdottoList[this] = value; }
        }

        [DisplayName("Scarti"), MasterDetailRelation(foreignKey: "IDRendiconto"), NotMapped]
        public List<ScartoRow> ScartoList
        {
            get { return Fields.ScartoList[this]; }
            set { Fields.ScartoList[this] = value; }
        }

        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.Autorizzazione;

        public static readonly RowFields Fields = new RowFields().Init();

        public Rendiconto2Row()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdAutorizzazione;
            public Int32Field Anno;
            public Int32Field NumOperai;
            public Int32Field NumAmministrativi;
            public Int32Field NumTecnici;
            public Int32Field NumAddetti;
            public DecimalField OreLavorate;
            public DecimalField NumeroMesiAttivita;
            public DecimalField VolAcquaEstrazione;
            public DecimalField VolAcquaLavorazioni;
            public BooleanField StruttDepMatInut;
            public DecimalField Esplosivo;
            public Int32Field Detonatori;
            public DecimalField FiloElicoidale;
            public DecimalField MezzoMeccanico;
            public DecimalField MicceLentaCombustione;
            public DecimalField QuantitaKw;
            public DecimalField ImportoKw;
            public DecimalField QuantitaGasolio;
            public DecimalField ImportoGasolio;
            public DecimalField QuantitaBenzina;
            public DecimalField ImportoBenzina;
            public StringField DescrizioneAltreFontiEnergia;
            public StringField UnitaMisuraAltreFontiEnergia;
            public DecimalField QuantitaAltreFontiEnergia;
            public DecimalField ImportoAltreFontiEnergia;
            public DecimalField DirittoProp;
            public StringField DirettoreResponsabile;
            public StringField Sorvegliante;
            public StringField ResponsabileSicurezza;

            public StringField Autorizzazione;
            public StringField Comune;
            public RowListField<ProdottoRow> ProdottoList;
            public RowListField<ScartoRow> ScartoList;

        }
    }
}
