namespace CaveSerene.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Default {

            namespace Area {
                export const CodiceAreaProv: string;
                export const CoordinataX: string;
                export const CoordinataY: string;
                export const Id: string;
                export const Nome: string;
                export const Note: string;
                export const Progressivo: string;
                export const TipoArea: string;
                export const TipoPosizione: string;
                export const TipoStoria: string;
            }

            namespace Atto {
                export const DataAtto: string;
                export const Id: string;
                export const IdPiano: string;
                export const NumAtto: string;
                export const TipoAtto: string;
            }

            namespace Autorizzazione {
                export const Autorizzazione104Data: string;
                export const Autorizzazione104N: string;
                export const Autorizzazione104Note: string;
                export const AutorizzazioneMaterialeList: string;
                export const CollaudoData: string;
                export const CollaudoN: string;
                export const CollaudoNote: string;
                export const ConvenzioneData: string;
                export const ConvenzioneN: string;
                export const DataAutorizzazione: string;
                export const DataNotifica: string;
                export const DataScadenza: string;
                export const DataSistemazione: string;
                export const DecadenzaData: string;
                export const DecadenzaN: string;
                export const DenunciaEsercizioData: string;
                export const DenunciaEsercizioN: string;
                export const DerogaList: string;
                export const Descrizione: string;
                export const Id: string;
                export const IdEsercente: string;
                export const IdEsercenteRagSoc: string;
                export const IdPiano: string;
                export const IdPianoArea: string;
                export const IdStruttura: string;
                export const IdStrutturaNome: string;
                export const NoteSistemazione: string;
                export const NumeroAtto: string;
                export const NumeroAttoNotifica: string;
                export const ParereAgenzia: string;
                export const ParereMotivato: string;
                export const PendenzaScarpate: string;
                export const PesoAutorizzato: string;
                export const ProfonditaScavo: string;
                export const ProprietaTerreni: string;
                export const ProrogaList: string;
                export const QuotaPianoCampagna: string;
                export const RevocaData: string;
                export const RevocaN: string;
                export const RinunciaData: string;
                export const RinunciaN: string;
                export const Screening: string;
                export const SospensioneData: string;
                export const SospensioneN: string;
                export const SuperficieAutorizzata: string;
                export const SuperficieScavo: string;
                export const SvincoloFidejussioneData: string;
                export const SvincoloFidejussioneN: string;
                export const SvincoloFidejussioneNote: string;
                export const TipoDisponibilita: string;
                export const TipoRecuperoFinale: string;
                export const TipoRecuperoMorfologico: string;
                export const Via: string;
                export const Volume104: string;
                export const VolumeAutorizzato: string;
            }

            namespace AutorizzazioneMateriale {
                export const Id: string;
                export const IdAutorizzazione: string;
                export const IdMateriale: string;
                export const IdMaterialeDescrizione: string;
                export const PesoAutorizzato: string;
                export const QuantitaAutorizzata: string;
            }

            namespace Cava {
                export const AreaProtetta: string;
                export const CatastoProvinciale: string;
                export const CoordinataX: string;
                export const CoordinataY: string;
                export const Frazione: string;
                export const Id: string;
                export const IdComune: string;
                export const IdComuneNome: string;
                export const Nome: string;
                export const ProfonditaFalda: string;
                export const Progressivo: string;
                export const TipoColtivazione: string;
                export const TipoDissesto: string;
                export const TipoPosizione: string;
                export const TipoStruttura: string;
                export const VincoloAmbientale: string;
            }

            namespace Comune {
                export const Cap: string;
                export const CodCatastale: string;
                export const CodiceRegione: string;
                export const EntCod: string;
                export const Id: string;
                export const Nome: string;
                export const SiglaProvincia: string;
                export const ZonaAlt: string;
            }

            namespace Concessione {
                export const ConcessioneMaterialeList: string;
                export const DataAutorizzazione: string;
                export const DataSistemazione: string;
                export const DecadenzaData: string;
                export const DecadenzaN: string;
                export const DenunciaEsercizioData: string;
                export const DenunciaEsercizioN: string;
                export const Descrizione: string;
                export const Id: string;
                export const IdEsercente: string;
                export const IdEsercenteRagSoc: string;
                export const IdStruttura: string;
                export const IdStrutturaNome: string;
                export const NumeroAtto: string;
                export const ParereAgenzia: string;
                export const PendenzaScarpate: string;
                export const ProrogaList: string;
                export const QuotaPianoCampagna: string;
                export const RevocaData: string;
                export const RevocaN: string;
                export const RinunciaData: string;
                export const RinunciaN: string;
                export const SospensioneData: string;
                export const SospensioneN: string;
                export const SuperficieAutorizzata: string;
                export const SuperficieScavo: string;
                export const TipoDisponibilita: string;
                export const TipoRecuperoFinale: string;
                export const TipoRecuperoMorfologico: string;
                export const Via: string;
            }

