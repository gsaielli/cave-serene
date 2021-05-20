
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Regione/[action]")]
    [PageAuthorize(typeof(Entities.RegioneRow))]
    public class RegioneController : Controller
    {
        [Route("/Default/Regione")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Regione/RegioneIndex.cshtml");
        }
    }
}