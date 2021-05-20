
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
    [DisplayName("Autorizzazioni delle Cave"), InstanceName("Autorizzazione")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AutorizzazioneRow : Row<AutorizzazioneRow.RowFields>, IIdRow, INameRow
    {
#if ORACLE
        [Expression("jIdStruttura.[Nome] || '-' || NumeroAtto || ' del ' || TO_CHAR(DataAutorizzazione)"), QuickSearch, NameProperty]
#else
        [Expression("jIdStruttura.[Nome] + '-' + NumeroAtto + ' del ' + convert(varchar(50),DataAutorizzazione)"), QuickSearch, NameProperty]
#endif
        public String Descrizione
        {
            get { return Fields.Descrizione[this]; }
            set { Fields.Descrizione[this] = value; }
        }

        [Column("ID"), Identity, IdProperty]
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

        [Expression("jIdEsercente.[RagSoc]"), QuickSearch]
        public String IdEsercenteRagSoc
        {
            get { return Fields.IdEsercenteRagSoc[this]; }
            set { Fields.IdEsercenteRagSoc[this] = value; }
        }

        [DisplayName("PIAE"), Column("IDPiano"), ForeignKey("Piano", "ID"), LeftJoin("jIdPiano")]
        public Int32? IdPiano
        {
            get { return Fields.IdPiano[this]; }
            set { Fields.IdPiano[this] = value; }
        }

        [DisplayName("Area Estrattiva"), Column("IDPianoArea"), ForeignKey("PianoArea", "ID"), LeftJoin("jIdPianoArea")]

        public Int32? IdPianoArea
        {
            get { return Fields.IdPianoArea[this]; }
            set { Fields.IdPianoArea[this] = value; }
        }

        [DisplayName("Cava"), Column("IDStruttura"), ForeignKey("Struttura", "ID"), LeftJoin("jIdStruttura"), TextualField("IdStrutturaNome"), NotNull]
        [LookupEditor(typeof(CavaRow))]
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

        [DisplayName("Aut.Numero"), Size(15), NotNull]
        public String NumeroAtto
        {
            get { return Fields.NumeroAtto[this]; }
            set { Fields.NumeroAtto[this] = value; }
        }

        [DisplayName("N.Atto Notifica"), Size(15)]
        public String NumeroAttoNotifica
        {
            get { return Fields.NumeroAttoNotifica[this]; }
            set { Fields.NumeroAttoNotifica[this] = value; }
        }

        [DisplayName("Volume Autorizzato"), Size(11), Scale(2)]
        public Decimal? VolumeAutorizzato
        {
            get { return Fields.VolumeAutorizzato[this]; }
            set { Fields.VolumeAutorizzato[this] = value; }
        }

        [DisplayName("Peso Autorizzato"), Size(11), Scale(2)]
        public Decimal? PesoAutorizzato
        {
            get { return Fields.PesoAutorizzato[this]; }
            set { Fields.PesoAutorizzato[this] = value; }
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

        [DisplayName("Profondita Scavo"), Size(11), Scale(2)]
        public Decimal? ProfonditaScavo
        {
            get { return Fields.ProfonditaScavo[this]; }
            set { Fields.ProfonditaScavo[this] = value; }
        }

        [DisplayName("Data"), NotNull]
        public DateTime? DataAutorizzazione
        {
            get { return Fields.DataAutorizzazione[this]; }
            set { Fields.DataAutorizzazione[this] = value; }
        }

        [DisplayName("Data Notifica")]
        public DateTime? DataNotifica
        {
            get { return Fields.DataNotifica[this]; }
            set { Fields.DataNotifica[this] = value; }
        }

        [DisplayName("Scadenza Scavo")]
        public DateTime? DataScadenza
        {
            get { return Fields.DataScadenza[this]; }
            set { Fields.DataScadenza[this] = value; }
        }

        [DisplayName("Scad.Sistemazione"), NotNull]
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
        public String ConvenzioneN
        {
            get { return Fields.ConvenzioneN[this]; }
            set { Fields.ConvenzioneN[this] = value; }
        }

        [DisplayName("Data")]
        public DateTime? ConvenzioneData
        {
            get { return Fields.ConvenzioneData[this]; }
            set { Fields.ConvenzioneData[this] = value; }
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

        [DisplayName("Numero"), Size(100)]
        public String Autorizzazione104N
        {
            get { return Fields.Autorizzazione104N[this]; }
            set { Fields.Autorizzazione104N[this] = value; }
        }

        [DisplayName("Data")]
        public DateTime? Autorizzazione104Data
        {
            get { return Fields.Autorizzazione104Data[this]; }
            set { Fields.Autorizzazione104Data[this] = value; }
        }

        [DisplayName("Note")]
        public String Autorizzazione104Note
        {
            get { return Fields.Autorizzazione104Note[this]; }
            set { Fields.Autorizzazione104Note[this] = value; }
        }

        [DisplayName("Volume"), Size(11), Scale(2)]
        public Decimal? Volume104
        {
            get { return Fields.Volume104[this]; }
            set { Fields.Volume104[this] = value; }
        }

        [DisplayName("Numero"), Size(100)]
        public String SvincoloFidejussioneN
        {
            get { return Fields.SvincoloFidejussioneN[this]; }
            set { Fields.SvincoloFidejussioneN[this] = value; }
        }

        [DisplayName("Data")]
        public DateTime? SvincoloFidejussioneData
        {
            get { return Fields.SvincoloFidejussioneData[this]; }
            set { Fields.SvincoloFidejussioneData[this] = value; }
        }

        [DisplayName("Note")]
        public String SvincoloFidejussioneNote
        {
            get { return Fields.SvincoloFidejussioneNote[this]; }
            set { Fields.SvincoloFidejussioneNote[this] = value; }
        }

        [DisplayName("Numero"), Size(100)]
        public String CollaudoN
        {
            get { return Fields.CollaudoN[this]; }
            set { Fields.CollaudoN[this] = value; }
        }

        [DisplayName("Data")]
        public DateTime? CollaudoData
        {
            get { return Fields.CollaudoData[this]; }
            set { Fields.CollaudoData[this] = value; }
        }

        [DisplayName("Note")]
        public String CollaudoNote
        {
            get { return Fields.CollaudoNote[this]; }
            set { Fields.CollaudoNote[this] = value; }
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

        [DisplayName("Screening")]
        public Boolean? Screening
        {
            get { return Fields.Screening[this]; }
            set { Fields.Screening[this] = value; }
        }

        [DisplayName("Parere Motivato"), Size(50)]
        public String ParereMotivato
        {
            get { return Fields.ParereMotivato[this]; }
            set { Fields.ParereMotivato[this] = value; }
        }

        [DisplayName("Proprieta Terreni")]
        public String ProprietaTerreni
        {
            get { return Fields.ProprietaTerreni[this]; }
            set { Fields.ProprietaTerreni[this] = value; }
        }

        [DisplayName("Note Sistemazione")]
        public String NoteSistemazione
        {
            get { return Fields.NoteSistemazione[this]; }
            set { Fields.NoteSistemazione[this] = value; }
        }

        [DisplayName("Materiali"), MasterDetailRelation(foreignKey: "IDAutorizzazione"), NotMapped]
        public List<AutorizzazioneMaterialeRow> AutorizzazioneMaterialeList
        {
            get { return Fields.AutorizzazioneMaterialeList[this]; }
            set { Fields.AutorizzazioneMaterialeList[this] = value; }
        }

        [DisplayName("Deroghe"), MasterDetailRelation(foreignKey: "IDAutorizzazione"), NotMapped]
        public List<DerogaRow> DerogaList
        {
            get { return Fields.DerogaList[this]; }
            set { Fields.DerogaList[this] = value; }
        }

        [DisplayName("Proroghe"), MasterDetailRelation(foreignKey: "IDAutorizzazione"), NotMapped]
        public List<ProrogaRow> ProrogaList
        {
            get { return Fields.ProrogaList[this]; }
            set { Fields.ProrogaList[this] = value; }
        }

        public AutorizzazioneRow()
            : base(Fields)
        {
        }

        public AutorizzazioneRow(RowFields f)
            : base(f)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Descrizione;
            public Int32Field Id;
            public Int32Field IdPiano;
            public Int32Field IdPianoArea;
            public Int32Field IdStruttura;
            public Int32Field TipoRecuperoMorfologico;
            public Int32Field TipoRecuperoFinale;
            public Int32Field TipoDisponibilita;
            public StringField NumeroAtto;
            public StringField NumeroAttoNotifica;
            public DecimalField VolumeAutorizzato;
            public DecimalField PesoAutorizzato;
            public DecimalField SuperficieAutorizzata;
            public DecimalField SuperficieScavo;
            public DecimalField ProfonditaScavo;
            public DateTimeField DataAutorizzazione;
            public DateTimeField DataNotifica;
            public DateTimeField DataScadenza;
            public DateTimeField DataSistemazione;
            public StringField DenunciaEsercizioN;
            public DateTimeField DenunciaEsercizioData;
            public StringField ConvenzioneN;
            public DateTimeField ConvenzioneData;
            public StringField SospensioneN;
            public DateTimeField SospensioneData;
            public StringField RevocaN;
            public DateTimeField RevocaData;
            public StringField DecadenzaN;
            public DateTimeField DecadenzaData;
            public StringField RinunciaN;
            public DateTimeField RinunciaData;
            public StringField Autorizzazione104N;
            public DateTimeField Autorizzazione104Data;
            public StringField Autorizzazione104Note;
            public DecimalField Volume104;
            public StringField SvincoloFidejussioneN;
            public DateTimeField SvincoloFidejussioneData;
            public StringField SvincoloFidejussioneNote;
            public StringField CollaudoN;
            public DateTimeField CollaudoData;
            public StringField CollaudoNote;
            public StringField PendenzaScarpate;
            public StringField QuotaPianoCampagna;
            public StringField ParereAgenzia;
            public BooleanField Via;
            public BooleanField Screening;
            public StringField ParereMotivato;
            public StringField ProprietaTerreni;
            public StringField NoteSistemazione;
            public Int32Field IdEsercente;

            public StringField IdStrutturaNome;
            public StringField IdEsercenteRagSoc;

            public RowListField<AutorizzazioneMaterialeRow> AutorizzazioneMaterialeList;
            public RowListField<DerogaRow> DerogaList;
            public RowListField<ProrogaRow> ProrogaList;
        }
    }
}
