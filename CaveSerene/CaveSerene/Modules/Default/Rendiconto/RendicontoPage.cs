
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Rendiconto"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RendicontoRow))]
    public class RendicontoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Rendiconto/RendicontoIndex.cshtml");
        }
    }
}