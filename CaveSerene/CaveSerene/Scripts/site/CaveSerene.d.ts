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
            LanguageName = "LanguageName"
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
            List = "Administration/Language/List"
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
            RoleRoleName = "RoleRoleName"
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
            List = "Administration/RolePermission/List"
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
            RoleName = "RoleName"
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
            List = "Administration/Role/List"
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
            Update = "Administration/Translation/Update"
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
            User = "User"
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
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
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
            User = "User"
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
            List = "Administration/UserRole/List"
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
            UpdateDate = "UpdateDate"
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
            List = "Administration/User/List"
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
            Value = "Value"
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
            Retrieve = "Common/UserPreference/Retrieve"
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
        TipoArea?: Modules.Default.Enums.TipoArea;
        TipoStoria?: Modules.Default.Enums.TipoStoria;
        TipoPosizione?: Modules.Default.Enums.TipoPosizione;
        Progressivo?: number;
        CodiceAreaProv?: string;
        Note?: string;
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
            TipoArea = "TipoArea",
            TipoStoria = "TipoStoria",
            TipoPosizione = "TipoPosizione",
            Progressivo = "Progressivo",
            CodiceAreaProv = "CodiceAreaProv",
            Note = "Note"
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
            List = "Default/Area/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface AttoForm {
        NumAtto: Serenity.IntegerEditor;
        DataAtto: Serenity.DateEditor;
        TipoAtto: Serenity.EnumEditor;
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
        TipoAtto?: Modules.Default.Enums.TipoAtto;
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
            TipoAtto = "TipoAtto"
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
            List = "Default/Atto/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface AutorizzazioneForm {
        IdStruttura: Serenity.LookupEditor;
        IdEsercente: Serenity.LookupEditor;
        IdPiano: Serenity.LookupEditor;
        IdPianoArea: Serenity.LookupEditor;
        NumeroAtto: Serenity.StringEditor;
        DataAutorizzazione: Serenity.DateEditor;
        DataSistemazione: Serenity.DateEditor;
        DataScadenza: Serenity.DateEditor;
        NumeroAttoNotifica: Serenity.StringEditor;
        DataNotifica: Serenity.DateEditor;
        SuperficieAutorizzata: Serenity.DecimalEditor;
        SuperficieScavo: Serenity.DecimalEditor;
        ProfonditaScavo: Serenity.DecimalEditor;
        VolumeAutorizzato: Serenity.DecimalEditor;
        PesoAutorizzato: Serenity.DecimalEditor;
        TipoDisponibilita: Serenity.EnumEditor;
        ProprietaTerreni: Serenity.StringEditor;
        DenunciaEsercizioN: Serenity.StringEditor;
        DenunciaEsercizioData: Serenity.DateEditor;
        ConvenzioneN: Serenity.StringEditor;
        ConvenzioneData: Serenity.DateEditor;
        Autorizzazione104N: Serenity.StringEditor;
        Autorizzazione104Data: Serenity.DateEditor;
        Autorizzazione104Note: Serenity.TextAreaEditor;
        Volume104: Serenity.DecimalEditor;
        SvincoloFidejussioneN: Serenity.StringEditor;
        SvincoloFidejussioneData: Serenity.DateEditor;
        SvincoloFidejussioneNote: Serenity.TextAreaEditor;
        CollaudoN: Serenity.StringEditor;
        CollaudoData: Serenity.DateEditor;
        CollaudoNote: Serenity.TextAreaEditor;
        SospensioneN: Serenity.StringEditor;
        SospensioneData: Serenity.DateEditor;
        RevocaN: Serenity.StringEditor;
        RevocaData: Serenity.DateEditor;
        DecadenzaN: Serenity.StringEditor;
        DecadenzaData: Serenity.DateEditor;
        RinunciaN: Serenity.StringEditor;
        RinunciaData: Serenity.DateEditor;
        ParereAgenzia: Serenity.TextAreaEditor;
        Via: Serenity.BooleanEditor;
        Screening: Serenity.BooleanEditor;
        ParereMotivato: Serenity.TextAreaEditor;
        AutorizzazioneMaterialeList: AutorizzazioneMaterialeEditor;
        DerogaList: DerogaEditor;
        ProrogaList: ProrogaEditor;
        TipoRecuperoMorfologico: Serenity.EnumEditor;
        TipoRecuperoFinale: Serenity.EnumEditor;
        PendenzaScarpate: Serenity.StringEditor;
        QuotaPianoCampagna: Serenity.StringEditor;
        NoteSistemazione: Serenity.TextAreaEditor;
    }
    class AutorizzazioneForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface AutorizzazioneMaterialeForm {
        IdMateriale: Serenity.LookupEditor;
        QuantitaAutorizzata: Serenity.DecimalEditor;
        PesoAutorizzato: Serenity.DecimalEditor;
    }
    class AutorizzazioneMaterialeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface AutorizzazioneMaterialeRow {
        Id?: number;
        IdAutorizzazione?: number;
        IdMateriale?: number;
        QuantitaAutorizzata?: number;
        PesoAutorizzato?: number;
        IdMaterialeDescrizione?: string;
    }
    namespace AutorizzazioneMaterialeRow {
        const idProperty = "Id";
        const localTextPrefix = "Default.AutorizzazioneMateriale";
        const enum Fields {
            Id = "Id",
            IdAutorizzazione = "IdAutorizzazione",
            IdMateriale = "IdMateriale",
            QuantitaAutorizzata = "QuantitaAutorizzata",
            PesoAutorizzato = "PesoAutorizzato",
            IdMaterialeDescrizione = "IdMaterialeDescrizione"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace AutorizzazioneMaterialeService {
        const baseUrl = "Default/AutorizzazioneMateriale";
        function Create(request: Serenity.SaveRequest<AutorizzazioneMaterialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AutorizzazioneMaterialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AutorizzazioneMaterialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AutorizzazioneMaterialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/AutorizzazioneMateriale/Create",
            Update = "Default/AutorizzazioneMateriale/Update",
            Delete = "Default/AutorizzazioneMateriale/Delete",
            Retrieve = "Default/AutorizzazioneMateriale/Retrieve",
            List = "Default/AutorizzazioneMateriale/List"
        }
    }
}
declare namespace CaveSerene.Default {
    interface AutorizzazioneRow {
        Descrizione?: string;
        Id?: number;
        IdPiano?: number;
        IdPianoArea?: number;
        IdStruttura?: number;
        TipoRecuperoMorfologico?: Modules.Default.Enums.TipoRecuperoMorfologico;
        TipoRecuperoFinale?: Modules.Default.Enums.TipoRecuperoFinale;
        TipoDisponibilita?: Modules.Default.Enums.TipoDisponibilita;
        NumeroAtto?: string;
        NumeroAttoNotifica?: string;
        VolumeAutorizzato?: number;
        PesoAutorizzato?: number;
        SuperficieAutorizzata?: number;
        SuperficieScavo?: number;
        ProfonditaScavo?: number;
        DataAutorizzazione?: string;
        DataNotifica?: string;
        DataScadenza?: string;
        DataSistemazione?: string;
        DenunciaEsercizioN?: string;
        DenunciaEsercizioData?: string;
        ConvenzioneN?: string;
        ConvenzioneData?: string;
        SospensioneN?: string;
        SospensioneData?: string;
        RevocaN?: string;
        RevocaData?: string;
        DecadenzaN?: string;
        DecadenzaData?: string;
        RinunciaN?: string;
        RinunciaData?: string;
        Autorizzazione104N?: string;
        Autorizzazione104Data?: string;
        Autorizzazione104Note?: string;
        Volume104?: number;
        SvincoloFidejussioneN?: string;
        SvincoloFidejussioneData?: string;
        SvincoloFidejussioneNote?: string;
        CollaudoN?: string;
        CollaudoData?: string;
        CollaudoNote?: string;
        PendenzaScarpate?: string;
        QuotaPianoCampagna?: string;
        ParereAgenzia?: string;
        Via?: boolean;
        Screening?: boolean;
        ParereMotivato?: string;
        ProprietaTerreni?: string;
        NoteSistemazione?: string;
        IdEsercente?: number;
        IdStrutturaNome?: string;
        IdEsercenteRagSoc?: string;
        AutorizzazioneMaterialeList?: AutorizzazioneMaterialeRow[];
        DerogaList?: DerogaRow[];
        ProrogaList?: ProrogaRow[];
    }
    namespace AutorizzazioneRow {
        const idProperty = "Id";
        const nameProperty = "Descrizione";
        const localTextPrefix = "Default.Autorizzazione";
        const lookupKey = "Default.Autorizzazione";
        function getLookup(): Q.Lookup<AutorizzazioneRow>;
        const enum Fields {
            Descrizione = "Descrizione",
            Id = "Id",
            IdPiano = "IdPiano",
            IdPianoArea = "IdPianoArea",
            IdStruttura = "IdStruttura",
            TipoRecuperoMorfologico = "TipoRecuperoMorfologico",
            TipoRecuperoFinale = "TipoRecuperoFinale",
            TipoDisponibilita = "TipoDisponibilita",
            NumeroAtto = "NumeroAtto",
            NumeroAttoNotifica = "NumeroAttoNotifica",
            VolumeAutorizzato = "VolumeAutorizzato",
            PesoAutorizzato = "PesoAutorizzato",
            SuperficieAutorizzata = "SuperficieAutorizzata",
            SuperficieScavo = "SuperficieScavo",
            ProfonditaScavo = "ProfonditaScavo",
            DataAutorizzazione = "DataAutorizzazione",
            DataNotifica = "DataNotifica",
            DataScadenza = "DataScadenza",
            DataSistemazione = "DataSistemazione",
            DenunciaEsercizioN = "DenunciaEsercizioN",
            DenunciaEsercizioData = "DenunciaEsercizioData",
            ConvenzioneN = "ConvenzioneN",
            ConvenzioneData = "ConvenzioneData",
            SospensioneN = "SospensioneN",
            SospensioneData = "SospensioneData",
            RevocaN = "RevocaN",
            RevocaData = "RevocaData",
            DecadenzaN = "DecadenzaN",
            DecadenzaData = "DecadenzaData",
            RinunciaN = "RinunciaN",
            RinunciaData = "RinunciaData",
            Autorizzazione104N = "Autorizzazione104N",
            Autorizzazione104Data = "Autorizzazione104Data",
            Autorizzazione104Note = "Autorizzazione104Note",
            Volume104 = "Volume104",
            SvincoloFidejussioneN = "SvincoloFidejussioneN",
            SvincoloFidejussioneData = "SvincoloFidejussioneData",
            SvincoloFidejussioneNote = "SvincoloFidejussioneNote",
            CollaudoN = "CollaudoN",
            CollaudoData = "CollaudoData",
            CollaudoNote = "CollaudoNote",
            PendenzaScarpate = "PendenzaScarpate",
            QuotaPianoCampagna = "QuotaPianoCampagna",
            ParereAgenzia = "ParereAgenzia",
            Via = "Via",
            Screening = "Screening",
            ParereMotivato = "ParereMotivato",
            ProprietaTerreni = "ProprietaTerreni",
            NoteSistemazione = "NoteSistemazione",
            IdEsercente = "IdEsercente",
            IdStrutturaNome = "IdStrutturaNome",
            IdEsercenteRagSoc = "IdEsercenteRagSoc",
            AutorizzazioneMaterialeList = "AutorizzazioneMaterialeList",
            DerogaList = "DerogaList",
            ProrogaList = "ProrogaList"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace AutorizzazioneService {
        const baseUrl = "Default/Autorizzazione";
        function Create(request: Serenity.SaveRequest<AutorizzazioneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AutorizzazioneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AutorizzazioneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AutorizzazioneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Autorizzazione/Create",
            Update = "Default/Autorizzazione/Update",
            Delete = "Default/Autorizzazione/Delete",
            Retrieve = "Default/Autorizzazione/Retrieve",
            List = "Default/Autorizzazione/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface CavaForm {
        Nome: Serenity.StringEditor;
        IdComune: Serenity.LookupEditor;
        TipoPosizione: Serenity.EnumEditor;
        TipoDissesto: Serenity.EnumEditor;
        TipoColtivazione: Serenity.EnumEditor;
        Progressivo: Serenity.IntegerEditor;
        Frazione: Serenity.StringEditor;
        CatastoProvinciale: Serenity.StringEditor;
        VincoloAmbientale: Serenity.IntegerEditor;
        AreaProtetta: Serenity.BooleanEditor;
        ProfonditaFalda: Serenity.DecimalEditor;
        GIS: StaticTextBlock;
        CoordinataX: Serenity.DecimalEditor;
        CoordinataY: Serenity.DecimalEditor;
    }
    class CavaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface CavaRow {
        Id?: number;
        IdComune?: string;
        TipoPosizione?: Modules.Default.Enums.TipoPosizione;
        TipoDissesto?: Modules.Default.Enums.TipoDissesto;
        TipoColtivazione?: Modules.Default.Enums.TipoColtivazione;
        Progressivo?: number;
        Nome?: string;
        Frazione?: string;
        CatastoProvinciale?: string;
        CoordinataX?: number;
        CoordinataY?: number;
        VincoloAmbientale?: number;
        AreaProtetta?: boolean;
        ProfonditaFalda?: number;
        TipoStruttura?: Modules.Default.Enums.TipoStruttura;
        IdComuneNome?: string;
    }
    namespace CavaRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Cava";
        const lookupKey = "Default.Cava";
        function getLookup(): Q.Lookup<CavaRow>;
        const enum Fields {
            Id = "Id",
            IdComune = "IdComune",
            TipoPosizione = "TipoPosizione",
            TipoDissesto = "TipoDissesto",
            TipoColtivazione = "TipoColtivazione",
            Progressivo = "Progressivo",
            Nome = "Nome",
            Frazione = "Frazione",
            CatastoProvinciale = "CatastoProvinciale",
            CoordinataX = "CoordinataX",
            CoordinataY = "CoordinataY",
            VincoloAmbientale = "VincoloAmbientale",
            AreaProtetta = "AreaProtetta",
            ProfonditaFalda = "ProfonditaFalda",
            TipoStruttura = "TipoStruttura",
            IdComuneNome = "IdComuneNome"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace CavaService {
        const baseUrl = "Default/Cava";
        function Create(request: Serenity.SaveRequest<CavaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CavaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CavaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CavaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Cava/Create",
            Update = "Default/Cava/Update",
            Delete = "Default/Cava/Delete",
            Retrieve = "Default/Cava/Retrieve",
            List = "Default/Cava/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface ComuneForm {
        CodiceRegione: Serenity.StringEditor;
        SiglaProvincia: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        Cap: Serenity.StringEditor;
        ZonaAlt: Serenity.StringEditor;
        EntCod: Serenity.StringEditor;
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
        Id?: string;
        CodiceRegione?: string;
        SiglaProvincia?: string;
        Nome?: string;
        Cap?: string;
        ZonaAlt?: string;
        EntCod?: string;
        CodCatastale?: string;
    }
    namespace ComuneRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Comune";
        const lookupKey = "Default.Comune";
        function getLookup(): Q.Lookup<ComuneRow>;
        const enum Fields {
            Id = "Id",
            CodiceRegione = "CodiceRegione",
            SiglaProvincia = "SiglaProvincia",
            Nome = "Nome",
            Cap = "Cap",
            ZonaAlt = "ZonaAlt",
            EntCod = "EntCod",
            CodCatastale = "CodCatastale"
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
            List = "Default/Comune/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface ConcessioneForm {
        IdStruttura: Serenity.LookupEditor;
        IdEsercente: Serenity.LookupEditor;
        NumeroAtto: Serenity.StringEditor;
        DataAutorizzazione: Serenity.DateEditor;
        DataSistemazione: Serenity.DateEditor;
        SuperficieAutorizzata: Serenity.DecimalEditor;
        SuperficieScavo: Serenity.DecimalEditor;
        ParereAgenzia: Serenity.TextAreaEditor;
        Via: Serenity.BooleanEditor;
        DenunciaEsercizioN: Serenity.StringEditor;
        DenunciaEsercizioData: Serenity.DateEditor;
        SospensioneN: Serenity.StringEditor;
        SospensioneData: Serenity.DateEditor;
        RevocaN: Serenity.StringEditor;
        RevocaData: Serenity.DateEditor;
        DecadenzaN: Serenity.StringEditor;
        DecadenzaData: Serenity.DateEditor;
        RinunciaN: Serenity.StringEditor;
        RinunciaData: Serenity.DateEditor;
        ConcessioneMaterialeList: AutorizzazioneMaterialeEditor;
        ProrogaList: ProrogaEditor;
        TipoRecuperoMorfologico: Serenity.EnumEditor;
        TipoRecuperoFinale: Serenity.EnumEditor;
        PendenzaScarpate: Serenity.StringEditor;
        QuotaPianoCampagna: Serenity.StringEditor;
    }
    class ConcessioneForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface ConcessioneRow {
        Descrizione?: string;
        Id?: number;
        IdStruttura?: number;
        TipoRecuperoMorfologico?: Modules.Default.Enums.TipoRecuperoMorfologico;
        TipoRecuperoFinale?: Modules.Default.Enums.TipoRecuperoFinale;
        TipoDisponibilita?: Modules.Default.Enums.TipoDisponibilita;
        NumeroAtto?: string;
        SuperficieAutorizzata?: number;
        SuperficieScavo?: number;
        DataAutorizzazione?: string;
        DataSistemazione?: string;
        DenunciaEsercizioN?: string;
        DenunciaEsercizioData?: string;
        SospensioneN?: string;
        SospensioneData?: string;
        ParereAgenzia?: string;
        Via?: boolean;
        RevocaN?: string;
        RevocaData?: string;
        DecadenzaN?: string;
        DecadenzaData?: string;
        RinunciaN?: string;
        RinunciaData?: string;
        PendenzaScarpate?: string;
        QuotaPianoCampagna?: string;
        IdEsercente?: number;
        IdStrutturaNome?: string;
        IdEsercenteRagSoc?: string;
        ConcessioneMaterialeList?: AutorizzazioneMaterialeRow[];
        ProrogaList?: ProrogaRow[];
    }
    namespace ConcessioneRow {
        const idProperty = "Id";
        const nameProperty = "Descrizione";
        const localTextPrefix = "Default.Concessione";
        const enum Fields {
            Descrizione = "Descrizione",
            Id = "Id",
            IdStruttura = "IdStruttura",
            TipoRecuperoMorfologico = "TipoRecuperoMorfologico",
            TipoRecuperoFinale = "TipoRecuperoFinale",
            TipoDisponibilita = "TipoDisponibilita",
            NumeroAtto = "NumeroAtto",
            SuperficieAutorizzata = "SuperficieAutorizzata",
            SuperficieScavo = "SuperficieScavo",
            DataAutorizzazione = "DataAutorizzazione",
            DataSistemazione = "DataSistemazione",
            DenunciaEsercizioN = "DenunciaEsercizioN",
            DenunciaEsercizioData = "DenunciaEsercizioData",
            SospensioneN = "SospensioneN",
            SospensioneData = "SospensioneData",
            ParereAgenzia = "ParereAgenzia",
            Via = "Via",
            RevocaN = "RevocaN",
            RevocaData = "RevocaData",
            DecadenzaN = "DecadenzaN",
            DecadenzaData = "DecadenzaData",
            RinunciaN = "RinunciaN",
            RinunciaData = "RinunciaData",
            PendenzaScarpate = "PendenzaScarpate",
            QuotaPianoCampagna = "QuotaPianoCampagna",
            IdEsercente = "IdEsercente",
            IdStrutturaNome = "IdStrutturaNome",
            IdEsercenteRagSoc = "IdEsercenteRagSoc",
            ConcessioneMaterialeList = "ConcessioneMaterialeList",
            ProrogaList = "ProrogaList"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace ConcessioneService {
        const baseUrl = "Default/Concessione";
        function Create(request: Serenity.SaveRequest<ConcessioneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ConcessioneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConcessioneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConcessioneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Concessione/Create",
            Update = "Default/Concessione/Update",
            Delete = "Default/Concessione/Delete",
            Retrieve = "Default/Concessione/Retrieve",
            List = "Default/Concessione/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface DerogaForm {
        VolumeDeroga: Serenity.DecimalEditor;
        Protocollo: Serenity.StringEditor;
        Data: Serenity.DateEditor;
        Note: Serenity.TextAreaEditor;
    }
    class DerogaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface DerogaRow {
        Id?: number;
        IdAutorizzazione?: number;
        Protocollo?: string;
        Data?: string;
        VolumeDeroga?: number;
        Note?: string;
        IdAutorizzazioneIdPianoArea?: number;
        IdAutorizzazioneIdStruttura?: number;
        IdAutorizzazioneTipoRecuperoMorfologico?: number;
        IdAutorizzazioneTipoRecuperoFinale?: number;
        IdAutorizzazioneTipoDisponibilita?: number;
        IdAutorizzazioneNumeroAtto?: string;
        IdAutorizzazioneNumeroAttoNotifica?: string;
        IdAutorizzazioneVolumeAutorizzato?: number;
        IdAutorizzazionePesoAutorizzato?: number;
        IdAutorizzazioneSuperficieAutorizzata?: number;
        IdAutorizzazioneSuperficieScavo?: number;
        IdAutorizzazioneProfonditaScavo?: number;
        IdAutorizzazioneDataAutorizzazione?: string;
        IdAutorizzazioneDataNotifica?: string;
        IdAutorizzazioneDataScadenza?: string;
        IdAutorizzazioneDataSistemazione?: string;
        IdAutorizzazioneDenunciaEsercizioN?: string;
        IdAutorizzazioneDenunciaEsercizioData?: string;
        IdAutorizzazioneConvenzioneN?: string;
        IdAutorizzazioneConvenzioneData?: string;
        IdAutorizzazioneSospensioneN?: string;
        IdAutorizzazioneSospensioneData?: string;
        IdAutorizzazioneRevocaN?: string;
        IdAutorizzazioneRevocaData?: string;
        IdAutorizzazioneDecadenzaN?: string;
        IdAutorizzazioneDecadenzaData?: string;
        IdAutorizzazioneRinunciaN?: string;
        IdAutorizzazioneRinunciaData?: string;
        IdAutorizzazioneAutorizzazione104N?: string;
        IdAutorizzazioneAutorizzazione104Data?: string;
        IdAutorizzazioneAutorizzazione104Note?: string;
        IdAutorizzazioneVolume104?: number;
        IdAutorizzazioneSvincoloFidejussioneN?: string;
        IdAutorizzazioneSvincoloFidejussioneData?: string;
        IdAutorizzazioneSvincoloFidejussioneNote?: string;
        IdAutorizzazioneCollaudoN?: string;
        IdAutorizzazioneCollaudoData?: string;
        IdAutorizzazioneCollaudoNote?: string;
        IdAutorizzazionePendenzaScarpate?: string;
        IdAutorizzazioneQuotaPianoCampagna?: string;
        IdAutorizzazioneParereAgenzia?: string;
        IdAutorizzazioneVia?: boolean;
        IdAutorizzazioneScreening?: boolean;
        IdAutorizzazioneParereMotivato?: string;
        IdAutorizzazioneProprietaTerreni?: string;
        IdAutorizzazioneNoteSistemazione?: string;
        IdAutorizzazioneIdEsercente?: number;
    }
    namespace DerogaRow {
        const idProperty = "Id";
        const nameProperty = "Protocollo";
        const localTextPrefix = "Default.Deroga";
        const enum Fields {
            Id = "Id",
            IdAutorizzazione = "IdAutorizzazione",
            Protocollo = "Protocollo",
            Data = "Data",
            VolumeDeroga = "VolumeDeroga",
            Note = "Note",
            IdAutorizzazioneIdPianoArea = "IdAutorizzazioneIdPianoArea",
            IdAutorizzazioneIdStruttura = "IdAutorizzazioneIdStruttura",
            IdAutorizzazioneTipoRecuperoMorfologico = "IdAutorizzazioneTipoRecuperoMorfologico",
            IdAutorizzazioneTipoRecuperoFinale = "IdAutorizzazioneTipoRecuperoFinale",
            IdAutorizzazioneTipoDisponibilita = "IdAutorizzazioneTipoDisponibilita",
            IdAutorizzazioneNumeroAtto = "IdAutorizzazioneNumeroAtto",
            IdAutorizzazioneNumeroAttoNotifica = "IdAutorizzazioneNumeroAttoNotifica",
            IdAutorizzazioneVolumeAutorizzato = "IdAutorizzazioneVolumeAutorizzato",
            IdAutorizzazionePesoAutorizzato = "IdAutorizzazionePesoAutorizzato",
            IdAutorizzazioneSuperficieAutorizzata = "IdAutorizzazioneSuperficieAutorizzata",
            IdAutorizzazioneSuperficieScavo = "IdAutorizzazioneSuperficieScavo",
            IdAutorizzazioneProfonditaScavo = "IdAutorizzazioneProfonditaScavo",
            IdAutorizzazioneDataAutorizzazione = "IdAutorizzazioneDataAutorizzazione",
            IdAutorizzazioneDataNotifica = "IdAutorizzazioneDataNotifica",
            IdAutorizzazioneDataScadenza = "IdAutorizzazioneDataScadenza",
            IdAutorizzazioneDataSistemazione = "IdAutorizzazioneDataSistemazione",
            IdAutorizzazioneDenunciaEsercizioN = "IdAutorizzazioneDenunciaEsercizioN",
            IdAutorizzazioneDenunciaEsercizioData = "IdAutorizzazioneDenunciaEsercizioData",
            IdAutorizzazioneConvenzioneN = "IdAutorizzazioneConvenzioneN",
            IdAutorizzazioneConvenzioneData = "IdAutorizzazioneConvenzioneData",
            IdAutorizzazioneSospensioneN = "IdAutorizzazioneSospensioneN",
            IdAutorizzazioneSospensioneData = "IdAutorizzazioneSospensioneData",
            IdAutorizzazioneRevocaN = "IdAutorizzazioneRevocaN",
            IdAutorizzazioneRevocaData = "IdAutorizzazioneRevocaData",
            IdAutorizzazioneDecadenzaN = "IdAutorizzazioneDecadenzaN",
            IdAutorizzazioneDecadenzaData = "IdAutorizzazioneDecadenzaData",
            IdAutorizzazioneRinunciaN = "IdAutorizzazioneRinunciaN",
            IdAutorizzazioneRinunciaData = "IdAutorizzazioneRinunciaData",
            IdAutorizzazioneAutorizzazione104N = "IdAutorizzazioneAutorizzazione104N",
            IdAutorizzazioneAutorizzazione104Data = "IdAutorizzazioneAutorizzazione104Data",
            IdAutorizzazioneAutorizzazione104Note = "IdAutorizzazioneAutorizzazione104Note",
            IdAutorizzazioneVolume104 = "IdAutorizzazioneVolume104",
            IdAutorizzazioneSvincoloFidejussioneN = "IdAutorizzazioneSvincoloFidejussioneN",
            IdAutorizzazioneSvincoloFidejussioneData = "IdAutorizzazioneSvincoloFidejussioneData",
            IdAutorizzazioneSvincoloFidejussioneNote = "IdAutorizzazioneSvincoloFidejussioneNote",
            IdAutorizzazioneCollaudoN = "IdAutorizzazioneCollaudoN",
            IdAutorizzazioneCollaudoData = "IdAutorizzazioneCollaudoData",
            IdAutorizzazioneCollaudoNote = "IdAutorizzazioneCollaudoNote",
            IdAutorizzazionePendenzaScarpate = "IdAutorizzazionePendenzaScarpate",
            IdAutorizzazioneQuotaPianoCampagna = "IdAutorizzazioneQuotaPianoCampagna",
            IdAutorizzazioneParereAgenzia = "IdAutorizzazioneParereAgenzia",
            IdAutorizzazioneVia = "IdAutorizzazioneVia",
            IdAutorizzazioneScreening = "IdAutorizzazioneScreening",
            IdAutorizzazioneParereMotivato = "IdAutorizzazioneParereMotivato",
            IdAutorizzazioneProprietaTerreni = "IdAutorizzazioneProprietaTerreni",
            IdAutorizzazioneNoteSistemazione = "IdAutorizzazioneNoteSistemazione",
            IdAutorizzazioneIdEsercente = "IdAutorizzazioneIdEsercente"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace DerogaService {
        const baseUrl = "Default/Deroga";
        function Create(request: Serenity.SaveRequest<DerogaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DerogaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DerogaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DerogaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Deroga/Create",
            Update = "Default/Deroga/Update",
            Delete = "Default/Deroga/Delete",
            Retrieve = "Default/Deroga/Retrieve",
            List = "Default/Deroga/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface EnteForm {
        Id: Serenity.StringEditor;
        IdRegione: Serenity.LookupEditor;
        Nome: Serenity.StringEditor;
        Sigla: Serenity.StringEditor;
    }
    class EnteForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface EnteRow {
        Id?: string;
        IdRegione?: string;
        Nome?: string;
        Sigla?: string;
        IdRegioneNome?: string;
    }
    namespace EnteRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Ente";
        const lookupKey = "Default.Ente";
        function getLookup(): Q.Lookup<EnteRow>;
        const enum Fields {
            Id = "Id",
            IdRegione = "IdRegione",
            Nome = "Nome",
            Sigla = "Sigla",
            IdRegioneNome = "IdRegioneNome"
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
            List = "Default/Ente/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface EsercenteForm {
        RagSoc: Serenity.StringEditor;
        CodCcia: Serenity.StringEditor;
        Indirizzo: Serenity.StringEditor;
        Cap: Serenity.IntegerEditor;
        Frazione: Serenity.StringEditor;
        IdComune: Serenity.LookupEditor;
        CodiceFiscale: Serenity.StringEditor;
        PartitaIva: Serenity.StringEditor;
        CodiceFiscaleCompilatore: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        EMail: Serenity.StringEditor;
        LegaleRappresentante: Serenity.StringEditor;
        DatiFallimento: Serenity.TextAreaEditor;
    }
    class EsercenteForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface EsercenteRow {
        Id?: number;
        CodCcia?: string;
        RagSoc?: string;
        Indirizzo?: string;
        Cap?: number;
        Frazione?: string;
        IdComune?: string;
        CodiceFiscale?: string;
        PartitaIva?: string;
        CodiceFiscaleCompilatore?: string;
        Telefono?: string;
        EMail?: string;
        LegaleRappresentante?: string;
        DatiFallimento?: string;
        IdComuneNome?: string;
    }
    namespace EsercenteRow {
        const idProperty = "Id";
        const nameProperty = "RagSoc";
        const localTextPrefix = "Default.Esercente";
        const lookupKey = "Default.Esercente";
        function getLookup(): Q.Lookup<EsercenteRow>;
        const enum Fields {
            Id = "Id",
            CodCcia = "CodCcia",
            RagSoc = "RagSoc",
            Indirizzo = "Indirizzo",
            Cap = "Cap",
            Frazione = "Frazione",
            IdComune = "IdComune",
            CodiceFiscale = "CodiceFiscale",
            PartitaIva = "PartitaIva",
            CodiceFiscaleCompilatore = "CodiceFiscaleCompilatore",
            Telefono = "Telefono",
            EMail = "EMail",
            LegaleRappresentante = "LegaleRappresentante",
            DatiFallimento = "DatiFallimento",
            IdComuneNome = "IdComuneNome"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace EsercenteService {
        const baseUrl = "Default/Esercente";
        function Create(request: Serenity.SaveRequest<EsercenteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EsercenteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EsercenteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EsercenteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Esercente/Create",
            Update = "Default/Esercente/Update",
            Delete = "Default/Esercente/Delete",
            Retrieve = "Default/Esercente/Retrieve",
            List = "Default/Esercente/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface FabbisognoForm {
        IdMateriale: Serenity.LookupEditor;
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
        Id?: string;
        IdPiano?: number;
        IdMateriale?: number;
        Fabbisogno?: number;
        Potenziale?: number;
        Residuo?: number;
        IdMaterialeDescrizione?: string;
    }
    namespace FabbisognoRow {
        const idProperty = "Id";
        const localTextPrefix = "Default.Fabbisogno";
        const enum Fields {
            Id = "Id",
            IdPiano = "IdPiano",
            IdMateriale = "IdMateriale",
            Fabbisogno = "Fabbisogno",
            Potenziale = "Potenziale",
            Residuo = "Residuo",
            IdMaterialeDescrizione = "IdMaterialeDescrizione"
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
            List = "Default/Fabbisogno/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface ImpiantoForm {
        Nome: Serenity.StringEditor;
        IdComune: Serenity.LookupEditor;
        TipoImpianto: Serenity.EnumEditor;
        Progressivo: Serenity.IntegerEditor;
        Frazione: Serenity.StringEditor;
        CatastoProvinciale: Serenity.StringEditor;
        CoordinataX: Serenity.DecimalEditor;
        CoordinataY: Serenity.DecimalEditor;
        DataInstallazioneImpianto: Serenity.DateEditor;
    }
    class ImpiantoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface ImpiantoRow {
        Id?: number;
        IdComune?: string;
        Progressivo?: number;
        Nome?: string;
        Frazione?: string;
        CatastoProvinciale?: string;
        CoordinataX?: number;
        CoordinataY?: number;
        TipoImpianto?: Modules.Default.Enums.TipoImpianto;
        DataInstallazioneImpianto?: string;
        TipoStruttura?: Modules.Default.Enums.TipoStruttura;
        IdComuneNome?: string;
    }
    namespace ImpiantoRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Impianto";
        const lookupKey = "Default.Impianto";
        function getLookup(): Q.Lookup<ImpiantoRow>;
        const enum Fields {
            Id = "Id",
            IdComune = "IdComune",
            Progressivo = "Progressivo",
            Nome = "Nome",
            Frazione = "Frazione",
            CatastoProvinciale = "CatastoProvinciale",
            CoordinataX = "CoordinataX",
            CoordinataY = "CoordinataY",
            TipoImpianto = "TipoImpianto",
            DataInstallazioneImpianto = "DataInstallazioneImpianto",
            TipoStruttura = "TipoStruttura",
            IdComuneNome = "IdComuneNome"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace ImpiantoService {
        const baseUrl = "Default/Impianto";
        function Create(request: Serenity.SaveRequest<ImpiantoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImpiantoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImpiantoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImpiantoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Impianto/Create",
            Update = "Default/Impianto/Update",
            Delete = "Default/Impianto/Delete",
            Retrieve = "Default/Impianto/Retrieve",
            List = "Default/Impianto/List"
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
        NomeRisorsaMineraleIstat?: Modules.Default.Enums.TipoISTAT;
        IdTipoMaterialeDescrizione?: string;
    }
    namespace MaterialeRow {
        const idProperty = "Id";
        const nameProperty = "Descrizione";
        const localTextPrefix = "Default.Materiale";
        const lookupKey = "Default.Materiale";
        function getLookup(): Q.Lookup<MaterialeRow>;
        const enum Fields {
            Id = "Id",
            Descrizione = "Descrizione",
            IdTipoMateriale = "IdTipoMateriale",
            TariffaRiferimento = "TariffaRiferimento",
            PesoSpecificoRiferimento = "PesoSpecificoRiferimento",
            NomeRisorsaMineraleIstat = "NomeRisorsaMineraleIstat",
            IdTipoMaterialeDescrizione = "IdTipoMaterialeDescrizione"
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
            List = "Default/Materiale/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface MinieraForm {
        Nome: Serenity.StringEditor;
        IdComune: Serenity.LookupEditor;
        TipoPosizione: Serenity.EnumEditor;
        TipoDissesto: Serenity.EnumEditor;
        TipoColtivazione: Serenity.EnumEditor;
        Progressivo: Serenity.IntegerEditor;
        Frazione: Serenity.StringEditor;
        CatastoProvinciale: Serenity.StringEditor;
        CoordinataX: Serenity.DecimalEditor;
        CoordinataY: Serenity.DecimalEditor;
        VincoloAmbientale: Serenity.IntegerEditor;
        AreaProtetta: Serenity.BooleanEditor;
        ProfonditaFalda: Serenity.DecimalEditor;
    }
    class MinieraForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface MinieraRow {
        Id?: number;
        IdComune?: string;
        TipoPosizione?: Modules.Default.Enums.TipoPosizione;
        TipoDissesto?: Modules.Default.Enums.TipoDissesto;
        TipoColtivazione?: Modules.Default.Enums.TipoColtivazione;
        Progressivo?: number;
        Nome?: string;
        Frazione?: string;
        CatastoProvinciale?: string;
        CoordinataX?: number;
        CoordinataY?: number;
        VincoloAmbientale?: number;
        AreaProtetta?: boolean;
        ProfonditaFalda?: number;
        TipoStruttura?: Modules.Default.Enums.TipoStruttura;
        IdComuneNome?: string;
    }
    namespace MinieraRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Miniera";
        const lookupKey = "Default.Miniera";
        function getLookup(): Q.Lookup<MinieraRow>;
        const enum Fields {
            Id = "Id",
            IdComune = "IdComune",
            TipoPosizione = "TipoPosizione",
            TipoDissesto = "TipoDissesto",
            TipoColtivazione = "TipoColtivazione",
            Progressivo = "Progressivo",
            Nome = "Nome",
            Frazione = "Frazione",
            CatastoProvinciale = "CatastoProvinciale",
            CoordinataX = "CoordinataX",
            CoordinataY = "CoordinataY",
            VincoloAmbientale = "VincoloAmbientale",
            AreaProtetta = "AreaProtetta",
            ProfonditaFalda = "ProfonditaFalda",
            TipoStruttura = "TipoStruttura",
            IdComuneNome = "IdComuneNome"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace MinieraService {
        const baseUrl = "Default/Miniera";
        function Create(request: Serenity.SaveRequest<MinieraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MinieraRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MinieraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MinieraRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Miniera/Create",
            Update = "Default/Miniera/Update",
            Delete = "Default/Miniera/Delete",
            Retrieve = "Default/Miniera/Retrieve",
            List = "Default/Miniera/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface PianoAreaForm {
        IdArea: Serenity.LookupEditor;
        TipoStato: Serenity.EnumEditor;
        ProfMax: Serenity.DecimalEditor;
        Sup: Serenity.IntegerEditor;
        PotenzialeList: PotenzialeEditor;
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
        TipoStato?: Modules.Default.Enums.TipoStato;
        ProfMax?: number;
        Sup?: number;
        IdAreaNome?: string;
        PotenzialeList?: PotenzialeRow[];
    }
    namespace PianoAreaRow {
        const idProperty = "Id";
        const nameProperty = "IdAreaNome";
        const localTextPrefix = "Default.PianoArea";
        const lookupKey = "Default.PianoArea";
        function getLookup(): Q.Lookup<PianoAreaRow>;
        const enum Fields {
            Id = "Id",
            IdPiano = "IdPiano",
            IdArea = "IdArea",
            TipoStato = "TipoStato",
            ProfMax = "ProfMax",
            Sup = "Sup",
            IdAreaNome = "IdAreaNome",
            PotenzialeList = "PotenzialeList"
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
            List = "Default/PianoArea/List"
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
        FabbisognoList: FabbisognoEditor;
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
        IdEnte?: string;
        Progressivo?: number;
        Variante?: number;
        DataInizio?: string;
        DataFine?: string;
        Note?: string;
        IdEnteNome?: string;
        AttoList?: AttoRow[];
        PianoAreaList?: PianoAreaRow[];
        FabbisognoList?: FabbisognoRow[];
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
            IdEnteNome = "IdEnteNome",
            AttoList = "AttoList",
            PianoAreaList = "PianoAreaList",
            FabbisognoList = "FabbisognoList"
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
            List = "Default/Piano/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface PotenzialeForm {
        IdMateriale: Serenity.LookupEditor;
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
        Id?: number;
        IdMateriale?: number;
        IdPianoArea?: number;
        Potenziale?: number;
        Residuo?: number;
        IdMaterialeDescrizione?: string;
    }
    namespace PotenzialeRow {
        const idProperty = "Id";
        const localTextPrefix = "Default.Potenziale";
        const enum Fields {
            Id = "Id",
            IdMateriale = "IdMateriale",
            IdPianoArea = "IdPianoArea",
            Potenziale = "Potenziale",
            Residuo = "Residuo",
            IdMaterialeDescrizione = "IdMaterialeDescrizione"
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
            List = "Default/Potenziale/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface ProdottoForm {
        IdMateriale: Serenity.LookupEditor;
        QuantitaEstratta: Serenity.DecimalEditor;
        Peso: Serenity.DecimalEditor;
        PesoSpecifico: Serenity.DecimalEditor;
        Oneri: Serenity.DecimalEditor;
        NumeroMesiAttivita: Serenity.DecimalEditor;
        PrimaLavorazione: Serenity.BooleanEditor;
        QuantitaLavorazione: Serenity.DecimalEditor;
        TipoLavorazione1: Serenity.EnumEditor;
        TipoLavorazione2: Serenity.EnumEditor;
        TipoLavorazione3: Serenity.EnumEditor;
        TipoCommercializzazione1: Serenity.EnumEditor;
        Quantita1: Serenity.DecimalEditor;
        Prezzo1: Serenity.DecimalEditor;
        Um1: Serenity.StringEditor;
        TipoCommercializzazione2: Serenity.EnumEditor;
        Quantita2: Serenity.DecimalEditor;
        Prezzo2: Serenity.DecimalEditor;
        Um2: Serenity.StringEditor;
        TipoCommercializzazione3: Serenity.EnumEditor;
        Quantita3: Serenity.DecimalEditor;
        Prezzo3: Serenity.DecimalEditor;
        Um3: Serenity.StringEditor;
    }
    class ProdottoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface ProdottoRow {
        Id?: number;
        IdRendiconto?: number;
        IdMateriale?: number;
        NumeroMesiAttivita?: number;
        TipoLavorazione1?: Modules.Default.Enums.TipoLavorazione;
        TipoLavorazione2?: Modules.Default.Enums.TipoLavorazione;
        TipoLavorazione3?: Modules.Default.Enums.TipoLavorazione;
        QuantitaEstratta?: number;
        Oneri?: number;
        Peso?: number;
        PesoSpecifico?: number;
        PrimaLavorazione?: boolean;
        QuantitaLavorazione?: number;
        TipoCommercializzazione1?: Modules.Default.Enums.TipoCommercializzazione;
        Quantita1?: number;
        Prezzo1?: number;
        Um1?: string;
        TipoCommercializzazione2?: Modules.Default.Enums.TipoCommercializzazione;
        Quantita2?: number;
        Prezzo2?: number;
        Um2?: string;
        TipoCommercializzazione3?: Modules.Default.Enums.TipoCommercializzazione;
        Quantita3?: number;
        Prezzo3?: number;
        Um3?: string;
        IdRendicontoIdAutorizzazione?: number;
        IdMaterialeDescrizione?: string;
        IdMaterialeIdTipoMateriale?: number;
        IdMaterialeTariffaRiferimento?: number;
        IdMaterialePesoSpecificoRiferimento?: number;
        IdMaterialeNomeRisorsaMineraleIstat?: number;
    }
    namespace ProdottoRow {
        const idProperty = "Id";
        const nameProperty = "IdMaterialeDescrizione";
        const localTextPrefix = "Default.Prodotto";
        const enum Fields {
            Id = "Id",
            IdRendiconto = "IdRendiconto",
            IdMateriale = "IdMateriale",
            NumeroMesiAttivita = "NumeroMesiAttivita",
            TipoLavorazione1 = "TipoLavorazione1",
            TipoLavorazione2 = "TipoLavorazione2",
            TipoLavorazione3 = "TipoLavorazione3",
            QuantitaEstratta = "QuantitaEstratta",
            Oneri = "Oneri",
            Peso = "Peso",
            PesoSpecifico = "PesoSpecifico",
            PrimaLavorazione = "PrimaLavorazione",
            QuantitaLavorazione = "QuantitaLavorazione",
            TipoCommercializzazione1 = "TipoCommercializzazione1",
            Quantita1 = "Quantita1",
            Prezzo1 = "Prezzo1",
            Um1 = "Um1",
            TipoCommercializzazione2 = "TipoCommercializzazione2",
            Quantita2 = "Quantita2",
            Prezzo2 = "Prezzo2",
            Um2 = "Um2",
            TipoCommercializzazione3 = "TipoCommercializzazione3",
            Quantita3 = "Quantita3",
            Prezzo3 = "Prezzo3",
            Um3 = "Um3",
            IdRendicontoIdAutorizzazione = "IdRendicontoIdAutorizzazione",
            IdMaterialeDescrizione = "IdMaterialeDescrizione",
            IdMaterialeIdTipoMateriale = "IdMaterialeIdTipoMateriale",
            IdMaterialeTariffaRiferimento = "IdMaterialeTariffaRiferimento",
            IdMaterialePesoSpecificoRiferimento = "IdMaterialePesoSpecificoRiferimento",
            IdMaterialeNomeRisorsaMineraleIstat = "IdMaterialeNomeRisorsaMineraleIstat"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace ProdottoService {
        const baseUrl = "Default/Prodotto";
        function Create(request: Serenity.SaveRequest<ProdottoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProdottoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProdottoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProdottoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Prodotto/Create",
            Update = "Default/Prodotto/Update",
            Delete = "Default/Prodotto/Delete",
            Retrieve = "Default/Prodotto/Retrieve",
            List = "Default/Prodotto/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface ProrogaForm {
        NuovaDataSistemazione: Serenity.DateEditor;
        Protocollo: Serenity.StringEditor;
        Data: Serenity.DateEditor;
        Note: Serenity.TextAreaEditor;
    }
    class ProrogaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface ProrogaRow {
        Id?: number;
        IdAutorizzazione?: number;
        Protocollo?: string;
        Data?: string;
        NuovaDataSistemazione?: string;
        Note?: string;
        IdAutorizzazioneIdPianoArea?: number;
        IdAutorizzazioneIdStruttura?: number;
        IdAutorizzazioneTipoRecuperoMorfologico?: number;
        IdAutorizzazioneTipoRecuperoFinale?: number;
        IdAutorizzazioneTipoDisponibilita?: number;
        IdAutorizzazioneNumeroAtto?: string;
        IdAutorizzazioneNumeroAttoNotifica?: string;
        IdAutorizzazioneVolumeAutorizzato?: number;
        IdAutorizzazionePesoAutorizzato?: number;
        IdAutorizzazioneSuperficieAutorizzata?: number;
        IdAutorizzazioneSuperficieScavo?: number;
        IdAutorizzazioneProfonditaScavo?: number;
        IdAutorizzazioneDataAutorizzazione?: string;
        IdAutorizzazioneDataNotifica?: string;
        IdAutorizzazioneDataScadenza?: string;
        IdAutorizzazioneDataSistemazione?: string;
        IdAutorizzazioneDenunciaEsercizioN?: string;
        IdAutorizzazioneDenunciaEsercizioData?: string;
        IdAutorizzazioneConvenzioneN?: string;
        IdAutorizzazioneConvenzioneData?: string;
        IdAutorizzazioneSospensioneN?: string;
        IdAutorizzazioneSospensioneData?: string;
        IdAutorizzazioneRevocaN?: string;
        IdAutorizzazioneRevocaData?: string;
        IdAutorizzazioneDecadenzaN?: string;
        IdAutorizzazioneDecadenzaData?: string;
        IdAutorizzazioneRinunciaN?: string;
        IdAutorizzazioneRinunciaData?: string;
        IdAutorizzazioneAutorizzazione104N?: string;
        IdAutorizzazioneAutorizzazione104Data?: string;
        IdAutorizzazioneAutorizzazione104Note?: string;
        IdAutorizzazioneVolume104?: number;
        IdAutorizzazioneSvincoloFidejussioneN?: string;
        IdAutorizzazioneSvincoloFidejussioneData?: string;
        IdAutorizzazioneSvincoloFidejussioneNote?: string;
        IdAutorizzazioneCollaudoN?: string;
        IdAutorizzazioneCollaudoData?: string;
        IdAutorizzazioneCollaudoNote?: string;
        IdAutorizzazionePendenzaScarpate?: string;
        IdAutorizzazioneQuotaPianoCampagna?: string;
        IdAutorizzazioneParereAgenzia?: string;
        IdAutorizzazioneVia?: boolean;
        IdAutorizzazioneScreening?: boolean;
        IdAutorizzazioneParereMotivato?: string;
        IdAutorizzazioneProprietaTerreni?: string;
        IdAutorizzazioneNoteSistemazione?: string;
        IdAutorizzazioneIdEsercente?: number;
    }
    namespace ProrogaRow {
        const idProperty = "Id";
        const nameProperty = "Protocollo";
        const localTextPrefix = "Default.Proroga";
        const enum Fields {
            Id = "Id",
            IdAutorizzazione = "IdAutorizzazione",
            Protocollo = "Protocollo",
            Data = "Data",
            NuovaDataSistemazione = "NuovaDataSistemazione",
            Note = "Note",
            IdAutorizzazioneIdPianoArea = "IdAutorizzazioneIdPianoArea",
            IdAutorizzazioneIdStruttura = "IdAutorizzazioneIdStruttura",
            IdAutorizzazioneTipoRecuperoMorfologico = "IdAutorizzazioneTipoRecuperoMorfologico",
            IdAutorizzazioneTipoRecuperoFinale = "IdAutorizzazioneTipoRecuperoFinale",
            IdAutorizzazioneTipoDisponibilita = "IdAutorizzazioneTipoDisponibilita",
            IdAutorizzazioneNumeroAtto = "IdAutorizzazioneNumeroAtto",
            IdAutorizzazioneNumeroAttoNotifica = "IdAutorizzazioneNumeroAttoNotifica",
            IdAutorizzazioneVolumeAutorizzato = "IdAutorizzazioneVolumeAutorizzato",
            IdAutorizzazionePesoAutorizzato = "IdAutorizzazionePesoAutorizzato",
            IdAutorizzazioneSuperficieAutorizzata = "IdAutorizzazioneSuperficieAutorizzata",
            IdAutorizzazioneSuperficieScavo = "IdAutorizzazioneSuperficieScavo",
            IdAutorizzazioneProfonditaScavo = "IdAutorizzazioneProfonditaScavo",
            IdAutorizzazioneDataAutorizzazione = "IdAutorizzazioneDataAutorizzazione",
            IdAutorizzazioneDataNotifica = "IdAutorizzazioneDataNotifica",
            IdAutorizzazioneDataScadenza = "IdAutorizzazioneDataScadenza",
            IdAutorizzazioneDataSistemazione = "IdAutorizzazioneDataSistemazione",
            IdAutorizzazioneDenunciaEsercizioN = "IdAutorizzazioneDenunciaEsercizioN",
            IdAutorizzazioneDenunciaEsercizioData = "IdAutorizzazioneDenunciaEsercizioData",
            IdAutorizzazioneConvenzioneN = "IdAutorizzazioneConvenzioneN",
            IdAutorizzazioneConvenzioneData = "IdAutorizzazioneConvenzioneData",
            IdAutorizzazioneSospensioneN = "IdAutorizzazioneSospensioneN",
            IdAutorizzazioneSospensioneData = "IdAutorizzazioneSospensioneData",
            IdAutorizzazioneRevocaN = "IdAutorizzazioneRevocaN",
            IdAutorizzazioneRevocaData = "IdAutorizzazioneRevocaData",
            IdAutorizzazioneDecadenzaN = "IdAutorizzazioneDecadenzaN",
            IdAutorizzazioneDecadenzaData = "IdAutorizzazioneDecadenzaData",
            IdAutorizzazioneRinunciaN = "IdAutorizzazioneRinunciaN",
            IdAutorizzazioneRinunciaData = "IdAutorizzazioneRinunciaData",
            IdAutorizzazioneAutorizzazione104N = "IdAutorizzazioneAutorizzazione104N",
            IdAutorizzazioneAutorizzazione104Data = "IdAutorizzazioneAutorizzazione104Data",
            IdAutorizzazioneAutorizzazione104Note = "IdAutorizzazioneAutorizzazione104Note",
            IdAutorizzazioneVolume104 = "IdAutorizzazioneVolume104",
            IdAutorizzazioneSvincoloFidejussioneN = "IdAutorizzazioneSvincoloFidejussioneN",
            IdAutorizzazioneSvincoloFidejussioneData = "IdAutorizzazioneSvincoloFidejussioneData",
            IdAutorizzazioneSvincoloFidejussioneNote = "IdAutorizzazioneSvincoloFidejussioneNote",
            IdAutorizzazioneCollaudoN = "IdAutorizzazioneCollaudoN",
            IdAutorizzazioneCollaudoData = "IdAutorizzazioneCollaudoData",
            IdAutorizzazioneCollaudoNote = "IdAutorizzazioneCollaudoNote",
            IdAutorizzazionePendenzaScarpate = "IdAutorizzazionePendenzaScarpate",
            IdAutorizzazioneQuotaPianoCampagna = "IdAutorizzazioneQuotaPianoCampagna",
            IdAutorizzazioneParereAgenzia = "IdAutorizzazioneParereAgenzia",
            IdAutorizzazioneVia = "IdAutorizzazioneVia",
            IdAutorizzazioneScreening = "IdAutorizzazioneScreening",
            IdAutorizzazioneParereMotivato = "IdAutorizzazioneParereMotivato",
            IdAutorizzazioneProprietaTerreni = "IdAutorizzazioneProprietaTerreni",
            IdAutorizzazioneNoteSistemazione = "IdAutorizzazioneNoteSistemazione",
            IdAutorizzazioneIdEsercente = "IdAutorizzazioneIdEsercente"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace ProrogaService {
        const baseUrl = "Default/Proroga";
        function Create(request: Serenity.SaveRequest<ProrogaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProrogaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProrogaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProrogaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Proroga/Create",
            Update = "Default/Proroga/Update",
            Delete = "Default/Proroga/Delete",
            Retrieve = "Default/Proroga/Retrieve",
            List = "Default/Proroga/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface RegioneForm {
        Nome: Serenity.StringEditor;
    }
    class RegioneForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface RegioneRow {
        Id?: string;
        Nome?: string;
    }
    namespace RegioneRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Regione";
        const lookupKey = "Default.Regione";
        function getLookup(): Q.Lookup<RegioneRow>;
        const enum Fields {
            Id = "Id",
            Nome = "Nome"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace RegioneService {
        const baseUrl = "Default/Regione";
        function Create(request: Serenity.SaveRequest<RegioneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegioneRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegioneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegioneRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Regione/Create",
            Update = "Default/Regione/Update",
            Delete = "Default/Regione/Delete",
            Retrieve = "Default/Regione/Retrieve",
            List = "Default/Regione/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface Rendiconto2Form {
        IdAutorizzazione: Serenity.LookupEditor;
        Anno: Serenity.IntegerEditor;
        NumOperai: Serenity.IntegerEditor;
        NumAmministrativi: Serenity.IntegerEditor;
        NumTecnici: Serenity.IntegerEditor;
        NumAddetti: Serenity.IntegerEditor;
        OreLavorate: Serenity.DecimalEditor;
        NumeroMesiAttivita: Serenity.DecimalEditor;
        DirittoProp: Serenity.DecimalEditor;
        DirettoreResponsabile: Serenity.TextAreaEditor;
        Sorvegliante: Serenity.TextAreaEditor;
        ResponsabileSicurezza: Serenity.TextAreaEditor;
        VolAcquaEstrazione: Serenity.DecimalEditor;
        VolAcquaLavorazioni: Serenity.DecimalEditor;
        Esplosivo: Serenity.DecimalEditor;
        Detonatori: Serenity.IntegerEditor;
        FiloElicoidale: Serenity.DecimalEditor;
        MezzoMeccanico: Serenity.DecimalEditor;
        MicceLentaCombustione: Serenity.DecimalEditor;
        QuantitaKw: Serenity.DecimalEditor;
        ImportoKw: Serenity.DecimalEditor;
        QuantitaGasolio: Serenity.DecimalEditor;
        ImportoGasolio: Serenity.DecimalEditor;
        QuantitaBenzina: Serenity.DecimalEditor;
        ImportoBenzina: Serenity.DecimalEditor;
        DescrizioneAltreFontiEnergia: Serenity.StringEditor;
        UnitaMisuraAltreFontiEnergia: Serenity.StringEditor;
        QuantitaAltreFontiEnergia: Serenity.DecimalEditor;
        ImportoAltreFontiEnergia: Serenity.DecimalEditor;
        ProdottoList: ProdottoEditor;
        StruttDepMatInut: Serenity.BooleanEditor;
        ScartoList: ScartoEditor;
    }
    class Rendiconto2Form extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface Rendiconto2Row {
        Id?: number;
        IdAutorizzazione?: number;
        Anno?: number;
        NumOperai?: number;
        NumAmministrativi?: number;
        NumTecnici?: number;
        NumAddetti?: number;
        OreLavorate?: number;
        NumeroMesiAttivita?: number;
        VolAcquaEstrazione?: number;
        VolAcquaLavorazioni?: number;
        StruttDepMatInut?: boolean;
        Esplosivo?: number;
        Detonatori?: number;
        FiloElicoidale?: number;
        MezzoMeccanico?: number;
        MicceLentaCombustione?: number;
        QuantitaKw?: number;
        ImportoKw?: number;
        QuantitaGasolio?: number;
        ImportoGasolio?: number;
        QuantitaBenzina?: number;
        ImportoBenzina?: number;
        DescrizioneAltreFontiEnergia?: string;
        UnitaMisuraAltreFontiEnergia?: string;
        QuantitaAltreFontiEnergia?: number;
        ImportoAltreFontiEnergia?: number;
        DirittoProp?: number;
        DirettoreResponsabile?: string;
        Sorvegliante?: string;
        ResponsabileSicurezza?: string;
        Autorizzazione?: string;
        Comune?: string;
        ProdottoList?: ProdottoRow[];
        ScartoList?: ScartoRow[];
    }
    namespace Rendiconto2Row {
        const idProperty = "Id";
        const nameProperty = "Autorizzazione";
        const localTextPrefix = "Default.Rendiconto2";
        const enum Fields {
            Id = "Id",
            IdAutorizzazione = "IdAutorizzazione",
            Anno = "Anno",
            NumOperai = "NumOperai",
            NumAmministrativi = "NumAmministrativi",
            NumTecnici = "NumTecnici",
            NumAddetti = "NumAddetti",
            OreLavorate = "OreLavorate",
            NumeroMesiAttivita = "NumeroMesiAttivita",
            VolAcquaEstrazione = "VolAcquaEstrazione",
            VolAcquaLavorazioni = "VolAcquaLavorazioni",
            StruttDepMatInut = "StruttDepMatInut",
            Esplosivo = "Esplosivo",
            Detonatori = "Detonatori",
            FiloElicoidale = "FiloElicoidale",
            MezzoMeccanico = "MezzoMeccanico",
            MicceLentaCombustione = "MicceLentaCombustione",
            QuantitaKw = "QuantitaKw",
            ImportoKw = "ImportoKw",
            QuantitaGasolio = "QuantitaGasolio",
            ImportoGasolio = "ImportoGasolio",
            QuantitaBenzina = "QuantitaBenzina",
            ImportoBenzina = "ImportoBenzina",
            DescrizioneAltreFontiEnergia = "DescrizioneAltreFontiEnergia",
            UnitaMisuraAltreFontiEnergia = "UnitaMisuraAltreFontiEnergia",
            QuantitaAltreFontiEnergia = "QuantitaAltreFontiEnergia",
            ImportoAltreFontiEnergia = "ImportoAltreFontiEnergia",
            DirittoProp = "DirittoProp",
            DirettoreResponsabile = "DirettoreResponsabile",
            Sorvegliante = "Sorvegliante",
            ResponsabileSicurezza = "ResponsabileSicurezza",
            Autorizzazione = "Autorizzazione",
            Comune = "Comune",
            ProdottoList = "ProdottoList",
            ScartoList = "ScartoList"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace Rendiconto2Service {
        const baseUrl = "Default/Rendiconto2";
        function Create(request: Serenity.SaveRequest<Rendiconto2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<Rendiconto2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<Rendiconto2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Rendiconto2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Rendiconto2/Create",
            Update = "Default/Rendiconto2/Update",
            Delete = "Default/Rendiconto2/Delete",
            Retrieve = "Default/Rendiconto2/Retrieve",
            List = "Default/Rendiconto2/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface Rendiconto3Form {
        IdStruttura: Serenity.LookupEditor;
        Anno: Serenity.IntegerEditor;
        NumOperai: Serenity.IntegerEditor;
        NumAmministrativi: Serenity.IntegerEditor;
        NumTecnici: Serenity.IntegerEditor;
        LavoratoM3: Serenity.DecimalEditor;
        LavoratoQ: Serenity.DecimalEditor;
        MetodoLavorazione: Serenity.StringEditor;
        MaterialeTradizionale: Serenity.BooleanEditor;
        MaterialeRiciclato: Serenity.BooleanEditor;
        ApprovvigionamentoList: RendicontoApprovvigionamentoEditor;
        DestinazioneTerritorialeList: RendicontoDestinazioneTerritorialeEditor;
        DestinazioneUsoList: RendicontoDestinazioneUsoEditor;
    }
    class Rendiconto3Form extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface Rendiconto3Row {
        Id?: number;
        IdStruttura?: number;
        Anno?: number;
        NumOperai?: number;
        NumAmministrativi?: number;
        NumTecnici?: number;
        LavoratoM3?: number;
        LavoratoQ?: number;
        MetodoLavorazione?: string;
        MaterialeTradizionale?: boolean;
        MaterialeRiciclato?: boolean;
        IdStrutturaNome?: string;
        ApprovvigionamentoList?: RendicontoApprovvigionamentoRow[];
        DestinazioneTerritorialeList?: RendicontoDestinazioneTerritorialeRow[];
        DestinazioneUsoList?: RendicontoDestinazioneUsoRow[];
    }
    namespace Rendiconto3Row {
        const idProperty = "Id";
        const nameProperty = "IdStrutturaNome";
        const localTextPrefix = "Default.Rendiconto3";
        const enum Fields {
            Id = "Id",
            IdStruttura = "IdStruttura",
            Anno = "Anno",
            NumOperai = "NumOperai",
            NumAmministrativi = "NumAmministrativi",
            NumTecnici = "NumTecnici",
            LavoratoM3 = "LavoratoM3",
            LavoratoQ = "LavoratoQ",
            MetodoLavorazione = "MetodoLavorazione",
            MaterialeTradizionale = "MaterialeTradizionale",
            MaterialeRiciclato = "MaterialeRiciclato",
            IdStrutturaNome = "IdStrutturaNome",
            ApprovvigionamentoList = "ApprovvigionamentoList",
            DestinazioneTerritorialeList = "DestinazioneTerritorialeList",
            DestinazioneUsoList = "DestinazioneUsoList"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace Rendiconto3Service {
        const baseUrl = "Default/Rendiconto3";
        function Create(request: Serenity.SaveRequest<Rendiconto3Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<Rendiconto3Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<Rendiconto3Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<Rendiconto3Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Rendiconto3/Create",
            Update = "Default/Rendiconto3/Update",
            Delete = "Default/Rendiconto3/Delete",
            Retrieve = "Default/Rendiconto3/Retrieve",
            List = "Default/Rendiconto3/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface RendicontoApprovvigionamentoForm {
        TipoApprovvigionamento: Serenity.EnumEditor;
        IdStrutturaCava: Serenity.IntegerEditor;
        QtaApprov: Serenity.DecimalEditor;
        Note: Serenity.StringEditor;
    }
    class RendicontoApprovvigionamentoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface RendicontoApprovvigionamentoRow {
        Id?: number;
        IdRendiconto?: number;
        TipoApprovvigionamento?: Modules.Default.Enums.TipoApprovvigionamento;
        IdStrutturaCava?: number;
        QtaApprov?: number;
        Note?: string;
    }
    namespace RendicontoApprovvigionamentoRow {
        const idProperty = "Id";
        const nameProperty = "Note";
        const localTextPrefix = "Default.RendicontoApprovvigionamento";
        const enum Fields {
            Id = "Id",
            IdRendiconto = "IdRendiconto",
            TipoApprovvigionamento = "TipoApprovvigionamento",
            IdStrutturaCava = "IdStrutturaCava",
            QtaApprov = "QtaApprov",
            Note = "Note"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace RendicontoApprovvigionamentoService {
        const baseUrl = "Default/RendicontoApprovvigionamento";
        function Create(request: Serenity.SaveRequest<RendicontoApprovvigionamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RendicontoApprovvigionamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RendicontoApprovvigionamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RendicontoApprovvigionamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/RendicontoApprovvigionamento/Create",
            Update = "Default/RendicontoApprovvigionamento/Update",
            Delete = "Default/RendicontoApprovvigionamento/Delete",
            Retrieve = "Default/RendicontoApprovvigionamento/Retrieve",
            List = "Default/RendicontoApprovvigionamento/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface RendicontoDestinazioneTerritorialeForm {
        TipoDestinazioneTerritoriale: Serenity.EnumEditor;
        Percentuale: Serenity.IntegerEditor;
    }
    class RendicontoDestinazioneTerritorialeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface RendicontoDestinazioneTerritorialeRow {
        Id?: string;
        IdRendiconto?: number;
        TipoDestinazioneTerritoriale?: Modules.Default.Enums.TipoDestinazioneTerritoriale;
        Percentuale?: number;
    }
    namespace RendicontoDestinazioneTerritorialeRow {
        const idProperty = "Id";
        const localTextPrefix = "Default.RendicontoDestinazioneTerritoriale";
        const enum Fields {
            Id = "Id",
            IdRendiconto = "IdRendiconto",
            TipoDestinazioneTerritoriale = "TipoDestinazioneTerritoriale",
            Percentuale = "Percentuale"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace RendicontoDestinazioneTerritorialeService {
        const baseUrl = "Default/RendicontoDestinazioneTerritoriale";
        function Create(request: Serenity.SaveRequest<RendicontoDestinazioneTerritorialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RendicontoDestinazioneTerritorialeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RendicontoDestinazioneTerritorialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RendicontoDestinazioneTerritorialeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/RendicontoDestinazioneTerritoriale/Create",
            Update = "Default/RendicontoDestinazioneTerritoriale/Update",
            Delete = "Default/RendicontoDestinazioneTerritoriale/Delete",
            Retrieve = "Default/RendicontoDestinazioneTerritoriale/Retrieve",
            List = "Default/RendicontoDestinazioneTerritoriale/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface RendicontoDestinazioneUsoForm {
        TipoDestinazioneUso: Serenity.EnumEditor;
        Percentuale: Serenity.IntegerEditor;
    }
    class RendicontoDestinazioneUsoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface RendicontoDestinazioneUsoRow {
        Id?: string;
        IdRendiconto?: number;
        TipoDestinazioneUso?: Modules.Default.Enums.TipoDestinazioneUso;
        Percentuale?: number;
    }
    namespace RendicontoDestinazioneUsoRow {
        const idProperty = "Id";
        const localTextPrefix = "Default.RendicontoDestinazioneUso";
        const enum Fields {
            Id = "Id",
            IdRendiconto = "IdRendiconto",
            TipoDestinazioneUso = "TipoDestinazioneUso",
            Percentuale = "Percentuale"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace RendicontoDestinazioneUsoService {
        const baseUrl = "Default/RendicontoDestinazioneUso";
        function Create(request: Serenity.SaveRequest<RendicontoDestinazioneUsoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RendicontoDestinazioneUsoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RendicontoDestinazioneUsoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RendicontoDestinazioneUsoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/RendicontoDestinazioneUso/Create",
            Update = "Default/RendicontoDestinazioneUso/Update",
            Delete = "Default/RendicontoDestinazioneUso/Delete",
            Retrieve = "Default/RendicontoDestinazioneUso/Retrieve",
            List = "Default/RendicontoDestinazioneUso/List"
        }
    }
}
declare namespace CaveSerene.Default {
    interface RendicontoForm {
        IdAutorizzazione: Serenity.LookupEditor;
        Anno: Serenity.IntegerEditor;
        NumOperai: Serenity.IntegerEditor;
        NumAmministrativi: Serenity.IntegerEditor;
        NumTecnici: Serenity.IntegerEditor;
        NumAddetti: Serenity.IntegerEditor;
        OreLavorate: Serenity.DecimalEditor;
        NumeroMesiAttivita: Serenity.DecimalEditor;
        DirettoreResponsabile: Serenity.TextAreaEditor;
        Sorvegliante: Serenity.TextAreaEditor;
        ResponsabileSicurezza: Serenity.TextAreaEditor;
        ProdottoList: ProdottoEditor;
        StruttDepMatInut: Serenity.BooleanEditor;
        ScartoList: ScartoEditor;
        VolAcquaEstrazione: Serenity.DecimalEditor;
        VolAcquaLavorazioni: Serenity.DecimalEditor;
        Esplosivo: Serenity.DecimalEditor;
        Detonatori: Serenity.IntegerEditor;
        FiloElicoidale: Serenity.DecimalEditor;
        MezzoMeccanico: Serenity.DecimalEditor;
        MicceLentaCombustione: Serenity.DecimalEditor;
        QuantitaKw: Serenity.DecimalEditor;
        ImportoKw: Serenity.DecimalEditor;
        QuantitaGasolio: Serenity.DecimalEditor;
        ImportoGasolio: Serenity.DecimalEditor;
        QuantitaBenzina: Serenity.DecimalEditor;
        ImportoBenzina: Serenity.DecimalEditor;
        DescrizioneAltreFontiEnergia: Serenity.StringEditor;
        UnitaMisuraAltreFontiEnergia: Serenity.StringEditor;
        QuantitaAltreFontiEnergia: Serenity.DecimalEditor;
        ImportoAltreFontiEnergia: Serenity.DecimalEditor;
    }
    class RendicontoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface RendicontoRow {
        Id?: number;
        IdAutorizzazione?: number;
        Anno?: number;
        NumOperai?: number;
        NumAmministrativi?: number;
        NumTecnici?: number;
        NumAddetti?: number;
        OreLavorate?: number;
        NumeroMesiAttivita?: number;
        VolAcquaEstrazione?: number;
        VolAcquaLavorazioni?: number;
        StruttDepMatInut?: boolean;
        Esplosivo?: number;
        Detonatori?: number;
        FiloElicoidale?: number;
        MezzoMeccanico?: number;
        MicceLentaCombustione?: number;
        QuantitaKw?: number;
        ImportoKw?: number;
        QuantitaGasolio?: number;
        ImportoGasolio?: number;
        QuantitaBenzina?: number;
        ImportoBenzina?: number;
        DescrizioneAltreFontiEnergia?: string;
        UnitaMisuraAltreFontiEnergia?: string;
        QuantitaAltreFontiEnergia?: number;
        ImportoAltreFontiEnergia?: number;
        DirittoProp?: number;
        DirettoreResponsabile?: string;
        Sorvegliante?: string;
        ResponsabileSicurezza?: string;
        Autorizzazione?: string;
        Comune?: string;
        ProdottoList?: ProdottoRow[];
        ScartoList?: ScartoRow[];
    }
    namespace RendicontoRow {
        const idProperty = "Id";
        const nameProperty = "DescrizioneAltreFontiEnergia";
        const localTextPrefix = "Default.Rendiconto";
        const enum Fields {
            Id = "Id",
            IdAutorizzazione = "IdAutorizzazione",
            Anno = "Anno",
            NumOperai = "NumOperai",
            NumAmministrativi = "NumAmministrativi",
            NumTecnici = "NumTecnici",
            NumAddetti = "NumAddetti",
            OreLavorate = "OreLavorate",
            NumeroMesiAttivita = "NumeroMesiAttivita",
            VolAcquaEstrazione = "VolAcquaEstrazione",
            VolAcquaLavorazioni = "VolAcquaLavorazioni",
            StruttDepMatInut = "StruttDepMatInut",
            Esplosivo = "Esplosivo",
            Detonatori = "Detonatori",
            FiloElicoidale = "FiloElicoidale",
            MezzoMeccanico = "MezzoMeccanico",
            MicceLentaCombustione = "MicceLentaCombustione",
            QuantitaKw = "QuantitaKw",
            ImportoKw = "ImportoKw",
            QuantitaGasolio = "QuantitaGasolio",
            ImportoGasolio = "ImportoGasolio",
            QuantitaBenzina = "QuantitaBenzina",
            ImportoBenzina = "ImportoBenzina",
            DescrizioneAltreFontiEnergia = "DescrizioneAltreFontiEnergia",
            UnitaMisuraAltreFontiEnergia = "UnitaMisuraAltreFontiEnergia",
            QuantitaAltreFontiEnergia = "QuantitaAltreFontiEnergia",
            ImportoAltreFontiEnergia = "ImportoAltreFontiEnergia",
            DirittoProp = "DirittoProp",
            DirettoreResponsabile = "DirettoreResponsabile",
            Sorvegliante = "Sorvegliante",
            ResponsabileSicurezza = "ResponsabileSicurezza",
            Autorizzazione = "Autorizzazione",
            Comune = "Comune",
            ProdottoList = "ProdottoList",
            ScartoList = "ScartoList"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace RendicontoService {
        const baseUrl = "Default/Rendiconto";
        function Create(request: Serenity.SaveRequest<RendicontoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RendicontoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RendicontoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RendicontoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Rendiconto/Create",
            Update = "Default/Rendiconto/Update",
            Delete = "Default/Rendiconto/Delete",
            Retrieve = "Default/Rendiconto/Retrieve",
            List = "Default/Rendiconto/List"
        }
    }
}
declare namespace CaveSerene.Default {
}
declare namespace CaveSerene.Default {
    interface ScartoForm {
        TipoScarto: Serenity.EnumEditor;
        Peso: Serenity.DecimalEditor;
        Volume: Serenity.DecimalEditor;
        DescrizioneAltro: Serenity.StringEditor;
    }
    class ScartoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace CaveSerene.Default {
    interface ScartoRow {
        Id?: number;
        IdRendiconto?: number;
        TipoScarto?: Modules.Default.Enums.TipoScarto;
        Peso?: number;
        Volume?: number;
        DescrizioneAltro?: string;
    }
    namespace ScartoRow {
        const idProperty = "Id";
        const localTextPrefix = "Default.Scarto";
        const enum Fields {
            Id = "Id",
            IdRendiconto = "IdRendiconto",
            TipoScarto = "TipoScarto",
            Peso = "Peso",
            Volume = "Volume",
            DescrizioneAltro = "DescrizioneAltro"
        }
    }
}
declare namespace CaveSerene.Default {
    namespace ScartoService {
        const baseUrl = "Default/Scarto";
        function Create(request: Serenity.SaveRequest<ScartoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ScartoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ScartoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ScartoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Scarto/Create",
            Update = "Default/Scarto/Update",
            Delete = "Default/Scarto/Delete",
            Retrieve = "Default/Scarto/Retrieve",
            List = "Default/Scarto/List"
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
            Descrizione = "Descrizione"
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
            List = "Default/TipoMateriale/List"
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
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoApprovvigionamento {
        DaCavaRegionale = 1,
        DaCavaExtraRegionale = 2,
        DaSistemazioneIdraulica = 3,
        CostruzioneDemolizione = 4,
        Altro = 5
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoArea {
        Ambito = 1,
        Polo = 2,
        Obiettivo = 3,
        Pregresso = 98,
        Rivedere = 99
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoAtto {
        AdozioneProvinciale = 1,
        AdozioneAssembleaComuni = 2,
        ApprovazioneRegionaleParziale = 3
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoColtivazione {
        AFossa = 1,
        PareteGradoni = 2,
        PareteScarpataUnica = 3,
        InSotterraneo = 4,
        Misto = 5,
        MinieraCieloAperto = 6
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoCommercializzazione {
        TAL_QUALE = 1,
        STABILIZZATI = 2,
        GHIAIA = 3,
        SABBIA = 4,
        BLOCCHI = 5,
        PEZZAME = 6,
        LASTRE = 7,
        LAVORATI = 8
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoDestinazioneTerritoriale {
        NelComune = 1,
        NellaProvincia = 2,
        NellaRegione = 3,
        FuoriRegione = 4
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoDestinazioneUso {
        Riempimenti = 1,
        RilevatiStradali = 2,
        OpereIdrauliche = 3,
        ConglomeratiCementiziBituminosi = 4,
        PietraTaglio = 5,
        Leganti = 6,
        IndustriaLaterizi = 7,
        IndustriaCeramica = 8,
        Impermeabilizzazioni = 9,
        AltroIndustria = 10,
        Litoidi = 11,
        InertiStabilizzanti = 12,
        Calcestruzzi = 13,
        Bitumi = 14,
        ProduzioneLaterizi = 15,
        Cementificio = 16
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoDisponibilita {
        Proprieta = 1,
        Affitto = 2,
        Altro = 3
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoDissesto {
        Assente = 1,
        NonRilevabile = 2,
        Frana = 3,
        Calanco = 4,
        ErosioneFluviale = 5
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoISTAT {
        Inerte = 1,
        Argilla = 2,
        SabbieSilicee = 3,
        Torba = 4,
        Arenaria = 5
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoImpianto {
        Fisso = 1,
        Mobile = 2
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoLavorazione {
        LAVAGGIO = 1,
        VAGLIATURA = 2,
        FRANTUMAZIONE = 3,
        MACINAZIONE = 4,
        SEGAGIONE = 5,
        ESSICCAZIONI = 6,
        ARATURA = 7,
        RIPPATURA = 8,
        ALTRO = 9
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoPosizione {
        Cresta = 1,
        Fondovalle = 2,
        Pianura = 3,
        PianuraGolena = 4,
        PianuraSottoFalda = 5,
        PianuraSopraFalda = 6,
        Versante = 7
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoRecuperoFinale {
        UsoAgricolo = 1,
        UsoProduttivo = 2
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoRecuperoMorfologico {
        ZonaUmida = 1,
        CAssaEspansione = 2
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoScarto {
        LimiPolveri = 1,
        Scotico = 2,
        Pietrame = 3
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoStato {
        Attivo = 1,
        NonUtilizzato = 2,
        Esaurito = 3
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoStoria {
        Ampliamento = 1,
        Nuovo = 2,
        Completamento = 3,
        Pregresso = 98
    }
}
declare namespace CaveSerene.Modules.Default.Enums {
    enum TipoStruttura {
        Cava = 1,
        Impianto = 2,
        Miniera = 3
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
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
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
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
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
        get value(): TEntity[];
        set value(value: TEntity[]);
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
        private updateElementContent;
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
        getButtons(): Serenity.ToolButton[];
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
    class AttoEditDialog extends Common.GridEditorDialog<AttoRow> {
        protected getFormKey(): string;
        protected getNameProperty(): any;
        protected getLocalTextPrefix(): string;
        protected form: AttoForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class AttoEditor extends Common.GridEditorBase<AttoRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AttoEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: AttoRow, id: number): boolean;
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
    class AutorizzazioneDialog extends Serenity.EntityDialog<AutorizzazioneRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AutorizzazioneForm;
    }
}
declare namespace CaveSerene.Default {
    class AutorizzazioneGrid extends Serenity.EntityGrid<AutorizzazioneRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AutorizzazioneDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CaveSerene.Default {
    class AutorizzazioneMaterialeDialog extends Serenity.EntityDialog<AutorizzazioneMaterialeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: AutorizzazioneMaterialeForm;
    }
}
declare namespace CaveSerene.Default {
    class AutorizzazioneMaterialeEditDialog extends Common.GridEditorDialog<AutorizzazioneMaterialeRow> {
        protected getFormKey(): string;
        protected getNameProperty(): any;
        protected getLocalTextPrefix(): string;
        protected form: AutorizzazioneMaterialeForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class AutorizzazioneMaterialeEditor extends Common.GridEditorBase<AutorizzazioneMaterialeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AutorizzazioneMaterialeEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: AutorizzazioneMaterialeRow, id: number): boolean;
    }
}
declare namespace CaveSerene.Default {
    class AutorizzazioneMaterialeGrid extends Serenity.EntityGrid<AutorizzazioneMaterialeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AutorizzazioneMaterialeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class CavaDialog extends Serenity.EntityDialog<CavaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CavaForm;
        protected map: any;
        constructor(container: JQuery);
        protected afterLoadEntity(): void;
    }
}
declare namespace CaveSerene.Default {
    class CavaGrid extends Serenity.EntityGrid<CavaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CavaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
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
    class ConcessioneDialog extends Serenity.EntityDialog<ConcessioneRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ConcessioneForm;
    }
}
declare namespace CaveSerene.Default {
    class ConcessioneGrid extends Serenity.EntityGrid<ConcessioneRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConcessioneDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CaveSerene.Default {
    class DerogaDialog extends Serenity.EntityDialog<DerogaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DerogaForm;
    }
}
declare namespace CaveSerene.Default {
    class DerogaEditDialog extends Common.GridEditorDialog<DerogaRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: DerogaForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class DerogaEditor extends Common.GridEditorBase<DerogaRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DerogaEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: DerogaRow, id: number): boolean;
    }
}
declare namespace CaveSerene.Default {
    class DerogaGrid extends Serenity.EntityGrid<DerogaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DerogaDialog;
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
        protected getDefaultSortBy(): EnteRow.Fields[];
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CaveSerene.Default {
    class EsercenteDialog extends Serenity.EntityDialog<EsercenteRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EsercenteForm;
    }
}
declare namespace CaveSerene.Default {
    class EsercenteGrid extends Serenity.EntityGrid<EsercenteRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EsercenteDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
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
    class FabbisognoEditDialog extends Common.GridEditorDialog<FabbisognoRow> {
        protected getFormKey(): string;
        protected getNameProperty(): any;
        protected getLocalTextPrefix(): string;
        protected form: FabbisognoForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class FabbisognoEditor extends Common.GridEditorBase<FabbisognoRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FabbisognoEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: FabbisognoRow, id: number): boolean;
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
    class ImpiantoDialog extends Serenity.EntityDialog<ImpiantoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ImpiantoForm;
    }
}
declare namespace CaveSerene.Default {
    class ImpiantoGrid extends Serenity.EntityGrid<ImpiantoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImpiantoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
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
        protected createQuickFilters(): void;
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CaveSerene.Default {
    class MinieraDialog extends Serenity.EntityDialog<MinieraRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MinieraForm;
    }
}
declare namespace CaveSerene.Default {
    class MinieraGrid extends Serenity.EntityGrid<MinieraRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MinieraDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
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
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CaveSerene.Default {
    class PianoAreaDialog extends Serenity.EntityDialog<PianoAreaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PianoAreaForm;
    }
}
declare namespace CaveSerene.Default {
    class PianoAreaEditDialog extends Common.GridEditorDialog<PianoAreaRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: PianoAreaForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class PianoAreaEditor extends Common.GridEditorBase<PianoAreaRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PianoAreaEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: PianoAreaRow, id: number): boolean;
    }
}
declare namespace CaveSerene.Default {
    class PianoAreaGrid extends Serenity.EntityGrid<PianoAreaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PianoAreaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
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
    class PotenzialeEditDialog extends Common.GridEditorDialog<PotenzialeRow> {
        protected getFormKey(): string;
        protected getNameProperty(): any;
        protected getLocalTextPrefix(): string;
        protected form: PotenzialeForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class PotenzialeEditor extends Common.GridEditorBase<PotenzialeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PotenzialeEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: PotenzialeRow, id: number): boolean;
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
    class ProdottoDialog extends Serenity.EntityDialog<ProdottoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProdottoForm;
    }
}
declare namespace CaveSerene.Default {
    class ProdottoEditDialog extends Common.GridEditorDialog<ProdottoRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: ProdottoForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class ProdottoEditor extends Common.GridEditorBase<ProdottoRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProdottoEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: ProdottoRow, id: number): boolean;
    }
}
declare namespace CaveSerene.Default {
    class ProdottoGrid extends Serenity.EntityGrid<ProdottoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProdottoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class ProrogaDialog extends Serenity.EntityDialog<ProrogaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProrogaForm;
    }
}
declare namespace CaveSerene.Default {
    class ProrogaEditDialog extends Common.GridEditorDialog<ProrogaRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: ProrogaForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class ProrogaEditor extends Common.GridEditorBase<ProrogaRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProrogaEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: ProrogaRow, id: number): boolean;
    }
}
declare namespace CaveSerene.Default {
    class ProrogaGrid extends Serenity.EntityGrid<ProrogaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProrogaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class RegioneDialog extends Serenity.EntityDialog<RegioneRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegioneForm;
    }
}
declare namespace CaveSerene.Default {
    class RegioneGrid extends Serenity.EntityGrid<RegioneRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RegioneDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class RendicontoDialog extends Serenity.EntityDialog<RendicontoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RendicontoForm;
    }
}
declare namespace CaveSerene.Default {
    class RendicontoGrid extends Serenity.EntityGrid<RendicontoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RendicontoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CaveSerene.Default {
    class Rendiconto2Dialog extends Serenity.EntityDialog<Rendiconto2Row, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: Rendiconto2Form;
    }
}
declare namespace CaveSerene.Default {
    class Rendiconto2Grid extends Serenity.EntityGrid<Rendiconto2Row, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Rendiconto2Dialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CaveSerene.Default {
    class Rendiconto3Dialog extends Serenity.EntityDialog<Rendiconto3Row, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: Rendiconto3Form;
    }
}
declare namespace CaveSerene.Default {
    class Rendiconto3Grid extends Serenity.EntityGrid<Rendiconto3Row, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Rendiconto3Dialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace CaveSerene.Default {
    class RendicontoApprovvigionamentoDialog extends Serenity.EntityDialog<RendicontoApprovvigionamentoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RendicontoApprovvigionamentoForm;
    }
}
declare namespace CaveSerene.Default {
    class RendicontoApprovvigionamentoEditDialog extends Common.GridEditorDialog<RendicontoApprovvigionamentoRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: RendicontoApprovvigionamentoForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class RendicontoApprovvigionamentoEditor extends Common.GridEditorBase<RendicontoApprovvigionamentoRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RendicontoApprovvigionamentoEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: RendicontoApprovvigionamentoRow, id: number): boolean;
    }
}
declare namespace CaveSerene.Default {
    class RendicontoApprovvigionamentoGrid extends Serenity.EntityGrid<RendicontoApprovvigionamentoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RendicontoApprovvigionamentoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class RendicontoDestinazioneTerritorialeDialog extends Serenity.EntityDialog<RendicontoDestinazioneTerritorialeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: RendicontoDestinazioneTerritorialeForm;
    }
}
declare namespace CaveSerene.Default {
    class RendicontoDestinazioneTerritorialeEditDialog extends Common.GridEditorDialog<RendicontoDestinazioneTerritorialeRow> {
        protected getFormKey(): string;
        protected getNameProperty(): any;
        protected getLocalTextPrefix(): string;
        protected form: RendicontoDestinazioneTerritorialeForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class RendicontoDestinazioneTerritorialeEditor extends Common.GridEditorBase<RendicontoDestinazioneTerritorialeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RendicontoDestinazioneTerritorialeEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: RendicontoDestinazioneTerritorialeRow, id: number): boolean;
    }
}
declare namespace CaveSerene.Default {
    class RendicontoDestinazioneTerritorialeGrid extends Serenity.EntityGrid<RendicontoDestinazioneTerritorialeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RendicontoDestinazioneTerritorialeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class RendicontoDestinazioneUsoDialog extends Serenity.EntityDialog<RendicontoDestinazioneUsoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: RendicontoDestinazioneUsoForm;
    }
}
declare namespace CaveSerene.Default {
    class RendicontoDestinazioneUsoEditDialog extends Common.GridEditorDialog<RendicontoDestinazioneUsoRow> {
        protected getFormKey(): string;
        protected getNameProperty(): any;
        protected getLocalTextPrefix(): string;
        protected form: RendicontoDestinazioneUsoForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class RendicontoDestinazioneUsoEditor extends Common.GridEditorBase<RendicontoDestinazioneUsoRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RendicontoDestinazioneUsoEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: RendicontoDestinazioneUsoRow, id: number): boolean;
    }
}
declare namespace CaveSerene.Default {
    class RendicontoDestinazioneUsoGrid extends Serenity.EntityGrid<RendicontoDestinazioneUsoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RendicontoDestinazioneUsoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace CaveSerene.Default {
    class ScartoDialog extends Serenity.EntityDialog<ScartoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): any;
        protected getService(): string;
        protected form: ScartoForm;
    }
}
declare namespace CaveSerene.Default {
    class ScartoEditDialog extends Common.GridEditorDialog<ScartoRow> {
        protected getFormKey(): string;
        protected getNameProperty(): any;
        protected getLocalTextPrefix(): string;
        protected form: ScartoForm;
        constructor();
    }
}
declare namespace CaveSerene.Default {
    class ScartoEditor extends Common.GridEditorBase<ScartoRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ScartoEditDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: ScartoRow, id: number): boolean;
    }
}
declare namespace CaveSerene.Default {
    class ScartoGrid extends Serenity.EntityGrid<ScartoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ScartoDialog;
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
