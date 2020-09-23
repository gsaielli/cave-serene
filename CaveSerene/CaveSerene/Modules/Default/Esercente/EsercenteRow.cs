
namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Esercente")]
    [DisplayName("Aziende Esercenti (per Cave e/o Miniere e/o Impianti)"), InstanceName("Esercente")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Esercente")]
    public sealed class EsercenteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Ragione Sociale"), Size(50), NotNull, QuickSearch]
        public String RagSoc
        {
            get { return Fields.RagSoc[this]; }
            set { Fields.RagSoc[this] = value; }
        }

        [DisplayName("Partita Iva"), Column("PartitaIVA"), Size(16), NotNull, QuickSearch]
        public String PartitaIva
        {
            get { return Fields.PartitaIva[this]; }
            set { Fields.PartitaIva[this] = value; }
        }

        [DisplayName("Codice Fiscale"), Size(16), NotNull, QuickSearch]
        public String CodiceFiscale
        {
            get { return Fields.CodiceFiscale[this]; }
            set { Fields.CodiceFiscale[this] = value; }
        }

        [DisplayName("Cod. CCIIAA"), Column("CodCCIA"), Size(50), QuickSearch]
        public String CodCcia
        {
            get { return Fields.CodCcia[this]; }
            set { Fields.CodCcia[this] = value; }
        }

        [DisplayName("Indirizzo"), Size(250), QuickSearch]
        public String Indirizzo
        {
            get { return Fields.Indirizzo[this]; }
            set { Fields.Indirizzo[this] = value; }
        }

        [DisplayName("CAP"), Column("CAP"), QuickSearch]
        public Int32? Cap
        {
            get { return Fields.Cap[this]; }
            set { Fields.Cap[this] = value; }
        }

        [DisplayName("Frazione"), Size(50), QuickSearch]
        public String Frazione
        {
            get { return Fields.Frazione[this]; }
            set { Fields.Frazione[this] = value; }
        }

        [DisplayName("Comune"), Column("IDComune"), Size(6), ForeignKey("Comune", "ID"), LeftJoin("jIdComune"), TextualField("IdComuneNome")]
        [LookupEditor(typeof(ComuneRow))]
        public String IdComune
        {
            get { return Fields.IdComune[this]; }
            set { Fields.IdComune[this] = value; }
        }

        [DisplayName("Comune"), Expression("jIdComune.[Nome]"), QuickSearch]
        public String IdComuneNome
        {
            get { return Fields.IdComuneNome[this]; }
            set { Fields.IdComuneNome[this] = value; }
        }

        [DisplayName("C.F.Compilatore"), Size(16)]
        public String CodiceFiscaleCompilatore
        {
            get { return Fields.CodiceFiscaleCompilatore[this]; }
            set { Fields.CodiceFiscaleCompilatore[this] = value; }
        }

        [DisplayName("Telefono"), Size(50)]
        public String Telefono
        {
            get { return Fields.Telefono[this]; }
            set { Fields.Telefono[this] = value; }
        }

        [DisplayName("E Mail"), Size(120)]
        public String EMail
        {
            get { return Fields.EMail[this]; }
            set { Fields.EMail[this] = value; }
        }

        [DisplayName("Legale Rappresentante"), Size(120), QuickSearch]
        public String LegaleRappresentante
        {
            get { return Fields.LegaleRappresentante[this]; }
            set { Fields.LegaleRappresentante[this] = value; }
        }

        [DisplayName("Dati Fallimento")]
        public String DatiFallimento
        {
            get { return Fields.DatiFallimento[this]; }
            set { Fields.DatiFallimento[this] = value; }
        }

        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.RagSoc;

        public static readonly RowFields Fields = new RowFields().Init();

        public EsercenteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CodCcia;
            public StringField RagSoc;
            public StringField Indirizzo;
            public Int32Field Cap;
            public StringField Frazione;
            public StringField IdComune;
            public StringField CodiceFiscale;
            public StringField PartitaIva;
            public StringField CodiceFiscaleCompilatore;
            public StringField Telefono;
            public StringField EMail;
            public StringField LegaleRappresentante;
            public StringField DatiFallimento;

            public StringField IdComuneNome;
        }
    }
}
