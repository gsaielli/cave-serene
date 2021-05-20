
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/RendicontoDestinazioneTerritoriale/[action]")]
    [PageAuthorize(typeof(Entities.RendicontoDestinazioneTerritorialeRow))]
    public class RendicontoDestinazioneTerritorialeController : Controller
    {
        [Route("/Default/RendicontoDestinazioneTerritoriale")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/RendicontoDestinazioneTerritoriale/RendicontoDestinazioneTerritorialeIndex.cshtml");
        }
    }
}