
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/Prodotto/[action]")]
    [PageAuthorize(typeof(Entities.ProdottoRow))]
    public class ProdottoController : Controller
    {
        [Route("/Default/Prodotto")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Prodotto/ProdottoIndex.cshtml");
        }
    }
}