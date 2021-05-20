
namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Potenziale")]
    [DisplayName("Potenziale"), InstanceName("Potenziale")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PotenzialeRow : Row<PotenzialeRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Materiale"), Column("IDMateriale"), ForeignKey("Materiale", "ID"), LeftJoin("jIdMateriale"), TextualField("IdMaterialeDescrizione")]
        [LookupEditor(typeof(MaterialeRow))]
        public Int32? IdMateriale
        {
            get { return Fields.IdMateriale[this]; }
            set { Fields.IdMateriale[this] = value; }
        }

        [DisplayName("Id Piano Area"), Column("IDPianoArea"), ForeignKey("PianoArea", "ID"), LeftJoin("jIdPianoArea"), Updatable(false)]
        public Int32? IdPianoArea
        {
            get { return Fields.IdPianoArea[this]; }
            set { Fields.IdPianoArea[this] = value; }
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

        [DisplayName("Materiale"), Expression("jIdMateriale.[Descrizione]"), MinSelectLevel(SelectLevel.List), LookupInclude]
        public String IdMaterialeDescrizione
        {
            get { return Fields.IdMaterialeDescrizione[this]; }
            set { Fields.IdMaterialeDescrizione[this] = value; }
        }

        public PotenzialeRow()
            : base(Fields)
        {
        }

        public PotenzialeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdMateriale;
            public Int32Field IdPianoArea;
            public Int32Field Potenziale;
            public Int32Field Residuo;

            public StringField IdMaterialeDescrizione;
        }
    }
}
