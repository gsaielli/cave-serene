
namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Comune")]
    [DisplayName("Comune"), InstanceName("Comune")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Comune")]
    public sealed class ComuneRow : Row<ComuneRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Size(6), PrimaryKey, QuickSearch, IdProperty]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Codice Regione"), Size(2)]
        public String CodiceRegione
        {
            get { return Fields.CodiceRegione[this]; }
            set { Fields.CodiceRegione[this] = value; }
        }

        [DisplayName("Sigla Provincia"), Size(2)]
        public String SiglaProvincia
        {
            get { return Fields.SiglaProvincia[this]; }
            set { Fields.SiglaProvincia[this] = value; }
        }

        [DisplayName("Nome"), Size(45), NameProperty]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Cap"), Column("CAP"), Size(5)]
        public String Cap
        {
            get { return Fields.Cap[this]; }
            set { Fields.Cap[this] = value; }
        }

        [DisplayName("Zona Alt"), Size(1)]
        public String ZonaAlt
        {
            get { return Fields.ZonaAlt[this]; }
            set { Fields.ZonaAlt[this] = value; }
        }

        [DisplayName("Ent Cod"), Size(1)]
        public String EntCod
        {
            get { return Fields.EntCod[this]; }
            set { Fields.EntCod[this] = value; }
        }

        [DisplayName("Cod Catastale"), Size(4)]
        public String CodCatastale
        {
            get { return Fields.CodCatastale[this]; }
            set { Fields.CodCatastale[this] = value; }
        }

        public ComuneRow()
            : base(Fields)
        {
        }

        public ComuneRow(RowFields f)
            : base(f)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Id;
            public StringField CodiceRegione;
            public StringField SiglaProvincia;
            public StringField Nome;
            public StringField Cap;
            public StringField ZonaAlt;
            public StringField EntCod;
            public StringField CodCatastale;
        }
    }
}
