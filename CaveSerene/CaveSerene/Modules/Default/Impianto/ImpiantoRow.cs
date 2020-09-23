using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Impianto")]
    [DisplayName("Impianti"), InstanceName("Impianto")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Impianto")]
    public sealed class ImpiantoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity, PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Comune"), Column("IDComune"), Size(6), ForeignKey("Comune", "ID"), LeftJoin("jIdComune"), TextualField("IdComuneNome"), NotNull]
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

        [DisplayName("Progressivo"), QuickSearch]
        public Int32? Progressivo
        {
            get { return Fields.Progressivo[this]; }
            set { Fields.Progressivo[this] = value; }
        }

        [DisplayName("Nome"), Size(250), QuickSearch, NotNull]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Frazione"), Size(50), QuickSearch]
        public String Frazione
        {
            get { return Fields.Frazione[this]; }
            set { Fields.Frazione[this] = value; }
        }

        [DisplayName("Catasto Provinciale"), Size(50), QuickSearch]
        public String CatastoProvinciale
        {
            get { return Fields.CatastoProvinciale[this]; }
            set { Fields.CatastoProvinciale[this] = value; }
        }

        [DisplayName("Coordinata X"), Size(18), Scale(6)]
        public Decimal? CoordinataX
        {
            get { return Fields.CoordinataX[this]; }
            set { Fields.CoordinataX[this] = value; }
        }

        [DisplayName("Coordinata Y"), Size(18), Scale(6)]
        public Decimal? CoordinataY
        {
            get { return Fields.CoordinataY[this]; }
            set { Fields.CoordinataY[this] = value; }
        }

        [DisplayName("Tipo"), Size(1)]
        public TipoImpianto? TipoImpianto
        {
            get { return (TipoImpianto?)Fields.TipoImpianto[this]; }
            set { Fields.TipoImpianto[this] = (int)value; }
        }

        [DisplayName("Data Installazione Impianto")]
        public DateTime? DataInstallazioneImpianto
        {
            get { return Fields.DataInstallazioneImpianto[this]; }
            set { Fields.DataInstallazioneImpianto[this] = value; }
        }

        [DisplayName("Tipo Struttura"), NotNull, DefaultValue(2)]
        public TipoStruttura? TipoStruttura
        {
            get { return (TipoStruttura?)Fields.TipoStruttura[this]; }
            set { Fields.TipoStruttura[this] = (int?)value; }
        }

        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.Nome;

        public static readonly RowFields Fields = new RowFields().Init();

        public ImpiantoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField IdComune;
            public Int32Field Progressivo;
            public StringField Nome;
            public StringField Frazione;
            public StringField CatastoProvinciale;
            public DecimalField CoordinataX;
            public DecimalField CoordinataY;
            public Int32Field TipoImpianto;
            public DateTimeField DataInstallazioneImpianto;
            public Int32Field TipoStruttura;

            public StringField IdComuneNome;
        }
    }
}
