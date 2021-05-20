
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Deroga/[action]")]
    [PageAuthorize(typeof(Entities.DerogaRow))]
    public class DerogaController : Controller
    {
        [Route("Default/Deroga")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Deroga/DerogaIndex.cshtml");
        }
    }
}