
using System.Collections.Generic;
using CaveSerene.Modules.Default.Enums;

namespace CaveSerene.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("Autorizzazione")]
    [DisplayName("Concessioni delle Miniere"), InstanceName("Concessione")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ConcessioneRow : Row, IIdRow, INameRow
    {
#if ORACLE
        [Expression("jIdStruttura.[Nome] || '-' || NumeroAtto || ' del ' || TO_CHAR(DataAutorizzazione)"), QuickSearch]
#else
        [Expression("jIdStruttura.[Nome] + '-' + NumeroAtto + ' del ' + convert(varchar(50),DataAutorizzazione)"), QuickSearch]
#endif
        public String Descrizione
        {
            get { return Fields.Descrizione[this]; }
            set { Fields.Descrizione[this] = value; }
        }

        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Esercente"), Column("IDEsercente"), ForeignKey("Esercente", "ID"), LeftJoin("jIdEsercente"), TextualField("IdEsercenteCodCcia"), NotNull]
        [LookupEditor(typeof(EsercenteRow))]
        public Int32? IdEsercente
        {
            get { return Fields.IdEsercente[this]; }
            set { Fields.IdEsercente[this] = value; }
        }

        [DisplayName("Esercente"), Expression("jIdEsercente.[RagSoc]"), QuickSearch]
        public String IdEsercenteRagSoc
        {
            get { return Fields.IdEsercenteRagSoc[this]; }
            set { Fields.IdEsercenteRagSoc[this] = value; }
        }

        [DisplayName("Miniera"), Column("IDStruttura"), ForeignKey("Struttura", "ID"), LeftJoin("jIdStruttura"), TextualField("IdStrutturaNome"), NotNull]
        [LookupEditor("Default.Miniera")]
        public Int32? IdStruttura
        {
            get { return Fields.IdStruttura[this]; }
            set { Fields.IdStruttura[this] = value; }
        }

        [DisplayName("Cava"), Expression("jIdStruttura.[Nome]")]
        public String IdStrutturaNome
        {
            get { return Fields.IdStrutturaNome[this]; }
            set { Fields.IdStrutturaNome[this] = value; }
        }

        [DisplayName("Recupero Morfologico")]
        public TipoRecuperoMorfologico? TipoRecuperoMorfologico
        {
            get { return (TipoRecuperoMorfologico?)Fields.TipoRecuperoMorfologico[this]; }
            set { Fields.TipoRecuperoMorfologico[this] = (int)value; }
        }

        [DisplayName("Recupero Finale")]
        public TipoRecuperoFinale? TipoRecuperoFinale
        {
            get { return (TipoRecuperoFinale?)Fields.TipoRecuperoFinale[this]; }
            set { Fields.TipoRecuperoFinale[this] = (int)value; }
        }

        [DisplayName("Disponibilita")]
        public TipoDisponibilita? TipoDisponibilita
        {
            get { return (TipoDisponibilita?)Fields.TipoDisponibilita[this]; }
            set { Fields.TipoDisponibilita[this] = (int)value; }
        }

        [DisplayName("Numero"), Size(15), NotNull]
        public String NumeroAtto
        {
            get { return Fields.NumeroAtto[this]; }
            set { Fields.NumeroAtto[this] = value; }
        }

        [DisplayName("Superficie Autorizzata"), Size(11), Scale(2)]
        public Decimal? SuperficieAutorizzata
        {
            get { return Fields.SuperficieAutorizzata[this]; }
            set { Fields.SuperficieAutorizzata[this] = value; }
        }

        [DisplayName("Superficie Scavo"), Size(11), Scale(2)]
        public Decimal? SuperficieScavo
        {
            get { return Fields.SuperficieScavo[this]; }
            set { Fields.SuperficieScavo[this] = value; }
        }

        [DisplayName("Rilascio"), NotNull]
        public DateTime? DataAutorizzazione
        {
            get { return Fields.DataAutorizzazione[this]; }
            set { Fields.DataAutorizzazione[this] = value; }
        }

        [DisplayName("Scadenza"), NotNull]
        public DateTime? DataSistemazione
        {
            get { return Fields.DataSistemazione[this]; }
            set { Fields.DataSistemazione[this] = value; }
        }

        [DisplayName("Numero"), Size(100)]
        public String DenunciaEsercizioN
        {
            get { return Fields.DenunciaEsercizioN[this]; }
            set { Fields.DenunciaEsercizioN[this] = value; }
        }

        [DisplayName("Data")]
        public DateTime? DenunciaEsercizioData
        {
            get { return Fields.DenunciaEsercizioData[this]; }
            set { Fields.DenunciaEsercizioData[this] = value; }
        }

        [DisplayName("Numero"), Size(100)]
        public String SospensioneN
        {
            get { return Fields.SospensioneN[this]; }
            set { Fields.SospensioneN[this] = value; }
        }

        [DisplayName("Data")]
        public DateTime? SospensioneData
        {
            get { return Fields.SospensioneData[this]; }
            set { Fields.SospensioneData[this] = value; }
        }

        [DisplayName("Numero"), Size(100)]
        public String RevocaN
        {
            get { return Fields.RevocaN[this]; }
            set { Fields.RevocaN[this] = value; }
        }

        [DisplayName("Data")]
        public DateTime? RevocaData
        {
            get { return Fields.RevocaData[this]; }
            set { Fields.RevocaData[this] = value; }
        }

        [DisplayName("Numero"), Size(100)]
        public String DecadenzaN
        {
            get { return Fields.DecadenzaN[this]; }
            set { Fields.DecadenzaN[this] = value; }
        }

        [DisplayName("Data")]
        public DateTime? DecadenzaData
        {
            get { return Fields.DecadenzaData[this]; }
            set { Fields.DecadenzaData[this] = value; }
        }

        [DisplayName("Numero"), Size(100)]
        public String RinunciaN
        {
            get { return Fields.RinunciaN[this]; }
            set { Fields.RinunciaN[this] = value; }
        }

        [DisplayName("Data")]
        public DateTime? RinunciaData
        {
            get { return Fields.RinunciaData[this]; }
            set { Fields.RinunciaData[this] = value; }
        }

        [DisplayName("Parere Agenzia"), Size(255)]
        public String ParereAgenzia
        {
            get { return Fields.ParereAgenzia[this]; }
            set { Fields.ParereAgenzia[this] = value; }
        }

        [DisplayName("Via"), Column("VIA")]
        public Boolean? Via
        {
            get { return Fields.Via[this]; }
            set { Fields.Via[this] = value; }
        }

        [DisplayName("Pendenza Scarpate"), Size(100)]
        public String PendenzaScarpate
        {
            get { return Fields.PendenzaScarpate[this]; }
            set { Fields.PendenzaScarpate[this] = value; }
        }

        [DisplayName("Quota Piano Campagna"), Size(100)]
        public String QuotaPianoCampagna
        {
            get { return Fields.QuotaPianoCampagna[this]; }
            set { Fields.QuotaPianoCampagna[this] = value; }
        }

        [DisplayName("Materiali"), MasterDetailRelation(foreignKey: "IDAutorizzazione"), NotMapped]
        public List<AutorizzazioneMaterialeRow> ConcessioneMaterialeList
        {
            get { return Fields.ConcessioneMaterialeList[this]; }
            set { Fields.ConcessioneMaterialeList[this] = value; }
        }

        [DisplayName("Proroghe"), MasterDetailRelation(foreignKey: "IDAutorizzazione"), NotMapped]
        public List<ProrogaRow> ProrogaList
        {
            get { return Fields.ProrogaList[this]; }
            set { Fields.ProrogaList[this] = value; }
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

        public ConcessioneRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Descrizione;
            public Int32Field Id;
            public Int32Field IdStruttura;
            public Int32Field TipoRecuperoMorfologico;
            public Int32Field TipoRecuperoFinale;
            public Int32Field TipoDisponibilita;
            public StringField NumeroAtto;
            public DecimalField SuperficieAutorizzata;
            public DecimalField SuperficieScavo;
            public DateTimeField DataAutorizzazione;
            public DateTimeField DataSistemazione;
            public StringField DenunciaEsercizioN;
            public DateTimeField DenunciaEsercizioData;
            public StringField SospensioneN;
            public DateTimeField SospensioneData;
            public StringField ParereAgenzia;
            public BooleanField Via;
            public StringField RevocaN;
            public DateTimeField RevocaData;
            public StringField DecadenzaN;
            public DateTimeField DecadenzaData;
            public StringField RinunciaN;
            public DateTimeField RinunciaData;
            public StringField PendenzaScarpate;
            public StringField QuotaPianoCampagna;
            public Int32Field IdEsercente;

            public StringField IdStrutturaNome;
            public StringField IdEsercenteRagSoc;

            public RowListField<AutorizzazioneMaterialeRow> ConcessioneMaterialeList;
            public RowListField<ProrogaRow> ProrogaList;
        }
    }
}
