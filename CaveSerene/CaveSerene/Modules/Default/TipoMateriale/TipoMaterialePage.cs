
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TipoMateriale"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TipoMaterialeRow))]
    public class TipoMaterialeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TipoMateriale/TipoMaterialeIndex.cshtml");
        }
    }
}