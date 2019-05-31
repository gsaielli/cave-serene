
namespace CaveSerene.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.Ente")]
    [BasedOnRow(typeof(Entities.EnteRow), CheckNames = true)]
    public class EnteColumns
    {
        [EditLink]
        public String Id { get; set; }
        public String Nome { get; set; }
        public String IdRegioneNome { get; set; }
        public String Sigla { get; set; }
    }
}