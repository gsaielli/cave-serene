
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Comune"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ComuneRow))]
    public class ComuneController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Comune/ComuneIndex.cshtml");
        }
    }
}