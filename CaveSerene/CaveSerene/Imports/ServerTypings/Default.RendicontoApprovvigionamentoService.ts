namespace CaveSerene.Default {
    export namespace RendicontoApprovvigionamentoService {
        export const baseUrl = 'Default/RendicontoApprovvigionamento';

        export declare function Create(request: Serenity.SaveRequest<RendicontoApprovvigionamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RendicontoApprovvigionamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RendicontoApprovvigionamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RendicontoApprovvigionamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/RendicontoApprovvigionamento/Create",
            Update = "Default/RendicontoApprovvigionamento/Update",
            Delete = "Default/RendicontoApprovvigionamento/Delete",
            Retrieve = "Default/RendicontoApprovvigionamento/Retrieve",
            List = "Default/RendicontoApprovvigionamento/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>RendicontoApprovvigionamentoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

