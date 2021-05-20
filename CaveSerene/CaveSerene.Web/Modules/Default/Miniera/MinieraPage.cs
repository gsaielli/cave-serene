
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Miniera/[action]")]
    [PageAuthorize(typeof(Entities.MinieraRow))]
    public class MinieraController : Controller
    {
        [Route("/Default/Miniera")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Miniera/MinieraIndex.cshtml");
        }
    }
}