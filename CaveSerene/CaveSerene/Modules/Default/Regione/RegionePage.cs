
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Regione"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RegioneRow))]
    public class RegioneController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Regione/RegioneIndex.cshtml");
        }
    }
}