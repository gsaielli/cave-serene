
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Concessione/[action]")]
    [PageAuthorize(typeof(Entities.ConcessioneRow))]
    public class ConcessioneController : Controller
    {
        [Route("/Default/Concessione")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Concessione/ConcessioneIndex.cshtml");
        }
    }
}