
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Rendiconto3/[action]")]
    [PageAuthorize(typeof(Entities.Rendiconto3Row))]
    public class Rendiconto3Controller : Controller
    {
        [Route("/Default/Rendiconto3")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Rendiconto3/Rendiconto3Index.cshtml");
        }
    }
}