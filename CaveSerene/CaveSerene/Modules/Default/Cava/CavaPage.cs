
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Cava"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CavaRow))]
    public class CavaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Cava/CavaIndex.cshtml");
        }
    }
}