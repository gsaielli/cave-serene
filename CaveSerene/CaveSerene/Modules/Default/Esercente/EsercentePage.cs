
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Esercente"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EsercenteRow))]
    public class EsercenteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Esercente/EsercenteIndex.cshtml");
        }
    }
}