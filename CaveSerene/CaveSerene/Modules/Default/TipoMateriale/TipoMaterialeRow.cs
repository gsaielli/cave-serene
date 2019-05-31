
namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[TipoMateriale]")]
    [DisplayName("Tipi di Materiale"), InstanceName("Tipo Materiale")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.TipoMateriale")]
    public sealed class TipoMaterialeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Descrizione"), Size(100), QuickSearch]
        public String Descrizione
        {
            get { return Fields.Descrizione[this]; }
            set { Fields.Descrizione[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descrizione; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TipoMaterialeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Descrizione;
        }
    }
}
