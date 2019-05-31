
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Scarto"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ScartoRow))]
    public class ScartoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Scarto/ScartoIndex.cshtml");
        }
    }
}