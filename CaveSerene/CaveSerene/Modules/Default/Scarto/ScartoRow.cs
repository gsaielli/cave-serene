
namespace CaveSerene.Default.Entities
{
    using Modules.Default.Enums;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Scarto")]
    [DisplayName("Scarto"), InstanceName("Scarto")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ScartoRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [Column("IDRendiconto"), NotNull, ForeignKey("Rendiconto", "ID"), LeftJoin("jIdRendiconto")]
        public Int32? IdRendiconto
        {
            get { return Fields.IdRendiconto[this]; }
            set { Fields.IdRendiconto[this] = value; }
        }

        [DisplayName("Tipo Scarto"), Size(3), NotNull, QuickSearch]
        public TipoScarto? TipoScarto
        {
            get { return (TipoScarto?)Fields.TipoScarto[this]; }
            set { Fields.TipoScarto[this] = (int)value; }
        }

        [DisplayName("Peso"), Size(9), Scale(2)]
        public Decimal? Peso
        {
            get { return Fields.Peso[this]; }
            set { Fields.Peso[this] = value; }
        }

        [DisplayName("Volume"), Size(9), Scale(2)]
        public Decimal? Volume
        {
            get { return Fields.Volume[this]; }
            set { Fields.Volume[this] = value; }
        }

        [DisplayName("Descrizione Altro"), Size(60)]
        public String DescrizioneAltro
        {
            get { return Fields.DescrizioneAltro[this]; }
            set { Fields.DescrizioneAltro[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ScartoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdRendiconto;
            public Int32Field TipoScarto;
            public DecimalField Peso;
            public DecimalField Volume;
            public StringField DescrizioneAltro;
        }
    }
}
