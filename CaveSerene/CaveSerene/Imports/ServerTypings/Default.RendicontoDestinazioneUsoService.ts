namespace CaveSerene.Default {
    export namespace RendicontoDestinazioneUsoService {
        export const baseUrl = 'Default/RendicontoDestinazioneUso';

        export declare function Create(request: Serenity.SaveRequest<RendicontoDestinazioneUsoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RendicontoDestinazioneUsoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RendicontoDestinazioneUsoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RendicontoDestinazioneUsoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/RendicontoDestinazioneUso/Create",
            Update = "Default/RendicontoDestinazioneUso/Update",
            Delete = "Default/RendicontoDestinazioneUso/Delete",
            Retrieve = "Default/RendicontoDestinazioneUso/Retrieve",
            List = "Default/RendicontoDestinazioneUso/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>RendicontoDestinazioneUsoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

