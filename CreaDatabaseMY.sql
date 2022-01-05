CREATE SCHEMA `caveserene` ;

CREATE TABLE caveserene.Struttura(
	ID int AUTO_INCREMENT NOT NULL,
	IDComune varchar(6) NULL,
	TipoPosizione int NULL,
	TipoDissesto int NULL,
	TipoColtivazione int NULL,
	Progressivo int NULL,
	Nome varchar(250) NULL,
	Frazione varchar(50) NULL,
	CatastoProvinciale varchar(50) NULL,
	CoordinataX DECIMAL(18, 6) NULL,
	CoordinataY DECIMAL(18, 6) NULL,
	VincoloAmbientale int NULL,
	AreaProtetta bit NULL,
	ProfonditaFalda DECIMAL(9, 2) NULL,
	TipoStruttura int NOT NULL,
	TipoImpianto int NULL,
	DataInstallazioneImpianto date NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.Rendiconto(
	ID int AUTO_INCREMENT NOT NULL,
	IDAutorizzazione int NULL,
	IDStruttura int NULL,
	Anno int NULL,
	NumOperai int NULL,
	NumAmministrativi int NULL,
	NumTecnici int NULL,
	NumAddetti int NULL,
	OreLavorate DECIMAL(9, 2) NULL,
	NumeroMesiAttivita DECIMAL(9, 2) NULL,
	VolAcquaEstrazione DECIMAL(11, 2) NULL,
	VolAcquaLavorazioni DECIMAL(11, 2) NULL,
	StruttDepMatInut bit NULL,
	Esplosivo DECIMAL(11, 2) NULL,
	Detonatori int NULL,
	FiloElicoidale DECIMAL(11, 2) NULL,
	MezzoMeccanico DECIMAL(11, 2) NULL,
	MicceLentaCombustione DECIMAL(11, 2) NULL,
	QuantitaKW DECIMAL(11, 2) NULL,
	ImportoKW DECIMAL(11, 2) NULL,
	QuantitaGasolio DECIMAL(11, 2) NULL,
	ImportoGasolio DECIMAL(11, 2) NULL,
	QuantitaBenzina DECIMAL(11, 2) NULL,
	ImportoBenzina DECIMAL(11, 2) NULL,
	DescrizioneAltreFontiEnergia varchar(100) NULL,
	UnitaMisuraAltreFontiEnergia varchar(50) NULL,
	QuantitaAltreFontiEnergia DECIMAL(11, 2) NULL,
	ImportoAltreFontiEnergia DECIMAL(11, 2) NULL,
	LavoratoM3 DECIMAL(11, 2) NULL,
	LavoratoQ DECIMAL(11, 2) NULL,
	MetodoLavorazione varchar(1) NULL,
	MaterialeTradizionale bit NULL,
	MaterialeRiciclato bit NULL,
	TipologiaImpianto varchar(1) NULL,
	DirittoProp DECIMAL(11, 2) NULL,
	AreaLavorazione DECIMAL(11, 2) NULL,
	AreaColtivazione DECIMAL(11, 2) NULL,
	DirettoreResponsabile varchar(100) NULL,
	Sorvegliante varchar(100) NULL,
	ResponsabileSicurezza varchar(100) NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.Comune(
	ID varchar(6) NOT NULL,
	IDEnte varchar(3) NULL,
	Nome varchar(45) NULL,
	CAP varchar(5) NULL,
	ZonaAlt varchar(1) NULL,
	CodCatastale varchar(4) NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.Autorizzazione(
	ID int AUTO_INCREMENT NOT NULL,
	IDPiano int NULL,
	IDPianoArea int NULL,
	IDStruttura int NULL,
	IDEsercente int NULL,
	TipoRecuperoMorfologico int NULL,
	TipoRecuperoFinale int NULL,
	TipoDisponibilita int NULL,
	NumeroAtto varchar(15) NULL,
	NumeroAttoNotifica varchar(15) NULL,
	VolumeAutorizzato DECIMAL(11, 2) NULL,
	PesoAutorizzato DECIMAL(11, 2) NULL,
	SuperficieAutorizzata DECIMAL(11, 2) NULL,
	SuperficieScavo DECIMAL(11, 2) NULL,
	ProfonditaScavo DECIMAL(11, 2) NULL,
	DataAutorizzazione date NULL,
	DataNotifica date NULL,
	DataScadenza date NULL,
	DataSistemazione date NULL,
	DenunciaEsercizioN varchar(100) NULL,
	DenunciaEsercizioData date NULL,
	ConvenzioneN varchar(100) NULL,
	ConvenzioneData date NULL,
	SospensioneN varchar(100) NULL,
	SospensioneData date NULL,
	RevocaN varchar(100) NULL,
	RevocaData date NULL,
	DecadenzaN varchar(100) NULL,
	DecadenzaData date NULL,
	RinunciaN varchar(100) NULL,
	RinunciaData date NULL,
	Autorizzazione104N varchar(100) NULL,
	Autorizzazione104Data date NULL,
	Autorizzazione104Note VARCHAR(2000) NULL,
	Volume104 DECIMAL(11, 2) NULL,
	SvincoloFidejussioneN varchar(100) NULL,
	SvincoloFidejussioneData date NULL,
	SvincoloFidejussioneNote VARCHAR(2000) NULL,
	CollaudoN varchar(100) NULL,
	CollaudoData date NULL,
	CollaudoNote VARCHAR(2000) NULL,
	PendenzaScarpate varchar(100) NULL,
	QuotaPianoCampagna varchar(100) NULL,
	ParereAgenzia varchar(255) NULL,
	VIA bit NULL,
	Screening bit NULL,
	ParereMotivato varchar(50) NULL,
	ProprietaTerreni VARCHAR(2000) NULL,
	NoteSistemazione VARCHAR(2000) NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.Area(
	ID int AUTO_INCREMENT NOT NULL,
	Nome varchar(250) NOT NULL,
	TipoArea int NULL,
	TipoStoria int NULL,
	TipoPosizione int NULL,
	Progressivo int NULL,
	CodiceAreaProv varchar(50) NULL,
	CoordinataX DECIMAL(18, 6) NULL,
	CoordinataY DECIMAL(18, 6) NULL,
	Note VARCHAR(2000) NULL,
	PRIMARY KEY(ID)
);

CREATE TABLE caveserene.Atto(
	ID int AUTO_INCREMENT NOT NULL,
	NumAtto int NOT NULL,
	DataAtto date NOT NULL,
	IDPiano int NOT NULL,
	TipoAtto int NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.AutorizzazioneMateriale(
	ID int AUTO_INCREMENT NOT NULL,
	IDAutorizzazione int NOT NULL,
	IDMateriale int NOT NULL,
	QuantitaAutorizzata DECIMAL(10, 1) NULL,
	PesoAutorizzato DECIMAL(9, 2) NULL,
	PRIMARY KEY(ID)
);

CREATE TABLE caveserene.Deroga(
	ID int AUTO_INCREMENT NOT NULL,
	IDAutorizzazione int NOT NULL,
	Protocollo varchar(100) NULL,
	Data date NULL,
	VolumeDeroga DECIMAL(10, 1) NOT NULL,
	Note varchar(100) NULL,
	PRIMARY KEY(ID)
);

CREATE TABLE caveserene.Ente(
	ID varchar(3) NOT NULL,
	IDRegione varchar(2) NULL,
	Nome varchar(60) NULL,
	Sigla varchar(2) NULL,
	PRIMARY KEY(ID)
);

CREATE TABLE caveserene.Esercente(
	ID int AUTO_INCREMENT NOT NULL,
	CodCCIA varchar(50) NULL,
	RagSoc varchar(50) NULL,
	Indirizzo varchar(250) NULL,
	CAP int NULL,
	Frazione varchar(50) NULL,
	IDComune varchar(6) NULL,
	CodiceFiscale varchar(16) NULL,
	PartitaIVA varchar(16) NULL,
	CodiceFiscaleCompilatore varchar(16) NULL,
	Telefono varchar(50) NULL,
	EMail varchar(120) NULL,
	LegaleRappresentante varchar(120) NULL,
	DatiFallimento VARCHAR(2000) NULL,
	PRIMARY KEY(ID)
);

CREATE TABLE caveserene.Exceptions(
	Id bigint AUTO_INCREMENT NOT NULL,
	GUID uniqueidentifier NOT NULL,
	ApplicationName nvarchar(50) NOT NULL,
	MachineName nvarchar(50) NOT NULL,
	CreationDate datetime NOT NULL,
	Type nvarchar(100) NOT NULL,
	IsProtected bit NOT NULL,
	Host nvarchar(100) NULL,
	Url nvarchar(500) NULL,
	HTTPMethod nvarchar(10) NULL,
	IPAddress nvarchar(40) NULL,
	Source nvarchar(100) NULL,
	Message nvarchar(1000) NULL,
	Detail nVARCHAR(2000) NULL,
	StatusCode int NULL,
	SQL nVARCHAR(2000) NULL,
	DeletionDate datetime NULL,
	FullJson nVARCHAR(2000) NULL,
	ErrorHash int NULL,
	DuplicateCount int NOT NULL,
	PRIMARY KEY (Id)
);

CREATE TABLE caveserene.Fabbisogno(
	IDPiano int NOT NULL,
	IDMateriale int NOT NULL,
	Fabbisogno int NOT NULL,
	Potenziale int NULL,
	Residuo int NULL,
	PRIMARY KEY (IDPiano, IDMateriale)
);

CREATE TABLE caveserene.Languages(
	Id int AUTO_INCREMENT NOT NULL,
	LanguageId nvarchar(10) NOT NULL,
	LanguageName nvarchar(50) NOT NULL,
	PRIMARY KEY (Id)
);

CREATE TABLE caveserene.Materiale(
	ID int AUTO_INCREMENT NOT NULL,
	Descrizione varchar(60) NOT NULL,
	IDTipoMateriale int NULL,
	TariffaRiferimento DECIMAL(11, 2) NULL,
	PesoSpecificoRiferimento DECIMAL(11, 2) NULL,
	NomeRisorsaMineraleISTAT int NULL,
	PRIMARY KEY  (ID)
);

CREATE TABLE caveserene.Piano(
	ID int AUTO_INCREMENT NOT NULL,
	Descrizione varchar(250) NOT NULL,
	IDEnte varchar(3) NOT NULL,
	Progressivo int NOT NULL,
	Variante int NOT NULL,
	DataInizio date NOT NULL,
	DataFine date NOT NULL,
	Note VARCHAR(2000) NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.PianoArea(
	ID int AUTO_INCREMENT NOT NULL,
	IDPiano int NOT NULL,
	IDArea int NOT NULL,
	TipoStato int NULL,
	ProfMax DECIMAL(9, 1) NULL,
	Sup int NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.Potenziale(
	ID int AUTO_INCREMENT NOT NULL,
	IDMateriale int NOT NULL,
	IDPianoArea int NOT NULL,
	Potenziale int NULL,
	Residuo int NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.Prodotto(
	ID int AUTO_INCREMENT NOT NULL,
	IDRendiconto int NOT NULL,
	IDMateriale int NOT NULL,
	NumeroMesiAttivita DECIMAL(9, 2) NULL,
	TipoLavorazione1 int NULL,
	TipoLavorazione2 int NULL,
	TipoLavorazione3 int NULL,
	QuantitaEstratta DECIMAL(10, 1) NULL,
	Oneri DECIMAL(11, 2) NULL,
	Peso DECIMAL(9, 2) NULL,
	PesoSpecifico DECIMAL(9, 2) NULL,
	PrimaLavorazione bit NULL,
	QuantitaLavorazione DECIMAL(9, 2) NULL,
	TipoCommercializzazione1 int NULL,
	Quantita1 DECIMAL(9, 2) NULL,
	Prezzo1 DECIMAL(11, 2) NULL,
	UM1 varchar(10) NULL,
	TipoCommercializzazione2 int NULL,
	Quantita2 DECIMAL(9, 2) NULL,
	Prezzo2 DECIMAL(11, 2) NULL,
	UM2 varchar(10) NULL,
	TipoCommercializzazione3 int NULL,
	Quantita3 DECIMAL(9, 2) NULL,
	Prezzo3 DECIMAL(11, 2) NULL,
	UM3 varchar(10) NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.Proroga(
	ID int AUTO_INCREMENT NOT NULL,
	IDAutorizzazione int NOT NULL,
	Protocollo varchar(100) NULL,
	Data date NULL,
	NuovaDataSistemazione date NOT NULL,
	Note varchar(100) NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.Regione(
	ID varchar(2) NOT NULL,
	Nome varchar(50) NULL,
	PRIMARY KEY(ID)
);

CREATE TABLE caveserene.RendicontoApprovvigionamento(
	ID int AUTO_INCREMENT NOT NULL,
	IDRendiconto int NOT NULL,
	TipoApprovvigionamento int NULL,
	IDStrutturaCava int NULL,
	QtaApprov DECIMAL(9, 1) NULL,
	Note varchar(50) NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.RendicontoDestinazioneTerritoriale(
	IDRendiconto int NOT NULL,
	TipoDestinazioneTerritoriale int NOT NULL,
	Percentuale int NULL,
	PRIMARY KEY (IDRendiconto, TipoDestinazioneTerritoriale)
);

CREATE TABLE caveserene.RendicontoDestinazioneUso(
	IDRendiconto int NOT NULL,
	TipoDestinazioneUso int NOT NULL,
	Percentuale int NULL,
	PRIMARY KEY (IDRendiconto,	TipoDestinazioneUso)
);

CREATE TABLE caveserene.RolePermissions(
	RolePermissionId bigint AUTO_INCREMENT NOT NULL,
	RoleId int NOT NULL,
	PermissionKey nvarchar(100) NOT NULL,
	PRIMARY KEY (RolePermissionId)
);

CREATE TABLE caveserene.Roles(
	RoleId int AUTO_INCREMENT NOT NULL,
	RoleName nvarchar(100) NOT NULL,
	PRIMARY KEY (RoleId)
);

CREATE TABLE caveserene.Scarto(
	ID int AUTO_INCREMENT NOT NULL,
	IDRendiconto int NOT NULL,
	TipoScarto int NOT NULL,
	Peso DECIMAL(9, 2) NULL,
	Volume DECIMAL(9, 2) NULL,
	DescrizioneAltro varchar(60) NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.TipoMateriale(
	ID int AUTO_INCREMENT NOT NULL,
	Descrizione varchar(100) NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE caveserene.UserPermissions(
	UserPermissionId bigint AUTO_INCREMENT NOT NULL,
	UserId int NOT NULL,
	PermissionKey nvarchar(100) NOT NULL,
	Granted bit NOT NULL,
	PRIMARY KEY (UserPermissionId)
);

CREATE TABLE caveserene.UserPreferences(
	UserPreferenceId int AUTO_INCREMENT NOT NULL,
	UserId bigint NOT NULL,
	PreferenceType nvarchar(100) NOT NULL,
	Name nvarchar(200) NOT NULL,
	Value nVARCHAR(2000) NULL,
	PRIMARY KEY (UserPreferenceId)
);

CREATE TABLE caveserene.UserRoles(
	UserRoleId bigint AUTO_INCREMENT NOT NULL,
	UserId int NOT NULL,
	RoleId int NOT NULL,
	PRIMARY KEY (UserRoleId)
);

CREATE TABLE caveserene.Users(
	UserId int AUTO_INCREMENT NOT NULL,
	Username nvarchar(100) NOT NULL,
	DisplayName nvarchar(100) NOT NULL,
	Email nvarchar(100) NULL,
	Source nvarchar(4) NOT NULL,
	PasswordHash nvarchar(86) NOT NULL,
	PasswordSalt nvarchar(10) NOT NULL,
	LastDirectoryUpdate datetime NULL,
	UserImage nvarchar(100) NULL,
	InsertDate datetime NOT NULL,
	InsertUserId int NOT NULL,
	UpdateDate datetime NULL,
	UpdateUserId int NULL,
	IsActive smallint NOT NULL,
	PRIMARY KEY (UserId)
);

CREATE TABLE caveserene.VersionInfo(
	Version bigint NOT NULL,
	AppliedOn datetime NULL,
	Description nvarchar(1024) NULL
)


CREATE VIEW caveserene.Cava
AS
SELECT        ID, IDComune, TipoPosizione, TipoDissesto, TipoColtivazione, Progressivo, Nome, Frazione, CatastoProvinciale, CoordinataX, CoordinataY, VincoloAmbientale, AreaProtetta, ProfonditaFalda, TipoStruttura
FROM            dbo.Struttura
WHERE        (TipoStruttura = 1)

CREATE VIEW caveserene.Miniera
AS
SELECT        ID, IDComune, TipoPosizione, TipoDissesto, TipoColtivazione, Progressivo, Nome, Frazione, CatastoProvinciale, CoordinataX, CoordinataY, VincoloAmbientale, AreaProtetta, ProfonditaFalda, TipoStruttura
FROM            dbo.Struttura
WHERE        (TipoStruttura = 3)

CREATE VIEW caveserene.Impianto
AS
SELECT        ID, IDComune, Progressivo, Nome, Frazione, CatastoProvinciale, CoordinataX, CoordinataY, TipoImpianto, DataInstallazioneImpianto, TipoStruttura
FROM            dbo.Struttura
WHERE        (TipoStruttura = 2)

CREATE VIEW caveserene.RendicontoExt
AS
SELECT r.*, c.Nome Comune, s.Nome + '-' + a.NumeroAtto + ' del ' + cast(a.DataAutorizzazione as varchar(20)) Descrizione,
	s.TipoStruttura 
FROM     
	Rendiconto r 
		inner join Autorizzazione a on r.IDAutorizzazione = a.ID 
		inner join Struttura s on a.IDStruttura = s.id
		inner join Comune c on s.IDComune = c.ID




CREATE UNIQUE  INDEX UC_Version ON caveserene.VersionInfo
(
	Version ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON PRIMARY
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index IX_Exceptions_App_Del_Cre    Script Date: 31/05/2019 16:52:13 ******/
CREATE NON INDEX IX_Exceptions_App_Del_Cre ON caveserene.Exceptions
(
	ApplicationName ASC,
	DeletionDate ASC,
	CreationDate DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON PRIMARY
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index IX_Exceptions_GUID_App_Del_Cre    Script Date: 31/05/2019 16:52:13 ******/
CREATE NON INDEX IX_Exceptions_GUID_App_Del_Cre ON caveserene.Exceptions
(
	GUID ASC,
	ApplicationName ASC,
	DeletionDate ASC,
	CreationDate DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON PRIMARY
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index IX_Exceptions_Hash_App_Cre_Del    Script Date: 31/05/2019 16:52:13 ******/
CREATE NON INDEX IX_Exceptions_Hash_App_Cre_Del ON caveserene.Exceptions
(
	ErrorHash ASC,
	ApplicationName ASC,
	CreationDate DESC,
	DeletionDate ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON PRIMARY
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index UQ_RolePerm_RoleId_PermKey    Script Date: 31/05/2019 16:52:13 ******/
CREATE UNIQUE NON INDEX UQ_RolePerm_RoleId_PermKey ON caveserene.RolePermissions
(
	RoleId ASC,
	PermissionKey ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON PRIMARY
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index UQ_UserPerm_UserId_PermKey    Script Date: 31/05/2019 16:52:13 ******/
CREATE UNIQUE NON INDEX UQ_UserPerm_UserId_PermKey ON caveserene.UserPermissions
(
	UserId ASC,
	PermissionKey ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON PRIMARY
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index IX_UserPref_UID_PrefType_Name    Script Date: 31/05/2019 16:52:13 ******/
CREATE UNIQUE NON INDEX IX_UserPref_UID_PrefType_Name ON caveserene.UserPreferences
(
	UserId ASC,
	PreferenceType ASC,
	Name ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON PRIMARY
GO
/****** Object:  Index IX_UserRoles_RoleId_UserId    Script Date: 31/05/2019 16:52:13 ******/
CREATE NON INDEX IX_UserRoles_RoleId_UserId ON caveserene.UserRoles
(
	RoleId ASC,
	UserId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON PRIMARY
GO
/****** Object:  Index UQ_UserRoles_UserId_RoleId    Script Date: 31/05/2019 16:52:13 ******/
CREATE UNIQUE NON INDEX UQ_UserRoles_UserId_RoleId ON caveserene.UserRoles
(
	UserId ASC,
	RoleId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON PRIMARY
GO
ALTER TABLE caveserene.Exceptions ADD   DF_Exceptions_IsProtected  DEFAULT ((1)) FOR IsProtected
GO
ALTER TABLE caveserene.Exceptions ADD   DF_Exceptions_DuplicateCount  DEFAULT ((1)) FOR DuplicateCount
GO
ALTER TABLE caveserene.UserPermissions ADD   DF_UserPermissions_Granted  DEFAULT ((1)) FOR Granted
GO
ALTER TABLE caveserene.Users ADD   DF_Users_IsActive  DEFAULT ((1)) FOR IsActive
GO
ALTER TABLE caveserene.Atto  WITH CHECK ADD   FK_Atto_Piano FOREIGN KEY(IDPiano)
REFERENCES caveserene.Piano (ID)
ON UPDATE CASCADE
GO
ALTER TABLE caveserene.Atto CHECK  FK_Atto_Piano
GO
ALTER TABLE caveserene.Autorizzazione  WITH CHECK ADD   FK_Autorizzazione_Esercente FOREIGN KEY(IDEsercente)
REFERENCES caveserene.Esercente (ID)
GO
ALTER TABLE caveserene.Autorizzazione CHECK  FK_Autorizzazione_Esercente
GO
ALTER TABLE caveserene.Autorizzazione  WITH CHECK ADD   FK_Autorizzazione_Piano FOREIGN KEY(IDPiano)
REFERENCES caveserene.Piano (ID)
GO
ALTER TABLE caveserene.Autorizzazione CHECK  FK_Autorizzazione_Piano
GO
ALTER TABLE caveserene.Autorizzazione  WITH CHECK ADD   FK_Autorizzazione_PianoArea FOREIGN KEY(IDPianoArea)
REFERENCES caveserene.PianoArea (ID)
GO
ALTER TABLE caveserene.Autorizzazione CHECK  FK_Autorizzazione_PianoArea
GO
ALTER TABLE caveserene.Autorizzazione  WITH CHECK ADD   FK_Autorizzazione_Struttura FOREIGN KEY(IDStruttura)
REFERENCES caveserene.Struttura (ID)
GO
ALTER TABLE caveserene.Autorizzazione CHECK  FK_Autorizzazione_Struttura
GO
ALTER TABLE caveserene.AutorizzazioneMateriale  WITH CHECK ADD   FK_AutorizzazioneMateriale_Autorizzazione FOREIGN KEY(IDAutorizzazione)
REFERENCES caveserene.Autorizzazione (ID)
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE caveserene.AutorizzazioneMateriale CHECK  FK_AutorizzazioneMateriale_Autorizzazione
GO
ALTER TABLE caveserene.AutorizzazioneMateriale  WITH CHECK ADD   FK_AutorizzazioneMateriale_Materiale FOREIGN KEY(IDMateriale)
REFERENCES caveserene.Materiale (ID)
GO
ALTER TABLE caveserene.AutorizzazioneMateriale CHECK  FK_AutorizzazioneMateriale_Materiale
GO
ALTER TABLE caveserene.Comune  WITH CHECK ADD   FK_Comune_Ente FOREIGN KEY(IDEnte)
REFERENCES caveserene.Ente (ID)
GO
ALTER TABLE caveserene.Comune CHECK  FK_Comune_Ente
GO
ALTER TABLE caveserene.Deroga  WITH CHECK ADD   FK_Deroga_Autorizzazione FOREIGN KEY(IDAutorizzazione)
REFERENCES caveserene.Autorizzazione (ID)
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE caveserene.Deroga CHECK  FK_Deroga_Autorizzazione
GO
ALTER TABLE caveserene.Ente  WITH CHECK ADD   FK_Ente_Regione FOREIGN KEY(IDRegione)
REFERENCES caveserene.Regione (ID)
GO
ALTER TABLE caveserene.Ente CHECK  FK_Ente_Regione
GO
ALTER TABLE caveserene.Esercente  WITH CHECK ADD   FK_Esercente_Comune FOREIGN KEY(IDComune)
REFERENCES caveserene.Comune (ID)
GO
ALTER TABLE caveserene.Esercente CHECK  FK_Esercente_Comune
GO
ALTER TABLE caveserene.Fabbisogno  WITH CHECK ADD   FK_Fabbisogno_Materiale FOREIGN KEY(IDMateriale)
REFERENCES caveserene.Materiale (ID)
GO
ALTER TABLE caveserene.Fabbisogno CHECK  FK_Fabbisogno_Materiale
GO
ALTER TABLE caveserene.Fabbisogno  WITH CHECK ADD   FK_Fabbisogno_Piano FOREIGN KEY(IDPiano)
REFERENCES caveserene.Piano (ID)
ON UPDATE CASCADE
GO
ALTER TABLE caveserene.Fabbisogno CHECK  FK_Fabbisogno_Piano
GO
ALTER TABLE caveserene.Materiale  WITH CHECK ADD   FK_Materiale_TipoMateriale FOREIGN KEY(IDTipoMateriale)
REFERENCES caveserene.TipoMateriale (ID)
GO
ALTER TABLE caveserene.Materiale CHECK  FK_Materiale_TipoMateriale
GO
ALTER TABLE caveserene.Piano  WITH CHECK ADD   FK_Piano_Ente FOREIGN KEY(IDEnte)
REFERENCES caveserene.Ente (ID)
GO
ALTER TABLE caveserene.Piano CHECK  FK_Piano_Ente
GO
ALTER TABLE caveserene.PianoArea  WITH CHECK ADD   FK_Area_PianoArea FOREIGN KEY(IDArea)
REFERENCES caveserene.Area (ID)
GO
ALTER TABLE caveserene.PianoArea CHECK  FK_Area_PianoArea
GO
ALTER TABLE caveserene.PianoArea  WITH CHECK ADD   FK_PianoArea_Piano FOREIGN KEY(IDPiano)
REFERENCES caveserene.Piano (ID)
ON UPDATE CASCADE
GO
ALTER TABLE caveserene.PianoArea CHECK  FK_PianoArea_Piano
GO
ALTER TABLE caveserene.Potenziale  WITH CHECK ADD   FK_Potenziale_Materiale FOREIGN KEY(IDMateriale)
REFERENCES caveserene.Materiale (ID)
GO
ALTER TABLE caveserene.Potenziale CHECK  FK_Potenziale_Materiale
GO
ALTER TABLE caveserene.Potenziale  WITH CHECK ADD   FK_Potenziale_PianoArea FOREIGN KEY(IDPianoArea)
REFERENCES caveserene.PianoArea (ID)
GO
ALTER TABLE caveserene.Potenziale CHECK  FK_Potenziale_PianoArea
GO
ALTER TABLE caveserene.Prodotto  WITH CHECK ADD   FK_Estratto_Materiale FOREIGN KEY(IDMateriale)
REFERENCES caveserene.Materiale (ID)
GO
ALTER TABLE caveserene.Prodotto CHECK  FK_Estratto_Materiale
GO
ALTER TABLE caveserene.Prodotto  WITH CHECK ADD   FK_Prodotto_Rendiconto FOREIGN KEY(IDRendiconto)
REFERENCES caveserene.Rendiconto (ID)
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE caveserene.Prodotto CHECK  FK_Prodotto_Rendiconto
GO
ALTER TABLE caveserene.Proroga  WITH CHECK ADD   FK_Proroga_Autorizzazione FOREIGN KEY(IDAutorizzazione)
REFERENCES caveserene.Autorizzazione (ID)
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE caveserene.Proroga CHECK  FK_Proroga_Autorizzazione
GO
ALTER TABLE caveserene.Rendiconto  WITH CHECK ADD   FK_Rendiconto_Autorizzazione FOREIGN KEY(IDAutorizzazione)
REFERENCES caveserene.Autorizzazione (ID)
ON UPDATE CASCADE
GO
ALTER TABLE caveserene.Rendiconto CHECK  FK_Rendiconto_Autorizzazione
GO
ALTER TABLE caveserene.Rendiconto  WITH CHECK ADD   FK_Rendiconto_Struttura FOREIGN KEY(IDStruttura)
REFERENCES caveserene.Struttura (ID)
GO
ALTER TABLE caveserene.Rendiconto CHECK  FK_Rendiconto_Struttura
GO
ALTER TABLE caveserene.RendicontoApprovvigionamento  WITH CHECK ADD   FK_RendicontoApprovvigionamento_Rendiconto FOREIGN KEY(IDRendiconto)
REFERENCES caveserene.Rendiconto (ID)
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE caveserene.RendicontoApprovvigionamento CHECK  FK_RendicontoApprovvigionamento_Rendiconto
GO
ALTER TABLE caveserene.RendicontoApprovvigionamento  WITH CHECK ADD   FK_RendicontoApprovvigionamento_Struttura FOREIGN KEY(IDStrutturaCava)
REFERENCES caveserene.Struttura (ID)
GO
ALTER TABLE caveserene.RendicontoApprovvigionamento CHECK  FK_RendicontoApprovvigionamento_Struttura
GO
ALTER TABLE caveserene.RendicontoDestinazioneTerritoriale  WITH CHECK ADD   FK_RendicontoTipoDestinazioneTerritoriale_Rendiconto FOREIGN KEY(IDRendiconto)
REFERENCES caveserene.Rendiconto (ID)
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE caveserene.RendicontoDestinazioneTerritoriale CHECK  FK_RendicontoTipoDestinazioneTerritoriale_Rendiconto
GO
ALTER TABLE caveserene.RendicontoDestinazioneUso  WITH CHECK ADD   FK_RendicontoTipoDestinazioneUso_Rendiconto FOREIGN KEY(IDRendiconto)
REFERENCES caveserene.Rendiconto (ID)
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE caveserene.RendicontoDestinazioneUso CHECK  FK_RendicontoTipoDestinazioneUso_Rendiconto
GO
ALTER TABLE caveserene.RolePermissions  WITH CHECK ADD   FK_RolePermissions_RoleId FOREIGN KEY(RoleId)
REFERENCES caveserene.Roles (RoleId)
GO
ALTER TABLE caveserene.RolePermissions CHECK  FK_RolePermissions_RoleId
GO
ALTER TABLE caveserene.Scarto  WITH CHECK ADD   FK_Scarto_Rendiconto FOREIGN KEY(IDRendiconto)
REFERENCES caveserene.Rendiconto (ID)
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE caveserene.Scarto CHECK  FK_Scarto_Rendiconto
GO
ALTER TABLE caveserene.Struttura  WITH CHECK ADD   FK_Struttura_Comune FOREIGN KEY(IDComune)
REFERENCES caveserene.Comune (ID)
GO
ALTER TABLE caveserene.Struttura CHECK  FK_Struttura_Comune
GO
ALTER TABLE caveserene.UserPermissions  WITH CHECK ADD   FK_UserPermissions_UserId FOREIGN KEY(UserId)
REFERENCES caveserene.Users (UserId)
GO
ALTER TABLE caveserene.UserPermissions CHECK  FK_UserPermissions_UserId
GO
ALTER TABLE caveserene.UserRoles  WITH CHECK ADD   FK_UserRoles_RoleId FOREIGN KEY(RoleId)
REFERENCES caveserene.Roles (RoleId)
GO
ALTER TABLE caveserene.UserRoles CHECK  FK_UserRoles_RoleId
GO
ALTER TABLE caveserene.UserRoles  WITH CHECK ADD   FK_UserRoles_UserId FOREIGN KEY(UserId)
REFERENCES caveserene.Users (UserId)
GO
ALTER TABLE caveserene.UserRoles CHECK  FK_UserRoles_UserId
GO