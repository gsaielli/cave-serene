
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Cava/[action]")]
    [PageAuthorize(typeof(Entities.CavaRow))]
    public class CavaController : Controller
    {
        [Route("/Default/Cava")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Cava/CavaIndex.cshtml");
        }
    }
}