
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Potenziale"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PotenzialeRow))]
    public class PotenzialeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Potenziale/PotenzialeIndex.cshtml");
        }
    }
}