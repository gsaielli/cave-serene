
namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Regione")]
    [DisplayName("Regione"), InstanceName("Regione")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Regione")]
    public sealed class RegioneRow : Row<RegioneRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Size(2), PrimaryKey, QuickSearch, IdProperty]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nome"), Size(50), NameProperty]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        public RegioneRow()
            : base(Fields)
        {
        }

        public RegioneRow(RowFields f)
            : base(f)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Id;
            public StringField Nome;
        }
    }
}
