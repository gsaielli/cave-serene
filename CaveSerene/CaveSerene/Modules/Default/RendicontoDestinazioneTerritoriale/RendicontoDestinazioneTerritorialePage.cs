
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/RendicontoDestinazioneTerritoriale"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RendicontoDestinazioneTerritorialeRow))]
    public class RendicontoDestinazioneTerritorialeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/RendicontoDestinazioneTerritoriale/RendicontoDestinazioneTerritorialeIndex.cshtml");
        }
    }
}