            namespace Deroga {
                export const Data: string;
                export const Id: string;
                export const IdAutorizzazione: string;
                export const IdAutorizzazioneAutorizzazione104Data: string;
                export const IdAutorizzazioneAutorizzazione104N: string;
                export const IdAutorizzazioneAutorizzazione104Note: string;
                export const IdAutorizzazioneCollaudoData: string;
                export const IdAutorizzazioneCollaudoN: string;
                export const IdAutorizzazioneCollaudoNote: string;
                export const IdAutorizzazioneConvenzioneData: string;
                export const IdAutorizzazioneConvenzioneN: string;
                export const IdAutorizzazioneDataAutorizzazione: string;
                export const IdAutorizzazioneDataNotifica: string;
                export const IdAutorizzazioneDataScadenza: string;
                export const IdAutorizzazioneDataSistemazione: string;
                export const IdAutorizzazioneDecadenzaData: string;
                export const IdAutorizzazioneDecadenzaN: string;
                export const IdAutorizzazioneDenunciaEsercizioData: string;
                export const IdAutorizzazioneDenunciaEsercizioN: string;
                export const IdAutorizzazioneIdEsercente: string;
                export const IdAutorizzazioneIdPianoArea: string;
                export const IdAutorizzazioneIdStruttura: string;
                export const IdAutorizzazioneNoteSistemazione: string;
                export const IdAutorizzazioneNumeroAtto: string;
                export const IdAutorizzazioneNumeroAttoNotifica: string;
                export const IdAutorizzazioneParereAgenzia: string;
                export const IdAutorizzazioneParereMotivato: string;
                export const IdAutorizzazionePendenzaScarpate: string;
                export const IdAutorizzazionePesoAutorizzato: string;
                export const IdAutorizzazioneProfonditaScavo: string;
                export const IdAutorizzazioneProprietaTerreni: string;
                export const IdAutorizzazioneQuotaPianoCampagna: string;
                export const IdAutorizzazioneRevocaData: string;
                export const IdAutorizzazioneRevocaN: string;
                export const IdAutorizzazioneRinunciaData: string;
                export const IdAutorizzazioneRinunciaN: string;
                export const IdAutorizzazioneScreening: string;
                export const IdAutorizzazioneSospensioneData: string;
                export const IdAutorizzazioneSospensioneN: string;
                export const IdAutorizzazioneSuperficieAutorizzata: string;
                export const IdAutorizzazioneSuperficieScavo: string;
                export const IdAutorizzazioneSvincoloFidejussioneData: string;
                export const IdAutorizzazioneSvincoloFidejussioneN: string;
                export const IdAutorizzazioneSvincoloFidejussioneNote: string;
                export const IdAutorizzazioneTipoDisponibilita: string;
                export const IdAutorizzazioneTipoRecuperoFinale: string;
                export const IdAutorizzazioneTipoRecuperoMorfologico: string;
                export const IdAutorizzazioneVia: string;
                export const IdAutorizzazioneVolume104: string;
                export const IdAutorizzazioneVolumeAutorizzato: string;
                export const Note: string;
                export const Protocollo: string;
                export const VolumeDeroga: string;
            }

            namespace Ente {
                export const Id: string;
                export const IdRegione: string;
                export const IdRegioneNome: string;
                export const Nome: string;
                export const Sigla: string;
            }

            namespace Esercente {
                export const Cap: string;
                export const CodCcia: string;
                export const CodiceFiscale: string;
                export const CodiceFiscaleCompilatore: string;
                export const DatiFallimento: string;
                export const EMail: string;
                export const Frazione: string;
                export const Id: string;
                export const IdComune: string;
                export const IdComuneNome: string;
                export const Indirizzo: string;
                export const LegaleRappresentante: string;
                export const PartitaIva: string;
                export const RagSoc: string;
                export const Telefono: string;
            }

