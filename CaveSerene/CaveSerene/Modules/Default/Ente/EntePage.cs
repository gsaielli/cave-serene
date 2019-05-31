
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Ente"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EnteRow))]
    public class EnteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Ente/EnteIndex.cshtml");
        }
    }
}