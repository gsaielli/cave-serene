
namespace CaveSerene.Default.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("Deroga")]
    [DisplayName("Deroga"), InstanceName("Deroga")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DerogaRow : Row<DerogaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Autorizzazione"), Column("IDAutorizzazione"), NotNull, ForeignKey("Autorizzazione", "ID"), LeftJoin("jIdAutorizzazione"), TextualField("IdAutorizzazioneNumeroAtto")]
        public Int32? IdAutorizzazione
        {
            get { return Fields.IdAutorizzazione[this]; }
            set { Fields.IdAutorizzazione[this] = value; }
        }

        [DisplayName("Protocollo"), Size(100), QuickSearch, NameProperty]
        public String Protocollo
        {
            get { return Fields.Protocollo[this]; }
            set { Fields.Protocollo[this] = value; }
        }

        [DisplayName("Data")]
        public DateTime? Data
        {
            get { return Fields.Data[this]; }
            set { Fields.Data[this] = value; }
        }

        [DisplayName("Volume Deroga"), Size(10), Scale(1), NotNull]
        public Decimal? VolumeDeroga
        {
            get { return Fields.VolumeDeroga[this]; }
            set { Fields.VolumeDeroga[this] = value; }
        }

        [DisplayName("Note"), Size(100)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Id Autorizzazione Id Piano Area"), Expression("jIdAutorizzazione.[IDPianoArea]")]
        public Int32? IdAutorizzazioneIdPianoArea
        {
            get { return Fields.IdAutorizzazioneIdPianoArea[this]; }
            set { Fields.IdAutorizzazioneIdPianoArea[this] = value; }
        }

        [DisplayName("Id Autorizzazione Id Struttura"), Expression("jIdAutorizzazione.[IDStruttura]")]
        public Int32? IdAutorizzazioneIdStruttura
        {
            get { return Fields.IdAutorizzazioneIdStruttura[this]; }
            set { Fields.IdAutorizzazioneIdStruttura[this] = value; }
        }

        [DisplayName("Id Autorizzazione Tipo Recupero Morfologico"), Expression("jIdAutorizzazione.[TipoRecuperoMorfologico]")]
        public Int32? IdAutorizzazioneTipoRecuperoMorfologico
        {
            get { return Fields.IdAutorizzazioneTipoRecuperoMorfologico[this]; }
            set { Fields.IdAutorizzazioneTipoRecuperoMorfologico[this] = value; }
        }

        [DisplayName("Id Autorizzazione Tipo Recupero Finale"), Expression("jIdAutorizzazione.[TipoRecuperoFinale]")]
        public Int32? IdAutorizzazioneTipoRecuperoFinale
        {
            get { return Fields.IdAutorizzazioneTipoRecuperoFinale[this]; }
            set { Fields.IdAutorizzazioneTipoRecuperoFinale[this] = value; }
        }

        [DisplayName("Id Autorizzazione Tipo Disponibilita"), Expression("jIdAutorizzazione.[TipoDisponibilita]")]
        public Int32? IdAutorizzazioneTipoDisponibilita
        {
            get { return Fields.IdAutorizzazioneTipoDisponibilita[this]; }
            set { Fields.IdAutorizzazioneTipoDisponibilita[this] = value; }
        }

        [DisplayName("Id Autorizzazione Numero Atto"), Expression("jIdAutorizzazione.[NumeroAtto]")]
        public String IdAutorizzazioneNumeroAtto
        {
            get { return Fields.IdAutorizzazioneNumeroAtto[this]; }
            set { Fields.IdAutorizzazioneNumeroAtto[this] = value; }
        }

        [DisplayName("Id Autorizzazione Numero Atto Notifica"), Expression("jIdAutorizzazione.[NumeroAttoNotifica]")]
        public String IdAutorizzazioneNumeroAttoNotifica
        {
            get { return Fields.IdAutorizzazioneNumeroAttoNotifica[this]; }
            set { Fields.IdAutorizzazioneNumeroAttoNotifica[this] = value; }
        }

        [DisplayName("Id Autorizzazione Volume Autorizzato"), Expression("jIdAutorizzazione.[VolumeAutorizzato]")]
        public Decimal? IdAutorizzazioneVolumeAutorizzato
        {
            get { return Fields.IdAutorizzazioneVolumeAutorizzato[this]; }
            set { Fields.IdAutorizzazioneVolumeAutorizzato[this] = value; }
        }

        [DisplayName("Id Autorizzazione Peso Autorizzato"), Expression("jIdAutorizzazione.[PesoAutorizzato]")]
        public Decimal? IdAutorizzazionePesoAutorizzato
        {
            get { return Fields.IdAutorizzazionePesoAutorizzato[this]; }
            set { Fields.IdAutorizzazionePesoAutorizzato[this] = value; }
        }

        [DisplayName("Id Autorizzazione Superficie Autorizzata"), Expression("jIdAutorizzazione.[SuperficieAutorizzata]")]
        public Decimal? IdAutorizzazioneSuperficieAutorizzata
        {
            get { return Fields.IdAutorizzazioneSuperficieAutorizzata[this]; }
            set { Fields.IdAutorizzazioneSuperficieAutorizzata[this] = value; }
        }

        [DisplayName("Id Autorizzazione Superficie Scavo"), Expression("jIdAutorizzazione.[SuperficieScavo]")]
        public Decimal? IdAutorizzazioneSuperficieScavo
        {
            get { return Fields.IdAutorizzazioneSuperficieScavo[this]; }
            set { Fields.IdAutorizzazioneSuperficieScavo[this] = value; }
        }

        [DisplayName("Id Autorizzazione Profondita Scavo"), Expression("jIdAutorizzazione.[ProfonditaScavo]")]
        public Decimal? IdAutorizzazioneProfonditaScavo
        {
            get { return Fields.IdAutorizzazioneProfonditaScavo[this]; }
            set { Fields.IdAutorizzazioneProfonditaScavo[this] = value; }
        }

        [DisplayName("Id Autorizzazione Data Autorizzazione"), Expression("jIdAutorizzazione.[DataAutorizzazione]")]
        public DateTime? IdAutorizzazioneDataAutorizzazione
        {
            get { return Fields.IdAutorizzazioneDataAutorizzazione[this]; }
            set { Fields.IdAutorizzazioneDataAutorizzazione[this] = value; }
        }

        [DisplayName("Id Autorizzazione Data Notifica"), Expression("jIdAutorizzazione.[DataNotifica]")]
        public DateTime? IdAutorizzazioneDataNotifica
        {
            get { return Fields.IdAutorizzazioneDataNotifica[this]; }
            set { Fields.IdAutorizzazioneDataNotifica[this] = value; }
        }

        [DisplayName("Id Autorizzazione Data Scadenza"), Expression("jIdAutorizzazione.[DataScadenza]")]
        public DateTime? IdAutorizzazioneDataScadenza
        {
            get { return Fields.IdAutorizzazioneDataScadenza[this]; }
            set { Fields.IdAutorizzazioneDataScadenza[this] = value; }
        }

        [DisplayName("Id Autorizzazione Data Sistemazione"), Expression("jIdAutorizzazione.[DataSistemazione]")]
        public DateTime? IdAutorizzazioneDataSistemazione
        {
            get { return Fields.IdAutorizzazioneDataSistemazione[this]; }
            set { Fields.IdAutorizzazioneDataSistemazione[this] = value; }
        }

        [DisplayName("Id Autorizzazione Denuncia Esercizio N"), Expression("jIdAutorizzazione.[DenunciaEsercizioN]")]
        public String IdAutorizzazioneDenunciaEsercizioN
        {
            get { return Fields.IdAutorizzazioneDenunciaEsercizioN[this]; }
            set { Fields.IdAutorizzazioneDenunciaEsercizioN[this] = value; }
        }

        [DisplayName("Id Autorizzazione Denuncia Esercizio Data"), Expression("jIdAutorizzazione.[DenunciaEsercizioData]")]
        public DateTime? IdAutorizzazioneDenunciaEsercizioData
        {
            get { return Fields.IdAutorizzazioneDenunciaEsercizioData[this]; }
            set { Fields.IdAutorizzazioneDenunciaEsercizioData[this] = value; }
        }

        [DisplayName("Id Autorizzazione Convenzione N"), Expression("jIdAutorizzazione.[ConvenzioneN]")]
        public String IdAutorizzazioneConvenzioneN
        {
            get { return Fields.IdAutorizzazioneConvenzioneN[this]; }
            set { Fields.IdAutorizzazioneConvenzioneN[this] = value; }
        }

        [DisplayName("Id Autorizzazione Convenzione Data"), Expression("jIdAutorizzazione.[ConvenzioneData]")]
        public DateTime? IdAutorizzazioneConvenzioneData
        {
            get { return Fields.IdAutorizzazioneConvenzioneData[this]; }
            set { Fields.IdAutorizzazioneConvenzioneData[this] = value; }
        }

        [DisplayName("Id Autorizzazione Sospensione N"), Expression("jIdAutorizzazione.[SospensioneN]")]
        public String IdAutorizzazioneSospensioneN
        {
            get { return Fields.IdAutorizzazioneSospensioneN[this]; }
            set { Fields.IdAutorizzazioneSospensioneN[this] = value; }
        }

        [DisplayName("Id Autorizzazione Sospensione Data"), Expression("jIdAutorizzazione.[SospensioneData]")]
        public DateTime? IdAutorizzazioneSospensioneData
        {
            get { return Fields.IdAutorizzazioneSospensioneData[this]; }
            set { Fields.IdAutorizzazioneSospensioneData[this] = value; }
        }

        [DisplayName("Id Autorizzazione Revoca N"), Expression("jIdAutorizzazione.[RevocaN]")]
        public String IdAutorizzazioneRevocaN
        {
            get { return Fields.IdAutorizzazioneRevocaN[this]; }
            set { Fields.IdAutorizzazioneRevocaN[this] = value; }
        }

        [DisplayName("Id Autorizzazione Revoca Data"), Expression("jIdAutorizzazione.[RevocaData]")]
        public DateTime? IdAutorizzazioneRevocaData
        {
            get { return Fields.IdAutorizzazioneRevocaData[this]; }
            set { Fields.IdAutorizzazioneRevocaData[this] = value; }
        }

        [DisplayName("Id Autorizzazione Decadenza N"), Expression("jIdAutorizzazione.[DecadenzaN]")]
        public String IdAutorizzazioneDecadenzaN
        {
            get { return Fields.IdAutorizzazioneDecadenzaN[this]; }
            set { Fields.IdAutorizzazioneDecadenzaN[this] = value; }
        }

        [DisplayName("Id Autorizzazione Decadenza Data"), Expression("jIdAutorizzazione.[DecadenzaData]")]
        public DateTime? IdAutorizzazioneDecadenzaData
        {
            get { return Fields.IdAutorizzazioneDecadenzaData[this]; }
            set { Fields.IdAutorizzazioneDecadenzaData[this] = value; }
        }

        [DisplayName("Id Autorizzazione Rinuncia N"), Expression("jIdAutorizzazione.[RinunciaN]")]
        public String IdAutorizzazioneRinunciaN
        {
            get { return Fields.IdAutorizzazioneRinunciaN[this]; }
            set { Fields.IdAutorizzazioneRinunciaN[this] = value; }
        }

        [DisplayName("Id Autorizzazione Rinuncia Data"), Expression("jIdAutorizzazione.[RinunciaData]")]
        public DateTime? IdAutorizzazioneRinunciaData
        {
            get { return Fields.IdAutorizzazioneRinunciaData[this]; }
            set { Fields.IdAutorizzazioneRinunciaData[this] = value; }
        }

        [DisplayName("Id Autorizzazione Autorizzazione104 N"), Expression("jIdAutorizzazione.[Autorizzazione104N]")]
        public String IdAutorizzazioneAutorizzazione104N
        {
            get { return Fields.IdAutorizzazioneAutorizzazione104N[this]; }
            set { Fields.IdAutorizzazioneAutorizzazione104N[this] = value; }
        }

        [DisplayName("Id Autorizzazione Autorizzazione104 Data"), Expression("jIdAutorizzazione.[Autorizzazione104Data]")]
        public DateTime? IdAutorizzazioneAutorizzazione104Data
        {
            get { return Fields.IdAutorizzazioneAutorizzazione104Data[this]; }
            set { Fields.IdAutorizzazioneAutorizzazione104Data[this] = value; }
        }

        [DisplayName("Id Autorizzazione Autorizzazione104 Note"), Expression("jIdAutorizzazione.[Autorizzazione104Note]")]
        public String IdAutorizzazioneAutorizzazione104Note
        {
            get { return Fields.IdAutorizzazioneAutorizzazione104Note[this]; }
            set { Fields.IdAutorizzazioneAutorizzazione104Note[this] = value; }
        }

        [DisplayName("Id Autorizzazione Volume104"), Expression("jIdAutorizzazione.[Volume104]")]
        public Decimal? IdAutorizzazioneVolume104
        {
            get { return Fields.IdAutorizzazioneVolume104[this]; }
            set { Fields.IdAutorizzazioneVolume104[this] = value; }
        }

        [DisplayName("Id Autorizzazione Svincolo Fidejussione N"), Expression("jIdAutorizzazione.[SvincoloFidejussioneN]")]
        public String IdAutorizzazioneSvincoloFidejussioneN
        {
            get { return Fields.IdAutorizzazioneSvincoloFidejussioneN[this]; }
            set { Fields.IdAutorizzazioneSvincoloFidejussioneN[this] = value; }
        }

        [DisplayName("Id Autorizzazione Svincolo Fidejussione Data"), Expression("jIdAutorizzazione.[SvincoloFidejussioneData]")]
        public DateTime? IdAutorizzazioneSvincoloFidejussioneData
        {
            get { return Fields.IdAutorizzazioneSvincoloFidejussioneData[this]; }
            set { Fields.IdAutorizzazioneSvincoloFidejussioneData[this] = value; }
        }

        [DisplayName("Id Autorizzazione Svincolo Fidejussione Note"), Expression("jIdAutorizzazione.[SvincoloFidejussioneNote]")]
        public String IdAutorizzazioneSvincoloFidejussioneNote
        {
            get { return Fields.IdAutorizzazioneSvincoloFidejussioneNote[this]; }
            set { Fields.IdAutorizzazioneSvincoloFidejussioneNote[this] = value; }
        }

        [DisplayName("Id Autorizzazione Collaudo N"), Expression("jIdAutorizzazione.[CollaudoN]")]
        public String IdAutorizzazioneCollaudoN
        {
            get { return Fields.IdAutorizzazioneCollaudoN[this]; }
            set { Fields.IdAutorizzazioneCollaudoN[this] = value; }
        }

        [DisplayName("Id Autorizzazione Collaudo Data"), Expression("jIdAutorizzazione.[CollaudoData]")]
        public DateTime? IdAutorizzazioneCollaudoData
        {
            get { return Fields.IdAutorizzazioneCollaudoData[this]; }
            set { Fields.IdAutorizzazioneCollaudoData[this] = value; }
        }

        [DisplayName("Id Autorizzazione Collaudo Note"), Expression("jIdAutorizzazione.[CollaudoNote]")]
        public String IdAutorizzazioneCollaudoNote
        {
            get { return Fields.IdAutorizzazioneCollaudoNote[this]; }
            set { Fields.IdAutorizzazioneCollaudoNote[this] = value; }
        }

        [DisplayName("Id Autorizzazione Pendenza Scarpate"), Expression("jIdAutorizzazione.[PendenzaScarpate]")]
        public String IdAutorizzazionePendenzaScarpate
        {
            get { return Fields.IdAutorizzazionePendenzaScarpate[this]; }
            set { Fields.IdAutorizzazionePendenzaScarpate[this] = value; }
        }

        [DisplayName("Id Autorizzazione Quota Piano Campagna"), Expression("jIdAutorizzazione.[QuotaPianoCampagna]")]
        public String IdAutorizzazioneQuotaPianoCampagna
        {
            get { return Fields.IdAutorizzazioneQuotaPianoCampagna[this]; }
            set { Fields.IdAutorizzazioneQuotaPianoCampagna[this] = value; }
        }

        [DisplayName("Id Autorizzazione Parere Agenzia"), Expression("jIdAutorizzazione.[ParereAgenzia]")]
        public String IdAutorizzazioneParereAgenzia
        {
            get { return Fields.IdAutorizzazioneParereAgenzia[this]; }
            set { Fields.IdAutorizzazioneParereAgenzia[this] = value; }
        }

        [DisplayName("Id Autorizzazione Via"), Expression("jIdAutorizzazione.[VIA]")]
        public Boolean? IdAutorizzazioneVia
        {
            get { return Fields.IdAutorizzazioneVia[this]; }
            set { Fields.IdAutorizzazioneVia[this] = value; }
        }

        [DisplayName("Id Autorizzazione Screening"), Expression("jIdAutorizzazione.[Screening]")]
        public Boolean? IdAutorizzazioneScreening
        {
            get { return Fields.IdAutorizzazioneScreening[this]; }
            set { Fields.IdAutorizzazioneScreening[this] = value; }
        }

        [DisplayName("Id Autorizzazione Parere Motivato"), Expression("jIdAutorizzazione.[ParereMotivato]")]
        public String IdAutorizzazioneParereMotivato
        {
            get { return Fields.IdAutorizzazioneParereMotivato[this]; }
            set { Fields.IdAutorizzazioneParereMotivato[this] = value; }
        }

        [DisplayName("Id Autorizzazione Proprieta Terreni"), Expression("jIdAutorizzazione.[ProprietaTerreni]")]
        public String IdAutorizzazioneProprietaTerreni
        {
            get { return Fields.IdAutorizzazioneProprietaTerreni[this]; }
            set { Fields.IdAutorizzazioneProprietaTerreni[this] = value; }
        }

        [DisplayName("Id Autorizzazione Note Sistemazione"), Expression("jIdAutorizzazione.[NoteSistemazione]")]
        public String IdAutorizzazioneNoteSistemazione
        {
            get { return Fields.IdAutorizzazioneNoteSistemazione[this]; }
            set { Fields.IdAutorizzazioneNoteSistemazione[this] = value; }
        }

        [DisplayName("Id Autorizzazione Id Esercente"), Expression("jIdAutorizzazione.[IDEsercente]")]
        public Int32? IdAutorizzazioneIdEsercente
        {
            get { return Fields.IdAutorizzazioneIdEsercente[this]; }
            set { Fields.IdAutorizzazioneIdEsercente[this] = value; }
        }

        public DerogaRow()
            : base(Fields)
        {
        }

        public DerogaRow(RowFields f)
            : base(f)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdAutorizzazione;
            public StringField Protocollo;
            public DateTimeField Data;
            public DecimalField VolumeDeroga;
            public StringField Note;

            public Int32Field IdAutorizzazioneIdPianoArea;
            public Int32Field IdAutorizzazioneIdStruttura;
            public Int32Field IdAutorizzazioneTipoRecuperoMorfologico;
            public Int32Field IdAutorizzazioneTipoRecuperoFinale;
            public Int32Field IdAutorizzazioneTipoDisponibilita;
            public StringField IdAutorizzazioneNumeroAtto;
            public StringField IdAutorizzazioneNumeroAttoNotifica;
            public DecimalField IdAutorizzazioneVolumeAutorizzato;
            public DecimalField IdAutorizzazionePesoAutorizzato;
            public DecimalField IdAutorizzazioneSuperficieAutorizzata;
            public DecimalField IdAutorizzazioneSuperficieScavo;
            public DecimalField IdAutorizzazioneProfonditaScavo;
            public DateTimeField IdAutorizzazioneDataAutorizzazione;
            public DateTimeField IdAutorizzazioneDataNotifica;
            public DateTimeField IdAutorizzazioneDataScadenza;
            public DateTimeField IdAutorizzazioneDataSistemazione;
            public StringField IdAutorizzazioneDenunciaEsercizioN;
            public DateTimeField IdAutorizzazioneDenunciaEsercizioData;
            public StringField IdAutorizzazioneConvenzioneN;
            public DateTimeField IdAutorizzazioneConvenzioneData;
            public StringField IdAutorizzazioneSospensioneN;
            public DateTimeField IdAutorizzazioneSospensioneData;
            public StringField IdAutorizzazioneRevocaN;
            public DateTimeField IdAutorizzazioneRevocaData;
            public StringField IdAutorizzazioneDecadenzaN;
            public DateTimeField IdAutorizzazioneDecadenzaData;
            public StringField IdAutorizzazioneRinunciaN;
            public DateTimeField IdAutorizzazioneRinunciaData;
            public StringField IdAutorizzazioneAutorizzazione104N;
            public DateTimeField IdAutorizzazioneAutorizzazione104Data;
            public StringField IdAutorizzazioneAutorizzazione104Note;
            public DecimalField IdAutorizzazioneVolume104;
            public StringField IdAutorizzazioneSvincoloFidejussioneN;
            public DateTimeField IdAutorizzazioneSvincoloFidejussioneData;
            public StringField IdAutorizzazioneSvincoloFidejussioneNote;
            public StringField IdAutorizzazioneCollaudoN;
            public DateTimeField IdAutorizzazioneCollaudoData;
            public StringField IdAutorizzazioneCollaudoNote;
            public StringField IdAutorizzazionePendenzaScarpate;
            public StringField IdAutorizzazioneQuotaPianoCampagna;
            public StringField IdAutorizzazioneParereAgenzia;
            public BooleanField IdAutorizzazioneVia;
            public BooleanField IdAutorizzazioneScreening;
            public StringField IdAutorizzazioneParereMotivato;
            public StringField IdAutorizzazioneProprietaTerreni;
            public StringField IdAutorizzazioneNoteSistemazione;
            public Int32Field IdAutorizzazioneIdEsercente;
        }
    }
}
