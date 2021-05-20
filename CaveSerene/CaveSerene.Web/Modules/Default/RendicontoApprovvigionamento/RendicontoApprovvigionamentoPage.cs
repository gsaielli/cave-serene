
namespace CaveSerene.Default.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [Route("Default/RendicontoApprovvigionamento/[action]")]
    [PageAuthorize(typeof(Entities.RendicontoApprovvigionamentoRow))]
    public class RendicontoApprovvigionamentoController : Controller
    {
        [Route("/Default/RendicontoApprovvigionamento")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/RendicontoApprovvigionamento/RendicontoApprovvigionamentoIndex.cshtml");
        }
    }
}