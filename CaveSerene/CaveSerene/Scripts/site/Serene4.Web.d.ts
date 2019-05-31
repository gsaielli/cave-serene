/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace CaveSerene.Administration {
}
declare namespace CaveSerene.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName",
        }
    }
}
declare namespace CaveSerene.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List",
        }
    }
}
declare namespace CaveSerene.Administration {
}
declare namespace CaveSerene.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace CaveSerene.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace CaveSerene.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName",
        }
    }
}
declare namespace CaveSerene.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List",
        }
    }
}
declare namespace CaveSerene.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace CaveSerene.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
        }
    }
}
declare namespace CaveSerene.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List",
        }
    }
}
declare namespace CaveSerene.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace CaveSerene.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace CaveSerene.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update",
        }
    }
}
declare namespace CaveSerene.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace CaveSerene.Administration {
}
declare namespace CaveSerene.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace CaveSerene.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User",
        }
    }
}
declare namespace CaveSerene.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys",
        }
    }
}
declare namespace CaveSerene.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace CaveSerene.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace CaveSerene.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace CaveSerene.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User",
        }
    }
}
declare namespace CaveSerene.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List",
        }
    }
}
declare namespace CaveSerene.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace CaveSerene.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
        }
    }
}
declare namespace CaveSerene.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List",
        }
    }
}
declare namespace CaveSerene.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace CaveSerene.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace CaveSerene.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value",
        }
    }
}
declare namespace CaveSerene.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve",
        }
    }
}
declare namespace CaveSerene.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface AreaForm {
        Nome: Serenity.StringEditor;
        IdEnte: Serenity.LookupEditor;
        TipoArea: Serenity.EnumEditor;
        TipoStoria: Serenity.EnumEditor;
        TipoPosizione: Serenity.EnumEditor;
        Progressivo: Serenity.IntegerEditor;
        CodiceAreaProv: Serenity.StringEditor;
        Note: Serenity.TextAreaEditor;
    }
    class AreaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface AreaRow {
        Id?: number;
        Nome?: string;
        IdEnte?: number;
        TipoArea?: Modules.Default.Area.TipoArea;
        TipoStoria?: Modules.Default.Area.TipoStoria;
        TipoPosizione?: Modules.Default.Area.TipoPosizione;
        Progressivo?: number;
        CodiceAreaProv?: string;
        Note?: string;
        IdEnteDescrizione?: string;
    }
    namespace AreaRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Area";
        const lookupKey = "Default.Area";
        function getLookup(): Q.Lookup<AreaRow>;
        const enum Fields {
            Id = "Id",
            Nome = "Nome",
            IdEnte = "IdEnte",
            TipoArea = "TipoArea",
            TipoStoria = "TipoStoria",
            TipoPosizione = "TipoPosizione",
            Progressivo = "Progressivo",
            CodiceAreaProv = "CodiceAreaProv",
            Note = "Note",
            IdEnteDescrizione = "IdEnteDescrizione",
        }
    }
}
declare namespace CaveSerene.Default {
    namespace AreaService {
        const baseUrl = "Default/Area";
        function Create(request: Serenity.SaveRequest<AreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Area/Create",
            Update = "Default/Area/Update",
            Delete = "Default/Area/Delete",
            Retrieve = "Default/Area/Retrieve",
            List = "Default/Area/List",
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface AttoForm {
        NumAtto: Serenity.IntegerEditor;
        DataAtto: Serenity.DateEditor;
        IdPiano: Serenity.IntegerEditor;
        TipoAtto: Serenity.IntegerEditor;
    }
    class AttoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface AttoRow {
        Id?: number;
        NumAtto?: number;
        DataAtto?: string;
        IdPiano?: number;
        TipoAtto?: number;
        IdPianoDescrizione?: string;
        IdPianoIdEnte?: number;
        IdPianoProgressivo?: number;
        IdPianoVariante?: number;
        IdPianoDataInizio?: string;
        IdPianoDataFine?: string;
        IdPianoNote?: string;
    }
    namespace AttoRow {
        const idProperty = "Id";
        const localTextPrefix = "Default.Atto";
        const lookupKey = "Default.Atto";
        function getLookup(): Q.Lookup<AttoRow>;
        const enum Fields {
            Id = "Id",
            NumAtto = "NumAtto",
            DataAtto = "DataAtto",
            IdPiano = "IdPiano",
            TipoAtto = "TipoAtto",
            IdPianoDescrizione = "IdPianoDescrizione",
            IdPianoIdEnte = "IdPianoIdEnte",
            IdPianoProgressivo = "IdPianoProgressivo",
            IdPianoVariante = "IdPianoVariante",
            IdPianoDataInizio = "IdPianoDataInizio",
            IdPianoDataFine = "IdPianoDataFine",
            IdPianoNote = "IdPianoNote",
        }
    }
}
declare namespace CaveSerene.Default {
    namespace AttoService {
        const baseUrl = "Default/Atto";
        function Create(request: Serenity.SaveRequest<AttoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AttoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AttoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AttoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Atto/Create",
            Update = "Default/Atto/Update",
            Delete = "Default/Atto/Delete",
            Retrieve = "Default/Atto/Retrieve",
            List = "Default/Atto/List",
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface ComuneForm {
        CodReg: Serenity.StringEditor;
        SiglaProv: Serenity.StringEditor;
        DesCom: Serenity.StringEditor;
        Cap: Serenity.StringEditor;
        ZonaAlt: Serenity.StringEditor;
        Entcod: Serenity.StringEditor;
        CodCatastale: Serenity.StringEditor;
    }
    class ComuneForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface ComuneRow {
        CodReg?: string;
        CodIstat?: string;
        SiglaProv?: string;
        DesCom?: string;
        Cap?: string;
        ZonaAlt?: string;
        Entcod?: string;
        CodCatastale?: string;
    }
    namespace ComuneRow {
        const idProperty = "CodIstat";
        const nameProperty = "CodReg";
        const localTextPrefix = "Default.Comune";
        const enum Fields {
            CodReg = "CodReg",
            CodIstat = "CodIstat",
            SiglaProv = "SiglaProv",
            DesCom = "DesCom",
            Cap = "Cap",
            ZonaAlt = "ZonaAlt",
            Entcod = "Entcod",
            CodCatastale = "CodCatastale",
        }
    }
}
declare namespace CaveSerene.Default {
    namespace ComuneService {
        const baseUrl = "Default/Comune";
        function Create(request: Serenity.SaveRequest<ComuneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ComuneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ComuneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ComuneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Comune/Create",
            Update = "Default/Comune/Update",
            Delete = "Default/Comune/Delete",
            Retrieve = "Default/Comune/Retrieve",
            List = "Default/Comune/List",
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface EnteForm {
        Descrizione: Serenity.StringEditor;
    }
    class EnteForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface EnteRow {
        Id?: number;
        Descrizione?: string;
    }
    namespace EnteRow {
        const idProperty = "Id";
        const nameProperty = "Descrizione";
        const localTextPrefix = "Default.Ente";
        const lookupKey = "Default.Ente";
        function getLookup(): Q.Lookup<EnteRow>;
        const enum Fields {
            Id = "Id",
            Descrizione = "Descrizione",
        }
    }
}
declare namespace CaveSerene.Default {
    namespace EnteService {
        const baseUrl = "Default/Ente";
        function Create(request: Serenity.SaveRequest<EnteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EnteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EnteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EnteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Ente/Create",
            Update = "Default/Ente/Update",
            Delete = "Default/Ente/Delete",
            Retrieve = "Default/Ente/Retrieve",
            List = "Default/Ente/List",
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface FabbisognoForm {
        IdMateriale: Serenity.IntegerEditor;
        Fabbisogno: Serenity.IntegerEditor;
        Potenziale: Serenity.IntegerEditor;
        Residuo: Serenity.IntegerEditor;
    }
    class FabbisognoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface FabbisognoRow {
        IdPiano?: number;
        IdMateriale?: number;
        Fabbisogno?: number;
        Potenziale?: number;
        Residuo?: number;
        IdPianoDescrizione?: string;
        IdPianoIdEnte?: number;
        IdPianoProgressivo?: number;
        IdPianoVariante?: number;
        IdPianoDataInizio?: string;
        IdPianoDataFine?: string;
        IdPianoNote?: string;
        IdMaterialeDescrizione?: string;
        IdMaterialeIdTipoMateriale?: number;
        IdMaterialeTariffaRiferimento?: number;
        IdMaterialePesoSpecificoRiferimento?: number;
        IdMaterialeNomeRisorsaMineraleIstat?: string;
    }
    namespace FabbisognoRow {
        const idProperty = "IdPiano";
        const localTextPrefix = "Default.Fabbisogno";
        const enum Fields {
            IdPiano = "IdPiano",
            IdMateriale = "IdMateriale",
            Fabbisogno = "Fabbisogno",
            Potenziale = "Potenziale",
            Residuo = "Residuo",
            IdPianoDescrizione = "IdPianoDescrizione",
            IdPianoIdEnte = "IdPianoIdEnte",
            IdPianoProgressivo = "IdPianoProgressivo",
            IdPianoVariante = "IdPianoVariante",
            IdPianoDataInizio = "IdPianoDataInizio",
            IdPianoDataFine = "IdPianoDataFine",
            IdPianoNote = "IdPianoNote",
            IdMaterialeDescrizione = "IdMaterialeDescrizione",
            IdMaterialeIdTipoMateriale = "IdMaterialeIdTipoMateriale",
            IdMaterialeTariffaRiferimento = "IdMaterialeTariffaRiferimento",
            IdMaterialePesoSpecificoRiferimento = "IdMaterialePesoSpecificoRiferimento",
            IdMaterialeNomeRisorsaMineraleIstat = "IdMaterialeNomeRisorsaMineraleIstat",
        }
    }
}
declare namespace CaveSerene.Default {
    namespace FabbisognoService {
        const baseUrl = "Default/Fabbisogno";
        function Create(request: Serenity.SaveRequest<FabbisognoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FabbisognoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FabbisognoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FabbisognoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Fabbisogno/Create",
            Update = "Default/Fabbisogno/Update",
            Delete = "Default/Fabbisogno/Delete",
            Retrieve = "Default/Fabbisogno/Retrieve",
            List = "Default/Fabbisogno/List",
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface MaterialeForm {
        Descrizione: Serenity.StringEditor;
        IdTipoMateriale: Serenity.LookupEditor;
        TariffaRiferimento: Serenity.DecimalEditor;
        PesoSpecificoRiferimento: Serenity.DecimalEditor;
        NomeRisorsaMineraleIstat: Serenity.EnumEditor;
    }
    class MaterialeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface MaterialeRow {
        Id?: number;
        Descrizione?: string;
        IdTipoMateriale?: number;
        TariffaRiferimento?: number;
        PesoSpecificoRiferimento?: number;
        NomeRisorsaMineraleIstat?: Modules.Default.Area.TipoISTAT;
        IdTipoMaterialeDescrizione?: string;
    }
    namespace MaterialeRow {
        const idProperty = "Id";
        const nameProperty = "Descrizione";
        const localTextPrefix = "Default.Materiale";
        const enum Fields {
            Id = "Id",
            Descrizione = "Descrizione",
            IdTipoMateriale = "IdTipoMateriale",
            TariffaRiferimento = "TariffaRiferimento",
            PesoSpecificoRiferimento = "PesoSpecificoRiferimento",
            NomeRisorsaMineraleIstat = "NomeRisorsaMineraleIstat",
            IdTipoMaterialeDescrizione = "IdTipoMaterialeDescrizione",
        }
    }
}
declare namespace CaveSerene.Default {
    namespace MaterialeService {
        const baseUrl = "Default/Materiale";
        function Create(request: Serenity.SaveRequest<MaterialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaterialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaterialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaterialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Materiale/Create",
            Update = "Default/Materiale/Update",
            Delete = "Default/Materiale/Delete",
            Retrieve = "Default/Materiale/Retrieve",
            List = "Default/Materiale/List",
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface PianoAreaForm {
        IdPiano: Serenity.IntegerEditor;
        IdArea: Serenity.IntegerEditor;
        TipoStato: Serenity.IntegerEditor;
        ProfMax: Serenity.DecimalEditor;
        Sup: Serenity.IntegerEditor;
    }
    class PianoAreaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface PianoAreaRow {
        Id?: number;
        IdPiano?: number;
        IdArea?: number;
        TipoStato?: number;
        ProfMax?: number;
        Sup?: number;
        IdPianoDescrizione?: string;
        IdPianoIdEnte?: number;
        IdPianoProgressivo?: number;
        IdPianoVariante?: number;
        IdPianoDataInizio?: string;
        IdPianoDataFine?: string;
        IdPianoNote?: string;
        IdAreaNome?: string;
        IdAreaIdEnte?: number;
        IdAreaTipoArea?: number;
        IdAreaTipoStoria?: number;
        IdAreaTipoPosizione?: number;
        IdAreaProgressivo?: number;
        IdAreaCodiceAreaProv?: string;
        IdAreaNote?: string;
    }
    namespace PianoAreaRow {
        const idProperty = "Id";
        const localTextPrefix = "Default.PianoArea";
        const enum Fields {
            Id = "Id",
            IdPiano = "IdPiano",
            IdArea = "IdArea",
            TipoStato = "TipoStato",
            ProfMax = "ProfMax",
            Sup = "Sup",
            IdPianoDescrizione = "IdPianoDescrizione",
            IdPianoIdEnte = "IdPianoIdEnte",
            IdPianoProgressivo = "IdPianoProgressivo",
            IdPianoVariante = "IdPianoVariante",
            IdPianoDataInizio = "IdPianoDataInizio",
            IdPianoDataFine = "IdPianoDataFine",
            IdPianoNote = "IdPianoNote",
            IdAreaNome = "IdAreaNome",
            IdAreaIdEnte = "IdAreaIdEnte",
            IdAreaTipoArea = "IdAreaTipoArea",
            IdAreaTipoStoria = "IdAreaTipoStoria",
            IdAreaTipoPosizione = "IdAreaTipoPosizione",
            IdAreaProgressivo = "IdAreaProgressivo",
            IdAreaCodiceAreaProv = "IdAreaCodiceAreaProv",
            IdAreaNote = "IdAreaNote",
        }
    }
}
declare namespace CaveSerene.Default {
    namespace PianoAreaService {
        const baseUrl = "Default/PianoArea";
        function Create(request: Serenity.SaveRequest<PianoAreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PianoAreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PianoAreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PianoAreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/PianoArea/Create",
            Update = "Default/PianoArea/Update",
            Delete = "Default/PianoArea/Delete",
            Retrieve = "Default/PianoArea/Retrieve",
            List = "Default/PianoArea/List",
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface PianoForm {
        IdEnte: Serenity.LookupEditor;
        Progressivo: Serenity.IntegerEditor;
        Variante: Serenity.IntegerEditor;
        Descrizione: Serenity.StringEditor;
        DataInizio: Serenity.DateEditor;
        DataFine: Serenity.DateEditor;
        Note: Serenity.TextAreaEditor;
        AttoList: AttoEditor;
        PianoAreaList: PianoAreaEditor;
    }
    class PianoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface PianoRow {
        Id?: number;
        Descrizione?: string;
        IdEnte?: number;
        Progressivo?: number;
        Variante?: number;
        DataInizio?: string;
        DataFine?: string;
        Note?: string;
        IdEnteDescrizione?: string;
        AttoList?: AttoRow[];
        PianoAreaList?: PianoAreaRow[];
    }
    namespace PianoRow {
        const idProperty = "Id";
        const nameProperty = "Descrizione";
        const localTextPrefix = "Default.Piano";
        const lookupKey = "Default.Piano";
        function getLookup(): Q.Lookup<PianoRow>;
        const enum Fields {
            Id = "Id",
            Descrizione = "Descrizione",
            IdEnte = "IdEnte",
            Progressivo = "Progressivo",
            Variante = "Variante",
            DataInizio = "DataInizio",
            DataFine = "DataFine",
            Note = "Note",
            IdEnteDescrizione = "IdEnteDescrizione",
            AttoList = "AttoList",
            PianoAreaList = "PianoAreaList",
        }
    }
}
declare namespace CaveSerene.Default {
    namespace PianoService {
        const baseUrl = "Default/Piano";
        function Create(request: Serenity.SaveRequest<PianoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PianoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PianoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PianoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Piano/Create",
            Update = "Default/Piano/Update",
            Delete = "Default/Piano/Delete",
            Retrieve = "Default/Piano/Retrieve",
            List = "Default/Piano/List",
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface PotenzialeForm {
        IdArea: Serenity.IntegerEditor;
        Potenziale: Serenity.IntegerEditor;
        Residuo: Serenity.IntegerEditor;
    }
    class PotenzialeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface PotenzialeRow {
        IdMateriale?: number;
        IdArea?: number;
        Potenziale?: number;
        Residuo?: number;
        IdMaterialeDescrizione?: string;
        IdMaterialeIdTipoMateriale?: number;
        IdMaterialeTariffaRiferimento?: number;
        IdMaterialePesoSpecificoRiferimento?: number;
        IdMaterialeNomeRisorsaMineraleIstat?: string;
        IdAreaIdPiano?: number;
        IdArea1?: number;
        IdAreaTipoStato?: number;
        IdAreaProfMax?: number;
        IdAreaSup?: number;
    }
    namespace PotenzialeRow {
        const idProperty = "IdMateriale";
        const localTextPrefix = "Default.Potenziale";
        const enum Fields {
            IdMateriale = "IdMateriale",
            IdArea = "IdArea",
            Potenziale = "Potenziale",
            Residuo = "Residuo",
            IdMaterialeDescrizione = "IdMaterialeDescrizione",
            IdMaterialeIdTipoMateriale = "IdMaterialeIdTipoMateriale",
            IdMaterialeTariffaRiferimento = "IdMaterialeTariffaRiferimento",
            IdMaterialePesoSpecificoRiferimento = "IdMaterialePesoSpecificoRiferimento",
            IdMaterialeNomeRisorsaMineraleIstat = "IdMaterialeNomeRisorsaMineraleIstat",
            IdAreaIdPiano = "IdAreaIdPiano",
            IdArea1 = "IdArea1",
            IdAreaTipoStato = "IdAreaTipoStato",
            IdAreaProfMax = "IdAreaProfMax",
            IdAreaSup = "IdAreaSup",
        }
    }
}
declare namespace CaveSerene.Default {
    namespace PotenzialeService {
        const baseUrl = "Default/Potenziale";
        function Create(request: Serenity.SaveRequest<PotenzialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PotenzialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PotenzialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PotenzialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Potenziale/Create",
            Update = "Default/Potenziale/Update",
            Delete = "Default/Potenziale/Delete",
            Retrieve = "Default/Potenziale/Retrieve",
            List = "Default/Potenziale/List",
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface TipoMaterialeForm {
        Descrizione: Serenity.StringEditor;
    }
    class TipoMaterialeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface TipoMaterialeRow {
        Id?: number;
        Descrizione?: string;
    }
    namespace TipoMaterialeRow {
        const idProperty = "Id";
        const nameProperty = "Descrizione";
        const localTextPrefix = "Default.TipoMateriale";
        const lookupKey = "Default.TipoMateriale";
        function getLookup(): Q.Lookup<TipoMaterialeRow>;
        const enum Fields {
            Id = "Id",
            Descrizione = "Descrizione",
        }
    }
}
declare namespace CaveSerene.Default {
    namespace TipoMaterialeService {
        const baseUrl = "Default/TipoMateriale";
        function Create(request: Serenity.SaveRequest<TipoMaterialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TipoMaterialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoMaterialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoMaterialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/TipoMateriale/Create",
            Update = "Default/TipoMateriale/Update",
            Delete = "Default/TipoMateriale/Delete",
            Retrieve = "Default/TipoMateriale/Retrieve",
            List = "Default/TipoMateriale/List",
        }
    }
}
declare namespace CaveSerene {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace CaveSerene {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace CaveSerene {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace CaveSerene {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace CaveSerene.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace CaveSerene.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace CaveSerene.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.StringEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace CaveSerene.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace CaveSerene.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace CaveSerene.Modules.Default.Area {
    enum TipoArea {
        Ambito = 1,
        Polo = 2,
        Obiettivo = 3,
        Pregresso = 98,
        Rivedere = 99,
    }
}
declare namespace CaveSerene.Modules.Default.Area {
    enum TipoISTAT {
        Inerte = 1,
        Argilla = 2,
        SabbieSilicee = 3,
        Torba = 4,
        Arenaria = 5,
    }
}
declare namespace CaveSerene.Modules.Default.Area {
    enum TipoPosizione {
        Cresta = 1,
        Fondovalle = 2,
        Pianura = 3,
        PianuraGolena = 4,
        PianuraSottoFalda = 5,
        PianuraSopraFalda = 6,
        Versante = 7,
    }
}
declare namespace CaveSerene.Modules.Default.Area {
    enum TipoStoria {
        Ampliamento = 1,
        Nuovo = 2,
        Completamento = 3,
        Pregresso = 98,
    }
}
declare namespace CaveSerene {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace CaveSerene.Texts {
}
declare namespace CaveSerene.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace CaveSerene.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace CaveSerene.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace CaveSerene.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace CaveSerene.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace CaveSerene.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace CaveSerene.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace CaveSerene.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace CaveSerene.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace CaveSerene.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private roleOrImplicit(key);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace CaveSerene.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace CaveSerene.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace CaveSerene.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace CaveSerene.LanguageList {
    function getValue(): string[][];
}
declare namespace CaveSerene.ScriptInitialization {
}
declare namespace CaveSerene {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace CaveSerene.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace CaveSerene.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace CaveSerene.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace CaveSerene.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace CaveSerene.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace CaveSerene.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace CaveSerene {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent();
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace CaveSerene.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace CaveSerene.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace CaveSerene.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace CaveSerene.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace CaveSerene.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace CaveSerene.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace CaveSerene.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace CaveSerene.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace CaveSerene.Default {
    class AreaDialog extends Serenity.EntityDialog<AreaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AreaForm;
    }
}
declare namespace CaveSerene.Default {
    class AreaGrid extends Serenity.EntityGrid<AreaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AreaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class AttoDialog extends Serenity.EntityDialog<AttoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: AttoForm;
    }
}
declare namespace CaveSerene.Default {
    class AttoEditor extends Common.GridEditorBase<AttoRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class AttoGrid extends Serenity.EntityGrid<AttoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AttoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class ComuneDialog extends Serenity.EntityDialog<ComuneRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ComuneForm;
    }
}
declare namespace CaveSerene.Default {
    class ComuneGrid extends Serenity.EntityGrid<ComuneRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ComuneDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class EnteDialog extends Serenity.EntityDialog<EnteRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EnteForm;
    }
}
declare namespace CaveSerene.Default {
    class EnteGrid extends Serenity.EntityGrid<EnteRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EnteDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class FabbisognoDialog extends Serenity.EntityDialog<FabbisognoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: FabbisognoForm;
    }
}
declare namespace CaveSerene.Default {
    class FabbisognoGrid extends Serenity.EntityGrid<FabbisognoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FabbisognoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class MaterialeDialog extends Serenity.EntityDialog<MaterialeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MaterialeForm;
    }
}
declare namespace CaveSerene.Default {
    class MaterialeGrid extends Serenity.EntityGrid<MaterialeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaterialeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class PianoDialog extends Serenity.EntityDialog<PianoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PianoForm;
    }
}
declare namespace CaveSerene.Default {
    class PianoGrid extends Serenity.EntityGrid<PianoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PianoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class PianoAreaEditor extends Common.GridEditorBase<PianoAreaRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class PotenzialeDialog extends Serenity.EntityDialog<PotenzialeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: PotenzialeForm;
    }
}
declare namespace CaveSerene.Default {
    class PotenzialeGrid extends Serenity.EntityGrid<PotenzialeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PotenzialeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class TipoMaterialeDialog extends Serenity.EntityDialog<TipoMaterialeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TipoMaterialeForm;
    }
}
declare namespace CaveSerene.Default {
    class TipoMaterialeGrid extends Serenity.EntityGrid<TipoMaterialeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TipoMaterialeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
