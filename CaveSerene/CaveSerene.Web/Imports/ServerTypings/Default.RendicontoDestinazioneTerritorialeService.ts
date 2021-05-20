namespace CaveSerene.Default {
    export namespace RendicontoDestinazioneTerritorialeService {
        export const baseUrl = 'Default/RendicontoDestinazioneTerritoriale';

        export declare function Create(request: Serenity.SaveRequest<RendicontoDestinazioneTerritorialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RendicontoDestinazioneTerritorialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RendicontoDestinazioneTerritorialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RendicontoDestinazioneTerritorialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/RendicontoDestinazioneTerritoriale/Create",
            Update = "Default/RendicontoDestinazioneTerritoriale/Update",
            Delete = "Default/RendicontoDestinazioneTerritoriale/Delete",
            Retrieve = "Default/RendicontoDestinazioneTerritoriale/Retrieve",
            List = "Default/RendicontoDestinazioneTerritoriale/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>RendicontoDestinazioneTerritorialeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
