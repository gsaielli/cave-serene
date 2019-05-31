
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/RendicontoDestinazioneUso"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RendicontoDestinazioneUsoRow))]
    public class RendicontoDestinazioneUsoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/RendicontoDestinazioneUso/RendicontoDestinazioneUsoIndex.cshtml");
        }
    }
}