
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Comune/[action]")]
    [PageAuthorize(typeof(Entities.ComuneRow))]
    public class ComuneController : Controller
    {
        [Route("/Default/Comune")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Comune/ComuneIndex.cshtml");
        }
    }
}