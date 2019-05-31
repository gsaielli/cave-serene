
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Deroga"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DerogaRow))]
    public class DerogaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Deroga/DerogaIndex.cshtml");
        }
    }
}