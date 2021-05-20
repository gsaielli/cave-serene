
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Materiale/[action]")]
    [PageAuthorize(typeof(Entities.MaterialeRow))]
    public class MaterialeController : Controller
    {
        [Route("/Default/Materiale")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Materiale/MaterialeIndex.cshtml");
        }
    }
}