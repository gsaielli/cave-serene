using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Atto")]
    [DisplayName("Atto"), InstanceName("Atto")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Atto")]
    public sealed class AttoRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Protocollo"), NotNull]
        public Int32? NumAtto
        {
            get { return Fields.NumAtto[this]; }
            set { Fields.NumAtto[this] = value; }
        }

        [DisplayName("Data"), NotNull]
        public DateTime? DataAtto
        {
            get { return Fields.DataAtto[this]; }
            set { Fields.DataAtto[this] = value; }
        }

        [DisplayName("Id Piano"), Column("IDPiano"), NotNull, ForeignKey("Piano", "ID"), LeftJoin("jIdPiano"), TextualField("IdPianoDescrizione")]
        public Int32? IdPiano
        {
            get { return Fields.IdPiano[this]; }
            set { Fields.IdPiano[this] = value; }
        }

        [DisplayName("Tipologia")]
        public TipoAtto? TipoAtto
        {
            get { return (TipoAtto?) Fields.TipoAtto[this]; }
            set { Fields.TipoAtto[this] = (Int32?) value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AttoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field NumAtto;
            public DateTimeField DataAtto;
            public Int32Field IdPiano;
            public Int32Field TipoAtto;
        }
    }
}
