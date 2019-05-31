
using System.Collections.Generic;

namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Piano]")]
    [DisplayName("PIAE"), InstanceName("PIAE")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Piano")]
    public sealed class PianoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nome del PIAE"), Size(250), NotNull, QuickSearch]
        public String Descrizione
        {
            get { return Fields.Descrizione[this]; }
            set { Fields.Descrizione[this] = value; }
        }

        [DisplayName("Ente Emissione"), Column("IDEnte"), NotNull, ForeignKey("[dbo].[Ente]", "ID"), LeftJoin("jIdEnte"), TextualField("IdEnteNome")]
        [LookupEditor(typeof(EnteRow), InplaceAdd = true)]
        public string IdEnte
        {
            get { return Fields.IdEnte[this]; }
            set { Fields.IdEnte[this] = value; }
        }

        [DisplayName("Progressivo"), NotNull]
        public Int32? Progressivo
        {
            get { return Fields.Progressivo[this]; }
            set { Fields.Progressivo[this] = value; }
        }

        [DisplayName("Variante"), NotNull]
        public Int32? Variante
        {
            get { return Fields.Variante[this]; }
            set { Fields.Variante[this] = value; }
        }

        [DisplayName("Data Inizio"), NotNull]
        public DateTime? DataInizio
        {
            get { return Fields.DataInizio[this]; }
            set { Fields.DataInizio[this] = value; }
        }

        [DisplayName("Data Fine"), NotNull]
        public DateTime? DataFine
        {
            get { return Fields.DataFine[this]; }
            set { Fields.DataFine[this] = value; }
        }

        [DisplayName("Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Nome Ente"), Expression("jIdEnte.[Nome]")]
        public String IdEnteNome
        {
            get { return Fields.IdEnteNome[this]; }
            set { Fields.IdEnteNome[this] = value; }
        }

        [DisplayName(""), MasterDetailRelation(foreignKey: "IDPiano"), NotMapped]
        public List<AttoRow> AttoList
        {
            get { return Fields.AttoList[this]; }
            set { Fields.AttoList[this] = value; }
        }

        [DisplayName(""), MasterDetailRelation(foreignKey: "IDPiano"), NotMapped]
        public List<PianoAreaRow> PianoAreaList
        {
            get { return Fields.PianoAreaList[this]; }
            set { Fields.PianoAreaList[this] = value; }
        }

        [DisplayName(""), MasterDetailRelation(foreignKey: "IDPiano"), NotMapped]
        public List<FabbisognoRow> FabbisognoList
        {
            get { return Fields.FabbisognoList[this]; }
            set { Fields.FabbisognoList[this] = value; }
        }

        IIdField IIdRow.IdField => Fields.Id;

        StringField INameRow.NameField => Fields.Descrizione;

        public static readonly RowFields Fields = new RowFields().Init();

        public PianoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Descrizione;
            public StringField IdEnte;
            public Int32Field Progressivo;
            public Int32Field Variante;
            public DateTimeField DataInizio;
            public DateTimeField DataFine;
            public StringField Note;

            public StringField IdEnteNome;

            public RowListField<AttoRow> AttoList;
            public RowListField<PianoAreaRow> PianoAreaList;
            public RowListField<FabbisognoRow> FabbisognoList;
        }
    }
}
