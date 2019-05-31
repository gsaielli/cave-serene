
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Rendiconto3"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.Rendiconto3Row))]
    public class Rendiconto3Controller : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Rendiconto3/Rendiconto3Index.cshtml");
        }
    }
}