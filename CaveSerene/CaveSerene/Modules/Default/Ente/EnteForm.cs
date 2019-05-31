
namespace CaveSerene.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Ente")]
    [BasedOnRow(typeof(Entities.EnteRow), CheckNames = true)]
    public class EnteForm
    {
        public String Id { get; set; }
        public String IdRegione { get; set; }
        public String Nome { get; set; }
        public String Sigla { get; set; }
    }
}