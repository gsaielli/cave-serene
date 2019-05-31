
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/PianoArea"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PianoAreaRow))]
    public class PianoAreaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/PianoArea/PianoAreaIndex.cshtml");
        }
    }
}