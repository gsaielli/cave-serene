
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Proroga"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProrogaRow))]
    public class ProrogaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Proroga/ProrogaIndex.cshtml");
        }
    }
}