
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Piano/[action]")]
    [PageAuthorize(typeof(Entities.PianoRow))]
    public class PianoController : Controller
    {
        [Route("/Default/Piano")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Piano/PianoIndex.cshtml");
        }
    }
}