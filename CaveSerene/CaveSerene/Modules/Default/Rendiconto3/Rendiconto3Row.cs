
using System.Collections.Generic;

namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Rendiconto")]
    [DisplayName("Dati degli Impianti"), InstanceName("Rendiconto Impianto")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class Rendiconto3Row : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Impianto"), Column("IDStruttura"), ForeignKey("Struttura", "ID"), LeftJoin("jIdStruttura"), TextualField("IdStrutturaNome"), NotNull]
        [LookupEditor(typeof(ImpiantoRow))]
        public Int32? IdStruttura
        {
            get { return Fields.IdStruttura[this]; }
            set { Fields.IdStruttura[this] = value; }
        }

        [DisplayName("Impianto"), Expression("jIdStruttura.[Nome]"), QuickSearch]
        public String IdStrutturaNome
        {
            get { return Fields.IdStrutturaNome[this]; }
            set { Fields.IdStrutturaNome[this] = value; }
        }

        [DisplayName("Anno"), NotNull, QuickSearch]
        public Int32? Anno
        {
            get { return Fields.Anno[this]; }
            set { Fields.Anno[this] = value; }
        }

        [DisplayName("N.Operai")]
        public Int32? NumOperai
        {
            get { return Fields.NumOperai[this]; }
            set { Fields.NumOperai[this] = value; }
        }

        [DisplayName("N.Amministr.")]
        public Int32? NumAmministrativi
        {
            get { return Fields.NumAmministrativi[this]; }
            set { Fields.NumAmministrativi[this] = value; }
        }

        [DisplayName("N.Tecnici")]
        public Int32? NumTecnici
        {
            get { return Fields.NumTecnici[this]; }
            set { Fields.NumTecnici[this] = value; }
        }

        [DisplayName("Lavorato (M3)"), Size(11), Scale(2)]
        public Decimal? LavoratoM3
        {
            get { return Fields.LavoratoM3[this]; }
            set { Fields.LavoratoM3[this] = value; }
        }

        [DisplayName("Lavorato (T)"), Size(11), Scale(2)]
        public Decimal? LavoratoQ
        {
            get { return Fields.LavoratoQ[this]; }
            set { Fields.LavoratoQ[this] = value; }
        }

        [DisplayName("Metodo"), Size(1)]
        public String MetodoLavorazione
        {
            get { return Fields.MetodoLavorazione[this]; }
            set { Fields.MetodoLavorazione[this] = value; }
        }

        [DisplayName("Mat.Tradiz?")]
        public Boolean? MaterialeTradizionale
        {
            get { return Fields.MaterialeTradizionale[this]; }
            set { Fields.MaterialeTradizionale[this] = value; }
        }

        [DisplayName("Mat.Riciclato?")]
        public Boolean? MaterialeRiciclato
        {
            get { return Fields.MaterialeRiciclato[this]; }
            set { Fields.MaterialeRiciclato[this] = value; }
        }

        [DisplayName(""), MasterDetailRelation(foreignKey: "IDRendiconto"), NotMapped]
        public List<RendicontoApprovvigionamentoRow> ApprovvigionamentoList
        {
            get { return Fields.ApprovvigionamentoList[this]; }
            set { Fields.ApprovvigionamentoList[this] = value; }
        }

        [DisplayName(""), MasterDetailRelation(foreignKey: "IDRendiconto"), NotMapped]
        public List<RendicontoDestinazioneTerritorialeRow> DestinazioneTerritorialeList
        {
            get { return Fields.DestinazioneTerritorialeList[this]; }
            set { Fields.DestinazioneTerritorialeList[this] = value; }
        }

        [DisplayName(""), MasterDetailRelation(foreignKey: "IDRendiconto"), NotMapped]
        public List<RendicontoDestinazioneUsoRow> DestinazioneUsoList
        {
            get { return Fields.DestinazioneUsoList[this]; }
            set { Fields.DestinazioneUsoList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.IdStrutturaNome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public Rendiconto3Row()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdStruttura;
            public Int32Field Anno;
            public Int32Field NumOperai;
            public Int32Field NumAmministrativi;
            public Int32Field NumTecnici;
            public DecimalField LavoratoM3;
            public DecimalField LavoratoQ;
            public StringField MetodoLavorazione;
            public BooleanField MaterialeTradizionale;
            public BooleanField MaterialeRiciclato;

            public StringField IdStrutturaNome;
            public RowListField<RendicontoApprovvigionamentoRow> ApprovvigionamentoList;
            public RowListField<RendicontoDestinazioneTerritorialeRow> DestinazioneTerritorialeList;
            public RowListField<RendicontoDestinazioneUsoRow> DestinazioneUsoList;
        }
    }
}
