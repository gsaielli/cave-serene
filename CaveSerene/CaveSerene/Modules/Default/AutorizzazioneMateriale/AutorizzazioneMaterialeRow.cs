
namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[AutorizzazioneMateriale]")]
    [DisplayName("Autorizzazione Materiale"), InstanceName("Autorizzazione Materiale")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AutorizzazioneMaterialeRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Autorizzazione"), Column("IDAutorizzazione"), NotNull, ForeignKey("[dbo].[Autorizzazione]", "ID"), LeftJoin("jIdAutorizzazione"), TextualField("IdAutorizzazioneNumeroAtto")]
        public Int32? IdAutorizzazione
        {
            get { return Fields.IdAutorizzazione[this]; }
            set { Fields.IdAutorizzazione[this] = value; }
        }

        [DisplayName("Materiale"), Column("IDMateriale"), NotNull, ForeignKey("[dbo].[Materiale]", "ID"), LeftJoin("jIdMateriale"), TextualField("IdMaterialeDescrizione")]
        [LookupEditor(typeof(MaterialeRow))]
        public Int32? IdMateriale
        {
            get { return Fields.IdMateriale[this]; }
            set { Fields.IdMateriale[this] = value; }
        }

        [DisplayName("Q.Autorizzata"), Size(10), Scale(1)]
        public Decimal? QuantitaAutorizzata
        {
            get { return Fields.QuantitaAutorizzata[this]; }
            set { Fields.QuantitaAutorizzata[this] = value; }
        }

        [DisplayName("P.Autorizzato"), Size(9), Scale(2)]
        public Decimal? PesoAutorizzato
        {
            get { return Fields.PesoAutorizzato[this]; }
            set { Fields.PesoAutorizzato[this] = value; }
        }

        [DisplayName("Materiale"), Expression("jIdMateriale.[Descrizione]"), MinSelectLevel(SelectLevel.List)]
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

        public AutorizzazioneMaterialeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdAutorizzazione;
            public Int32Field IdMateriale;
            public DecimalField QuantitaAutorizzata;
            public DecimalField PesoAutorizzato;

            public StringField IdMaterialeDescrizione;
        }
    }
}
