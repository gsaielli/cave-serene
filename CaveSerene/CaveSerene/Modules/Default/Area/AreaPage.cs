
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Area"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AreaRow))]
    public class AreaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Area/AreaIndex.cshtml");
        }
    }
}