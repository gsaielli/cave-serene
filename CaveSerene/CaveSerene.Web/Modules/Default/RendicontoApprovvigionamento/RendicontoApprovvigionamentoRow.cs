
using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("RendicontoApprovvigionamento")]
    [DisplayName("Rendiconto Approvvigionamento"), InstanceName("Rendiconto Approvvigionamento")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RendicontoApprovvigionamentoRow : Row<RendicontoApprovvigionamentoRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Tipo")]
        public TipoApprovvigionamento? TipoApprovvigionamento
        {
            get { return (TipoApprovvigionamento?)Fields.TipoApprovvigionamento[this]; }
            set { Fields.TipoApprovvigionamento[this] = (int)value; }
        }

        [DisplayName("Id Struttura Cava"), Column("IDStrutturaCava"), ForeignKey("Struttura", "ID"), LeftJoin("jIdStrutturaCava")]
        public Int32? IdStrutturaCava
        {
            get { return Fields.IdStrutturaCava[this]; }
            set { Fields.IdStrutturaCava[this] = value; }
        }

        [DisplayName("Quantità"), Size(9), Scale(1)]
        public Decimal? QtaApprov
        {
            get { return Fields.QtaApprov[this]; }
            set { Fields.QtaApprov[this] = value; }
        }

        [DisplayName("Note"), Size(50), QuickSearch, NameProperty]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        public RendicontoApprovvigionamentoRow()
            : base(Fields)
        {
        }

        public RendicontoApprovvigionamentoRow(RowFields f)
            : base(f)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdRendiconto;
            public Int32Field TipoApprovvigionamento;
            public Int32Field IdStrutturaCava;
            public DecimalField QtaApprov;
            public StringField Note;
        }
    }
}
