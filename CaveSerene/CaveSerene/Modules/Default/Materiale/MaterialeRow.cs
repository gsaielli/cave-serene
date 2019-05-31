using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Materiale]")]
    [DisplayName("Materiali"), InstanceName("Materiale")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Materiale")]
    public sealed class MaterialeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Descrizione"), Size(60), NotNull, QuickSearch]
        public String Descrizione
        {
            get { return Fields.Descrizione[this]; }
            set { Fields.Descrizione[this] = value; }
        }

        [DisplayName("Tipo Materiale"), Column("IDTipoMateriale"), ForeignKey("[dbo].[TipoMateriale]", "ID"), LeftJoin("jIdTipoMateriale"), 
            TextualField("IdTipoMaterialeDescrizione"), QuickSearch]
        [LookupEditor(typeof(TipoMaterialeRow), InplaceAdd = true)]
        public Int32? IdTipoMateriale
        {
            get { return Fields.IdTipoMateriale[this]; }
            set { Fields.IdTipoMateriale[this] = value; }
        }

        [DisplayName("Risorsa Minerale Istat"), Column("NomeRisorsaMineraleISTAT"), Size(50), QuickFilter]
        public TipoISTAT? NomeRisorsaMineraleIstat
        {
            get { return (TipoISTAT?)Fields.NomeRisorsaMineraleIstat[this]; }
            set { Fields.NomeRisorsaMineraleIstat[this] = (int?)value; }
        }

        [DisplayName("Tariffa Rif."), Size(11), Scale(2)]
        public Decimal? TariffaRiferimento
        {
            get { return Fields.TariffaRiferimento[this]; }
            set { Fields.TariffaRiferimento[this] = value; }
        }

        [DisplayName("Peso Specifico Rif."), Size(11), Scale(2)]
        public Decimal? PesoSpecificoRiferimento
        {
            get { return Fields.PesoSpecificoRiferimento[this]; }
            set { Fields.PesoSpecificoRiferimento[this] = value; }
        }

        [DisplayName("Tipo Materiale"), Expression("jIdTipoMateriale.[Descrizione]"), QuickSearch]
        public String IdTipoMaterialeDescrizione
        {
            get { return Fields.IdTipoMaterialeDescrizione[this]; }
            set { Fields.IdTipoMaterialeDescrizione[this] = value; }
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

        public MaterialeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Descrizione;
            public Int32Field IdTipoMateriale;
            public DecimalField TariffaRiferimento;
            public DecimalField PesoSpecificoRiferimento;
            public Int32Field NomeRisorsaMineraleIstat;

            public StringField IdTipoMaterialeDescrizione;
        }
    }
}