            namespace Fabbisogno {
                export const Fabbisogno: string;
                export const Id: string;
                export const IdMateriale: string;
                export const IdMaterialeDescrizione: string;
                export const IdPiano: string;
                export const Potenziale: string;
                export const Residuo: string;
            }

            namespace Impianto {
                export const CatastoProvinciale: string;
                export const CoordinataX: string;
                export const CoordinataY: string;
                export const DataInstallazioneImpianto: string;
                export const Frazione: string;
                export const Id: string;
                export const IdComune: string;
                export const IdComuneNome: string;
                export const Nome: string;
                export const Progressivo: string;
                export const TipoImpianto: string;
                export const TipoStruttura: string;
            }

            namespace Materiale {
                export const Descrizione: string;
                export const Id: string;
                export const IdTipoMateriale: string;
                export const IdTipoMaterialeDescrizione: string;
                export const NomeRisorsaMineraleIstat: string;
                export const PesoSpecificoRiferimento: string;
                export const TariffaRiferimento: string;
            }

            namespace Miniera {
                export const AreaProtetta: string;
                export const CatastoProvinciale: string;
                export const CoordinataX: string;
                export const CoordinataY: string;
                export const Frazione: string;
                export const Id: string;
                export const IdComune: string;
                export const IdComuneNome: string;
                export const Nome: string;
                export const ProfonditaFalda: string;
                export const Progressivo: string;
                export const TipoColtivazione: string;
                export const TipoDissesto: string;
                export const TipoPosizione: string;
                export const TipoStruttura: string;
                export const VincoloAmbientale: string;
            }

            namespace Piano {
                export const AttoList: string;
                export const DataFine: string;
                export const DataInizio: string;
                export const Descrizione: string;
                export const FabbisognoList: string;
                export const Id: string;
                export const IdEnte: string;
                export const IdEnteNome: string;
                export const Note: string;
                export const PianoAreaList: string;
                export const Progressivo: string;
                export const Variante: string;
            }

            namespace PianoArea {
                export const Id: string;
                export const IdArea: string;
                export const IdAreaNome: string;
                export const IdPiano: string;
                export const PotenzialeList: string;
                export const ProfMax: string;
                export const Sup: string;
                export const TipoStato: string;
            }

            namespace Potenziale {
                export const Id: string;
                export const IdMateriale: string;
                export const IdMaterialeDescrizione: string;
                export const IdPianoArea: string;
                export const Potenziale: string;
                export const Residuo: string;
            }

            namespace Prodotto {
                export const Id: string;
                export const IdMateriale: string;
                export const IdMaterialeDescrizione: string;
                export const IdMaterialeIdTipoMateriale: string;
                export const IdMaterialeNomeRisorsaMineraleIstat: string;
                export const IdMaterialePesoSpecificoRiferimento: string;
                export const IdMaterialeTariffaRiferimento: string;
                export const IdRendiconto: string;
                export const IdRendicontoIdAutorizzazione: string;
                export const NumeroMesiAttivita: string;
                export const Oneri: string;
                export const Peso: string;
                export const PesoSpecifico: string;
                export const Prezzo1: string;
                export const Prezzo2: string;
                export const Prezzo3: string;
                export const PrimaLavorazione: string;
                export const Quantita1: string;
                export const Quantita2: string;
                export const Quantita3: string;
                export const QuantitaEstratta: string;
                export const QuantitaLavorazione: string;
                export const TipoCommercializzazione1: string;
                export const TipoCommercializzazione2: string;
                export const TipoCommercializzazione3: string;
                export const TipoLavorazione1: string;
                export const TipoLavorazione2: string;
                export const TipoLavorazione3: string;
                export const Um1: string;
                export const Um2: string;
                export const Um3: string;
            }

