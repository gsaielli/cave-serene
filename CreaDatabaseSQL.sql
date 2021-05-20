--Prima create il database da soli; se non usate localdb dovete aggiustare la connessione in Web.config

USE [CaveSerene]
GO
/****** Object:  Table [dbo].[Struttura]    Script Date: 31/05/2019 16:52:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Struttura](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IDComune] [varchar](6) NULL,
	[TipoPosizione] [int] NULL,
	[TipoDissesto] [int] NULL,
	[TipoColtivazione] [int] NULL,
	[Progressivo] [int] NULL,
	[Nome] [varchar](250) NULL,
	[Frazione] [varchar](50) NULL,
	[CatastoProvinciale] [varchar](50) NULL,
	[CoordinataX] [numeric](18, 6) NULL,
	[CoordinataY] [numeric](18, 6) NULL,
	[VincoloAmbientale] [int] NULL,
	[AreaProtetta] [bit] NULL,
	[ProfonditaFalda] [numeric](9, 2) NULL,
	[TipoStruttura] [int] NOT NULL,
	[TipoImpianto] [int] NULL,
	[DataInstallazioneImpianto] [date] NULL,
 CONSTRAINT [PK_Struttura] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[Cava]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[Cava]
AS
SELECT        ID, IDComune, TipoPosizione, TipoDissesto, TipoColtivazione, Progressivo, Nome, Frazione, CatastoProvinciale, CoordinataX, CoordinataY, VincoloAmbientale, AreaProtetta, ProfonditaFalda, TipoStruttura
FROM            dbo.Struttura
WHERE        (TipoStruttura = 1)
GO
/****** Object:  View [dbo].[Miniera]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[Miniera]
AS
SELECT        ID, IDComune, TipoPosizione, TipoDissesto, TipoColtivazione, Progressivo, Nome, Frazione, CatastoProvinciale, CoordinataX, CoordinataY, VincoloAmbientale, AreaProtetta, ProfonditaFalda, TipoStruttura
FROM            dbo.Struttura
WHERE        (TipoStruttura = 3)
GO
/****** Object:  View [dbo].[Impianto]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE VIEW [dbo].[Impianto]
AS
SELECT        ID, IDComune, Progressivo, Nome, Frazione, CatastoProvinciale, CoordinataX, CoordinataY, TipoImpianto, DataInstallazioneImpianto, TipoStruttura
FROM            dbo.Struttura
WHERE        (TipoStruttura = 2)
GO
/****** Object:  Table [dbo].[Rendiconto]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rendiconto](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IDAutorizzazione] [int] NULL,
	[IDStruttura] [int] NULL,
	[Anno] [int] NULL,
	[NumOperai] [int] NULL,
	[NumAmministrativi] [int] NULL,
	[NumTecnici] [int] NULL,
	[NumAddetti] [int] NULL,
	[OreLavorate] [numeric](9, 2) NULL,
	[NumeroMesiAttivita] [numeric](9, 2) NULL,
	[VolAcquaEstrazione] [numeric](11, 2) NULL,
	[VolAcquaLavorazioni] [numeric](11, 2) NULL,
	[StruttDepMatInut] [bit] NULL,
	[Esplosivo] [numeric](11, 2) NULL,
	[Detonatori] [int] NULL,
	[FiloElicoidale] [numeric](11, 2) NULL,
	[MezzoMeccanico] [numeric](11, 2) NULL,
	[MicceLentaCombustione] [numeric](11, 2) NULL,
	[QuantitaKW] [numeric](11, 2) NULL,
	[ImportoKW] [numeric](11, 2) NULL,
	[QuantitaGasolio] [numeric](11, 2) NULL,
	[ImportoGasolio] [numeric](11, 2) NULL,
	[QuantitaBenzina] [numeric](11, 2) NULL,
	[ImportoBenzina] [numeric](11, 2) NULL,
	[DescrizioneAltreFontiEnergia] [varchar](100) NULL,
	[UnitaMisuraAltreFontiEnergia] [varchar](50) NULL,
	[QuantitaAltreFontiEnergia] [numeric](11, 2) NULL,
	[ImportoAltreFontiEnergia] [numeric](11, 2) NULL,
	[LavoratoM3] [numeric](11, 2) NULL,
	[LavoratoQ] [numeric](11, 2) NULL,
	[MetodoLavorazione] [varchar](1) NULL,
	[MaterialeTradizionale] [bit] NULL,
	[MaterialeRiciclato] [bit] NULL,
	[TipologiaImpianto] [varchar](1) NULL,
	[DirittoProp] [numeric](11, 2) NULL,
	[AreaLavorazione] [numeric](11, 2) NULL,
	[AreaColtivazione] [numeric](11, 2) NULL,
	[DirettoreResponsabile] [varchar](100) NULL,
	[Sorvegliante] [varchar](100) NULL,
	[ResponsabileSicurezza] [varchar](100) NULL,
 CONSTRAINT [PK_Rendiconto] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comune]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comune](
	[ID] [varchar](6) NOT NULL,
	[IDEnte] [varchar](3) NULL,
	[Nome] [varchar](45) NULL,
	[CAP] [varchar](5) NULL,
	[ZonaAlt] [varchar](1) NULL,
	[CodCatastale] [varchar](4) NULL,
 CONSTRAINT [PK_Comuni] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Autorizzazione]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Autorizzazione](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IDPiano] [int] NULL,
	[IDPianoArea] [int] NULL,
	[IDStruttura] [int] NULL,
	[IDEsercente] [int] NULL,
	[TipoRecuperoMorfologico] [int] NULL,
	[TipoRecuperoFinale] [int] NULL,
	[TipoDisponibilita] [int] NULL,
	[NumeroAtto] [varchar](15) NULL,
	[NumeroAttoNotifica] [varchar](15) NULL,
	[VolumeAutorizzato] [numeric](11, 2) NULL,
	[PesoAutorizzato] [numeric](11, 2) NULL,
	[SuperficieAutorizzata] [numeric](11, 2) NULL,
	[SuperficieScavo] [numeric](11, 2) NULL,
	[ProfonditaScavo] [numeric](11, 2) NULL,
	[DataAutorizzazione] [date] NULL,
	[DataNotifica] [date] NULL,
	[DataScadenza] [date] NULL,
	[DataSistemazione] [date] NULL,
	[DenunciaEsercizioN] [varchar](100) NULL,
	[DenunciaEsercizioData] [date] NULL,
	[ConvenzioneN] [varchar](100) NULL,
	[ConvenzioneData] [date] NULL,
	[SospensioneN] [varchar](100) NULL,
	[SospensioneData] [date] NULL,
	[RevocaN] [varchar](100) NULL,
	[RevocaData] [date] NULL,
	[DecadenzaN] [varchar](100) NULL,
	[DecadenzaData] [date] NULL,
	[RinunciaN] [varchar](100) NULL,
	[RinunciaData] [date] NULL,
	[Autorizzazione104N] [varchar](100) NULL,
	[Autorizzazione104Data] [date] NULL,
	[Autorizzazione104Note] [varchar](max) NULL,
	[Volume104] [numeric](11, 2) NULL,
	[SvincoloFidejussioneN] [varchar](100) NULL,
	[SvincoloFidejussioneData] [date] NULL,
	[SvincoloFidejussioneNote] [varchar](max) NULL,
	[CollaudoN] [varchar](100) NULL,
	[CollaudoData] [date] NULL,
	[CollaudoNote] [varchar](max) NULL,
	[PendenzaScarpate] [varchar](100) NULL,
	[QuotaPianoCampagna] [varchar](100) NULL,
	[ParereAgenzia] [varchar](255) NULL,
	[VIA] [bit] NULL,
	[Screening] [bit] NULL,
	[ParereMotivato] [varchar](50) NULL,
	[ProprietaTerreni] [varchar](max) NULL,
	[NoteSistemazione] [varchar](max) NULL,
 CONSTRAINT [PK_Autorizzazione] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[RendicontoExt]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[RendicontoExt]
AS
SELECT r.*, c.Nome Comune, s.Nome + '-' + a.NumeroAtto + ' del ' + cast(a.DataAutorizzazione as varchar(20)) Descrizione,
	s.TipoStruttura 
FROM     
	Rendiconto r 
		inner join Autorizzazione a on r.IDAutorizzazione = a.ID 
		inner join Struttura s on a.IDStruttura = s.id
		inner join Comune c on s.IDComune = c.ID
GO
/****** Object:  Table [dbo].[Area]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Area](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [varchar](250) NOT NULL,
	[TipoArea] [int] NULL,
	[TipoStoria] [int] NULL,
	[TipoPosizione] [int] NULL,
	[Progressivo] [int] NULL,
	[CodiceAreaProv] [varchar](50) NULL,
	[CoordinataX] [numeric](18, 6) NULL,
	[CoordinataY] [numeric](18, 6) NULL,
	[Note] [varchar](max) NULL,
 CONSTRAINT [PK_Polo] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Atto]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Atto](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[NumAtto] [int] NOT NULL,
	[DataAtto] [date] NOT NULL,
	[IDPiano] [int] NOT NULL,
	[TipoAtto] [int] NULL,
 CONSTRAINT [PK_Atto] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AutorizzazioneMateriale]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AutorizzazioneMateriale](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IDAutorizzazione] [int] NOT NULL,
	[IDMateriale] [int] NOT NULL,
	[QuantitaAutorizzata] [numeric](10, 1) NULL,
	[PesoAutorizzato] [numeric](9, 2) NULL,
 CONSTRAINT [PK_AutorizzazioneMateriale] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Deroga]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Deroga](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IDAutorizzazione] [int] NOT NULL,
	[Protocollo] [varchar](100) NULL,
	[Data] [date] NULL,
	[VolumeDeroga] [numeric](10, 1) NOT NULL,
	[Note] [varchar](100) NULL,
 CONSTRAINT [PK_Deroga] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Ente]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ente](
	[ID] [varchar](3) NOT NULL,
	[IDRegione] [varchar](2) NULL,
	[Nome] [varchar](60) NULL,
	[Sigla] [varchar](2) NULL,
 CONSTRAINT [PK_Ente] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Esercente]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Esercente](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CodCCIA] [varchar](50) NULL,
	[RagSoc] [varchar](50) NULL,
	[Indirizzo] [varchar](250) NULL,
	[CAP] [int] NULL,
	[Frazione] [varchar](50) NULL,
	[IDComune] [varchar](6) NULL,
	[CodiceFiscale] [varchar](16) NULL,
	[PartitaIVA] [varchar](16) NULL,
	[CodiceFiscaleCompilatore] [varchar](16) NULL,
	[Telefono] [varchar](50) NULL,
	[EMail] [varchar](120) NULL,
	[LegaleRappresentante] [varchar](120) NULL,
	[DatiFallimento] [varchar](max) NULL,
 CONSTRAINT [PK_Esercente] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Exceptions]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Exceptions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[GUID] [uniqueidentifier] NOT NULL,
	[ApplicationName] [nvarchar](50) NOT NULL,
	[MachineName] [nvarchar](50) NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[Type] [nvarchar](100) NOT NULL,
	[IsProtected] [bit] NOT NULL,
	[Host] [nvarchar](100) NULL,
	[Url] [nvarchar](500) NULL,
	[HTTPMethod] [nvarchar](10) NULL,
	[IPAddress] [nvarchar](40) NULL,
	[Source] [nvarchar](100) NULL,
	[Message] [nvarchar](1000) NULL,
	[Detail] [nvarchar](max) NULL,
	[StatusCode] [int] NULL,
	[SQL] [nvarchar](max) NULL,
	[DeletionDate] [datetime] NULL,
	[FullJson] [nvarchar](max) NULL,
	[ErrorHash] [int] NULL,
	[DuplicateCount] [int] NOT NULL,
 CONSTRAINT [PK_Exceptions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Fabbisogno]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Fabbisogno](
	[IDPiano] [int] NOT NULL,
	[IDMateriale] [int] NOT NULL,
	[Fabbisogno] [int] NOT NULL,
	[Potenziale] [int] NULL,
	[Residuo] [int] NULL,
 CONSTRAINT [PK_Fabbisogno] PRIMARY KEY CLUSTERED 
(
	[IDPiano] ASC,
	[IDMateriale] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Languages]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Languages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LanguageId] [nvarchar](10) NOT NULL,
	[LanguageName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Languages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Materiale]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Materiale](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Descrizione] [varchar](60) NOT NULL,
	[IDTipoMateriale] [int] NULL,
	[TariffaRiferimento] [numeric](11, 2) NULL,
	[PesoSpecificoRiferimento] [numeric](11, 2) NULL,
	[NomeRisorsaMineraleISTAT] [int] NULL,
 CONSTRAINT [PK_Materiale] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Piano]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Piano](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Descrizione] [varchar](250) NOT NULL,
	[IDEnte] [varchar](3) NOT NULL,
	[Progressivo] [int] NOT NULL,
	[Variante] [int] NOT NULL,
	[DataInizio] [date] NOT NULL,
	[DataFine] [date] NOT NULL,
	[Note] [varchar](max) NULL,
 CONSTRAINT [PK_Piano] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PianoArea]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PianoArea](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IDPiano] [int] NOT NULL,
	[IDArea] [int] NOT NULL,
	[TipoStato] [int] NULL,
	[ProfMax] [numeric](9, 1) NULL,
	[Sup] [int] NULL,
 CONSTRAINT [PK_AREA] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Potenziale]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Potenziale](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IDMateriale] [int] NOT NULL,
	[IDPianoArea] [int] NOT NULL,
	[Potenziale] [int] NULL,
	[Residuo] [int] NULL,
 CONSTRAINT [PK_Potenziale] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Prodotto]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Prodotto](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IDRendiconto] [int] NOT NULL,
	[IDMateriale] [int] NOT NULL,
	[NumeroMesiAttivita] [numeric](9, 2) NULL,
	[TipoLavorazione1] [int] NULL,
	[TipoLavorazione2] [int] NULL,
	[TipoLavorazione3] [int] NULL,
	[QuantitaEstratta] [numeric](10, 1) NULL,
	[Oneri] [numeric](11, 2) NULL,
	[Peso] [numeric](9, 2) NULL,
	[PesoSpecifico] [numeric](9, 2) NULL,
	[PrimaLavorazione] [bit] NULL,
	[QuantitaLavorazione] [numeric](9, 2) NULL,
	[TipoCommercializzazione1] [int] NULL,
	[Quantita1] [numeric](9, 2) NULL,
	[Prezzo1] [numeric](11, 2) NULL,
	[UM1] [varchar](10) NULL,
	[TipoCommercializzazione2] [int] NULL,
	[Quantita2] [numeric](9, 2) NULL,
	[Prezzo2] [numeric](11, 2) NULL,
	[UM2] [varchar](10) NULL,
	[TipoCommercializzazione3] [int] NULL,
	[Quantita3] [numeric](9, 2) NULL,
	[Prezzo3] [numeric](11, 2) NULL,
	[UM3] [varchar](10) NULL,
 CONSTRAINT [PK_Prodotto] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Proroga]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Proroga](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IDAutorizzazione] [int] NOT NULL,
	[Protocollo] [varchar](100) NULL,
	[Data] [date] NULL,
	[NuovaDataSistemazione] [date] NOT NULL,
	[Note] [varchar](100) NULL,
 CONSTRAINT [PK_Proroga] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Regione]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Regione](
	[ID] [varchar](2) NOT NULL,
	[Nome] [varchar](50) NULL,
 CONSTRAINT [PK_Regione] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RendicontoApprovvigionamento]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RendicontoApprovvigionamento](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IDRendiconto] [int] NOT NULL,
	[TipoApprovvigionamento] [int] NULL,
	[IDStrutturaCava] [int] NULL,
	[QtaApprov] [numeric](9, 1) NULL,
	[Note] [varchar](50) NULL,
 CONSTRAINT [PK_Approvazione] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RendicontoDestinazioneTerritoriale]    Script Date: 31/05/2019 16:52:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RendicontoDestinazioneTerritoriale](
	[IDRendiconto] [int] NOT NULL,
	[TipoDestinazioneTerritoriale] [int] NOT NULL,
	[Percentuale] [int] NULL,
 CONSTRAINT [PK_StrutturaDestinazioneTerritoriale] PRIMARY KEY CLUSTERED 
(
	[IDRendiconto] ASC,
	[TipoDestinazioneTerritoriale] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RendicontoDestinazioneUso]    Script Date: 31/05/2019 16:52:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RendicontoDestinazioneUso](
	[IDRendiconto] [int] NOT NULL,
	[TipoDestinazioneUso] [int] NOT NULL,
	[Percentuale] [int] NULL,
 CONSTRAINT [PK_RendicontoTipoDestinazioneUso] PRIMARY KEY CLUSTERED 
(
	[IDRendiconto] ASC,
	[TipoDestinazioneUso] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RolePermissions]    Script Date: 31/05/2019 16:52:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RolePermissions](
	[RolePermissionId] [bigint] IDENTITY(1,1) NOT NULL,
	[RoleId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_RolePermissions] PRIMARY KEY CLUSTERED 
(
	[RolePermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 31/05/2019 16:52:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Scarto]    Script Date: 31/05/2019 16:52:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Scarto](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[IDRendiconto] [int] NOT NULL,
	[TipoScarto] [int] NOT NULL,
	[Peso] [numeric](9, 2) NULL,
	[Volume] [numeric](9, 2) NULL,
	[DescrizioneAltro] [varchar](60) NULL,
 CONSTRAINT [PK_Scarto] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoMateriale]    Script Date: 31/05/2019 16:52:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoMateriale](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Descrizione] [varchar](100) NULL,
 CONSTRAINT [PK_TipoMateriale] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserPermissions]    Script Date: 31/05/2019 16:52:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPermissions](
	[UserPermissionId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL,
	[Granted] [bit] NOT NULL,
 CONSTRAINT [PK_UserPermissions] PRIMARY KEY CLUSTERED 
(
	[UserPermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserPreferences]    Script Date: 31/05/2019 16:52:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPreferences](
	[UserPreferenceId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [bigint] NOT NULL,
	[PreferenceType] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_UserPreferences] PRIMARY KEY CLUSTERED 
(
	[UserPreferenceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 31/05/2019 16:52:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[UserRoleId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
(
	[UserRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 31/05/2019 16:52:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](100) NOT NULL,
	[DisplayName] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](100) NULL,
	[Source] [nvarchar](4) NOT NULL,
	[PasswordHash] [nvarchar](86) NOT NULL,
	[PasswordSalt] [nvarchar](10) NOT NULL,
	[LastDirectoryUpdate] [datetime] NULL,
	[UserImage] [nvarchar](100) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VersionInfo]    Script Date: 31/05/2019 16:52:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VersionInfo](
	[Version] [bigint] NOT NULL,
	[AppliedOn] [datetime] NULL,
	[Description] [nvarchar](1024) NULL
) ON [PRIMARY]
GO
/****** Object:  Index [UC_Version]    Script Date: 31/05/2019 16:52:13 ******/
CREATE UNIQUE CLUSTERED INDEX [UC_Version] ON [dbo].[VersionInfo]
(
	[Version] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Exceptions_App_Del_Cre]    Script Date: 31/05/2019 16:52:13 ******/
