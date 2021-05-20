
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Impianto/[action]")]
    [PageAuthorize(typeof(Entities.ImpiantoRow))]
    public class ImpiantoController : Controller
    {
        [Route("/Default/Impianto")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Impianto/ImpiantoIndex.cshtml");
        }
    }
}