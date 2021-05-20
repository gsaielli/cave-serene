
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Esercente/[action]")]
    [PageAuthorize(typeof(Entities.EsercenteRow))]
    public class EsercenteController : Controller
    {
        [Route("/Default/Esercente")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Esercente/EsercenteIndex.cshtml");
        }
    }
}