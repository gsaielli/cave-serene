using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Miniera")]
    [DisplayName("Miniere"), InstanceName("Miniera")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Miniera")]
    public sealed class MinieraRow : Row<MinieraRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity, PrimaryKey, IdProperty]
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

        [DisplayName("Tipo Posizione")]
        public TipoPosizione? TipoPosizione
        {
            get { return (TipoPosizione?)Fields.TipoPosizione[this]; }
            set { Fields.TipoPosizione[this] = (int)value; }
        }

        [DisplayName("Tipo Dissesto")]
        public TipoDissesto? TipoDissesto
        {
            get { return (TipoDissesto?)Fields.TipoDissesto[this]; }
            set { Fields.TipoDissesto[this] = (int)value; }
        }

        [DisplayName("Tipo Coltivazione")]
        public TipoColtivazione? TipoColtivazione
        {
            get { return (TipoColtivazione?)Fields.TipoColtivazione[this]; }
            set { Fields.TipoColtivazione[this] = (int)value; }
        }

        [DisplayName("Progressivo"), QuickSearch]
        public Int32? Progressivo
        {
            get { return Fields.Progressivo[this]; }
            set { Fields.Progressivo[this] = value; }
        }

        [DisplayName("Nome"), Size(250), QuickSearch, NotNull, NameProperty]
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

        [DisplayName("Vincolo Ambientale")]
        public Int32? VincoloAmbientale
        {
            get { return Fields.VincoloAmbientale[this]; }
            set { Fields.VincoloAmbientale[this] = value; }
        }

        [DisplayName("Area Protetta")]
        public Boolean? AreaProtetta
        {
            get { return Fields.AreaProtetta[this]; }
            set { Fields.AreaProtetta[this] = value; }
        }

        [DisplayName("Profondita Falda"), Size(9), Scale(2)]
        public Decimal? ProfonditaFalda
        {
            get { return Fields.ProfonditaFalda[this]; }
            set { Fields.ProfonditaFalda[this] = value; }
        }

        [DisplayName("Tipo Struttura"), NotNull, DefaultValue(3)]
        public TipoStruttura? TipoStruttura
        {
            get { return (TipoStruttura?)Fields.TipoStruttura[this]; }
            set { Fields.TipoStruttura[this] = (int?)value; }
        }

        public MinieraRow()
            : base(Fields)
        {
        }

        public MinieraRow(RowFields f)
            : base(f)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField IdComune;
            public Int32Field TipoPosizione;
            public Int32Field TipoDissesto;
            public Int32Field TipoColtivazione;
            public Int32Field Progressivo;
            public StringField Nome;
            public StringField Frazione;
            public StringField CatastoProvinciale;
            public DecimalField CoordinataX;
            public DecimalField CoordinataY;
            public Int32Field VincoloAmbientale;
            public BooleanField AreaProtetta;
            public DecimalField ProfonditaFalda;
            public Int32Field TipoStruttura;

            public StringField IdComuneNome;
        }
    }
}
