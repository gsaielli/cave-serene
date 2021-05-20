
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/AutorizzazioneMateriale/[action]")]
    [PageAuthorize(typeof(Entities.AutorizzazioneMaterialeRow))]
    public class AutorizzazioneMaterialeController : Controller
    {
        [Route("/Default/AutorizzazioneMateriale")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/AutorizzazioneMateriale/AutorizzazioneMaterialeIndex.cshtml");
        }
    }
}