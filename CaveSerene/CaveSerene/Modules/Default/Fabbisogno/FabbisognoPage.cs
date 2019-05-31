
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Fabbisogno"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FabbisognoRow))]
    public class FabbisognoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Fabbisogno/FabbisognoIndex.cshtml");
        }
    }
}