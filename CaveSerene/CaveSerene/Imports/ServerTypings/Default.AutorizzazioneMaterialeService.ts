namespace CaveSerene.Default {
    export namespace AutorizzazioneMaterialeService {
        export const baseUrl = 'Default/AutorizzazioneMateriale';

        export declare function Create(request: Serenity.SaveRequest<AutorizzazioneMaterialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AutorizzazioneMaterialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AutorizzazioneMaterialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AutorizzazioneMaterialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/AutorizzazioneMateriale/Create",
            Update = "Default/AutorizzazioneMateriale/Update",
            Delete = "Default/AutorizzazioneMateriale/Delete",
            Retrieve = "Default/AutorizzazioneMateriale/Retrieve",
            List = "Default/AutorizzazioneMateriale/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AutorizzazioneMaterialeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