            namespace Proroga {
                export const Data: string;
                export const Id: string;
                export const IdAutorizzazione: string;
                export const IdAutorizzazioneAutorizzazione104Data: string;
                export const IdAutorizzazioneAutorizzazione104N: string;
                export const IdAutorizzazioneAutorizzazione104Note: string;
                export const IdAutorizzazioneCollaudoData: string;
                export const IdAutorizzazioneCollaudoN: string;
                export const IdAutorizzazioneCollaudoNote: string;
                export const IdAutorizzazioneConvenzioneData: string;
                export const IdAutorizzazioneConvenzioneN: string;
                export const IdAutorizzazioneDataAutorizzazione: string;
                export const IdAutorizzazioneDataNotifica: string;
                export const IdAutorizzazioneDataScadenza: string;
                export const IdAutorizzazioneDataSistemazione: string;
                export const IdAutorizzazioneDecadenzaData: string;
                export const IdAutorizzazioneDecadenzaN: string;
                export const IdAutorizzazioneDenunciaEsercizioData: string;
                export const IdAutorizzazioneDenunciaEsercizioN: string;
                export const IdAutorizzazioneIdEsercente: string;
                export const IdAutorizzazioneIdPianoArea: string;
                export const IdAutorizzazioneIdStruttura: string;
                export const IdAutorizzazioneNoteSistemazione: string;
                export const IdAutorizzazioneNumeroAtto: string;
                export const IdAutorizzazioneNumeroAttoNotifica: string;
                export const IdAutorizzazioneParereAgenzia: string;
                export const IdAutorizzazioneParereMotivato: string;
                export const IdAutorizzazionePendenzaScarpate: string;
                export const IdAutorizzazionePesoAutorizzato: string;
                export const IdAutorizzazioneProfonditaScavo: string;
                export const IdAutorizzazioneProprietaTerreni: string;
                export const IdAutorizzazioneQuotaPianoCampagna: string;
                export const IdAutorizzazioneRevocaData: string;
                export const IdAutorizzazioneRevocaN: string;
                export const IdAutorizzazioneRinunciaData: string;
                export const IdAutorizzazioneRinunciaN: string;
                export const IdAutorizzazioneScreening: string;
                export const IdAutorizzazioneSospensioneData: string;
                export const IdAutorizzazioneSospensioneN: string;
                export const IdAutorizzazioneSuperficieAutorizzata: string;
                export const IdAutorizzazioneSuperficieScavo: string;
                export const IdAutorizzazioneSvincoloFidejussioneData: string;
                export const IdAutorizzazioneSvincoloFidejussioneN: string;
                export const IdAutorizzazioneSvincoloFidejussioneNote: string;
                export const IdAutorizzazioneTipoDisponibilita: string;
                export const IdAutorizzazioneTipoRecuperoFinale: string;
                export const IdAutorizzazioneTipoRecuperoMorfologico: string;
                export const IdAutorizzazioneVia: string;
                export const IdAutorizzazioneVolume104: string;
                export const IdAutorizzazioneVolumeAutorizzato: string;
                export const Note: string;
                export const NuovaDataSistemazione: string;
                export const Protocollo: string;
            }

            namespace Regione {
                export const Id: string;
                export const Nome: string;
            }

            namespace Rendiconto {
                export const Anno: string;
                export const Autorizzazione: string;
                export const Comune: string;
                export const DescrizioneAltreFontiEnergia: string;
                export const Detonatori: string;
                export const DirettoreResponsabile: string;
                export const DirittoProp: string;
                export const Esplosivo: string;
                export const FiloElicoidale: string;
                export const Id: string;
                export const IdAutorizzazione: string;
                export const ImportoAltreFontiEnergia: string;
                export const ImportoBenzina: string;
                export const ImportoGasolio: string;
                export const ImportoKw: string;
                export const MezzoMeccanico: string;
                export const MicceLentaCombustione: string;
                export const NumAddetti: string;
                export const NumAmministrativi: string;
                export const NumOperai: string;
                export const NumTecnici: string;
                export const NumeroMesiAttivita: string;
                export const OreLavorate: string;
                export const ProdottoList: string;
                export const QuantitaAltreFontiEnergia: string;
                export const QuantitaBenzina: string;
                export const QuantitaGasolio: string;
                export const QuantitaKw: string;
                export const ResponsabileSicurezza: string;
                export const ScartoList: string;
                export const Sorvegliante: string;
                export const StruttDepMatInut: string;
                export const UnitaMisuraAltreFontiEnergia: string;
                export const VolAcquaEstrazione: string;
                export const VolAcquaLavorazioni: string;
            }

