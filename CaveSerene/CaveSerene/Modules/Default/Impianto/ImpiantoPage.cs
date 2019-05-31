
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Impianto"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ImpiantoRow))]
    public class ImpiantoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Impianto/ImpiantoIndex.cshtml");
        }
    }
}