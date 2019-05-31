
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/RendicontoApprovvigionamento"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RendicontoApprovvigionamentoRow))]
    public class RendicontoApprovvigionamentoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/RendicontoApprovvigionamento/RendicontoApprovvigionamentoIndex.cshtml");
        }
    }
}