            namespace Rendiconto2 {
                export const Anno: string;
                export const Autorizzazione: string;
                export const Comune: string;
                export const DescrizioneAltreFontiEnergia: string;
                export const Detonatori: string;
                export const DirettoreResponsabile: string;
                export const DirittoProp: string;
                export const Esplosivo: string;
                export const FiloElicoidale: string;
                export const Id: string;
                export const IdAutorizzazione: string;
                export const ImportoAltreFontiEnergia: string;
                export const ImportoBenzina: string;
                export const ImportoGasolio: string;
                export const ImportoKw: string;
                export const MezzoMeccanico: string;
                export const MicceLentaCombustione: string;
                export const NumAddetti: string;
                export const NumAmministrativi: string;
                export const NumOperai: string;
                export const NumTecnici: string;
                export const NumeroMesiAttivita: string;
                export const OreLavorate: string;
                export const ProdottoList: string;
                export const QuantitaAltreFontiEnergia: string;
                export const QuantitaBenzina: string;
                export const QuantitaGasolio: string;
                export const QuantitaKw: string;
                export const ResponsabileSicurezza: string;
                export const ScartoList: string;
                export const Sorvegliante: string;
                export const StruttDepMatInut: string;
                export const UnitaMisuraAltreFontiEnergia: string;
                export const VolAcquaEstrazione: string;
                export const VolAcquaLavorazioni: string;
            }

            namespace Rendiconto3 {
                export const Anno: string;
                export const ApprovvigionamentoList: string;
                export const DestinazioneTerritorialeList: string;
                export const DestinazioneUsoList: string;
                export const Id: string;
                export const IdStruttura: string;
                export const IdStrutturaNome: string;
                export const LavoratoM3: string;
                export const LavoratoQ: string;
                export const MaterialeRiciclato: string;
                export const MaterialeTradizionale: string;
                export const MetodoLavorazione: string;
                export const NumAmministrativi: string;
                export const NumOperai: string;
                export const NumTecnici: string;
            }

            namespace RendicontoApprovvigionamento {
                export const Id: string;
                export const IdRendiconto: string;
                export const IdStrutturaCava: string;
                export const Note: string;
                export const QtaApprov: string;
                export const TipoApprovvigionamento: string;
            }

            namespace RendicontoDestinazioneTerritoriale {
                export const Id: string;
                export const IdRendiconto: string;
                export const Percentuale: string;
                export const TipoDestinazioneTerritoriale: string;
            }

            namespace RendicontoDestinazioneUso {
                export const Id: string;
                export const IdRendiconto: string;
                export const Percentuale: string;
                export const TipoDestinazioneUso: string;
            }

            namespace Scarto {
                export const DescrizioneAltro: string;
                export const Id: string;
                export const IdRendiconto: string;
                export const Peso: string;
                export const TipoScarto: string;
                export const Volume: string;
            }

