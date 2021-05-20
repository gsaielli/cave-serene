
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/RendicontoDestinazioneUso/[action]")]
    [PageAuthorize(typeof(Entities.RendicontoDestinazioneUsoRow))]
    public class RendicontoDestinazioneUsoController : Controller
    {
        [Route("/Default/RendicontoDestinazioneUso")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/RendicontoDestinazioneUso/RendicontoDestinazioneUsoIndex.cshtml");
        }
    }
}