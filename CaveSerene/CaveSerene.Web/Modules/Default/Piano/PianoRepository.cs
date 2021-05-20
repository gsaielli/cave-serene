
using System.Collections.Generic;
using CaveSerene.Default.Entities;

namespace CaveSerene.Default.Repositories
{
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using MyRow = Entities.PianoRow;

    public class PianoRepository : BaseRepository
    {
        public PianoRepository(IRequestContext context) : base(context)
        {

        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.PianoAreaList != null)
                foreach (PianoAreaRow paRow in request.Entity.PianoAreaList)
                {
                    var idPA = paRow.Id;
                    if (paRow.PotenzialeList != null)
                        foreach (PotenzialeRow pRow in paRow.PotenzialeList)
                        {
                            pRow.IdPianoArea = idPA;
                        }
                }
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.PianoAreaList != null)
                foreach (PianoAreaRow paRow in request.Entity.PianoAreaList)
                {
                    var idPA = paRow.Id;
                    if (paRow.PotenzialeList != null)
                        foreach (PotenzialeRow pRow in paRow.PotenzialeList)
                        {
                            pRow.IdPianoArea = idPA;
                        }
                }
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            public MyDeleteHandler(IRequestContext context)
                : base(context)
            {
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {
            }            
            protected override void OnReturn()
            {
                base.OnReturn();
                var fld = PotenzialeRow.Fields;
                var repo = new PotenzialeRepository(Context);
                foreach (var pianoArea in Response.Entity.PianoAreaList)
                {
                    if (pianoArea.Id != null)
                    {
                        var query = new ListRequest()
                        {
                            IncludeColumns = new HashSet<string>() { fld.IdMaterialeDescrizione.Expression },
                            Criteria = new Criteria(fld.IdPianoArea.Name) == pianoArea.Id.Value
                        };
                        pianoArea.PotenzialeList = repo.List(Connection, query).Entities;
                    }
                }
            }
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            public MyListHandler(IRequestContext context)
                : base(context)
            {
            }
        }
    }
}