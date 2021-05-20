
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Scarto/[action]")]
    [PageAuthorize(typeof(Entities.ScartoRow))]
    public class ScartoController : Controller
    {
        [Route("/Default/Scarto")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Scarto/ScartoIndex.cshtml");
        }
    }
}