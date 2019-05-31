
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Piano"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PianoRow))]
    public class PianoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Piano/PianoIndex.cshtml");
        }
    }
}