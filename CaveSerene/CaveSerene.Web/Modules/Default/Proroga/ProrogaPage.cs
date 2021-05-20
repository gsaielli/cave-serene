
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Proroga/[action]")]
    [PageAuthorize(typeof(Entities.ProrogaRow))]
    public class ProrogaController : Controller
    {
        [Route("/Default/Proroga")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Proroga/ProrogaIndex.cshtml");
        }
    }
}