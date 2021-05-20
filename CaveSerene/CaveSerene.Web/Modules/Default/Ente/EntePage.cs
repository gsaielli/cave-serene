
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Ente/[action]")]
    [PageAuthorize(typeof(Entities.EnteRow))]
    public class EnteController : Controller
    {
        [Route("/Default/Ente")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Ente/EnteIndex.cshtml");
        }
    }
}