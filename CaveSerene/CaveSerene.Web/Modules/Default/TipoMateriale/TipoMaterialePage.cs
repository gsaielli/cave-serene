
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/TipoMateriale/[action]")]
    [PageAuthorize(typeof(Entities.TipoMaterialeRow))]
    public class TipoMaterialeController : Controller
    {
        [Route("/Default/TipoMateriale")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/TipoMateriale/TipoMaterialeIndex.cshtml");
        }
    }
}