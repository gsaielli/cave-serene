using Serenity.Navigation;
using Administration = CaveSerene.Administration.Pages;

[assembly: NavigationMenu(9000, "Amministrazione", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Amministrazione/Log degli Errori", url: "~/errorlog.axd", permission: CaveSerene.Administration.PermissionKeys.Security, icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(9000, "Amministrazione/Lingue", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "Amministrazione/Traduzioni", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "Amministrazione/Ruoli Utenti", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Amministrazione/Utenti", typeof(Administration.UserController), icon: "fa-users")]