            namespace TipoMateriale {
                export const Descrizione: string;
                export const Id: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    CaveSerene['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Default:{Area:{CodiceAreaProv:1,CoordinataX:1,CoordinataY:1,Id:1,Nome:1,Note:1,Progressivo:1,TipoArea:1,TipoPosizione:1,TipoStoria:1},Atto:{DataAtto:1,Id:1,IdPiano:1,NumAtto:1,TipoAtto:1},Autorizzazione:{Autorizzazione104Data:1,Autorizzazione104N:1,Autorizzazione104Note:1,AutorizzazioneMaterialeList:1,CollaudoData:1,CollaudoN:1,CollaudoNote:1,ConvenzioneData:1,ConvenzioneN:1,DataAutorizzazione:1,DataNotifica:1,DataScadenza:1,DataSistemazione:1,DecadenzaData:1,DecadenzaN:1,DenunciaEsercizioData:1,DenunciaEsercizioN:1,DerogaList:1,Descrizione:1,Id:1,IdEsercente:1,IdEsercenteRagSoc:1,IdPiano:1,IdPianoArea:1,IdStruttura:1,IdStrutturaNome:1,NoteSistemazione:1,NumeroAtto:1,NumeroAttoNotifica:1,ParereAgenzia:1,ParereMotivato:1,PendenzaScarpate:1,PesoAutorizzato:1,ProfonditaScavo:1,ProprietaTerreni:1,ProrogaList:1,QuotaPianoCampagna:1,RevocaData:1,RevocaN:1,RinunciaData:1,RinunciaN:1,Screening:1,SospensioneData:1,SospensioneN:1,SuperficieAutorizzata:1,SuperficieScavo:1,SvincoloFidejussioneData:1,SvincoloFidejussioneN:1,SvincoloFidejussioneNote:1,TipoDisponibilita:1,TipoRecuperoFinale:1,TipoRecuperoMorfologico:1,Via:1,Volume104:1,VolumeAutorizzato:1},AutorizzazioneMateriale:{Id:1,IdAutorizzazione:1,IdMateriale:1,IdMaterialeDescrizione:1,PesoAutorizzato:1,QuantitaAutorizzata:1},Cava:{AreaProtetta:1,CatastoProvinciale:1,CoordinataX:1,CoordinataY:1,Frazione:1,Id:1,IdComune:1,IdComuneNome:1,Nome:1,ProfonditaFalda:1,Progressivo:1,TipoColtivazione:1,TipoDissesto:1,TipoPosizione:1,TipoStruttura:1,VincoloAmbientale:1},Comune:{Cap:1,CodCatastale:1,CodiceRegione:1,EntCod:1,Id:1,Nome:1,SiglaProvincia:1,ZonaAlt:1},Concessione:{ConcessioneMaterialeList:1,DataAutorizzazione:1,DataSistemazione:1,DecadenzaData:1,DecadenzaN:1,DenunciaEsercizioData:1,DenunciaEsercizioN:1,Descrizione:1,Id:1,IdEsercente:1,IdEsercenteRagSoc:1,IdStruttura:1,IdStrutturaNome:1,NumeroAtto:1,ParereAgenzia:1,PendenzaScarpate:1,ProrogaList:1,QuotaPianoCampagna:1,RevocaData:1,RevocaN:1,RinunciaData:1,RinunciaN:1,SospensioneData:1,SospensioneN:1,SuperficieAutorizzata:1,SuperficieScavo:1,TipoDisponibilita:1,TipoRecuperoFinale:1,TipoRecuperoMorfologico:1,Via:1},Deroga:{Data:1,Id:1,IdAutorizzazione:1,IdAutorizzazioneAutorizzazione104Data:1,IdAutorizzazioneAutorizzazione104N:1,IdAutorizzazioneAutorizzazione104Note:1,IdAutorizzazioneCollaudoData:1,IdAutorizzazioneCollaudoN:1,IdAutorizzazioneCollaudoNote:1,IdAutorizzazioneConvenzioneData:1,IdAutorizzazioneConvenzioneN:1,IdAutorizzazioneDataAutorizzazione:1,IdAutorizzazioneDataNotifica:1,IdAutorizzazioneDataScadenza:1,IdAutorizzazioneDataSistemazione:1,IdAutorizzazioneDecadenzaData:1,IdAutorizzazioneDecadenzaN:1,IdAutorizzazioneDenunciaEsercizioData:1,IdAutorizzazioneDenunciaEsercizioN:1,IdAutorizzazioneIdEsercente:1,IdAutorizzazioneIdPianoArea:1,IdAutorizzazioneIdStruttura:1,IdAutorizzazioneNoteSistemazione:1,IdAutorizzazioneNumeroAtto:1,IdAutorizzazioneNumeroAttoNotifica:1,IdAutorizzazioneParereAgenzia:1,IdAutorizzazioneParereMotivato:1,IdAutorizzazionePendenzaScarpate:1,IdAutorizzazionePesoAutorizzato:1,IdAutorizzazioneProfonditaScavo:1,IdAutorizzazioneProprietaTerreni:1,IdAutorizzazioneQuotaPianoCampagna:1,IdAutorizzazioneRevocaData:1,IdAutorizzazioneRevocaN:1,IdAutorizzazioneRinunciaData:1,IdAutorizzazioneRinunciaN:1,IdAutorizzazioneScreening:1,IdAutorizzazioneSospensioneData:1,IdAutorizzazioneSospensioneN:1,IdAutorizzazioneSuperficieAutorizzata:1,IdAutorizzazioneSuperficieScavo:1,IdAutorizzazioneSvincoloFidejussioneData:1,IdAutorizzazioneSvincoloFidejussioneN:1,IdAutorizzazioneSvincoloFidejussioneNote:1,IdAutorizzazioneTipoDisponibilita:1,IdAutorizzazioneTipoRecuperoFinale:1,IdAutorizzazioneTipoRecuperoMorfologico:1,IdAutorizzazioneVia:1,IdAutorizzazioneVolume104:1,IdAutorizzazioneVolumeAutorizzato:1,Note:1,Protocollo:1,VolumeDeroga:1},Ente:{Id:1,IdRegione:1,IdRegioneNome:1,Nome:1,Sigla:1},Esercente:{Cap:1,CodCcia:1,CodiceFiscale:1,CodiceFiscaleCompilatore:1,DatiFallimento:1,EMail:1,Frazione:1,Id:1,IdComune:1,IdComuneNome:1,Indirizzo:1,LegaleRappresentante:1,PartitaIva:1,RagSoc:1,Telefono:1},Fabbisogno:{Fabbisogno:1,Id:1,IdMateriale:1,IdMaterialeDescrizione:1,IdPiano:1,Potenziale:1,Residuo:1},Impianto:{CatastoProvinciale:1,CoordinataX:1,CoordinataY:1,DataInstallazioneImpianto:1,Frazione:1,Id:1,IdComune:1,IdComuneNome:1,Nome:1,Progressivo:1,TipoImpianto:1,TipoStruttura:1},Materiale:{Descrizione:1,Id:1,IdTipoMateriale:1,IdTipoMaterialeDescrizione:1,NomeRisorsaMineraleIstat:1,PesoSpecificoRiferimento:1,TariffaRiferimento:1},Miniera:{AreaProtetta:1,CatastoProvinciale:1,CoordinataX:1,CoordinataY:1,Frazione:1,Id:1,IdComune:1,IdComuneNome:1,Nome:1,ProfonditaFalda:1,Progressivo:1,TipoColtivazione:1,TipoDissesto:1,TipoPosizione:1,TipoStruttura:1,VincoloAmbientale:1},Piano:{AttoList:1,DataFine:1,DataInizio:1,Descrizione:1,FabbisognoList:1,Id:1,IdEnte:1,IdEnteNome:1,Note:1,PianoAreaList:1,Progressivo:1,Variante:1},PianoArea:{Id:1,IdArea:1,IdAreaNome:1,IdPiano:1,PotenzialeList:1,ProfMax:1,Sup:1,TipoStato:1},Potenziale:{Id:1,IdMateriale:1,IdMaterialeDescrizione:1,IdPianoArea:1,Potenziale:1,Residuo:1},Prodotto:{Id:1,IdMateriale:1,IdMaterialeDescrizione:1,IdMaterialeIdTipoMateriale:1,IdMaterialeNomeRisorsaMineraleIstat:1,IdMaterialePesoSpecificoRiferimento:1,IdMaterialeTariffaRiferimento:1,IdRendiconto:1,IdRendicontoIdAutorizzazione:1,NumeroMesiAttivita:1,Oneri:1,Peso:1,PesoSpecifico:1,Prezzo1:1,Prezzo2:1,Prezzo3:1,PrimaLavorazione:1,Quantita1:1,Quantita2:1,Quantita3:1,QuantitaEstratta:1,QuantitaLavorazione:1,TipoCommercializzazione1:1,TipoCommercializzazione2:1,TipoCommercializzazione3:1,TipoLavorazione1:1,TipoLavorazione2:1,TipoLavorazione3:1,Um1:1,Um2:1,Um3:1},Proroga:{Data:1,Id:1,IdAutorizzazione:1,IdAutorizzazioneAutorizzazione104Data:1,IdAutorizzazioneAutorizzazione104N:1,IdAutorizzazioneAutorizzazione104Note:1,IdAutorizzazioneCollaudoData:1,IdAutorizzazioneCollaudoN:1,IdAutorizzazioneCollaudoNote:1,IdAutorizzazioneConvenzioneData:1,IdAutorizzazioneConvenzioneN:1,IdAutorizzazioneDataAutorizzazione:1,IdAutorizzazioneDataNotifica:1,IdAutorizzazioneDataScadenza:1,IdAutorizzazioneDataSistemazione:1,IdAutorizzazioneDecadenzaData:1,IdAutorizzazioneDecadenzaN:1,IdAutorizzazioneDenunciaEsercizioData:1,IdAutorizzazioneDenunciaEsercizioN:1,IdAutorizzazioneIdEsercente:1,IdAutorizzazioneIdPianoArea:1,IdAutorizzazioneIdStruttura:1,IdAutorizzazioneNoteSistemazione:1,IdAutorizzazioneNumeroAtto:1,IdAutorizzazioneNumeroAttoNotifica:1,IdAutorizzazioneParereAgenzia:1,IdAutorizzazioneParereMotivato:1,IdAutorizzazionePendenzaScarpate:1,IdAutorizzazionePesoAutorizzato:1,IdAutorizzazioneProfonditaScavo:1,IdAutorizzazioneProprietaTerreni:1,IdAutorizzazioneQuotaPianoCampagna:1,IdAutorizzazioneRevocaData:1,IdAutorizzazioneRevocaN:1,IdAutorizzazioneRinunciaData:1,IdAutorizzazioneRinunciaN:1,IdAutorizzazioneScreening:1,IdAutorizzazioneSospensioneData:1,IdAutorizzazioneSospensioneN:1,IdAutorizzazioneSuperficieAutorizzata:1,IdAutorizzazioneSuperficieScavo:1,IdAutorizzazioneSvincoloFidejussioneData:1,IdAutorizzazioneSvincoloFidejussioneN:1,IdAutorizzazioneSvincoloFidejussioneNote:1,IdAutorizzazioneTipoDisponibilita:1,IdAutorizzazioneTipoRecuperoFinale:1,IdAutorizzazioneTipoRecuperoMorfologico:1,IdAutorizzazioneVia:1,IdAutorizzazioneVolume104:1,IdAutorizzazioneVolumeAutorizzato:1,Note:1,NuovaDataSistemazione:1,Protocollo:1},Regione:{Id:1,Nome:1},Rendiconto:{Anno:1,Autorizzazione:1,Comune:1,DescrizioneAltreFontiEnergia:1,Detonatori:1,DirettoreResponsabile:1,DirittoProp:1,Esplosivo:1,FiloElicoidale:1,Id:1,IdAutorizzazione:1,ImportoAltreFontiEnergia:1,ImportoBenzina:1,ImportoGasolio:1,ImportoKw:1,MezzoMeccanico:1,MicceLentaCombustione:1,NumAddetti:1,NumAmministrativi:1,NumOperai:1,NumTecnici:1,NumeroMesiAttivita:1,OreLavorate:1,ProdottoList:1,QuantitaAltreFontiEnergia:1,QuantitaBenzina:1,QuantitaGasolio:1,QuantitaKw:1,ResponsabileSicurezza:1,ScartoList:1,Sorvegliante:1,StruttDepMatInut:1,UnitaMisuraAltreFontiEnergia:1,VolAcquaEstrazione:1,VolAcquaLavorazioni:1},Rendiconto2:{Anno:1,Autorizzazione:1,Comune:1,DescrizioneAltreFontiEnergia:1,Detonatori:1,DirettoreResponsabile:1,DirittoProp:1,Esplosivo:1,FiloElicoidale:1,Id:1,IdAutorizzazione:1,ImportoAltreFontiEnergia:1,ImportoBenzina:1,ImportoGasolio:1,ImportoKw:1,MezzoMeccanico:1,MicceLentaCombustione:1,NumAddetti:1,NumAmministrativi:1,NumOperai:1,NumTecnici:1,NumeroMesiAttivita:1,OreLavorate:1,ProdottoList:1,QuantitaAltreFontiEnergia:1,QuantitaBenzina:1,QuantitaGasolio:1,QuantitaKw:1,ResponsabileSicurezza:1,ScartoList:1,Sorvegliante:1,StruttDepMatInut:1,UnitaMisuraAltreFontiEnergia:1,VolAcquaEstrazione:1,VolAcquaLavorazioni:1},Rendiconto3:{Anno:1,ApprovvigionamentoList:1,DestinazioneTerritorialeList:1,DestinazioneUsoList:1,Id:1,IdStruttura:1,IdStrutturaNome:1,LavoratoM3:1,LavoratoQ:1,MaterialeRiciclato:1,MaterialeTradizionale:1,MetodoLavorazione:1,NumAmministrativi:1,NumOperai:1,NumTecnici:1},RendicontoApprovvigionamento:{Id:1,IdRendiconto:1,IdStrutturaCava:1,Note:1,QtaApprov:1,TipoApprovvigionamento:1},RendicontoDestinazioneTerritoriale:{Id:1,IdRendiconto:1,Percentuale:1,TipoDestinazioneTerritoriale:1},RendicontoDestinazioneUso:{Id:1,IdRendiconto:1,Percentuale:1,TipoDestinazioneUso:1},Scarto:{DescrizioneAltro:1,Id:1,IdRendiconto:1,Peso:1,TipoScarto:1,Volume:1},TipoMateriale:{Descrizione:1,Id:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

