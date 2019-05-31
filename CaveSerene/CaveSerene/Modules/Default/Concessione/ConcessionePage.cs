
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Concessione"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ConcessioneRow))]
    public class ConcessioneController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Concessione/ConcessioneIndex.cshtml");
        }
    }
}