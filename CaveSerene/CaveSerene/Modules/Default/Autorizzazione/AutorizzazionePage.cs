
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Autorizzazione"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AutorizzazioneRow))]
    public class AutorizzazioneController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Autorizzazione/AutorizzazioneIndex.cshtml");
        }
    }
}