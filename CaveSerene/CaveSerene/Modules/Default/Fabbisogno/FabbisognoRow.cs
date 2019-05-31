namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Fabbisogno]")]
    [DisplayName("Fabbisogno"), InstanceName("Fabbisogno")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [UniqueConstraint("IdPiano", "IDMateriale")]
    public sealed class FabbisognoRow : Row, IIdRow
    {
        [DisplayName("Id"), Expression("convert(nvarchar(50),IDPiano) + '-' + convert(nvarchar(50),IdMateriale)")]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Piano"), Column("IDPiano"), PrimaryKey, ForeignKey("[dbo].[Piano]", "ID"), LeftJoin("jIdPiano")]
        public Int32? IdPiano
        {
            get { return Fields.IdPiano[this]; }
            set { Fields.IdPiano[this] = value; }
        }

        [DisplayName("Materiale"), Column("IDMateriale"), PrimaryKey, ForeignKey("[dbo].[Materiale]", "ID"), LeftJoin("jIdMateriale"), TextualField("IdMaterialeDescrizione")]
        [LookupEditor(typeof(MaterialeRow), InplaceAdd = true)]
        public Int32? IdMateriale
        {
            get { return Fields.IdMateriale[this]; }
            set { Fields.IdMateriale[this] = value; }
        }

        [DisplayName("Fabbisogno"), NotNull]
        public Int32? Fabbisogno
        {
            get { return Fields.Fabbisogno[this]; }
            set { Fields.Fabbisogno[this] = value; }
        }

        [DisplayName("Potenziale")]
        public Int32? Potenziale
        {
            get { return Fields.Potenziale[this]; }
            set { Fields.Potenziale[this] = value; }
        }

        [DisplayName("Residuo")]
        public Int32? Residuo
        {
            get { return Fields.Residuo[this]; }
            set { Fields.Residuo[this] = value; }
        }

        [DisplayName("Id Materiale Descrizione"), Expression("jIdMateriale.[Descrizione]"), MinSelectLevel(SelectLevel.List)]
        public String IdMaterialeDescrizione
        {
            get { return Fields.IdMaterialeDescrizione[this]; }
            set { Fields.IdMaterialeDescrizione[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FabbisognoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Id;
            public Int32Field IdPiano;
            public Int32Field IdMateriale;
            public Int32Field Fabbisogno;
            public Int32Field Potenziale;
            public Int32Field Residuo;

            public StringField IdMaterialeDescrizione;
        }
    }
}
