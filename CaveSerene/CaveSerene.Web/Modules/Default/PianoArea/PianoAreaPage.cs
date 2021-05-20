
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/PianoArea/[action]")]
    [PageAuthorize(typeof(Entities.PianoAreaRow))]
    public class PianoAreaController : Controller
    {
        [Route("/Default/PianoArea")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/PianoArea/PianoAreaIndex.cshtml");
        }
    }
}