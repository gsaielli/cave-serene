
namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class Default
        {
            public static class Area
            {
                public const string AreaIndex = "~/Modules/Default/Area/AreaIndex.cshtml";
            }

            public static class Atto
            {
                public const string AttoIndex = "~/Modules/Default/Atto/AttoIndex.cshtml";
            }

            public static class Autorizzazione
            {
                public const string AutorizzazioneIndex = "~/Modules/Default/Autorizzazione/AutorizzazioneIndex.cshtml";
            }

            public static class AutorizzazioneMateriale
            {
                public const string AutorizzazioneMaterialeIndex = "~/Modules/Default/AutorizzazioneMateriale/AutorizzazioneMaterialeIndex.cshtml";
            }

            public static class Cava
            {
                public const string CavaIndex = "~/Modules/Default/Cava/CavaIndex.cshtml";
            }

            public static class Comune
            {
                public const string ComuneIndex = "~/Modules/Default/Comune/ComuneIndex.cshtml";
            }

            public static class Concessione
            {
                public const string ConcessioneIndex = "~/Modules/Default/Concessione/ConcessioneIndex.cshtml";
            }

            public static class Deroga
            {
                public const string DerogaIndex = "~/Modules/Default/Deroga/DerogaIndex.cshtml";
            }

            public static class Ente
            {
                public const string EnteIndex = "~/Modules/Default/Ente/EnteIndex.cshtml";
            }

            public static class Esercente
            {
                public const string EsercenteIndex = "~/Modules/Default/Esercente/EsercenteIndex.cshtml";
            }

            public static class Fabbisogno
            {
                public const string FabbisognoIndex = "~/Modules/Default/Fabbisogno/FabbisognoIndex.cshtml";
            }

            public static class Impianto
            {
                public const string ImpiantoIndex = "~/Modules/Default/Impianto/ImpiantoIndex.cshtml";
            }

            public static class Materiale
            {
                public const string MaterialeIndex = "~/Modules/Default/Materiale/MaterialeIndex.cshtml";
            }

            public static class Miniera
            {
                public const string MinieraIndex = "~/Modules/Default/Miniera/MinieraIndex.cshtml";
            }

            public static class Piano
            {
                public const string PianoIndex = "~/Modules/Default/Piano/PianoIndex.cshtml";
            }

            public static class PianoArea
            {
                public const string PianoAreaIndex = "~/Modules/Default/PianoArea/PianoAreaIndex.cshtml";
            }

            public static class Potenziale
            {
                public const string PotenzialeIndex = "~/Modules/Default/Potenziale/PotenzialeIndex.cshtml";
            }

            public static class Prodotto
            {
                public const string ProdottoIndex = "~/Modules/Default/Prodotto/ProdottoIndex.cshtml";
            }

            public static class Proroga
            {
                public const string ProrogaIndex = "~/Modules/Default/Proroga/ProrogaIndex.cshtml";
            }

            public static class Regione
            {
                public const string RegioneIndex = "~/Modules/Default/Regione/RegioneIndex.cshtml";
            }

            public static class Rendiconto
            {
                public const string RendicontoIndex = "~/Modules/Default/Rendiconto/RendicontoIndex.cshtml";
            }

            public static class Rendiconto2
            {
                public const string Rendiconto2Index = "~/Modules/Default/Rendiconto2/Rendiconto2Index.cshtml";
            }

            public static class Rendiconto3
            {
                public const string Rendiconto3Index = "~/Modules/Default/Rendiconto3/Rendiconto3Index.cshtml";
            }

            public static class RendicontoApprovvigionamento
            {
                public const string RendicontoApprovvigionamentoIndex = "~/Modules/Default/RendicontoApprovvigionamento/RendicontoApprovvigionamentoIndex.cshtml";
            }

            public static class RendicontoDestinazioneTerritoriale
            {
                public const string RendicontoDestinazioneTerritorialeIndex = "~/Modules/Default/RendicontoDestinazioneTerritoriale/RendicontoDestinazioneTerritorialeIndex.cshtml";
            }

            public static class RendicontoDestinazioneUso
            {
                public const string RendicontoDestinazioneUsoIndex = "~/Modules/Default/RendicontoDestinazioneUso/RendicontoDestinazioneUsoIndex.cshtml";
            }

            public static class Scarto
            {
                public const string ScartoIndex = "~/Modules/Default/Scarto/ScartoIndex.cshtml";
            }

            public static class TipoMateriale
            {
                public const string TipoMaterialeIndex = "~/Modules/Default/TipoMateriale/TipoMaterialeIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

    }
}
