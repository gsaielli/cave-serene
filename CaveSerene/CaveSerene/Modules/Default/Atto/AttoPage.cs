
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Atto"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AttoRow))]
    public class AttoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Atto/AttoIndex.cshtml");
        }
    }
}