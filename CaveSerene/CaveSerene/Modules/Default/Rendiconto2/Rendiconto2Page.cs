
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Rendiconto2"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.Rendiconto2Row))]
    public class Rendiconto2Controller : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Rendiconto2/Rendiconto2Index.cshtml");
        }
    }
}