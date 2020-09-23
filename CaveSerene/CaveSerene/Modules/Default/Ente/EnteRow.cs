
namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Ente")]
    [DisplayName("Enti"), InstanceName("Ente")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Ente")]
    public sealed class EnteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Codice"), Column("ID"), Size(3), PrimaryKey, QuickSearch]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Regione"), Column("IDRegione"), Size(2), ForeignKey("Regione", "ID"), LeftJoin("jIdRegione"), TextualField("IdRegioneNome")]
        [LookupEditor(typeof(RegioneRow))]
        public String IdRegione
        {
            get { return Fields.IdRegione[this]; }
            set { Fields.IdRegione[this] = value; }
        }

        [DisplayName("Nome"), Size(60), QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Sigla"), Size(2), QuickSearch]
        public String Sigla
        {
            get { return Fields.Sigla[this]; }
            set { Fields.Sigla[this] = value; }
        }

        [DisplayName("Regione"), Expression("jIdRegione.[Nome]"), QuickSearch]
        public String IdRegioneNome
        {
            get { return Fields.IdRegioneNome[this]; }
            set { Fields.IdRegioneNome[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EnteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Id;
            public StringField IdRegione;
            public StringField Nome;
            public StringField Sigla;

            public StringField IdRegioneNome;
        }
    }
}
