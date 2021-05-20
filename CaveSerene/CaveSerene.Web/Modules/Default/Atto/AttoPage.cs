
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Atto/[action]")]
    [PageAuthorize(typeof(Entities.AttoRow))]
    public class AttoController : Controller
    {
        [Route("/Default/Atto")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Atto/AttoIndex.cshtml");
        }
    }
}