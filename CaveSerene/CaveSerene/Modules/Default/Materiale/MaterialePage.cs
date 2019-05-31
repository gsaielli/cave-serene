
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Materiale"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MaterialeRow))]
    public class MaterialeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Materiale/MaterialeIndex.cshtml");
        }
    }
}