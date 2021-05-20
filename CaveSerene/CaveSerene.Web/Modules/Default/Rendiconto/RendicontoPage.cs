
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Rendiconto/[action]")]
    [PageAuthorize(typeof(Entities.RendicontoRow))]
    public class RendicontoController : Controller
    {
        [Route("/Default/Rendiconto")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Rendiconto/RendicontoIndex.cshtml");
        }
    }
}