using CaveSerene.Default.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;

namespace CaveSerene.Modules.Default.Autorizzazione
{
    [LookupScript("Default.Autorizzazione")]
    public class AutorizzazioneLookup : RowLookupScript<AutorizzazioneRow>
    {
        public AutorizzazioneLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = TextField = AutorizzazioneRow.Fields.Id.PropertyName;
        }


        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            query.Where("IDStruttura in (select ID from Struttura where TipoStruttura = 1)");
        }
    }
    [LookupScript("Default.Concessione")]
    public class ConcessioneLookup : RowLookupScript<AutorizzazioneRow>
    {
        public ConcessioneLookup(ISqlConnections sqlConnections) : base(sqlConnections)
        {
            IdField = TextField = ConcessioneRow.Fields.Id.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            query.Where("IDStruttura in (select ID from Struttura where TipoStruttura = 3)");
        }
    }
}