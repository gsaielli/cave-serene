﻿
namespace CaveSerene.Default.Repositories
{
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using MyRow = Entities.Rendiconto3Row;

    public class Rendiconto3Repository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var rendiconto = request.Entity;
            AggiustaID(rendiconto);
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var rendiconto = request.Entity;
            AggiustaID(rendiconto);
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private static void AggiustaID(MyRow rendiconto)
        {
            if (rendiconto.DestinazioneTerritorialeList != null)
                foreach (var r in rendiconto.DestinazioneTerritorialeList)
                    r.IdRendiconto = rendiconto.Id;
            if (rendiconto.DestinazioneUsoList != null)
                foreach (var r in rendiconto.DestinazioneUsoList)
                    r.IdRendiconto = rendiconto.Id;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                query.Where("IDStruttura in (select ID from Struttura where TipoStruttura = 2)");
            }
        }
    }
}