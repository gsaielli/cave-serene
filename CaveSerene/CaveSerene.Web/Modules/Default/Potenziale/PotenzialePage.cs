
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Potenziale/[action]")]
    [PageAuthorize(typeof(Entities.PotenzialeRow))]
    public class PotenzialeController : Controller
    {
        [Route("Default/Potenziale")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Potenziale/PotenzialeIndex.cshtml");
        }
    }
}