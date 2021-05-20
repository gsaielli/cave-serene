
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Area/[action]")]
    [PageAuthorize(typeof(Entities.AreaRow))]
    public class AreaController : Controller
    {
        [Route("/Default/Area")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Area/AreaIndex.cshtml");
        }
    }
}