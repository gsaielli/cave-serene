
using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("RendicontoDestinazioneTerritoriale")]
    [DisplayName("Rendiconto Destinazione Territoriale"), InstanceName("Rendiconto Destinazione Territoriale")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RendicontoDestinazioneTerritorialeRow : Row<RendicontoDestinazioneTerritorialeRow.RowFields>, IIdRow
    {
#if ORACLE
        [DisplayName("Id"), Expression("TO_CHAR(IDRendiconto) || '-' || TO_CHAR(TipoDestinazioneTerritoriale)"), IdProperty]
#else
        [DisplayName("Id"), Expression("convert(varchar(50),IDRendiconto) + '-' + convert(varchar(50),TipoDestinazioneTerritoriale)"), IdProperty]
#endif
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [Column("IDRendiconto"), NotNull, PrimaryKey, ForeignKey("Rendiconto", "ID"), LeftJoin("jIdRendiconto")]
        public Int32? IdRendiconto
        {
            get { return Fields.IdRendiconto[this]; }
            set { Fields.IdRendiconto[this] = value; }
        }

        [DisplayName("Tipo"), PrimaryKey]
        public TipoDestinazioneTerritoriale? TipoDestinazioneTerritoriale
        {
            get { return (TipoDestinazioneTerritoriale?)Fields.TipoDestinazioneTerritoriale[this]; }
            set { Fields.TipoDestinazioneTerritoriale[this] = (int)value; }
        }

        [DisplayName("Percentuale")]
        public Int32? Percentuale
        {
            get { return Fields.Percentuale[this]; }
            set { Fields.Percentuale[this] = value; }
        }

        public RendicontoDestinazioneTerritorialeRow()
            : base(Fields)
        {
        }

        public RendicontoDestinazioneTerritorialeRow(RowFields f)
            : base(f)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Id;
            public Int32Field IdRendiconto;
            public Int32Field TipoDestinazioneTerritoriale;
            public Int32Field Percentuale;
        }
    }
}
