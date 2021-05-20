
namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("TipoMateriale")]
    [DisplayName("Tipi di Materiale"), InstanceName("Tipo Materiale")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.TipoMateriale")]
    public sealed class TipoMaterialeRow : Row<TipoMaterialeRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Descrizione"), Size(100), QuickSearch, NameProperty]
        public String Descrizione
        {
            get { return Fields.Descrizione[this]; }
            set { Fields.Descrizione[this] = value; }
        }

        public TipoMaterialeRow()
            : base(Fields)
        {
        }

        public TipoMaterialeRow(RowFields f)
            : base(f)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Descrizione;
        }
    }
}
