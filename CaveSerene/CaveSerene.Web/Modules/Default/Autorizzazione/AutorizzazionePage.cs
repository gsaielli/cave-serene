
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Autorizzazione/[action]")]
    [PageAuthorize(typeof(Entities.AutorizzazioneRow))]
    public class AutorizzazioneController : Controller
    {
        [Route("/Default/Autorizzazione")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Autorizzazione/AutorizzazioneIndex.cshtml");
        }
    }
}