
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/AutorizzazioneMateriale"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AutorizzazioneMaterialeRow))]
    public class AutorizzazioneMaterialeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/AutorizzazioneMateriale/AutorizzazioneMaterialeIndex.cshtml");
        }
    }
}