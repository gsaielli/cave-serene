
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Rendiconto2/[action]")]
    [PageAuthorize(typeof(Entities.Rendiconto2Row))]
    public class Rendiconto2Controller : Controller
    {
        [Route("/Default/Rendiconto2")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Rendiconto2/Rendiconto2Index.cshtml");
        }
    }
}