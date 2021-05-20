using System.Collections.Generic;
using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Entities
{
    using CaveSerene.Default.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("PianoArea")]
    [DisplayName("xxx"), InstanceName("Potenziale dell'Area")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.PianoArea")]
    public sealed class PianoAreaRow : Row<PianoAreaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [Column("IDPiano"), NotNull, ForeignKey("Piano", "ID"), LeftJoin("jIdPiano"), TextualField("IdPianoDescrizione"), LookupInclude]
        public Int32? IdPiano
        {
            get { return Fields.IdPiano[this]; }
            set { Fields.IdPiano[this] = value; }
        }

        [DisplayName("A.Estrattiva"), Column("IDArea"), NotNull, ForeignKey(typeof(AreaRow), "ID"), LeftJoin("jIdArea"), TextualField("IdAreaNome"), LookupInclude]
        [LookupEditor(typeof(AreaRow), InplaceAdd = true)]
        public Int32? IdArea
        {
            get { return Fields.IdArea[this]; }
            set { Fields.IdArea[this] = value; }
        }

        [DisplayName("Stato Attuale")]
        public TipoStato? TipoStato
        {
            get { return (TipoStato?) Fields.TipoStato[this]; }
            set { Fields.TipoStato[this] = (Int32?) value; }
        }

        [DisplayName("Profond.Max"), Size(9), Scale(1)]
        public Decimal? ProfMax
        {
            get { return Fields.ProfMax[this]; }
            set { Fields.ProfMax[this] = value; }
        }

        [DisplayName("Superficie")]
        public Int32? Sup
        {
            get { return Fields.Sup[this]; }
            set { Fields.Sup[this] = value; }
        }

        [DisplayName("Area Estrattiva"), Expression("jIdArea.Nome"), MinSelectLevel(SelectLevel.List), NameProperty]
        public String IdAreaNome
        {
            get { return Fields.IdAreaNome[this]; }
            set { Fields.IdAreaNome[this] = value; }
        }

        [DisplayName("Potenzialità dell'Area"), MasterDetailRelation(foreignKey: "IdPianoArea"), NotMapped]
        public List<PotenzialeRow> PotenzialeList
        {
            get { return Fields.PotenzialeList[this]; }
            set { Fields.PotenzialeList[this] = value; }
        }

        public PianoAreaRow()
            : base(Fields)
        {
        }

        public PianoAreaRow(RowFields f)
            : base(f)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdPiano;
            public Int32Field IdArea;
            public Int32Field TipoStato;
            public DecimalField ProfMax;
            public Int32Field Sup;

            public StringField IdAreaNome;
            public RowListField<PotenzialeRow> PotenzialeList;
        }
    }
}
