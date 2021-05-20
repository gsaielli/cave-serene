using Serenity.Navigation;
using Administration = CaveSerene.Administration.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]

[assembly: NavigationMenu(2000, "Pianificazione", icon: "fa-desktop")]
[assembly: NavigationLink(2001, "Pianificazione/Enti", typeof(CaveSerene.Default.Pages.EnteController), icon: "fa-institution")]
[assembly: NavigationLink(2002, "Pianificazione/Aree estrattive", typeof(CaveSerene.Default.Pages.AreaController), icon: "fa-map-marker")]
[assembly: NavigationLink(2003, "Pianificazione/Tipi Materiale", typeof(CaveSerene.Default.Pages.TipoMaterialeController), icon: "fa-object-group")]
[assembly: NavigationLink(2004, "Pianificazione/Materiali", typeof(CaveSerene.Default.Pages.MaterialeController), icon: "fa-diamond")]
[assembly: NavigationLink(2005, "Pianificazione/PIAE", typeof(CaveSerene.Default.Pages.PianoController), icon: "fa-map-o")]

[assembly: NavigationMenu(3000, "Autorizzazione", icon: "fa-book")]
[assembly: NavigationMenu(3010, "Autorizzazione/Soggetti", icon: "fa-puzzle-piece")]
[assembly: NavigationLink(3011, "Autorizzazione/Soggetti/Esercenti", typeof(CaveSerene.Default.Pages.EsercenteController), icon: "fa-address-book")]
[assembly: NavigationLink(3012, "Autorizzazione/Soggetti/Cave", typeof(CaveSerene.Default.Pages.CavaController), icon: "")]
[assembly: NavigationLink(3013, "Autorizzazione/Soggetti/Miniere", typeof(CaveSerene.Default.Pages.MinieraController), icon: "fa-bomb")]
[assembly: NavigationLink(3014, "Autorizzazione/Soggetti/Impianti", typeof(CaveSerene.Default.Pages.ImpiantoController), icon: "fa-cogs")]
[assembly: NavigationLink(3020, "Autorizzazione/Autorizzazioni", typeof(CaveSerene.Default.Pages.AutorizzazioneController), icon: "fa-graduation-cap")]
[assembly: NavigationLink(3021, "Autorizzazione/Concessioni", typeof(CaveSerene.Default.Pages.ConcessioneController), icon: "fa-graduation-cap")]

[assembly: NavigationMenu(4000, "Rendicontazione", icon: "fa-calculator")]
[assembly: NavigationLink(4001, "Rendicontazione/Cave", typeof(CaveSerene.Default.Pages.RendicontoController), icon: "fa-money")]
[assembly: NavigationLink(4001, "Rendicontazione/Miniere", typeof(CaveSerene.Default.Pages.Rendiconto2Controller), icon: "fa-money")]
[assembly: NavigationLink(4001, "Rendicontazione/Dati Impianti", typeof(CaveSerene.Default.Pages.Rendiconto3Controller), icon: "fa-lightbulb-o")]

[assembly: NavigationMenu(5000, "Controlli", icon: "fa-eye")]
[assembly: NavigationMenu(5010, "Controlli/Report", icon: "fa-area-chart")]
[assembly: NavigationLink(5011, "Controlli/Report/Stampa", typeof(CaveSerene.Default.Pages.EnteController), icon: "fa-print")]
[assembly: NavigationLink(5011, "Controlli/Report/Export ISTAT", typeof(CaveSerene.Default.Pages.EnteController), icon: "fa-file-excel-o")]
[assembly: NavigationMenu(5020, "Controlli/Polizia Mineraria", icon: "fa-taxi")]
[assembly: NavigationLink(5021, "Controlli/Polizia Mineraria/Modo Ispezione", typeof(CaveSerene.Default.Pages.EnteController), icon: "fa-gavel")]
[assembly: NavigationLink(5022, "Controlli/Polizia Mineraria/Sanzioni", typeof(CaveSerene.Default.Pages.EnteController), icon: "fa-shower")]
