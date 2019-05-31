
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Miniera"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MinieraRow))]
    public class MinieraController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Miniera/MinieraIndex.cshtml");
        }
    }
}