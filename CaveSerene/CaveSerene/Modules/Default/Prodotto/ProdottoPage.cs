
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Prodotto"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProdottoRow))]
    public class ProdottoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Prodotto/ProdottoIndex.cshtml");
        }
    }
}