CREATE NONCLUSTERED INDEX [IX_Exceptions_App_Del_Cre] ON [dbo].[Exceptions]
(
	[ApplicationName] ASC,
	[DeletionDate] ASC,
	[CreationDate] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Exceptions_GUID_App_Del_Cre]    Script Date: 31/05/2019 16:52:13 ******/
CREATE NONCLUSTERED INDEX [IX_Exceptions_GUID_App_Del_Cre] ON [dbo].[Exceptions]
(
	[GUID] ASC,
	[ApplicationName] ASC,
	[DeletionDate] ASC,
	[CreationDate] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Exceptions_Hash_App_Cre_Del]    Script Date: 31/05/2019 16:52:13 ******/
CREATE NONCLUSTERED INDEX [IX_Exceptions_Hash_App_Cre_Del] ON [dbo].[Exceptions]
(
	[ErrorHash] ASC,
	[ApplicationName] ASC,
	[CreationDate] DESC,
	[DeletionDate] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ_RolePerm_RoleId_PermKey]    Script Date: 31/05/2019 16:52:13 ******/
CREATE UNIQUE NONCLUSTERED INDEX [UQ_RolePerm_RoleId_PermKey] ON [dbo].[RolePermissions]
(
	[RoleId] ASC,
	[PermissionKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ_UserPerm_UserId_PermKey]    Script Date: 31/05/2019 16:52:13 ******/
CREATE UNIQUE NONCLUSTERED INDEX [UQ_UserPerm_UserId_PermKey] ON [dbo].[UserPermissions]
(
	[UserId] ASC,
	[PermissionKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_UserPref_UID_PrefType_Name]    Script Date: 31/05/2019 16:52:13 ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_UserPref_UID_PrefType_Name] ON [dbo].[UserPreferences]
(
	[UserId] ASC,
	[PreferenceType] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserRoles_RoleId_UserId]    Script Date: 31/05/2019 16:52:13 ******/
CREATE NONCLUSTERED INDEX [IX_UserRoles_RoleId_UserId] ON [dbo].[UserRoles]
(
	[RoleId] ASC,
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UQ_UserRoles_UserId_RoleId]    Script Date: 31/05/2019 16:52:13 ******/
CREATE UNIQUE NONCLUSTERED INDEX [UQ_UserRoles_UserId_RoleId] ON [dbo].[UserRoles]
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Exceptions] ADD  CONSTRAINT [DF_Exceptions_IsProtected]  DEFAULT ((1)) FOR [IsProtected]
GO
ALTER TABLE [dbo].[Exceptions] ADD  CONSTRAINT [DF_Exceptions_DuplicateCount]  DEFAULT ((1)) FOR [DuplicateCount]
GO
ALTER TABLE [dbo].[UserPermissions] ADD  CONSTRAINT [DF_UserPermissions_Granted]  DEFAULT ((1)) FOR [Granted]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Atto]  WITH CHECK ADD  CONSTRAINT [FK_Atto_Piano] FOREIGN KEY([IDPiano])
REFERENCES [dbo].[Piano] ([ID])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Atto] CHECK CONSTRAINT [FK_Atto_Piano]
GO
ALTER TABLE [dbo].[Autorizzazione]  WITH CHECK ADD  CONSTRAINT [FK_Autorizzazione_Esercente] FOREIGN KEY([IDEsercente])
REFERENCES [dbo].[Esercente] ([ID])
GO
ALTER TABLE [dbo].[Autorizzazione] CHECK CONSTRAINT [FK_Autorizzazione_Esercente]
GO
ALTER TABLE [dbo].[Autorizzazione]  WITH CHECK ADD  CONSTRAINT [FK_Autorizzazione_Piano] FOREIGN KEY([IDPiano])
REFERENCES [dbo].[Piano] ([ID])
GO
ALTER TABLE [dbo].[Autorizzazione] CHECK CONSTRAINT [FK_Autorizzazione_Piano]
GO
ALTER TABLE [dbo].[Autorizzazione]  WITH CHECK ADD  CONSTRAINT [FK_Autorizzazione_PianoArea] FOREIGN KEY([IDPianoArea])
REFERENCES [dbo].[PianoArea] ([ID])
GO
ALTER TABLE [dbo].[Autorizzazione] CHECK CONSTRAINT [FK_Autorizzazione_PianoArea]
GO
ALTER TABLE [dbo].[Autorizzazione]  WITH CHECK ADD  CONSTRAINT [FK_Autorizzazione_Struttura] FOREIGN KEY([IDStruttura])
REFERENCES [dbo].[Struttura] ([ID])
GO
ALTER TABLE [dbo].[Autorizzazione] CHECK CONSTRAINT [FK_Autorizzazione_Struttura]
GO
ALTER TABLE [dbo].[AutorizzazioneMateriale]  WITH CHECK ADD  CONSTRAINT [FK_AutorizzazioneMateriale_Autorizzazione] FOREIGN KEY([IDAutorizzazione])
REFERENCES [dbo].[Autorizzazione] ([ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AutorizzazioneMateriale] CHECK CONSTRAINT [FK_AutorizzazioneMateriale_Autorizzazione]
GO
ALTER TABLE [dbo].[AutorizzazioneMateriale]  WITH CHECK ADD  CONSTRAINT [FK_AutorizzazioneMateriale_Materiale] FOREIGN KEY([IDMateriale])
REFERENCES [dbo].[Materiale] ([ID])
GO
ALTER TABLE [dbo].[AutorizzazioneMateriale] CHECK CONSTRAINT [FK_AutorizzazioneMateriale_Materiale]
GO
ALTER TABLE [dbo].[Comune]  WITH CHECK ADD  CONSTRAINT [FK_Comune_Ente] FOREIGN KEY([IDEnte])
REFERENCES [dbo].[Ente] ([ID])
GO
ALTER TABLE [dbo].[Comune] CHECK CONSTRAINT [FK_Comune_Ente]
GO
ALTER TABLE [dbo].[Deroga]  WITH CHECK ADD  CONSTRAINT [FK_Deroga_Autorizzazione] FOREIGN KEY([IDAutorizzazione])
REFERENCES [dbo].[Autorizzazione] ([ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Deroga] CHECK CONSTRAINT [FK_Deroga_Autorizzazione]
GO
ALTER TABLE [dbo].[Ente]  WITH CHECK ADD  CONSTRAINT [FK_Ente_Regione] FOREIGN KEY([IDRegione])
REFERENCES [dbo].[Regione] ([ID])
GO
ALTER TABLE [dbo].[Ente] CHECK CONSTRAINT [FK_Ente_Regione]
GO
ALTER TABLE [dbo].[Esercente]  WITH CHECK ADD  CONSTRAINT [FK_Esercente_Comune] FOREIGN KEY([IDComune])
REFERENCES [dbo].[Comune] ([ID])
GO
ALTER TABLE [dbo].[Esercente] CHECK CONSTRAINT [FK_Esercente_Comune]
GO
ALTER TABLE [dbo].[Fabbisogno]  WITH CHECK ADD  CONSTRAINT [FK_Fabbisogno_Materiale] FOREIGN KEY([IDMateriale])
REFERENCES [dbo].[Materiale] ([ID])
GO
ALTER TABLE [dbo].[Fabbisogno] CHECK CONSTRAINT [FK_Fabbisogno_Materiale]
GO
ALTER TABLE [dbo].[Fabbisogno]  WITH CHECK ADD  CONSTRAINT [FK_Fabbisogno_Piano] FOREIGN KEY([IDPiano])
REFERENCES [dbo].[Piano] ([ID])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Fabbisogno] CHECK CONSTRAINT [FK_Fabbisogno_Piano]
GO
ALTER TABLE [dbo].[Materiale]  WITH CHECK ADD  CONSTRAINT [FK_Materiale_TipoMateriale] FOREIGN KEY([IDTipoMateriale])
REFERENCES [dbo].[TipoMateriale] ([ID])
GO
ALTER TABLE [dbo].[Materiale] CHECK CONSTRAINT [FK_Materiale_TipoMateriale]
GO
ALTER TABLE [dbo].[Piano]  WITH CHECK ADD  CONSTRAINT [FK_Piano_Ente] FOREIGN KEY([IDEnte])
REFERENCES [dbo].[Ente] ([ID])
GO
ALTER TABLE [dbo].[Piano] CHECK CONSTRAINT [FK_Piano_Ente]
GO
ALTER TABLE [dbo].[PianoArea]  WITH CHECK ADD  CONSTRAINT [FK_Area_PianoArea] FOREIGN KEY([IDArea])
REFERENCES [dbo].[Area] ([ID])
GO
ALTER TABLE [dbo].[PianoArea] CHECK CONSTRAINT [FK_Area_PianoArea]
GO
ALTER TABLE [dbo].[PianoArea]  WITH CHECK ADD  CONSTRAINT [FK_PianoArea_Piano] FOREIGN KEY([IDPiano])
REFERENCES [dbo].[Piano] ([ID])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[PianoArea] CHECK CONSTRAINT [FK_PianoArea_Piano]
GO
ALTER TABLE [dbo].[Potenziale]  WITH CHECK ADD  CONSTRAINT [FK_Potenziale_Materiale] FOREIGN KEY([IDMateriale])
REFERENCES [dbo].[Materiale] ([ID])
GO
ALTER TABLE [dbo].[Potenziale] CHECK CONSTRAINT [FK_Potenziale_Materiale]
GO
ALTER TABLE [dbo].[Potenziale]  WITH CHECK ADD  CONSTRAINT [FK_Potenziale_PianoArea] FOREIGN KEY([IDPianoArea])
REFERENCES [dbo].[PianoArea] ([ID])
GO
ALTER TABLE [dbo].[Potenziale] CHECK CONSTRAINT [FK_Potenziale_PianoArea]
GO
ALTER TABLE [dbo].[Prodotto]  WITH CHECK ADD  CONSTRAINT [FK_Estratto_Materiale] FOREIGN KEY([IDMateriale])
REFERENCES [dbo].[Materiale] ([ID])
GO
ALTER TABLE [dbo].[Prodotto] CHECK CONSTRAINT [FK_Estratto_Materiale]
GO
ALTER TABLE [dbo].[Prodotto]  WITH CHECK ADD  CONSTRAINT [FK_Prodotto_Rendiconto] FOREIGN KEY([IDRendiconto])
REFERENCES [dbo].[Rendiconto] ([ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Prodotto] CHECK CONSTRAINT [FK_Prodotto_Rendiconto]
GO
ALTER TABLE [dbo].[Proroga]  WITH CHECK ADD  CONSTRAINT [FK_Proroga_Autorizzazione] FOREIGN KEY([IDAutorizzazione])
REFERENCES [dbo].[Autorizzazione] ([ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Proroga] CHECK CONSTRAINT [FK_Proroga_Autorizzazione]
GO
ALTER TABLE [dbo].[Rendiconto]  WITH CHECK ADD  CONSTRAINT [FK_Rendiconto_Autorizzazione] FOREIGN KEY([IDAutorizzazione])
REFERENCES [dbo].[Autorizzazione] ([ID])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Rendiconto] CHECK CONSTRAINT [FK_Rendiconto_Autorizzazione]
GO
ALTER TABLE [dbo].[Rendiconto]  WITH CHECK ADD  CONSTRAINT [FK_Rendiconto_Struttura] FOREIGN KEY([IDStruttura])
REFERENCES [dbo].[Struttura] ([ID])
GO
ALTER TABLE [dbo].[Rendiconto] CHECK CONSTRAINT [FK_Rendiconto_Struttura]
GO
ALTER TABLE [dbo].[RendicontoApprovvigionamento]  WITH CHECK ADD  CONSTRAINT [FK_RendicontoApprovvigionamento_Rendiconto] FOREIGN KEY([IDRendiconto])
REFERENCES [dbo].[Rendiconto] ([ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RendicontoApprovvigionamento] CHECK CONSTRAINT [FK_RendicontoApprovvigionamento_Rendiconto]
GO
ALTER TABLE [dbo].[RendicontoApprovvigionamento]  WITH CHECK ADD  CONSTRAINT [FK_RendicontoApprovvigionamento_Struttura] FOREIGN KEY([IDStrutturaCava])
REFERENCES [dbo].[Struttura] ([ID])
GO
ALTER TABLE [dbo].[RendicontoApprovvigionamento] CHECK CONSTRAINT [FK_RendicontoApprovvigionamento_Struttura]
GO
ALTER TABLE [dbo].[RendicontoDestinazioneTerritoriale]  WITH CHECK ADD  CONSTRAINT [FK_RendicontoTipoDestinazioneTerritoriale_Rendiconto] FOREIGN KEY([IDRendiconto])
REFERENCES [dbo].[Rendiconto] ([ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RendicontoDestinazioneTerritoriale] CHECK CONSTRAINT [FK_RendicontoTipoDestinazioneTerritoriale_Rendiconto]
GO
ALTER TABLE [dbo].[RendicontoDestinazioneUso]  WITH CHECK ADD  CONSTRAINT [FK_RendicontoTipoDestinazioneUso_Rendiconto] FOREIGN KEY([IDRendiconto])
REFERENCES [dbo].[Rendiconto] ([ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RendicontoDestinazioneUso] CHECK CONSTRAINT [FK_RendicontoTipoDestinazioneUso_Rendiconto]
GO
ALTER TABLE [dbo].[RolePermissions]  WITH CHECK ADD  CONSTRAINT [FK_RolePermissions_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[RolePermissions] CHECK CONSTRAINT [FK_RolePermissions_RoleId]
GO
ALTER TABLE [dbo].[Scarto]  WITH CHECK ADD  CONSTRAINT [FK_Scarto_Rendiconto] FOREIGN KEY([IDRendiconto])
REFERENCES [dbo].[Rendiconto] ([ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Scarto] CHECK CONSTRAINT [FK_Scarto_Rendiconto]
GO
ALTER TABLE [dbo].[Struttura]  WITH CHECK ADD  CONSTRAINT [FK_Struttura_Comune] FOREIGN KEY([IDComune])
REFERENCES [dbo].[Comune] ([ID])
GO
ALTER TABLE [dbo].[Struttura] CHECK CONSTRAINT [FK_Struttura_Comune]
GO
ALTER TABLE [dbo].[UserPermissions]  WITH CHECK ADD  CONSTRAINT [FK_UserPermissions_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[UserPermissions] CHECK CONSTRAINT [FK_UserPermissions_UserId]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_RoleId]
GO
ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_UserId]
GO