
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Fabbisogno/[action]")]
    [PageAuthorize(typeof(Entities.FabbisognoRow))]
    public class FabbisognoController : Controller
    {
        [Route("/Default/Fabbisogno")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Fabbisogno/FabbisognoIndex.cshtml");
        }
    }
}