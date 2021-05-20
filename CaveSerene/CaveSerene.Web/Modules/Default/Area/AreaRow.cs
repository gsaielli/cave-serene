using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Area")]
    [DisplayName("Aree Estrattive"), InstanceName("Area Estrattiva")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Area")]
    public sealed class AreaRow : Row<AreaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nome Area"), Size(250), QuickSearch]
        [NameProperty]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Tipo"), QuickFilter]
        public TipoArea? TipoArea
        {
            get { return (TipoArea?)Fields.TipoArea[this]; }
            set { Fields.TipoArea[this] = (Int32?)value; }
        }

        [DisplayName("Storia"), QuickFilter]
        public TipoStoria? TipoStoria
        {
            get { return (TipoStoria?) Fields.TipoStoria[this]; }
            set { Fields.TipoStoria[this] = (Int32?) value; }
        }

        [DisplayName("Posizione"), QuickFilter]
        public TipoPosizione? TipoPosizione
        {
            get { return (TipoPosizione?)Fields.TipoPosizione[this]; }
            set { Fields.TipoPosizione[this] = (Int32?)value; }
        }

        [DisplayName("Progressivo"), QuickSearch]
        public Int32? Progressivo
        {
            get { return Fields.Progressivo[this]; }
            set { Fields.Progressivo[this] = value; }
        }

        [DisplayName("Cod.Cat.Prov."), Size(50), QuickSearch]
        public String CodiceAreaProv
        {
            get { return Fields.CodiceAreaProv[this]; }
            set { Fields.CodiceAreaProv[this] = value; }
        }

        [DisplayName("Polygon")]
        public String Polygon
        {
            get { return Fields.Polygon[this]; }
            set { Fields.Polygon[this] = value; }
        }

        [DisplayName("Note"), QuickSearch]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        public AreaRow()
            : base(Fields)
        {
        }

        public AreaRow(RowFields f): base(f)
        {

        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nome;
            public Int32Field TipoArea;
            public Int32Field TipoStoria;
            public Int32Field TipoPosizione;
            public Int32Field Progressivo;
            public StringField CodiceAreaProv;
            public StringField Polygon;
            public StringField Note;
        }
    }
}
