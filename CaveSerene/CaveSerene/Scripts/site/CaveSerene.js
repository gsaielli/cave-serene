var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AreaForm = /** @class */ (function (_super) {
            __extends(AreaForm, _super);
            function AreaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AreaForm.init) {
                    AreaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(AreaForm, [
                        'Nome', w0,
                        'TipoArea', w1,
                        'TipoStoria', w1,
                        'TipoPosizione', w1,
                        'Progressivo', w2,
                        'CodiceAreaProv', w0,
                        'Note', w3
                    ]);
                }
                return _this;
            }
            AreaForm.formKey = 'Default.Area';
            return AreaForm;
        }(Serenity.PrefixedContext));
        Default.AreaForm = AreaForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AreaRow;
        (function (AreaRow) {
            AreaRow.idProperty = 'Id';
            AreaRow.nameProperty = 'Nome';
            AreaRow.localTextPrefix = 'Default.Area';
            AreaRow.lookupKey = 'Default.Area';
            function getLookup() {
                return Q.getLookup('Default.Area');
            }
            AreaRow.getLookup = getLookup;
        })(AreaRow = Default.AreaRow || (Default.AreaRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AreaService;
        (function (AreaService) {
            AreaService.baseUrl = 'Default/Area';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AreaService[x] = function (r, s, o) {
                    return Q.serviceRequest(AreaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AreaService = Default.AreaService || (Default.AreaService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AttoForm = /** @class */ (function (_super) {
            __extends(AttoForm, _super);
            function AttoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AttoForm.init) {
                    AttoForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.EnumEditor;
                    Q.initFormType(AttoForm, [
                        'NumAtto', w0,
                        'DataAtto', w1,
                        'TipoAtto', w2
                    ]);
                }
                return _this;
            }
            AttoForm.formKey = 'Default.Atto';
            return AttoForm;
        }(Serenity.PrefixedContext));
        Default.AttoForm = AttoForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AttoRow;
        (function (AttoRow) {
            AttoRow.idProperty = 'Id';
            AttoRow.localTextPrefix = 'Default.Atto';
            AttoRow.lookupKey = 'Default.Atto';
            function getLookup() {
                return Q.getLookup('Default.Atto');
            }
            AttoRow.getLookup = getLookup;
        })(AttoRow = Default.AttoRow || (Default.AttoRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AttoService;
        (function (AttoService) {
            AttoService.baseUrl = 'Default/Atto';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AttoService[x] = function (r, s, o) {
                    return Q.serviceRequest(AttoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AttoService = Default.AttoService || (Default.AttoService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneForm = /** @class */ (function (_super) {
            __extends(AutorizzazioneForm, _super);
            function AutorizzazioneForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AutorizzazioneForm.init) {
                    AutorizzazioneForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.EnumEditor;
                    var w5 = s.TextAreaEditor;
                    var w6 = s.BooleanEditor;
                    var w7 = Default.AutorizzazioneMaterialeEditor;
                    var w8 = Default.DerogaEditor;
                    var w9 = Default.ProrogaEditor;
                    Q.initFormType(AutorizzazioneForm, [
                        'IdStruttura', w0,
                        'IdEsercente', w0,
                        'IdPiano', w0,
                        'IdPianoArea', w0,
                        'NumeroAtto', w1,
                        'DataAutorizzazione', w2,
                        'DataSistemazione', w2,
                        'DataScadenza', w2,
                        'NumeroAttoNotifica', w1,
                        'DataNotifica', w2,
                        'SuperficieAutorizzata', w3,
                        'SuperficieScavo', w3,
                        'ProfonditaScavo', w3,
                        'VolumeAutorizzato', w3,
                        'PesoAutorizzato', w3,
                        'TipoDisponibilita', w4,
                        'ProprietaTerreni', w1,
                        'DenunciaEsercizioN', w1,
                        'DenunciaEsercizioData', w2,
                        'ConvenzioneN', w1,
                        'ConvenzioneData', w2,
                        'Autorizzazione104N', w1,
                        'Autorizzazione104Data', w2,
                        'Autorizzazione104Note', w5,
                        'Volume104', w3,
                        'SvincoloFidejussioneN', w1,
                        'SvincoloFidejussioneData', w2,
                        'SvincoloFidejussioneNote', w5,
                        'CollaudoN', w1,
                        'CollaudoData', w2,
                        'CollaudoNote', w5,
                        'SospensioneN', w1,
                        'SospensioneData', w2,
                        'RevocaN', w1,
                        'RevocaData', w2,
                        'DecadenzaN', w1,
                        'DecadenzaData', w2,
                        'RinunciaN', w1,
                        'RinunciaData', w2,
                        'ParereAgenzia', w5,
                        'Via', w6,
                        'Screening', w6,
                        'ParereMotivato', w5,
                        'AutorizzazioneMaterialeList', w7,
                        'DerogaList', w8,
                        'ProrogaList', w9,
                        'TipoRecuperoMorfologico', w4,
                        'TipoRecuperoFinale', w4,
                        'PendenzaScarpate', w1,
                        'QuotaPianoCampagna', w1,
                        'NoteSistemazione', w5
                    ]);
                }
                return _this;
            }
            AutorizzazioneForm.formKey = 'Default.Autorizzazione';
            return AutorizzazioneForm;
        }(Serenity.PrefixedContext));
        Default.AutorizzazioneForm = AutorizzazioneForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneMaterialeForm = /** @class */ (function (_super) {
            __extends(AutorizzazioneMaterialeForm, _super);
            function AutorizzazioneMaterialeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AutorizzazioneMaterialeForm.init) {
                    AutorizzazioneMaterialeForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(AutorizzazioneMaterialeForm, [
                        'IdMateriale', w0,
                        'QuantitaAutorizzata', w1,
                        'PesoAutorizzato', w1
                    ]);
                }
                return _this;
            }
            AutorizzazioneMaterialeForm.formKey = 'Default.AutorizzazioneMateriale';
            return AutorizzazioneMaterialeForm;
        }(Serenity.PrefixedContext));
        Default.AutorizzazioneMaterialeForm = AutorizzazioneMaterialeForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneMaterialeRow;
        (function (AutorizzazioneMaterialeRow) {
            AutorizzazioneMaterialeRow.idProperty = 'Id';
            AutorizzazioneMaterialeRow.localTextPrefix = 'Default.AutorizzazioneMateriale';
        })(AutorizzazioneMaterialeRow = Default.AutorizzazioneMaterialeRow || (Default.AutorizzazioneMaterialeRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneMaterialeService;
        (function (AutorizzazioneMaterialeService) {
            AutorizzazioneMaterialeService.baseUrl = 'Default/AutorizzazioneMateriale';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AutorizzazioneMaterialeService[x] = function (r, s, o) {
                    return Q.serviceRequest(AutorizzazioneMaterialeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AutorizzazioneMaterialeService = Default.AutorizzazioneMaterialeService || (Default.AutorizzazioneMaterialeService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneRow;
        (function (AutorizzazioneRow) {
            AutorizzazioneRow.idProperty = 'Id';
            AutorizzazioneRow.nameProperty = 'Descrizione';
            AutorizzazioneRow.localTextPrefix = 'Default.Autorizzazione';
            AutorizzazioneRow.lookupKey = 'Default.Autorizzazione';
            function getLookup() {
                return Q.getLookup('Default.Autorizzazione');
            }
            AutorizzazioneRow.getLookup = getLookup;
        })(AutorizzazioneRow = Default.AutorizzazioneRow || (Default.AutorizzazioneRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneService;
        (function (AutorizzazioneService) {
            AutorizzazioneService.baseUrl = 'Default/Autorizzazione';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AutorizzazioneService[x] = function (r, s, o) {
                    return Q.serviceRequest(AutorizzazioneService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AutorizzazioneService = Default.AutorizzazioneService || (Default.AutorizzazioneService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var CavaForm = /** @class */ (function (_super) {
            __extends(CavaForm, _super);
            function CavaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CavaForm.init) {
                    CavaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.BooleanEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = CaveSerene.StaticTextBlock;
                    Q.initFormType(CavaForm, [
                        'Nome', w0,
                        'IdComune', w1,
                        'TipoPosizione', w2,
                        'TipoDissesto', w2,
                        'TipoColtivazione', w2,
                        'Progressivo', w3,
                        'Frazione', w0,
                        'CatastoProvinciale', w0,
                        'VincoloAmbientale', w3,
                        'AreaProtetta', w4,
                        'ProfonditaFalda', w5,
                        'GIS', w6,
                        'CoordinataX', w5,
                        'CoordinataY', w5
                    ]);
                }
                return _this;
            }
            CavaForm.formKey = 'Default.Cava';
            return CavaForm;
        }(Serenity.PrefixedContext));
        Default.CavaForm = CavaForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var CavaRow;
        (function (CavaRow) {
            CavaRow.idProperty = 'Id';
            CavaRow.nameProperty = 'Nome';
            CavaRow.localTextPrefix = 'Default.Cava';
            CavaRow.lookupKey = 'Default.Cava';
            function getLookup() {
                return Q.getLookup('Default.Cava');
            }
            CavaRow.getLookup = getLookup;
        })(CavaRow = Default.CavaRow || (Default.CavaRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var CavaService;
        (function (CavaService) {
            CavaService.baseUrl = 'Default/Cava';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CavaService[x] = function (r, s, o) {
                    return Q.serviceRequest(CavaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CavaService = Default.CavaService || (Default.CavaService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ComuneForm = /** @class */ (function (_super) {
            __extends(ComuneForm, _super);
            function ComuneForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ComuneForm.init) {
                    ComuneForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ComuneForm, [
                        'CodiceRegione', w0,
                        'SiglaProvincia', w0,
                        'Nome', w0,
                        'Cap', w0,
                        'ZonaAlt', w0,
                        'EntCod', w0,
                        'CodCatastale', w0
                    ]);
                }
                return _this;
            }
            ComuneForm.formKey = 'Default.Comune';
            return ComuneForm;
        }(Serenity.PrefixedContext));
        Default.ComuneForm = ComuneForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ComuneRow;
        (function (ComuneRow) {
            ComuneRow.idProperty = 'Id';
            ComuneRow.nameProperty = 'Nome';
            ComuneRow.localTextPrefix = 'Default.Comune';
            ComuneRow.lookupKey = 'Default.Comune';
            function getLookup() {
                return Q.getLookup('Default.Comune');
            }
            ComuneRow.getLookup = getLookup;
        })(ComuneRow = Default.ComuneRow || (Default.ComuneRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ComuneService;
        (function (ComuneService) {
            ComuneService.baseUrl = 'Default/Comune';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ComuneService[x] = function (r, s, o) {
                    return Q.serviceRequest(ComuneService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ComuneService = Default.ComuneService || (Default.ComuneService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ConcessioneForm = /** @class */ (function (_super) {
            __extends(ConcessioneForm, _super);
            function ConcessioneForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ConcessioneForm.init) {
                    ConcessioneForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.BooleanEditor;
                    var w6 = Default.AutorizzazioneMaterialeEditor;
                    var w7 = Default.ProrogaEditor;
                    var w8 = s.EnumEditor;
                    Q.initFormType(ConcessioneForm, [
                        'IdStruttura', w0,
                        'IdEsercente', w0,
                        'NumeroAtto', w1,
                        'DataAutorizzazione', w2,
                        'DataSistemazione', w2,
                        'SuperficieAutorizzata', w3,
                        'SuperficieScavo', w3,
                        'ParereAgenzia', w4,
                        'Via', w5,
                        'DenunciaEsercizioN', w1,
                        'DenunciaEsercizioData', w2,
                        'SospensioneN', w1,
                        'SospensioneData', w2,
                        'RevocaN', w1,
                        'RevocaData', w2,
                        'DecadenzaN', w1,
                        'DecadenzaData', w2,
                        'RinunciaN', w1,
                        'RinunciaData', w2,
                        'ConcessioneMaterialeList', w6,
                        'ProrogaList', w7,
                        'TipoRecuperoMorfologico', w8,
                        'TipoRecuperoFinale', w8,
                        'PendenzaScarpate', w1,
                        'QuotaPianoCampagna', w1
                    ]);
                }
                return _this;
            }
            ConcessioneForm.formKey = 'Default.Concessione';
            return ConcessioneForm;
        }(Serenity.PrefixedContext));
        Default.ConcessioneForm = ConcessioneForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ConcessioneRow;
        (function (ConcessioneRow) {
            ConcessioneRow.idProperty = 'Id';
            ConcessioneRow.nameProperty = 'Descrizione';
            ConcessioneRow.localTextPrefix = 'Default.Concessione';
        })(ConcessioneRow = Default.ConcessioneRow || (Default.ConcessioneRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ConcessioneService;
        (function (ConcessioneService) {
            ConcessioneService.baseUrl = 'Default/Concessione';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ConcessioneService[x] = function (r, s, o) {
                    return Q.serviceRequest(ConcessioneService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ConcessioneService = Default.ConcessioneService || (Default.ConcessioneService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var DerogaForm = /** @class */ (function (_super) {
            __extends(DerogaForm, _super);
            function DerogaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DerogaForm.init) {
                    DerogaForm.init = true;
                    var s = Serenity;
                    var w0 = s.DecimalEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(DerogaForm, [
                        'VolumeDeroga', w0,
                        'Protocollo', w1,
                        'Data', w2,
                        'Note', w3
                    ]);
                }
                return _this;
            }
            DerogaForm.formKey = 'Default.Deroga';
            return DerogaForm;
        }(Serenity.PrefixedContext));
        Default.DerogaForm = DerogaForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var DerogaRow;
        (function (DerogaRow) {
            DerogaRow.idProperty = 'Id';
            DerogaRow.nameProperty = 'Protocollo';
            DerogaRow.localTextPrefix = 'Default.Deroga';
        })(DerogaRow = Default.DerogaRow || (Default.DerogaRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var DerogaService;
        (function (DerogaService) {
            DerogaService.baseUrl = 'Default/Deroga';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DerogaService[x] = function (r, s, o) {
                    return Q.serviceRequest(DerogaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DerogaService = Default.DerogaService || (Default.DerogaService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var EnteForm = /** @class */ (function (_super) {
            __extends(EnteForm, _super);
            function EnteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EnteForm.init) {
                    EnteForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(EnteForm, [
                        'Id', w0,
                        'IdRegione', w1,
                        'Nome', w0,
                        'Sigla', w0
                    ]);
                }
                return _this;
            }
            EnteForm.formKey = 'Default.Ente';
            return EnteForm;
        }(Serenity.PrefixedContext));
        Default.EnteForm = EnteForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var EnteRow;
        (function (EnteRow) {
            EnteRow.idProperty = 'Id';
            EnteRow.nameProperty = 'Nome';
            EnteRow.localTextPrefix = 'Default.Ente';
            EnteRow.lookupKey = 'Default.Ente';
            function getLookup() {
                return Q.getLookup('Default.Ente');
            }
            EnteRow.getLookup = getLookup;
        })(EnteRow = Default.EnteRow || (Default.EnteRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var EnteService;
        (function (EnteService) {
            EnteService.baseUrl = 'Default/Ente';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EnteService[x] = function (r, s, o) {
                    return Q.serviceRequest(EnteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EnteService = Default.EnteService || (Default.EnteService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var EsercenteForm = /** @class */ (function (_super) {
            __extends(EsercenteForm, _super);
            function EsercenteForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EsercenteForm.init) {
                    EsercenteForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(EsercenteForm, [
                        'RagSoc', w0,
                        'CodCcia', w0,
                        'Indirizzo', w0,
                        'Cap', w1,
                        'Frazione', w0,
                        'IdComune', w2,
                        'CodiceFiscale', w0,
                        'PartitaIva', w0,
                        'CodiceFiscaleCompilatore', w0,
                        'Telefono', w0,
                        'EMail', w0,
                        'LegaleRappresentante', w0,
                        'DatiFallimento', w3
                    ]);
                }
                return _this;
            }
            EsercenteForm.formKey = 'Default.Esercente';
            return EsercenteForm;
        }(Serenity.PrefixedContext));
        Default.EsercenteForm = EsercenteForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var EsercenteRow;
        (function (EsercenteRow) {
            EsercenteRow.idProperty = 'Id';
            EsercenteRow.nameProperty = 'RagSoc';
            EsercenteRow.localTextPrefix = 'Default.Esercente';
            EsercenteRow.lookupKey = 'Default.Esercente';
            function getLookup() {
                return Q.getLookup('Default.Esercente');
            }
            EsercenteRow.getLookup = getLookup;
        })(EsercenteRow = Default.EsercenteRow || (Default.EsercenteRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var EsercenteService;
        (function (EsercenteService) {
            EsercenteService.baseUrl = 'Default/Esercente';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EsercenteService[x] = function (r, s, o) {
                    return Q.serviceRequest(EsercenteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EsercenteService = Default.EsercenteService || (Default.EsercenteService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var FabbisognoForm = /** @class */ (function (_super) {
            __extends(FabbisognoForm, _super);
            function FabbisognoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FabbisognoForm.init) {
                    FabbisognoForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(FabbisognoForm, [
                        'IdMateriale', w0,
                        'Fabbisogno', w1,
                        'Potenziale', w1,
                        'Residuo', w1
                    ]);
                }
                return _this;
            }
            FabbisognoForm.formKey = 'Default.Fabbisogno';
            return FabbisognoForm;
        }(Serenity.PrefixedContext));
        Default.FabbisognoForm = FabbisognoForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var FabbisognoRow;
        (function (FabbisognoRow) {
            FabbisognoRow.idProperty = 'Id';
            FabbisognoRow.localTextPrefix = 'Default.Fabbisogno';
        })(FabbisognoRow = Default.FabbisognoRow || (Default.FabbisognoRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var FabbisognoService;
        (function (FabbisognoService) {
            FabbisognoService.baseUrl = 'Default/Fabbisogno';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FabbisognoService[x] = function (r, s, o) {
                    return Q.serviceRequest(FabbisognoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FabbisognoService = Default.FabbisognoService || (Default.FabbisognoService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ImpiantoForm = /** @class */ (function (_super) {
            __extends(ImpiantoForm, _super);
            function ImpiantoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImpiantoForm.init) {
                    ImpiantoForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.DateEditor;
                    Q.initFormType(ImpiantoForm, [
                        'Nome', w0,
                        'IdComune', w1,
                        'TipoImpianto', w2,
                        'Progressivo', w3,
                        'Frazione', w0,
                        'CatastoProvinciale', w0,
                        'CoordinataX', w4,
                        'CoordinataY', w4,
                        'DataInstallazioneImpianto', w5
                    ]);
                }
                return _this;
            }
            ImpiantoForm.formKey = 'Default.Impianto';
            return ImpiantoForm;
        }(Serenity.PrefixedContext));
        Default.ImpiantoForm = ImpiantoForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ImpiantoRow;
        (function (ImpiantoRow) {
            ImpiantoRow.idProperty = 'Id';
            ImpiantoRow.nameProperty = 'Nome';
            ImpiantoRow.localTextPrefix = 'Default.Impianto';
            ImpiantoRow.lookupKey = 'Default.Impianto';
            function getLookup() {
                return Q.getLookup('Default.Impianto');
            }
            ImpiantoRow.getLookup = getLookup;
        })(ImpiantoRow = Default.ImpiantoRow || (Default.ImpiantoRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ImpiantoService;
        (function (ImpiantoService) {
            ImpiantoService.baseUrl = 'Default/Impianto';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImpiantoService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImpiantoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImpiantoService = Default.ImpiantoService || (Default.ImpiantoService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var MaterialeForm = /** @class */ (function (_super) {
            __extends(MaterialeForm, _super);
            function MaterialeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaterialeForm.init) {
                    MaterialeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.EnumEditor;
                    Q.initFormType(MaterialeForm, [
                        'Descrizione', w0,
                        'IdTipoMateriale', w1,
                        'TariffaRiferimento', w2,
                        'PesoSpecificoRiferimento', w2,
                        'NomeRisorsaMineraleIstat', w3
                    ]);
                }
                return _this;
            }
            MaterialeForm.formKey = 'Default.Materiale';
            return MaterialeForm;
        }(Serenity.PrefixedContext));
        Default.MaterialeForm = MaterialeForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var MaterialeRow;
        (function (MaterialeRow) {
            MaterialeRow.idProperty = 'Id';
            MaterialeRow.nameProperty = 'Descrizione';
            MaterialeRow.localTextPrefix = 'Default.Materiale';
            MaterialeRow.lookupKey = 'Default.Materiale';
            function getLookup() {
                return Q.getLookup('Default.Materiale');
            }
            MaterialeRow.getLookup = getLookup;
        })(MaterialeRow = Default.MaterialeRow || (Default.MaterialeRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var MaterialeService;
        (function (MaterialeService) {
            MaterialeService.baseUrl = 'Default/Materiale';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaterialeService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaterialeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaterialeService = Default.MaterialeService || (Default.MaterialeService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var MinieraForm = /** @class */ (function (_super) {
            __extends(MinieraForm, _super);
            function MinieraForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MinieraForm.init) {
                    MinieraForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(MinieraForm, [
                        'Nome', w0,
                        'IdComune', w1,
                        'TipoPosizione', w2,
                        'TipoDissesto', w2,
                        'TipoColtivazione', w2,
                        'Progressivo', w3,
                        'Frazione', w0,
                        'CatastoProvinciale', w0,
                        'CoordinataX', w4,
                        'CoordinataY', w4,
                        'VincoloAmbientale', w3,
                        'AreaProtetta', w5,
                        'ProfonditaFalda', w4
                    ]);
                }
                return _this;
            }
            MinieraForm.formKey = 'Default.Miniera';
            return MinieraForm;
        }(Serenity.PrefixedContext));
        Default.MinieraForm = MinieraForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var MinieraRow;
        (function (MinieraRow) {
            MinieraRow.idProperty = 'Id';
            MinieraRow.nameProperty = 'Nome';
            MinieraRow.localTextPrefix = 'Default.Miniera';
            MinieraRow.lookupKey = 'Default.Miniera';
            function getLookup() {
                return Q.getLookup('Default.Miniera');
            }
            MinieraRow.getLookup = getLookup;
        })(MinieraRow = Default.MinieraRow || (Default.MinieraRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var MinieraService;
        (function (MinieraService) {
            MinieraService.baseUrl = 'Default/Miniera';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MinieraService[x] = function (r, s, o) {
                    return Q.serviceRequest(MinieraService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MinieraService = Default.MinieraService || (Default.MinieraService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoAreaForm = /** @class */ (function (_super) {
            __extends(PianoAreaForm, _super);
            function PianoAreaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PianoAreaForm.init) {
                    PianoAreaForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = Default.PotenzialeEditor;
                    Q.initFormType(PianoAreaForm, [
                        'IdArea', w0,
                        'TipoStato', w1,
                        'ProfMax', w2,
                        'Sup', w3,
                        'PotenzialeList', w4
                    ]);
                }
                return _this;
            }
            PianoAreaForm.formKey = 'Default.PianoArea';
            return PianoAreaForm;
        }(Serenity.PrefixedContext));
        Default.PianoAreaForm = PianoAreaForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoAreaRow;
        (function (PianoAreaRow) {
            PianoAreaRow.idProperty = 'Id';
            PianoAreaRow.nameProperty = 'IdAreaNome';
            PianoAreaRow.localTextPrefix = 'Default.PianoArea';
            PianoAreaRow.lookupKey = 'Default.PianoArea';
            function getLookup() {
                return Q.getLookup('Default.PianoArea');
            }
            PianoAreaRow.getLookup = getLookup;
        })(PianoAreaRow = Default.PianoAreaRow || (Default.PianoAreaRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoAreaService;
        (function (PianoAreaService) {
            PianoAreaService.baseUrl = 'Default/PianoArea';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PianoAreaService[x] = function (r, s, o) {
                    return Q.serviceRequest(PianoAreaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PianoAreaService = Default.PianoAreaService || (Default.PianoAreaService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoForm = /** @class */ (function (_super) {
            __extends(PianoForm, _super);
            function PianoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PianoForm.init) {
                    PianoForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = Default.AttoEditor;
                    var w6 = Default.FabbisognoEditor;
                    var w7 = Default.PianoAreaEditor;
                    Q.initFormType(PianoForm, [
                        'IdEnte', w0,
                        'Progressivo', w1,
                        'Variante', w1,
                        'Descrizione', w2,
                        'DataInizio', w3,
                        'DataFine', w3,
                        'Note', w4,
                        'AttoList', w5,
                        'FabbisognoList', w6,
                        'PianoAreaList', w7
                    ]);
                }
                return _this;
            }
            PianoForm.formKey = 'Default.Piano';
            return PianoForm;
        }(Serenity.PrefixedContext));
        Default.PianoForm = PianoForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoRow;
        (function (PianoRow) {
            PianoRow.idProperty = 'Id';
            PianoRow.nameProperty = 'Descrizione';
            PianoRow.localTextPrefix = 'Default.Piano';
            PianoRow.lookupKey = 'Default.Piano';
            function getLookup() {
                return Q.getLookup('Default.Piano');
            }
            PianoRow.getLookup = getLookup;
        })(PianoRow = Default.PianoRow || (Default.PianoRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoService;
        (function (PianoService) {
            PianoService.baseUrl = 'Default/Piano';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PianoService[x] = function (r, s, o) {
                    return Q.serviceRequest(PianoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PianoService = Default.PianoService || (Default.PianoService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PotenzialeForm = /** @class */ (function (_super) {
            __extends(PotenzialeForm, _super);
            function PotenzialeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PotenzialeForm.init) {
                    PotenzialeForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(PotenzialeForm, [
                        'IdMateriale', w0,
                        'Potenziale', w1,
                        'Residuo', w1
                    ]);
                }
                return _this;
            }
            PotenzialeForm.formKey = 'Default.Potenziale';
            return PotenzialeForm;
        }(Serenity.PrefixedContext));
        Default.PotenzialeForm = PotenzialeForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PotenzialeRow;
        (function (PotenzialeRow) {
            PotenzialeRow.idProperty = 'Id';
            PotenzialeRow.localTextPrefix = 'Default.Potenziale';
        })(PotenzialeRow = Default.PotenzialeRow || (Default.PotenzialeRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PotenzialeService;
        (function (PotenzialeService) {
            PotenzialeService.baseUrl = 'Default/Potenziale';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PotenzialeService[x] = function (r, s, o) {
                    return Q.serviceRequest(PotenzialeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PotenzialeService = Default.PotenzialeService || (Default.PotenzialeService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProdottoForm = /** @class */ (function (_super) {
            __extends(ProdottoForm, _super);
            function ProdottoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProdottoForm.init) {
                    ProdottoForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.EnumEditor;
                    var w4 = s.StringEditor;
                    Q.initFormType(ProdottoForm, [
                        'IdMateriale', w0,
                        'QuantitaEstratta', w1,
                        'Peso', w1,
                        'PesoSpecifico', w1,
                        'Oneri', w1,
                        'NumeroMesiAttivita', w1,
                        'PrimaLavorazione', w2,
                        'QuantitaLavorazione', w1,
                        'TipoLavorazione1', w3,
                        'TipoLavorazione2', w3,
                        'TipoLavorazione3', w3,
                        'TipoCommercializzazione1', w3,
                        'Quantita1', w1,
                        'Prezzo1', w1,
                        'Um1', w4,
                        'TipoCommercializzazione2', w3,
                        'Quantita2', w1,
                        'Prezzo2', w1,
                        'Um2', w4,
                        'TipoCommercializzazione3', w3,
                        'Quantita3', w1,
                        'Prezzo3', w1,
                        'Um3', w4
                    ]);
                }
                return _this;
            }
            ProdottoForm.formKey = 'Default.Prodotto';
            return ProdottoForm;
        }(Serenity.PrefixedContext));
        Default.ProdottoForm = ProdottoForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProdottoRow;
        (function (ProdottoRow) {
            ProdottoRow.idProperty = 'Id';
            ProdottoRow.nameProperty = 'IdMaterialeDescrizione';
            ProdottoRow.localTextPrefix = 'Default.Prodotto';
        })(ProdottoRow = Default.ProdottoRow || (Default.ProdottoRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProdottoService;
        (function (ProdottoService) {
            ProdottoService.baseUrl = 'Default/Prodotto';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProdottoService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProdottoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProdottoService = Default.ProdottoService || (Default.ProdottoService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProrogaForm = /** @class */ (function (_super) {
            __extends(ProrogaForm, _super);
            function ProrogaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProrogaForm.init) {
                    ProrogaForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    Q.initFormType(ProrogaForm, [
                        'NuovaDataSistemazione', w0,
                        'Protocollo', w1,
                        'Data', w0,
                        'Note', w2
                    ]);
                }
                return _this;
            }
            ProrogaForm.formKey = 'Default.Proroga';
            return ProrogaForm;
        }(Serenity.PrefixedContext));
        Default.ProrogaForm = ProrogaForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProrogaRow;
        (function (ProrogaRow) {
            ProrogaRow.idProperty = 'Id';
            ProrogaRow.nameProperty = 'Protocollo';
            ProrogaRow.localTextPrefix = 'Default.Proroga';
        })(ProrogaRow = Default.ProrogaRow || (Default.ProrogaRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProrogaService;
        (function (ProrogaService) {
            ProrogaService.baseUrl = 'Default/Proroga';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProrogaService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProrogaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProrogaService = Default.ProrogaService || (Default.ProrogaService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RegioneForm = /** @class */ (function (_super) {
            __extends(RegioneForm, _super);
            function RegioneForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegioneForm.init) {
                    RegioneForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RegioneForm, [
                        'Nome', w0
                    ]);
                }
                return _this;
            }
            RegioneForm.formKey = 'Default.Regione';
            return RegioneForm;
        }(Serenity.PrefixedContext));
        Default.RegioneForm = RegioneForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RegioneRow;
        (function (RegioneRow) {
            RegioneRow.idProperty = 'Id';
            RegioneRow.nameProperty = 'Nome';
            RegioneRow.localTextPrefix = 'Default.Regione';
            RegioneRow.lookupKey = 'Default.Regione';
            function getLookup() {
                return Q.getLookup('Default.Regione');
            }
            RegioneRow.getLookup = getLookup;
        })(RegioneRow = Default.RegioneRow || (Default.RegioneRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RegioneService;
        (function (RegioneService) {
            RegioneService.baseUrl = 'Default/Regione';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RegioneService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegioneService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegioneService = Default.RegioneService || (Default.RegioneService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var Rendiconto2Form = /** @class */ (function (_super) {
            __extends(Rendiconto2Form, _super);
            function Rendiconto2Form(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!Rendiconto2Form.init) {
                    Rendiconto2Form.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.StringEditor;
                    var w5 = Default.ProdottoEditor;
                    var w6 = s.BooleanEditor;
                    var w7 = Default.ScartoEditor;
                    Q.initFormType(Rendiconto2Form, [
                        'IdAutorizzazione', w0,
                        'Anno', w1,
                        'NumOperai', w1,
                        'NumAmministrativi', w1,
                        'NumTecnici', w1,
                        'NumAddetti', w1,
                        'OreLavorate', w2,
                        'NumeroMesiAttivita', w2,
                        'DirittoProp', w2,
                        'DirettoreResponsabile', w3,
                        'Sorvegliante', w3,
                        'ResponsabileSicurezza', w3,
                        'VolAcquaEstrazione', w2,
                        'VolAcquaLavorazioni', w2,
                        'Esplosivo', w2,
                        'Detonatori', w1,
                        'FiloElicoidale', w2,
                        'MezzoMeccanico', w2,
                        'MicceLentaCombustione', w2,
                        'QuantitaKw', w2,
                        'ImportoKw', w2,
                        'QuantitaGasolio', w2,
                        'ImportoGasolio', w2,
                        'QuantitaBenzina', w2,
                        'ImportoBenzina', w2,
                        'DescrizioneAltreFontiEnergia', w4,
                        'UnitaMisuraAltreFontiEnergia', w4,
                        'QuantitaAltreFontiEnergia', w2,
                        'ImportoAltreFontiEnergia', w2,
                        'ProdottoList', w5,
                        'StruttDepMatInut', w6,
                        'ScartoList', w7
                    ]);
                }
                return _this;
            }
            Rendiconto2Form.formKey = 'Default.Rendiconto2';
            return Rendiconto2Form;
        }(Serenity.PrefixedContext));
        Default.Rendiconto2Form = Rendiconto2Form;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var Rendiconto2Row;
        (function (Rendiconto2Row) {
            Rendiconto2Row.idProperty = 'Id';
            Rendiconto2Row.nameProperty = 'Autorizzazione';
            Rendiconto2Row.localTextPrefix = 'Default.Rendiconto2';
        })(Rendiconto2Row = Default.Rendiconto2Row || (Default.Rendiconto2Row = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var Rendiconto2Service;
        (function (Rendiconto2Service) {
            Rendiconto2Service.baseUrl = 'Default/Rendiconto2';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                Rendiconto2Service[x] = function (r, s, o) {
                    return Q.serviceRequest(Rendiconto2Service.baseUrl + '/' + x, r, s, o);
                };
            });
        })(Rendiconto2Service = Default.Rendiconto2Service || (Default.Rendiconto2Service = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var Rendiconto3Form = /** @class */ (function (_super) {
            __extends(Rendiconto3Form, _super);
            function Rendiconto3Form(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!Rendiconto3Form.init) {
                    Rendiconto3Form.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    var w4 = s.BooleanEditor;
                    var w5 = Default.RendicontoApprovvigionamentoEditor;
                    var w6 = Default.RendicontoDestinazioneTerritorialeEditor;
                    var w7 = Default.RendicontoDestinazioneUsoEditor;
                    Q.initFormType(Rendiconto3Form, [
                        'IdStruttura', w0,
                        'Anno', w1,
                        'NumOperai', w1,
                        'NumAmministrativi', w1,
                        'NumTecnici', w1,
                        'LavoratoM3', w2,
                        'LavoratoQ', w2,
                        'MetodoLavorazione', w3,
                        'MaterialeTradizionale', w4,
                        'MaterialeRiciclato', w4,
                        'ApprovvigionamentoList', w5,
                        'DestinazioneTerritorialeList', w6,
                        'DestinazioneUsoList', w7
                    ]);
                }
                return _this;
            }
            Rendiconto3Form.formKey = 'Default.Rendiconto3';
            return Rendiconto3Form;
        }(Serenity.PrefixedContext));
        Default.Rendiconto3Form = Rendiconto3Form;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var Rendiconto3Row;
        (function (Rendiconto3Row) {
            Rendiconto3Row.idProperty = 'Id';
            Rendiconto3Row.nameProperty = 'IdStrutturaNome';
            Rendiconto3Row.localTextPrefix = 'Default.Rendiconto3';
        })(Rendiconto3Row = Default.Rendiconto3Row || (Default.Rendiconto3Row = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var Rendiconto3Service;
        (function (Rendiconto3Service) {
            Rendiconto3Service.baseUrl = 'Default/Rendiconto3';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                Rendiconto3Service[x] = function (r, s, o) {
                    return Q.serviceRequest(Rendiconto3Service.baseUrl + '/' + x, r, s, o);
                };
            });
        })(Rendiconto3Service = Default.Rendiconto3Service || (Default.Rendiconto3Service = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoApprovvigionamentoForm = /** @class */ (function (_super) {
            __extends(RendicontoApprovvigionamentoForm, _super);
            function RendicontoApprovvigionamentoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RendicontoApprovvigionamentoForm.init) {
                    RendicontoApprovvigionamentoForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(RendicontoApprovvigionamentoForm, [
                        'TipoApprovvigionamento', w0,
                        'IdStrutturaCava', w1,
                        'QtaApprov', w2,
                        'Note', w3
                    ]);
                }
                return _this;
            }
            RendicontoApprovvigionamentoForm.formKey = 'Default.RendicontoApprovvigionamento';
            return RendicontoApprovvigionamentoForm;
        }(Serenity.PrefixedContext));
        Default.RendicontoApprovvigionamentoForm = RendicontoApprovvigionamentoForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoApprovvigionamentoRow;
        (function (RendicontoApprovvigionamentoRow) {
            RendicontoApprovvigionamentoRow.idProperty = 'Id';
            RendicontoApprovvigionamentoRow.nameProperty = 'Note';
            RendicontoApprovvigionamentoRow.localTextPrefix = 'Default.RendicontoApprovvigionamento';
        })(RendicontoApprovvigionamentoRow = Default.RendicontoApprovvigionamentoRow || (Default.RendicontoApprovvigionamentoRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoApprovvigionamentoService;
        (function (RendicontoApprovvigionamentoService) {
            RendicontoApprovvigionamentoService.baseUrl = 'Default/RendicontoApprovvigionamento';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RendicontoApprovvigionamentoService[x] = function (r, s, o) {
                    return Q.serviceRequest(RendicontoApprovvigionamentoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RendicontoApprovvigionamentoService = Default.RendicontoApprovvigionamentoService || (Default.RendicontoApprovvigionamentoService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneTerritorialeForm = /** @class */ (function (_super) {
            __extends(RendicontoDestinazioneTerritorialeForm, _super);
            function RendicontoDestinazioneTerritorialeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RendicontoDestinazioneTerritorialeForm.init) {
                    RendicontoDestinazioneTerritorialeForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(RendicontoDestinazioneTerritorialeForm, [
                        'TipoDestinazioneTerritoriale', w0,
                        'Percentuale', w1
                    ]);
                }
                return _this;
            }
            RendicontoDestinazioneTerritorialeForm.formKey = 'Default.RendicontoDestinazioneTerritoriale';
            return RendicontoDestinazioneTerritorialeForm;
        }(Serenity.PrefixedContext));
        Default.RendicontoDestinazioneTerritorialeForm = RendicontoDestinazioneTerritorialeForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneTerritorialeRow;
        (function (RendicontoDestinazioneTerritorialeRow) {
            RendicontoDestinazioneTerritorialeRow.idProperty = 'Id';
            RendicontoDestinazioneTerritorialeRow.localTextPrefix = 'Default.RendicontoDestinazioneTerritoriale';
        })(RendicontoDestinazioneTerritorialeRow = Default.RendicontoDestinazioneTerritorialeRow || (Default.RendicontoDestinazioneTerritorialeRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneTerritorialeService;
        (function (RendicontoDestinazioneTerritorialeService) {
            RendicontoDestinazioneTerritorialeService.baseUrl = 'Default/RendicontoDestinazioneTerritoriale';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RendicontoDestinazioneTerritorialeService[x] = function (r, s, o) {
                    return Q.serviceRequest(RendicontoDestinazioneTerritorialeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RendicontoDestinazioneTerritorialeService = Default.RendicontoDestinazioneTerritorialeService || (Default.RendicontoDestinazioneTerritorialeService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneUsoForm = /** @class */ (function (_super) {
            __extends(RendicontoDestinazioneUsoForm, _super);
            function RendicontoDestinazioneUsoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RendicontoDestinazioneUsoForm.init) {
                    RendicontoDestinazioneUsoForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(RendicontoDestinazioneUsoForm, [
                        'TipoDestinazioneUso', w0,
                        'Percentuale', w1
                    ]);
                }
                return _this;
            }
            RendicontoDestinazioneUsoForm.formKey = 'Default.RendicontoDestinazioneUso';
            return RendicontoDestinazioneUsoForm;
        }(Serenity.PrefixedContext));
        Default.RendicontoDestinazioneUsoForm = RendicontoDestinazioneUsoForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneUsoRow;
        (function (RendicontoDestinazioneUsoRow) {
            RendicontoDestinazioneUsoRow.idProperty = 'Id';
            RendicontoDestinazioneUsoRow.localTextPrefix = 'Default.RendicontoDestinazioneUso';
        })(RendicontoDestinazioneUsoRow = Default.RendicontoDestinazioneUsoRow || (Default.RendicontoDestinazioneUsoRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneUsoService;
        (function (RendicontoDestinazioneUsoService) {
            RendicontoDestinazioneUsoService.baseUrl = 'Default/RendicontoDestinazioneUso';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RendicontoDestinazioneUsoService[x] = function (r, s, o) {
                    return Q.serviceRequest(RendicontoDestinazioneUsoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RendicontoDestinazioneUsoService = Default.RendicontoDestinazioneUsoService || (Default.RendicontoDestinazioneUsoService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoForm = /** @class */ (function (_super) {
            __extends(RendicontoForm, _super);
            function RendicontoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RendicontoForm.init) {
                    RendicontoForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = Default.ProdottoEditor;
                    var w5 = s.BooleanEditor;
                    var w6 = Default.ScartoEditor;
                    var w7 = s.StringEditor;
                    Q.initFormType(RendicontoForm, [
                        'IdAutorizzazione', w0,
                        'Anno', w1,
                        'NumOperai', w1,
                        'NumAmministrativi', w1,
                        'NumTecnici', w1,
                        'NumAddetti', w1,
                        'OreLavorate', w2,
                        'NumeroMesiAttivita', w2,
                        'DirettoreResponsabile', w3,
                        'Sorvegliante', w3,
                        'ResponsabileSicurezza', w3,
                        'ProdottoList', w4,
                        'StruttDepMatInut', w5,
                        'ScartoList', w6,
                        'VolAcquaEstrazione', w2,
                        'VolAcquaLavorazioni', w2,
                        'Esplosivo', w2,
                        'Detonatori', w1,
                        'FiloElicoidale', w2,
                        'MezzoMeccanico', w2,
                        'MicceLentaCombustione', w2,
                        'QuantitaKw', w2,
                        'ImportoKw', w2,
                        'QuantitaGasolio', w2,
                        'ImportoGasolio', w2,
                        'QuantitaBenzina', w2,
                        'ImportoBenzina', w2,
                        'DescrizioneAltreFontiEnergia', w7,
                        'UnitaMisuraAltreFontiEnergia', w7,
                        'QuantitaAltreFontiEnergia', w2,
                        'ImportoAltreFontiEnergia', w2
                    ]);
                }
                return _this;
            }
            RendicontoForm.formKey = 'Default.Rendiconto';
            return RendicontoForm;
        }(Serenity.PrefixedContext));
        Default.RendicontoForm = RendicontoForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoRow;
        (function (RendicontoRow) {
            RendicontoRow.idProperty = 'Id';
            RendicontoRow.nameProperty = 'DescrizioneAltreFontiEnergia';
            RendicontoRow.localTextPrefix = 'Default.Rendiconto';
        })(RendicontoRow = Default.RendicontoRow || (Default.RendicontoRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoService;
        (function (RendicontoService) {
            RendicontoService.baseUrl = 'Default/Rendiconto';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RendicontoService[x] = function (r, s, o) {
                    return Q.serviceRequest(RendicontoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RendicontoService = Default.RendicontoService || (Default.RendicontoService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ScartoForm = /** @class */ (function (_super) {
            __extends(ScartoForm, _super);
            function ScartoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ScartoForm.init) {
                    ScartoForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(ScartoForm, [
                        'TipoScarto', w0,
                        'Peso', w1,
                        'Volume', w1,
                        'DescrizioneAltro', w2
                    ]);
                }
                return _this;
            }
            ScartoForm.formKey = 'Default.Scarto';
            return ScartoForm;
        }(Serenity.PrefixedContext));
        Default.ScartoForm = ScartoForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ScartoRow;
        (function (ScartoRow) {
            ScartoRow.idProperty = 'Id';
            ScartoRow.localTextPrefix = 'Default.Scarto';
        })(ScartoRow = Default.ScartoRow || (Default.ScartoRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ScartoService;
        (function (ScartoService) {
            ScartoService.baseUrl = 'Default/Scarto';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ScartoService[x] = function (r, s, o) {
                    return Q.serviceRequest(ScartoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ScartoService = Default.ScartoService || (Default.ScartoService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var TipoMaterialeForm = /** @class */ (function (_super) {
            __extends(TipoMaterialeForm, _super);
            function TipoMaterialeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TipoMaterialeForm.init) {
                    TipoMaterialeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TipoMaterialeForm, [
                        'Descrizione', w0
                    ]);
                }
                return _this;
            }
            TipoMaterialeForm.formKey = 'Default.TipoMateriale';
            return TipoMaterialeForm;
        }(Serenity.PrefixedContext));
        Default.TipoMaterialeForm = TipoMaterialeForm;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var TipoMaterialeRow;
        (function (TipoMaterialeRow) {
            TipoMaterialeRow.idProperty = 'Id';
            TipoMaterialeRow.nameProperty = 'Descrizione';
            TipoMaterialeRow.localTextPrefix = 'Default.TipoMateriale';
            TipoMaterialeRow.lookupKey = 'Default.TipoMateriale';
            function getLookup() {
                return Q.getLookup('Default.TipoMateriale');
            }
            TipoMaterialeRow.getLookup = getLookup;
        })(TipoMaterialeRow = Default.TipoMaterialeRow || (Default.TipoMaterialeRow = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var TipoMaterialeService;
        (function (TipoMaterialeService) {
            TipoMaterialeService.baseUrl = 'Default/TipoMateriale';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TipoMaterialeService[x] = function (r, s, o) {
                    return Q.serviceRequest(TipoMaterialeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TipoMaterialeService = Default.TipoMaterialeService || (Default.TipoMaterialeService = {}));
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = CaveSerene.Membership || (CaveSerene.Membership = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = CaveSerene.Membership || (CaveSerene.Membership = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w0
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = CaveSerene.Membership || (CaveSerene.Membership = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = CaveSerene.Membership || (CaveSerene.Membership = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = CaveSerene.Membership || (CaveSerene.Membership = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoApprovvigionamento;
                (function (TipoApprovvigionamento) {
                    TipoApprovvigionamento[TipoApprovvigionamento["DaCavaRegionale"] = 1] = "DaCavaRegionale";
                    TipoApprovvigionamento[TipoApprovvigionamento["DaCavaExtraRegionale"] = 2] = "DaCavaExtraRegionale";
                    TipoApprovvigionamento[TipoApprovvigionamento["DaSistemazioneIdraulica"] = 3] = "DaSistemazioneIdraulica";
                    TipoApprovvigionamento[TipoApprovvigionamento["CostruzioneDemolizione"] = 4] = "CostruzioneDemolizione";
                    TipoApprovvigionamento[TipoApprovvigionamento["Altro"] = 5] = "Altro";
                })(TipoApprovvigionamento = Enums.TipoApprovvigionamento || (Enums.TipoApprovvigionamento = {}));
                Serenity.Decorators.registerEnumType(TipoApprovvigionamento, 'CaveSerene.Modules.Default.Enums.TipoApprovvigionamento', 'Default.TipoApprovvigionamento');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoArea;
                (function (TipoArea) {
                    TipoArea[TipoArea["Ambito"] = 1] = "Ambito";
                    TipoArea[TipoArea["Polo"] = 2] = "Polo";
                    TipoArea[TipoArea["Obiettivo"] = 3] = "Obiettivo";
                    TipoArea[TipoArea["Pregresso"] = 98] = "Pregresso";
                    TipoArea[TipoArea["Rivedere"] = 99] = "Rivedere";
                })(TipoArea = Enums.TipoArea || (Enums.TipoArea = {}));
                Serenity.Decorators.registerEnumType(TipoArea, 'CaveSerene.Modules.Default.Enums.TipoArea', 'Default.TipoArea');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoAtto;
                (function (TipoAtto) {
                    TipoAtto[TipoAtto["AdozioneProvinciale"] = 1] = "AdozioneProvinciale";
                    TipoAtto[TipoAtto["AdozioneAssembleaComuni"] = 2] = "AdozioneAssembleaComuni";
                    TipoAtto[TipoAtto["ApprovazioneRegionaleParziale"] = 3] = "ApprovazioneRegionaleParziale";
                })(TipoAtto = Enums.TipoAtto || (Enums.TipoAtto = {}));
                Serenity.Decorators.registerEnumType(TipoAtto, 'CaveSerene.Modules.Default.Enums.TipoAtto', 'Default.TipoAtto');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoColtivazione;
                (function (TipoColtivazione) {
                    TipoColtivazione[TipoColtivazione["AFossa"] = 1] = "AFossa";
                    TipoColtivazione[TipoColtivazione["PareteGradoni"] = 2] = "PareteGradoni";
                    TipoColtivazione[TipoColtivazione["PareteScarpataUnica"] = 3] = "PareteScarpataUnica";
                    TipoColtivazione[TipoColtivazione["InSotterraneo"] = 4] = "InSotterraneo";
                    TipoColtivazione[TipoColtivazione["Misto"] = 5] = "Misto";
                    TipoColtivazione[TipoColtivazione["MinieraCieloAperto"] = 6] = "MinieraCieloAperto";
                })(TipoColtivazione = Enums.TipoColtivazione || (Enums.TipoColtivazione = {}));
                Serenity.Decorators.registerEnumType(TipoColtivazione, 'CaveSerene.Modules.Default.Enums.TipoColtivazione', 'Default.TipoColtivazione');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoCommercializzazione;
                (function (TipoCommercializzazione) {
                    TipoCommercializzazione[TipoCommercializzazione["TAL_QUALE"] = 1] = "TAL_QUALE";
                    TipoCommercializzazione[TipoCommercializzazione["STABILIZZATI"] = 2] = "STABILIZZATI";
                    TipoCommercializzazione[TipoCommercializzazione["GHIAIA"] = 3] = "GHIAIA";
                    TipoCommercializzazione[TipoCommercializzazione["SABBIA"] = 4] = "SABBIA";
                    TipoCommercializzazione[TipoCommercializzazione["BLOCCHI"] = 5] = "BLOCCHI";
                    TipoCommercializzazione[TipoCommercializzazione["PEZZAME"] = 6] = "PEZZAME";
                    TipoCommercializzazione[TipoCommercializzazione["LASTRE"] = 7] = "LASTRE";
                    TipoCommercializzazione[TipoCommercializzazione["LAVORATI"] = 8] = "LAVORATI";
                })(TipoCommercializzazione = Enums.TipoCommercializzazione || (Enums.TipoCommercializzazione = {}));
                Serenity.Decorators.registerEnumType(TipoCommercializzazione, 'CaveSerene.Modules.Default.Enums.TipoCommercializzazione', 'Default.TipoCommercializzazione');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoDestinazioneTerritoriale;
                (function (TipoDestinazioneTerritoriale) {
                    TipoDestinazioneTerritoriale[TipoDestinazioneTerritoriale["NelComune"] = 1] = "NelComune";
                    TipoDestinazioneTerritoriale[TipoDestinazioneTerritoriale["NellaProvincia"] = 2] = "NellaProvincia";
                    TipoDestinazioneTerritoriale[TipoDestinazioneTerritoriale["NellaRegione"] = 3] = "NellaRegione";
                    TipoDestinazioneTerritoriale[TipoDestinazioneTerritoriale["FuoriRegione"] = 4] = "FuoriRegione";
                })(TipoDestinazioneTerritoriale = Enums.TipoDestinazioneTerritoriale || (Enums.TipoDestinazioneTerritoriale = {}));
                Serenity.Decorators.registerEnumType(TipoDestinazioneTerritoriale, 'CaveSerene.Modules.Default.Enums.TipoDestinazioneTerritoriale', 'Default.TipoDestinazioneTerritoriale');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoDestinazioneUso;
                (function (TipoDestinazioneUso) {
                    TipoDestinazioneUso[TipoDestinazioneUso["Riempimenti"] = 1] = "Riempimenti";
                    TipoDestinazioneUso[TipoDestinazioneUso["RilevatiStradali"] = 2] = "RilevatiStradali";
                    TipoDestinazioneUso[TipoDestinazioneUso["OpereIdrauliche"] = 3] = "OpereIdrauliche";
                    TipoDestinazioneUso[TipoDestinazioneUso["ConglomeratiCementiziBituminosi"] = 4] = "ConglomeratiCementiziBituminosi";
                    TipoDestinazioneUso[TipoDestinazioneUso["PietraTaglio"] = 5] = "PietraTaglio";
                    TipoDestinazioneUso[TipoDestinazioneUso["Leganti"] = 6] = "Leganti";
                    TipoDestinazioneUso[TipoDestinazioneUso["IndustriaLaterizi"] = 7] = "IndustriaLaterizi";
                    TipoDestinazioneUso[TipoDestinazioneUso["IndustriaCeramica"] = 8] = "IndustriaCeramica";
                    TipoDestinazioneUso[TipoDestinazioneUso["Impermeabilizzazioni"] = 9] = "Impermeabilizzazioni";
                    TipoDestinazioneUso[TipoDestinazioneUso["AltroIndustria"] = 10] = "AltroIndustria";
                    TipoDestinazioneUso[TipoDestinazioneUso["Litoidi"] = 11] = "Litoidi";
                    TipoDestinazioneUso[TipoDestinazioneUso["InertiStabilizzanti"] = 12] = "InertiStabilizzanti";
                    TipoDestinazioneUso[TipoDestinazioneUso["Calcestruzzi"] = 13] = "Calcestruzzi";
                    TipoDestinazioneUso[TipoDestinazioneUso["Bitumi"] = 14] = "Bitumi";
                    TipoDestinazioneUso[TipoDestinazioneUso["ProduzioneLaterizi"] = 15] = "ProduzioneLaterizi";
                    TipoDestinazioneUso[TipoDestinazioneUso["Cementificio"] = 16] = "Cementificio";
                })(TipoDestinazioneUso = Enums.TipoDestinazioneUso || (Enums.TipoDestinazioneUso = {}));
                Serenity.Decorators.registerEnumType(TipoDestinazioneUso, 'CaveSerene.Modules.Default.Enums.TipoDestinazioneUso', 'Default.TipoDestinazioneUso');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoDisponibilita;
                (function (TipoDisponibilita) {
                    TipoDisponibilita[TipoDisponibilita["Proprieta"] = 1] = "Proprieta";
                    TipoDisponibilita[TipoDisponibilita["Affitto"] = 2] = "Affitto";
                    TipoDisponibilita[TipoDisponibilita["Altro"] = 3] = "Altro";
                })(TipoDisponibilita = Enums.TipoDisponibilita || (Enums.TipoDisponibilita = {}));
                Serenity.Decorators.registerEnumType(TipoDisponibilita, 'CaveSerene.Modules.Default.Enums.TipoDisponibilita', 'Default.TipoDisponibilita');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoDissesto;
                (function (TipoDissesto) {
                    TipoDissesto[TipoDissesto["Assente"] = 1] = "Assente";
                    TipoDissesto[TipoDissesto["NonRilevabile"] = 2] = "NonRilevabile";
                    TipoDissesto[TipoDissesto["Frana"] = 3] = "Frana";
                    TipoDissesto[TipoDissesto["Calanco"] = 4] = "Calanco";
                    TipoDissesto[TipoDissesto["ErosioneFluviale"] = 5] = "ErosioneFluviale";
                })(TipoDissesto = Enums.TipoDissesto || (Enums.TipoDissesto = {}));
                Serenity.Decorators.registerEnumType(TipoDissesto, 'CaveSerene.Modules.Default.Enums.TipoDissesto', 'Default.TipoDissesto');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoISTAT;
                (function (TipoISTAT) {
                    TipoISTAT[TipoISTAT["Inerte"] = 1] = "Inerte";
                    TipoISTAT[TipoISTAT["Argilla"] = 2] = "Argilla";
                    TipoISTAT[TipoISTAT["SabbieSilicee"] = 3] = "SabbieSilicee";
                    TipoISTAT[TipoISTAT["Torba"] = 4] = "Torba";
                    TipoISTAT[TipoISTAT["Arenaria"] = 5] = "Arenaria";
                })(TipoISTAT = Enums.TipoISTAT || (Enums.TipoISTAT = {}));
                Serenity.Decorators.registerEnumType(TipoISTAT, 'CaveSerene.Modules.Default.Enums.TipoISTAT', 'Default.TipoISTAT');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoImpianto;
                (function (TipoImpianto) {
                    TipoImpianto[TipoImpianto["Fisso"] = 1] = "Fisso";
                    TipoImpianto[TipoImpianto["Mobile"] = 2] = "Mobile";
                })(TipoImpianto = Enums.TipoImpianto || (Enums.TipoImpianto = {}));
                Serenity.Decorators.registerEnumType(TipoImpianto, 'CaveSerene.Modules.Default.Enums.TipoImpianto', 'Default.TipoImpianto');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoLavorazione;
                (function (TipoLavorazione) {
                    TipoLavorazione[TipoLavorazione["LAVAGGIO"] = 1] = "LAVAGGIO";
                    TipoLavorazione[TipoLavorazione["VAGLIATURA"] = 2] = "VAGLIATURA";
                    TipoLavorazione[TipoLavorazione["FRANTUMAZIONE"] = 3] = "FRANTUMAZIONE";
                    TipoLavorazione[TipoLavorazione["MACINAZIONE"] = 4] = "MACINAZIONE";
                    TipoLavorazione[TipoLavorazione["SEGAGIONE"] = 5] = "SEGAGIONE";
                    TipoLavorazione[TipoLavorazione["ESSICCAZIONI"] = 6] = "ESSICCAZIONI";
                    TipoLavorazione[TipoLavorazione["ARATURA"] = 7] = "ARATURA";
                    TipoLavorazione[TipoLavorazione["RIPPATURA"] = 8] = "RIPPATURA";
                    TipoLavorazione[TipoLavorazione["ALTRO"] = 9] = "ALTRO";
                })(TipoLavorazione = Enums.TipoLavorazione || (Enums.TipoLavorazione = {}));
                Serenity.Decorators.registerEnumType(TipoLavorazione, 'CaveSerene.Modules.Default.Enums.TipoLavorazione', 'Default.TipoLavorazione');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoPosizione;
                (function (TipoPosizione) {
                    TipoPosizione[TipoPosizione["Cresta"] = 1] = "Cresta";
                    TipoPosizione[TipoPosizione["Fondovalle"] = 2] = "Fondovalle";
                    TipoPosizione[TipoPosizione["Pianura"] = 3] = "Pianura";
                    TipoPosizione[TipoPosizione["PianuraGolena"] = 4] = "PianuraGolena";
                    TipoPosizione[TipoPosizione["PianuraSottoFalda"] = 5] = "PianuraSottoFalda";
                    TipoPosizione[TipoPosizione["PianuraSopraFalda"] = 6] = "PianuraSopraFalda";
                    TipoPosizione[TipoPosizione["Versante"] = 7] = "Versante";
                })(TipoPosizione = Enums.TipoPosizione || (Enums.TipoPosizione = {}));
                Serenity.Decorators.registerEnumType(TipoPosizione, 'CaveSerene.Modules.Default.Enums.TipoPosizione', 'Default.TipoPosizione');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoRecuperoFinale;
                (function (TipoRecuperoFinale) {
                    TipoRecuperoFinale[TipoRecuperoFinale["UsoAgricolo"] = 1] = "UsoAgricolo";
                    TipoRecuperoFinale[TipoRecuperoFinale["UsoProduttivo"] = 2] = "UsoProduttivo";
                })(TipoRecuperoFinale = Enums.TipoRecuperoFinale || (Enums.TipoRecuperoFinale = {}));
                Serenity.Decorators.registerEnumType(TipoRecuperoFinale, 'CaveSerene.Modules.Default.Enums.TipoRecuperoFinale', 'Default.TipoRecuperoFinale');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoRecuperoMorfologico;
                (function (TipoRecuperoMorfologico) {
                    TipoRecuperoMorfologico[TipoRecuperoMorfologico["ZonaUmida"] = 1] = "ZonaUmida";
                    TipoRecuperoMorfologico[TipoRecuperoMorfologico["CAssaEspansione"] = 2] = "CAssaEspansione";
                })(TipoRecuperoMorfologico = Enums.TipoRecuperoMorfologico || (Enums.TipoRecuperoMorfologico = {}));
                Serenity.Decorators.registerEnumType(TipoRecuperoMorfologico, 'CaveSerene.Modules.Default.Enums.TipoRecuperoMorfologico', 'Default.TipoRecuperoMorfologico');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoScarto;
                (function (TipoScarto) {
                    TipoScarto[TipoScarto["LimiPolveri"] = 1] = "LimiPolveri";
                    TipoScarto[TipoScarto["Scotico"] = 2] = "Scotico";
                    TipoScarto[TipoScarto["Pietrame"] = 3] = "Pietrame";
                })(TipoScarto = Enums.TipoScarto || (Enums.TipoScarto = {}));
                Serenity.Decorators.registerEnumType(TipoScarto, 'CaveSerene.Modules.Default.Enums.TipoScarto', 'Default.TipoScarto');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoStato;
                (function (TipoStato) {
                    TipoStato[TipoStato["Attivo"] = 1] = "Attivo";
                    TipoStato[TipoStato["NonUtilizzato"] = 2] = "NonUtilizzato";
                    TipoStato[TipoStato["Esaurito"] = 3] = "Esaurito";
                })(TipoStato = Enums.TipoStato || (Enums.TipoStato = {}));
                Serenity.Decorators.registerEnumType(TipoStato, 'CaveSerene.Modules.Default.Enums.TipoStato', 'Default.TipoStato');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoStoria;
                (function (TipoStoria) {
                    TipoStoria[TipoStoria["Ampliamento"] = 1] = "Ampliamento";
                    TipoStoria[TipoStoria["Nuovo"] = 2] = "Nuovo";
                    TipoStoria[TipoStoria["Completamento"] = 3] = "Completamento";
                    TipoStoria[TipoStoria["Pregresso"] = 98] = "Pregresso";
                })(TipoStoria = Enums.TipoStoria || (Enums.TipoStoria = {}));
                Serenity.Decorators.registerEnumType(TipoStoria, 'CaveSerene.Modules.Default.Enums.TipoStoria', 'Default.TipoStoria');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Modules;
    (function (Modules) {
        var Default;
        (function (Default) {
            var Enums;
            (function (Enums) {
                var TipoStruttura;
                (function (TipoStruttura) {
                    TipoStruttura[TipoStruttura["Cava"] = 1] = "Cava";
                    TipoStruttura[TipoStruttura["Impianto"] = 2] = "Impianto";
                    TipoStruttura[TipoStruttura["Miniera"] = 3] = "Miniera";
                })(TipoStruttura = Enums.TipoStruttura || (Enums.TipoStruttura = {}));
                Serenity.Decorators.registerEnumType(TipoStruttura, 'CaveSerene.Modules.Default.Enums.TipoStruttura', 'Default.TipoStruttura');
            })(Enums = Default.Enums || (Default.Enums = {}));
        })(Default = Modules.Default || (Modules.Default = {}));
    })(Modules = CaveSerene.Modules || (CaveSerene.Modules = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Texts;
    (function (Texts) {
        CaveSerene['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Default: { Area: { CodiceAreaProv: 1, Id: 1, Nome: 1, Note: 1, Progressivo: 1, TipoArea: 1, TipoPosizione: 1, TipoStoria: 1 }, Atto: { DataAtto: 1, Id: 1, IdPiano: 1, NumAtto: 1, TipoAtto: 1 }, Autorizzazione: { Autorizzazione104Data: 1, Autorizzazione104N: 1, Autorizzazione104Note: 1, AutorizzazioneMaterialeList: 1, CollaudoData: 1, CollaudoN: 1, CollaudoNote: 1, ConvenzioneData: 1, ConvenzioneN: 1, DataAutorizzazione: 1, DataNotifica: 1, DataScadenza: 1, DataSistemazione: 1, DecadenzaData: 1, DecadenzaN: 1, DenunciaEsercizioData: 1, DenunciaEsercizioN: 1, DerogaList: 1, Descrizione: 1, Id: 1, IdEsercente: 1, IdEsercenteRagSoc: 1, IdPiano: 1, IdPianoArea: 1, IdStruttura: 1, IdStrutturaNome: 1, NoteSistemazione: 1, NumeroAtto: 1, NumeroAttoNotifica: 1, ParereAgenzia: 1, ParereMotivato: 1, PendenzaScarpate: 1, PesoAutorizzato: 1, ProfonditaScavo: 1, ProprietaTerreni: 1, ProrogaList: 1, QuotaPianoCampagna: 1, RevocaData: 1, RevocaN: 1, RinunciaData: 1, RinunciaN: 1, Screening: 1, SospensioneData: 1, SospensioneN: 1, SuperficieAutorizzata: 1, SuperficieScavo: 1, SvincoloFidejussioneData: 1, SvincoloFidejussioneN: 1, SvincoloFidejussioneNote: 1, TipoDisponibilita: 1, TipoRecuperoFinale: 1, TipoRecuperoMorfologico: 1, Via: 1, Volume104: 1, VolumeAutorizzato: 1 }, AutorizzazioneMateriale: { Id: 1, IdAutorizzazione: 1, IdMateriale: 1, IdMaterialeDescrizione: 1, PesoAutorizzato: 1, QuantitaAutorizzata: 1 }, Cava: { AreaProtetta: 1, CatastoProvinciale: 1, CoordinataX: 1, CoordinataY: 1, Frazione: 1, Id: 1, IdComune: 1, IdComuneNome: 1, Nome: 1, ProfonditaFalda: 1, Progressivo: 1, TipoColtivazione: 1, TipoDissesto: 1, TipoPosizione: 1, TipoStruttura: 1, VincoloAmbientale: 1 }, Comune: { Cap: 1, CodCatastale: 1, CodiceRegione: 1, EntCod: 1, Id: 1, Nome: 1, SiglaProvincia: 1, ZonaAlt: 1 }, Concessione: { ConcessioneMaterialeList: 1, DataAutorizzazione: 1, DataSistemazione: 1, DecadenzaData: 1, DecadenzaN: 1, DenunciaEsercizioData: 1, DenunciaEsercizioN: 1, Descrizione: 1, Id: 1, IdEsercente: 1, IdEsercenteRagSoc: 1, IdStruttura: 1, IdStrutturaNome: 1, NumeroAtto: 1, ParereAgenzia: 1, PendenzaScarpate: 1, ProrogaList: 1, QuotaPianoCampagna: 1, RevocaData: 1, RevocaN: 1, RinunciaData: 1, RinunciaN: 1, SospensioneData: 1, SospensioneN: 1, SuperficieAutorizzata: 1, SuperficieScavo: 1, TipoDisponibilita: 1, TipoRecuperoFinale: 1, TipoRecuperoMorfologico: 1, Via: 1 }, Deroga: { Data: 1, Id: 1, IdAutorizzazione: 1, IdAutorizzazioneAutorizzazione104Data: 1, IdAutorizzazioneAutorizzazione104N: 1, IdAutorizzazioneAutorizzazione104Note: 1, IdAutorizzazioneCollaudoData: 1, IdAutorizzazioneCollaudoN: 1, IdAutorizzazioneCollaudoNote: 1, IdAutorizzazioneConvenzioneData: 1, IdAutorizzazioneConvenzioneN: 1, IdAutorizzazioneDataAutorizzazione: 1, IdAutorizzazioneDataNotifica: 1, IdAutorizzazioneDataScadenza: 1, IdAutorizzazioneDataSistemazione: 1, IdAutorizzazioneDecadenzaData: 1, IdAutorizzazioneDecadenzaN: 1, IdAutorizzazioneDenunciaEsercizioData: 1, IdAutorizzazioneDenunciaEsercizioN: 1, IdAutorizzazioneIdEsercente: 1, IdAutorizzazioneIdPianoArea: 1, IdAutorizzazioneIdStruttura: 1, IdAutorizzazioneNoteSistemazione: 1, IdAutorizzazioneNumeroAtto: 1, IdAutorizzazioneNumeroAttoNotifica: 1, IdAutorizzazioneParereAgenzia: 1, IdAutorizzazioneParereMotivato: 1, IdAutorizzazionePendenzaScarpate: 1, IdAutorizzazionePesoAutorizzato: 1, IdAutorizzazioneProfonditaScavo: 1, IdAutorizzazioneProprietaTerreni: 1, IdAutorizzazioneQuotaPianoCampagna: 1, IdAutorizzazioneRevocaData: 1, IdAutorizzazioneRevocaN: 1, IdAutorizzazioneRinunciaData: 1, IdAutorizzazioneRinunciaN: 1, IdAutorizzazioneScreening: 1, IdAutorizzazioneSospensioneData: 1, IdAutorizzazioneSospensioneN: 1, IdAutorizzazioneSuperficieAutorizzata: 1, IdAutorizzazioneSuperficieScavo: 1, IdAutorizzazioneSvincoloFidejussioneData: 1, IdAutorizzazioneSvincoloFidejussioneN: 1, IdAutorizzazioneSvincoloFidejussioneNote: 1, IdAutorizzazioneTipoDisponibilita: 1, IdAutorizzazioneTipoRecuperoFinale: 1, IdAutorizzazioneTipoRecuperoMorfologico: 1, IdAutorizzazioneVia: 1, IdAutorizzazioneVolume104: 1, IdAutorizzazioneVolumeAutorizzato: 1, Note: 1, Protocollo: 1, VolumeDeroga: 1 }, Ente: { Id: 1, IdRegione: 1, IdRegioneNome: 1, Nome: 1, Sigla: 1 }, Esercente: { Cap: 1, CodCcia: 1, CodiceFiscale: 1, CodiceFiscaleCompilatore: 1, DatiFallimento: 1, EMail: 1, Frazione: 1, Id: 1, IdComune: 1, IdComuneNome: 1, Indirizzo: 1, LegaleRappresentante: 1, PartitaIva: 1, RagSoc: 1, Telefono: 1 }, Fabbisogno: { Fabbisogno: 1, Id: 1, IdMateriale: 1, IdMaterialeDescrizione: 1, IdPiano: 1, Potenziale: 1, Residuo: 1 }, Impianto: { CatastoProvinciale: 1, CoordinataX: 1, CoordinataY: 1, DataInstallazioneImpianto: 1, Frazione: 1, Id: 1, IdComune: 1, IdComuneNome: 1, Nome: 1, Progressivo: 1, TipoImpianto: 1, TipoStruttura: 1 }, Materiale: { Descrizione: 1, Id: 1, IdTipoMateriale: 1, IdTipoMaterialeDescrizione: 1, NomeRisorsaMineraleIstat: 1, PesoSpecificoRiferimento: 1, TariffaRiferimento: 1 }, Miniera: { AreaProtetta: 1, CatastoProvinciale: 1, CoordinataX: 1, CoordinataY: 1, Frazione: 1, Id: 1, IdComune: 1, IdComuneNome: 1, Nome: 1, ProfonditaFalda: 1, Progressivo: 1, TipoColtivazione: 1, TipoDissesto: 1, TipoPosizione: 1, TipoStruttura: 1, VincoloAmbientale: 1 }, Piano: { AttoList: 1, DataFine: 1, DataInizio: 1, Descrizione: 1, FabbisognoList: 1, Id: 1, IdEnte: 1, IdEnteNome: 1, Note: 1, PianoAreaList: 1, Progressivo: 1, Variante: 1 }, PianoArea: { Id: 1, IdArea: 1, IdAreaNome: 1, IdPiano: 1, PotenzialeList: 1, ProfMax: 1, Sup: 1, TipoStato: 1 }, Potenziale: { Id: 1, IdMateriale: 1, IdMaterialeDescrizione: 1, IdPianoArea: 1, Potenziale: 1, Residuo: 1 }, Prodotto: { Id: 1, IdMateriale: 1, IdMaterialeDescrizione: 1, IdMaterialeIdTipoMateriale: 1, IdMaterialeNomeRisorsaMineraleIstat: 1, IdMaterialePesoSpecificoRiferimento: 1, IdMaterialeTariffaRiferimento: 1, IdRendiconto: 1, IdRendicontoIdAutorizzazione: 1, NumeroMesiAttivita: 1, Oneri: 1, Peso: 1, PesoSpecifico: 1, Prezzo1: 1, Prezzo2: 1, Prezzo3: 1, PrimaLavorazione: 1, Quantita1: 1, Quantita2: 1, Quantita3: 1, QuantitaEstratta: 1, QuantitaLavorazione: 1, TipoCommercializzazione1: 1, TipoCommercializzazione2: 1, TipoCommercializzazione3: 1, TipoLavorazione1: 1, TipoLavorazione2: 1, TipoLavorazione3: 1, Um1: 1, Um2: 1, Um3: 1 }, Proroga: { Data: 1, Id: 1, IdAutorizzazione: 1, IdAutorizzazioneAutorizzazione104Data: 1, IdAutorizzazioneAutorizzazione104N: 1, IdAutorizzazioneAutorizzazione104Note: 1, IdAutorizzazioneCollaudoData: 1, IdAutorizzazioneCollaudoN: 1, IdAutorizzazioneCollaudoNote: 1, IdAutorizzazioneConvenzioneData: 1, IdAutorizzazioneConvenzioneN: 1, IdAutorizzazioneDataAutorizzazione: 1, IdAutorizzazioneDataNotifica: 1, IdAutorizzazioneDataScadenza: 1, IdAutorizzazioneDataSistemazione: 1, IdAutorizzazioneDecadenzaData: 1, IdAutorizzazioneDecadenzaN: 1, IdAutorizzazioneDenunciaEsercizioData: 1, IdAutorizzazioneDenunciaEsercizioN: 1, IdAutorizzazioneIdEsercente: 1, IdAutorizzazioneIdPianoArea: 1, IdAutorizzazioneIdStruttura: 1, IdAutorizzazioneNoteSistemazione: 1, IdAutorizzazioneNumeroAtto: 1, IdAutorizzazioneNumeroAttoNotifica: 1, IdAutorizzazioneParereAgenzia: 1, IdAutorizzazioneParereMotivato: 1, IdAutorizzazionePendenzaScarpate: 1, IdAutorizzazionePesoAutorizzato: 1, IdAutorizzazioneProfonditaScavo: 1, IdAutorizzazioneProprietaTerreni: 1, IdAutorizzazioneQuotaPianoCampagna: 1, IdAutorizzazioneRevocaData: 1, IdAutorizzazioneRevocaN: 1, IdAutorizzazioneRinunciaData: 1, IdAutorizzazioneRinunciaN: 1, IdAutorizzazioneScreening: 1, IdAutorizzazioneSospensioneData: 1, IdAutorizzazioneSospensioneN: 1, IdAutorizzazioneSuperficieAutorizzata: 1, IdAutorizzazioneSuperficieScavo: 1, IdAutorizzazioneSvincoloFidejussioneData: 1, IdAutorizzazioneSvincoloFidejussioneN: 1, IdAutorizzazioneSvincoloFidejussioneNote: 1, IdAutorizzazioneTipoDisponibilita: 1, IdAutorizzazioneTipoRecuperoFinale: 1, IdAutorizzazioneTipoRecuperoMorfologico: 1, IdAutorizzazioneVia: 1, IdAutorizzazioneVolume104: 1, IdAutorizzazioneVolumeAutorizzato: 1, Note: 1, NuovaDataSistemazione: 1, Protocollo: 1 }, Regione: { Id: 1, Nome: 1 }, Rendiconto: { Anno: 1, Autorizzazione: 1, Comune: 1, DescrizioneAltreFontiEnergia: 1, Detonatori: 1, DirettoreResponsabile: 1, DirittoProp: 1, Esplosivo: 1, FiloElicoidale: 1, Id: 1, IdAutorizzazione: 1, ImportoAltreFontiEnergia: 1, ImportoBenzina: 1, ImportoGasolio: 1, ImportoKw: 1, MezzoMeccanico: 1, MicceLentaCombustione: 1, NumAddetti: 1, NumAmministrativi: 1, NumOperai: 1, NumTecnici: 1, NumeroMesiAttivita: 1, OreLavorate: 1, ProdottoList: 1, QuantitaAltreFontiEnergia: 1, QuantitaBenzina: 1, QuantitaGasolio: 1, QuantitaKw: 1, ResponsabileSicurezza: 1, ScartoList: 1, Sorvegliante: 1, StruttDepMatInut: 1, UnitaMisuraAltreFontiEnergia: 1, VolAcquaEstrazione: 1, VolAcquaLavorazioni: 1 }, Rendiconto2: { Anno: 1, Autorizzazione: 1, Comune: 1, DescrizioneAltreFontiEnergia: 1, Detonatori: 1, DirettoreResponsabile: 1, DirittoProp: 1, Esplosivo: 1, FiloElicoidale: 1, Id: 1, IdAutorizzazione: 1, ImportoAltreFontiEnergia: 1, ImportoBenzina: 1, ImportoGasolio: 1, ImportoKw: 1, MezzoMeccanico: 1, MicceLentaCombustione: 1, NumAddetti: 1, NumAmministrativi: 1, NumOperai: 1, NumTecnici: 1, NumeroMesiAttivita: 1, OreLavorate: 1, ProdottoList: 1, QuantitaAltreFontiEnergia: 1, QuantitaBenzina: 1, QuantitaGasolio: 1, QuantitaKw: 1, ResponsabileSicurezza: 1, ScartoList: 1, Sorvegliante: 1, StruttDepMatInut: 1, UnitaMisuraAltreFontiEnergia: 1, VolAcquaEstrazione: 1, VolAcquaLavorazioni: 1 }, Rendiconto3: { Anno: 1, ApprovvigionamentoList: 1, DestinazioneTerritorialeList: 1, DestinazioneUsoList: 1, Id: 1, IdStruttura: 1, IdStrutturaNome: 1, LavoratoM3: 1, LavoratoQ: 1, MaterialeRiciclato: 1, MaterialeTradizionale: 1, MetodoLavorazione: 1, NumAmministrativi: 1, NumOperai: 1, NumTecnici: 1 }, RendicontoApprovvigionamento: { Id: 1, IdRendiconto: 1, IdStrutturaCava: 1, Note: 1, QtaApprov: 1, TipoApprovvigionamento: 1 }, RendicontoDestinazioneTerritoriale: { Id: 1, IdRendiconto: 1, Percentuale: 1, TipoDestinazioneTerritoriale: 1 }, RendicontoDestinazioneUso: { Id: 1, IdRendiconto: 1, Percentuale: 1, TipoDestinazioneUso: 1 }, Scarto: { DescrizioneAltro: 1, Id: 1, IdRendiconto: 1, Peso: 1, TipoScarto: 1, Volume: 1 }, TipoMateriale: { Descrizione: 1, Id: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = CaveSerene.Texts || (CaveSerene.Texts = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = CaveSerene.Authorization || (CaveSerene.Authorization = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = CaveSerene.Administration || (CaveSerene.Administration = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = CaveSerene.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = CaveSerene.LanguageList || (CaveSerene.LanguageList = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var CaveSerene;
(function (CaveSerene) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('CaveSerene');
        Serenity.EntityDialog.defaultLanguageList = CaveSerene.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = CaveSerene.ScriptInitialization || (CaveSerene.ScriptInitialization = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: false,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    CaveSerene.BasicProgressDialog = BasicProgressDialog;
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new CaveSerene.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = CaveSerene.DialogUtils || (CaveSerene.DialogUtils = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: false,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    CaveSerene.StaticTextBlock = StaticTextBlock;
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = CaveSerene.Common || (CaveSerene.Common = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AreaDialog = /** @class */ (function (_super) {
            __extends(AreaDialog, _super);
            function AreaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AreaForm(_this.idPrefix);
                return _this;
            }
            AreaDialog.prototype.getFormKey = function () { return Default.AreaForm.formKey; };
            AreaDialog.prototype.getIdProperty = function () { return Default.AreaRow.idProperty; };
            AreaDialog.prototype.getLocalTextPrefix = function () { return Default.AreaRow.localTextPrefix; };
            AreaDialog.prototype.getNameProperty = function () { return Default.AreaRow.nameProperty; };
            AreaDialog.prototype.getService = function () { return Default.AreaService.baseUrl; };
            AreaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AreaDialog);
            return AreaDialog;
        }(Serenity.EntityDialog));
        Default.AreaDialog = AreaDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AreaGrid = /** @class */ (function (_super) {
            __extends(AreaGrid, _super);
            function AreaGrid(container) {
                return _super.call(this, container) || this;
            }
            AreaGrid.prototype.getColumnsKey = function () { return 'Default.Area'; };
            AreaGrid.prototype.getDialogType = function () { return Default.AreaDialog; };
            AreaGrid.prototype.getIdProperty = function () { return Default.AreaRow.idProperty; };
            AreaGrid.prototype.getLocalTextPrefix = function () { return Default.AreaRow.localTextPrefix; };
            AreaGrid.prototype.getService = function () { return Default.AreaService.baseUrl; };
            AreaGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons[0].title = "Aggiungi Area Estrattiva";
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Area/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            AreaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AreaGrid);
            return AreaGrid;
        }(Serenity.EntityGrid));
        Default.AreaGrid = AreaGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AttoDialog = /** @class */ (function (_super) {
            __extends(AttoDialog, _super);
            function AttoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AttoForm(_this.idPrefix);
                return _this;
            }
            AttoDialog.prototype.getFormKey = function () { return Default.AttoForm.formKey; };
            AttoDialog.prototype.getIdProperty = function () { return Default.AttoRow.idProperty; };
            AttoDialog.prototype.getLocalTextPrefix = function () { return Default.AttoRow.localTextPrefix; };
            AttoDialog.prototype.getService = function () { return Default.AttoService.baseUrl; };
            AttoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AttoDialog);
            return AttoDialog;
        }(Serenity.EntityDialog));
        Default.AttoDialog = AttoDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AttoEditDialog = /** @class */ (function (_super) {
            __extends(AttoEditDialog, _super);
            function AttoEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.AttoForm(_this.idPrefix);
                return _this;
            }
            AttoEditDialog.prototype.getFormKey = function () { return Default.AttoForm.formKey; };
            AttoEditDialog.prototype.getNameProperty = function () { return Default.AttoRow.nameProperty; };
            AttoEditDialog.prototype.getLocalTextPrefix = function () { return Default.AttoRow.localTextPrefix; };
            AttoEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AttoEditDialog);
            return AttoEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.AttoEditDialog = AttoEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AttoEditor = /** @class */ (function (_super) {
            __extends(AttoEditor, _super);
            function AttoEditor(container) {
                return _super.call(this, container) || this;
            }
            AttoEditor.prototype.getColumnsKey = function () { return "Default.Atto"; };
            AttoEditor.prototype.getDialogType = function () { return Default.AttoEditDialog; };
            AttoEditor.prototype.getLocalTextPrefix = function () { return Default.AttoRow.localTextPrefix; };
            AttoEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            AttoEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.TipoAtto = Q.toId(row.TipoAtto);
                return true;
            };
            AttoEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AttoEditor);
            return AttoEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.AttoEditor = AttoEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AttoGrid = /** @class */ (function (_super) {
            __extends(AttoGrid, _super);
            function AttoGrid(container) {
                return _super.call(this, container) || this;
            }
            AttoGrid.prototype.getColumnsKey = function () { return 'Default.Atto'; };
            AttoGrid.prototype.getDialogType = function () { return Default.AttoDialog; };
            AttoGrid.prototype.getIdProperty = function () { return Default.AttoRow.idProperty; };
            AttoGrid.prototype.getLocalTextPrefix = function () { return Default.AttoRow.localTextPrefix; };
            AttoGrid.prototype.getService = function () { return Default.AttoService.baseUrl; };
            AttoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AttoGrid);
            return AttoGrid;
        }(Serenity.EntityGrid));
        Default.AttoGrid = AttoGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneDialog = /** @class */ (function (_super) {
            __extends(AutorizzazioneDialog, _super);
            function AutorizzazioneDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AutorizzazioneForm(_this.idPrefix);
                return _this;
            }
            AutorizzazioneDialog.prototype.getFormKey = function () { return Default.AutorizzazioneForm.formKey; };
            AutorizzazioneDialog.prototype.getIdProperty = function () { return Default.AutorizzazioneRow.idProperty; };
            AutorizzazioneDialog.prototype.getLocalTextPrefix = function () { return Default.AutorizzazioneRow.localTextPrefix; };
            AutorizzazioneDialog.prototype.getNameProperty = function () { return Default.AutorizzazioneRow.nameProperty; };
            AutorizzazioneDialog.prototype.getService = function () { return Default.AutorizzazioneService.baseUrl; };
            AutorizzazioneDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AutorizzazioneDialog);
            return AutorizzazioneDialog;
        }(Serenity.EntityDialog));
        Default.AutorizzazioneDialog = AutorizzazioneDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneGrid = /** @class */ (function (_super) {
            __extends(AutorizzazioneGrid, _super);
            function AutorizzazioneGrid(container) {
                return _super.call(this, container) || this;
            }
            AutorizzazioneGrid.prototype.getColumnsKey = function () { return 'Default.Autorizzazione'; };
            AutorizzazioneGrid.prototype.getDialogType = function () { return Default.AutorizzazioneDialog; };
            AutorizzazioneGrid.prototype.getIdProperty = function () { return Default.AutorizzazioneRow.idProperty; };
            AutorizzazioneGrid.prototype.getLocalTextPrefix = function () { return Default.AutorizzazioneRow.localTextPrefix; };
            AutorizzazioneGrid.prototype.getService = function () { return Default.AutorizzazioneService.baseUrl; };
            AutorizzazioneGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Autorizzazione/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            AutorizzazioneGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AutorizzazioneGrid);
            return AutorizzazioneGrid;
        }(Serenity.EntityGrid));
        Default.AutorizzazioneGrid = AutorizzazioneGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneMaterialeDialog = /** @class */ (function (_super) {
            __extends(AutorizzazioneMaterialeDialog, _super);
            function AutorizzazioneMaterialeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AutorizzazioneMaterialeForm(_this.idPrefix);
                return _this;
            }
            AutorizzazioneMaterialeDialog.prototype.getFormKey = function () { return Default.AutorizzazioneMaterialeForm.formKey; };
            AutorizzazioneMaterialeDialog.prototype.getIdProperty = function () { return Default.AutorizzazioneMaterialeRow.idProperty; };
            AutorizzazioneMaterialeDialog.prototype.getLocalTextPrefix = function () { return Default.AutorizzazioneMaterialeRow.localTextPrefix; };
            AutorizzazioneMaterialeDialog.prototype.getService = function () { return Default.AutorizzazioneMaterialeService.baseUrl; };
            AutorizzazioneMaterialeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AutorizzazioneMaterialeDialog);
            return AutorizzazioneMaterialeDialog;
        }(Serenity.EntityDialog));
        Default.AutorizzazioneMaterialeDialog = AutorizzazioneMaterialeDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneMaterialeEditDialog = /** @class */ (function (_super) {
            __extends(AutorizzazioneMaterialeEditDialog, _super);
            function AutorizzazioneMaterialeEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.AutorizzazioneMaterialeForm(_this.idPrefix);
                return _this;
            }
            AutorizzazioneMaterialeEditDialog.prototype.getFormKey = function () { return Default.AutorizzazioneMaterialeForm.formKey; };
            AutorizzazioneMaterialeEditDialog.prototype.getNameProperty = function () { return Default.AutorizzazioneMaterialeRow.nameProperty; };
            AutorizzazioneMaterialeEditDialog.prototype.getLocalTextPrefix = function () { return Default.AutorizzazioneMaterialeRow.localTextPrefix; };
            AutorizzazioneMaterialeEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AutorizzazioneMaterialeEditDialog);
            return AutorizzazioneMaterialeEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.AutorizzazioneMaterialeEditDialog = AutorizzazioneMaterialeEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneMaterialeEditor = /** @class */ (function (_super) {
            __extends(AutorizzazioneMaterialeEditor, _super);
            function AutorizzazioneMaterialeEditor(container) {
                return _super.call(this, container) || this;
            }
            AutorizzazioneMaterialeEditor.prototype.getColumnsKey = function () { return "Default.AutorizzazioneMateriale"; };
            AutorizzazioneMaterialeEditor.prototype.getDialogType = function () { return Default.AutorizzazioneMaterialeEditDialog; };
            AutorizzazioneMaterialeEditor.prototype.getLocalTextPrefix = function () { return Default.AutorizzazioneMaterialeRow.localTextPrefix; };
            AutorizzazioneMaterialeEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            AutorizzazioneMaterialeEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.IdMaterialeDescrizione = Default.MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;
                return true;
            };
            AutorizzazioneMaterialeEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AutorizzazioneMaterialeEditor);
            return AutorizzazioneMaterialeEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.AutorizzazioneMaterialeEditor = AutorizzazioneMaterialeEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var AutorizzazioneMaterialeGrid = /** @class */ (function (_super) {
            __extends(AutorizzazioneMaterialeGrid, _super);
            function AutorizzazioneMaterialeGrid(container) {
                return _super.call(this, container) || this;
            }
            AutorizzazioneMaterialeGrid.prototype.getColumnsKey = function () { return 'Default.AutorizzazioneMateriale'; };
            AutorizzazioneMaterialeGrid.prototype.getDialogType = function () { return Default.AutorizzazioneMaterialeDialog; };
            AutorizzazioneMaterialeGrid.prototype.getIdProperty = function () { return Default.AutorizzazioneMaterialeRow.idProperty; };
            AutorizzazioneMaterialeGrid.prototype.getLocalTextPrefix = function () { return Default.AutorizzazioneMaterialeRow.localTextPrefix; };
            AutorizzazioneMaterialeGrid.prototype.getService = function () { return Default.AutorizzazioneMaterialeService.baseUrl; };
            AutorizzazioneMaterialeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AutorizzazioneMaterialeGrid);
            return AutorizzazioneMaterialeGrid;
        }(Serenity.EntityGrid));
        Default.AutorizzazioneMaterialeGrid = AutorizzazioneMaterialeGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var CavaDialog = /** @class */ (function (_super) {
            __extends(CavaDialog, _super);
            function CavaDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Default.CavaForm(_this.idPrefix);
                _this.map = L.map('mapid');
                return _this;
                //$('<a class="inplace-button inplace-create"><b><\/b><\/a>')
                //    .insertAfter(this.form.CoordinataY.element)
                //    .click(() => this.map.invalidateSize());
            }
            CavaDialog.prototype.getFormKey = function () { return Default.CavaForm.formKey; };
            CavaDialog.prototype.getIdProperty = function () { return Default.CavaRow.idProperty; };
            CavaDialog.prototype.getLocalTextPrefix = function () { return Default.CavaRow.localTextPrefix; };
            CavaDialog.prototype.getNameProperty = function () { return Default.CavaRow.nameProperty; };
            CavaDialog.prototype.getService = function () { return Default.CavaService.baseUrl; };
            CavaDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                var x;
                var y;
                var nome;
                x = this.form.CoordinataX.value;
                y = this.form.CoordinataY.value;
                nome = this.form.Nome.value;
                if (nome === "" || x == null || y == null)
                    return;
                this.map.setView([x, y], 15);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                }).addTo(this.map);
                L.marker([x, y]).addTo(this.map)
                    .bindPopup("Cava " + nome)
                    .openPopup();
                setTimeout(function () { _this.map.invalidateSize(); }, 1000);
            };
            CavaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CavaDialog);
            return CavaDialog;
        }(Serenity.EntityDialog));
        Default.CavaDialog = CavaDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var CavaGrid = /** @class */ (function (_super) {
            __extends(CavaGrid, _super);
            function CavaGrid(container) {
                return _super.call(this, container) || this;
            }
            CavaGrid.prototype.getColumnsKey = function () { return 'Default.Cava'; };
            CavaGrid.prototype.getDialogType = function () { return Default.CavaDialog; };
            CavaGrid.prototype.getIdProperty = function () { return Default.CavaRow.idProperty; };
            CavaGrid.prototype.getLocalTextPrefix = function () { return Default.CavaRow.localTextPrefix; };
            CavaGrid.prototype.getService = function () { return Default.CavaService.baseUrl; };
            CavaGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Cava/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CavaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CavaGrid);
            return CavaGrid;
        }(Serenity.EntityGrid));
        Default.CavaGrid = CavaGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ComuneDialog = /** @class */ (function (_super) {
            __extends(ComuneDialog, _super);
            function ComuneDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ComuneForm(_this.idPrefix);
                return _this;
            }
            ComuneDialog.prototype.getFormKey = function () { return Default.ComuneForm.formKey; };
            ComuneDialog.prototype.getIdProperty = function () { return Default.ComuneRow.idProperty; };
            ComuneDialog.prototype.getLocalTextPrefix = function () { return Default.ComuneRow.localTextPrefix; };
            ComuneDialog.prototype.getNameProperty = function () { return Default.ComuneRow.nameProperty; };
            ComuneDialog.prototype.getService = function () { return Default.ComuneService.baseUrl; };
            ComuneDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ComuneDialog);
            return ComuneDialog;
        }(Serenity.EntityDialog));
        Default.ComuneDialog = ComuneDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ComuneGrid = /** @class */ (function (_super) {
            __extends(ComuneGrid, _super);
            function ComuneGrid(container) {
                return _super.call(this, container) || this;
            }
            ComuneGrid.prototype.getColumnsKey = function () { return 'Default.Comune'; };
            ComuneGrid.prototype.getDialogType = function () { return Default.ComuneDialog; };
            ComuneGrid.prototype.getIdProperty = function () { return Default.ComuneRow.idProperty; };
            ComuneGrid.prototype.getLocalTextPrefix = function () { return Default.ComuneRow.localTextPrefix; };
            ComuneGrid.prototype.getService = function () { return Default.ComuneService.baseUrl; };
            ComuneGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ComuneGrid);
            return ComuneGrid;
        }(Serenity.EntityGrid));
        Default.ComuneGrid = ComuneGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ConcessioneDialog = /** @class */ (function (_super) {
            __extends(ConcessioneDialog, _super);
            function ConcessioneDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ConcessioneForm(_this.idPrefix);
                return _this;
            }
            ConcessioneDialog.prototype.getFormKey = function () { return Default.ConcessioneForm.formKey; };
            ConcessioneDialog.prototype.getIdProperty = function () { return Default.ConcessioneRow.idProperty; };
            ConcessioneDialog.prototype.getLocalTextPrefix = function () { return Default.ConcessioneRow.localTextPrefix; };
            ConcessioneDialog.prototype.getNameProperty = function () { return Default.ConcessioneRow.nameProperty; };
            ConcessioneDialog.prototype.getService = function () { return Default.ConcessioneService.baseUrl; };
            ConcessioneDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ConcessioneDialog);
            return ConcessioneDialog;
        }(Serenity.EntityDialog));
        Default.ConcessioneDialog = ConcessioneDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ConcessioneGrid = /** @class */ (function (_super) {
            __extends(ConcessioneGrid, _super);
            function ConcessioneGrid(container) {
                return _super.call(this, container) || this;
            }
            ConcessioneGrid.prototype.getColumnsKey = function () { return 'Default.Concessione'; };
            ConcessioneGrid.prototype.getDialogType = function () { return Default.ConcessioneDialog; };
            ConcessioneGrid.prototype.getIdProperty = function () { return Default.ConcessioneRow.idProperty; };
            ConcessioneGrid.prototype.getLocalTextPrefix = function () { return Default.ConcessioneRow.localTextPrefix; };
            ConcessioneGrid.prototype.getService = function () { return Default.ConcessioneService.baseUrl; };
            ConcessioneGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Concessione/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ConcessioneGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConcessioneGrid);
            return ConcessioneGrid;
        }(Serenity.EntityGrid));
        Default.ConcessioneGrid = ConcessioneGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var DerogaDialog = /** @class */ (function (_super) {
            __extends(DerogaDialog, _super);
            function DerogaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DerogaForm(_this.idPrefix);
                return _this;
            }
            DerogaDialog.prototype.getFormKey = function () { return Default.DerogaForm.formKey; };
            DerogaDialog.prototype.getIdProperty = function () { return Default.DerogaRow.idProperty; };
            DerogaDialog.prototype.getLocalTextPrefix = function () { return Default.DerogaRow.localTextPrefix; };
            DerogaDialog.prototype.getNameProperty = function () { return Default.DerogaRow.nameProperty; };
            DerogaDialog.prototype.getService = function () { return Default.DerogaService.baseUrl; };
            DerogaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DerogaDialog);
            return DerogaDialog;
        }(Serenity.EntityDialog));
        Default.DerogaDialog = DerogaDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var DerogaEditDialog = /** @class */ (function (_super) {
            __extends(DerogaEditDialog, _super);
            function DerogaEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.DerogaForm(_this.idPrefix);
                return _this;
            }
            DerogaEditDialog.prototype.getFormKey = function () { return Default.DerogaForm.formKey; };
            DerogaEditDialog.prototype.getNameProperty = function () { return Default.DerogaRow.nameProperty; };
            DerogaEditDialog.prototype.getLocalTextPrefix = function () { return Default.DerogaRow.localTextPrefix; };
            DerogaEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DerogaEditDialog);
            return DerogaEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.DerogaEditDialog = DerogaEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var DerogaEditor = /** @class */ (function (_super) {
            __extends(DerogaEditor, _super);
            function DerogaEditor(container) {
                return _super.call(this, container) || this;
            }
            DerogaEditor.prototype.getColumnsKey = function () { return "Default.Deroga"; };
            DerogaEditor.prototype.getDialogType = function () { return Default.DerogaEditDialog; };
            DerogaEditor.prototype.getLocalTextPrefix = function () { return Default.DerogaRow.localTextPrefix; };
            DerogaEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            DerogaEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                //row.IdMaterialeDescrizione = MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;
                return true;
            };
            DerogaEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], DerogaEditor);
            return DerogaEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.DerogaEditor = DerogaEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var DerogaGrid = /** @class */ (function (_super) {
            __extends(DerogaGrid, _super);
            function DerogaGrid(container) {
                return _super.call(this, container) || this;
            }
            DerogaGrid.prototype.getColumnsKey = function () { return 'Default.Deroga'; };
            DerogaGrid.prototype.getDialogType = function () { return Default.DerogaDialog; };
            DerogaGrid.prototype.getIdProperty = function () { return Default.DerogaRow.idProperty; };
            DerogaGrid.prototype.getLocalTextPrefix = function () { return Default.DerogaRow.localTextPrefix; };
            DerogaGrid.prototype.getService = function () { return Default.DerogaService.baseUrl; };
            DerogaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DerogaGrid);
            return DerogaGrid;
        }(Serenity.EntityGrid));
        Default.DerogaGrid = DerogaGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var EnteDialog = /** @class */ (function (_super) {
            __extends(EnteDialog, _super);
            function EnteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.EnteForm(_this.idPrefix);
                return _this;
            }
            EnteDialog.prototype.getFormKey = function () { return Default.EnteForm.formKey; };
            EnteDialog.prototype.getIdProperty = function () { return Default.EnteRow.idProperty; };
            EnteDialog.prototype.getLocalTextPrefix = function () { return Default.EnteRow.localTextPrefix; };
            EnteDialog.prototype.getNameProperty = function () { return Default.EnteRow.nameProperty; };
            EnteDialog.prototype.getService = function () { return Default.EnteService.baseUrl; };
            EnteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EnteDialog);
            return EnteDialog;
        }(Serenity.EntityDialog));
        Default.EnteDialog = EnteDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var EnteGrid = /** @class */ (function (_super) {
            __extends(EnteGrid, _super);
            function EnteGrid(container) {
                return _super.call(this, container) || this;
            }
            EnteGrid.prototype.getColumnsKey = function () { return 'Default.Ente'; };
            EnteGrid.prototype.getDialogType = function () { return Default.EnteDialog; };
            EnteGrid.prototype.getIdProperty = function () { return Default.EnteRow.idProperty; };
            EnteGrid.prototype.getLocalTextPrefix = function () { return Default.EnteRow.localTextPrefix; };
            EnteGrid.prototype.getService = function () { return Default.EnteService.baseUrl; };
            EnteGrid.prototype.getDefaultSortBy = function () {
                return ["Nome" /* Nome */];
            };
            EnteGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Ente/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            EnteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EnteGrid);
            return EnteGrid;
        }(Serenity.EntityGrid));
        Default.EnteGrid = EnteGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var EsercenteDialog = /** @class */ (function (_super) {
            __extends(EsercenteDialog, _super);
            function EsercenteDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.EsercenteForm(_this.idPrefix);
                return _this;
            }
            EsercenteDialog.prototype.getFormKey = function () { return Default.EsercenteForm.formKey; };
            EsercenteDialog.prototype.getIdProperty = function () { return Default.EsercenteRow.idProperty; };
            EsercenteDialog.prototype.getLocalTextPrefix = function () { return Default.EsercenteRow.localTextPrefix; };
            EsercenteDialog.prototype.getNameProperty = function () { return Default.EsercenteRow.nameProperty; };
            EsercenteDialog.prototype.getService = function () { return Default.EsercenteService.baseUrl; };
            EsercenteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EsercenteDialog);
            return EsercenteDialog;
        }(Serenity.EntityDialog));
        Default.EsercenteDialog = EsercenteDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var EsercenteGrid = /** @class */ (function (_super) {
            __extends(EsercenteGrid, _super);
            function EsercenteGrid(container) {
                return _super.call(this, container) || this;
            }
            EsercenteGrid.prototype.getColumnsKey = function () { return 'Default.Esercente'; };
            EsercenteGrid.prototype.getDialogType = function () { return Default.EsercenteDialog; };
            EsercenteGrid.prototype.getIdProperty = function () { return Default.EsercenteRow.idProperty; };
            EsercenteGrid.prototype.getLocalTextPrefix = function () { return Default.EsercenteRow.localTextPrefix; };
            EsercenteGrid.prototype.getService = function () { return Default.EsercenteService.baseUrl; };
            EsercenteGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Esercente/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            EsercenteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EsercenteGrid);
            return EsercenteGrid;
        }(Serenity.EntityGrid));
        Default.EsercenteGrid = EsercenteGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var FabbisognoDialog = /** @class */ (function (_super) {
            __extends(FabbisognoDialog, _super);
            function FabbisognoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.FabbisognoForm(_this.idPrefix);
                return _this;
            }
            FabbisognoDialog.prototype.getFormKey = function () { return Default.FabbisognoForm.formKey; };
            FabbisognoDialog.prototype.getIdProperty = function () { return Default.FabbisognoRow.idProperty; };
            FabbisognoDialog.prototype.getLocalTextPrefix = function () { return Default.FabbisognoRow.localTextPrefix; };
            FabbisognoDialog.prototype.getService = function () { return Default.FabbisognoService.baseUrl; };
            FabbisognoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FabbisognoDialog);
            return FabbisognoDialog;
        }(Serenity.EntityDialog));
        Default.FabbisognoDialog = FabbisognoDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var FabbisognoEditDialog = /** @class */ (function (_super) {
            __extends(FabbisognoEditDialog, _super);
            function FabbisognoEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.FabbisognoForm(_this.idPrefix);
                return _this;
            }
            FabbisognoEditDialog.prototype.getFormKey = function () { return Default.FabbisognoForm.formKey; };
            FabbisognoEditDialog.prototype.getNameProperty = function () { return Default.FabbisognoRow.nameProperty; };
            FabbisognoEditDialog.prototype.getLocalTextPrefix = function () { return Default.FabbisognoRow.localTextPrefix; };
            FabbisognoEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FabbisognoEditDialog);
            return FabbisognoEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.FabbisognoEditDialog = FabbisognoEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var FabbisognoEditor = /** @class */ (function (_super) {
            __extends(FabbisognoEditor, _super);
            function FabbisognoEditor(container) {
                return _super.call(this, container) || this;
            }
            FabbisognoEditor.prototype.getColumnsKey = function () { return "Default.Fabbisogno"; };
            FabbisognoEditor.prototype.getDialogType = function () { return Default.FabbisognoEditDialog; };
            FabbisognoEditor.prototype.getLocalTextPrefix = function () { return Default.FabbisognoRow.localTextPrefix; };
            FabbisognoEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            FabbisognoEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.IdMaterialeDescrizione = Default.MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;
                return true;
            };
            FabbisognoEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FabbisognoEditor);
            return FabbisognoEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.FabbisognoEditor = FabbisognoEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var FabbisognoGrid = /** @class */ (function (_super) {
            __extends(FabbisognoGrid, _super);
            function FabbisognoGrid(container) {
                return _super.call(this, container) || this;
            }
            FabbisognoGrid.prototype.getColumnsKey = function () { return 'Default.Fabbisogno'; };
            FabbisognoGrid.prototype.getDialogType = function () { return Default.FabbisognoDialog; };
            FabbisognoGrid.prototype.getIdProperty = function () { return Default.FabbisognoRow.idProperty; };
            FabbisognoGrid.prototype.getLocalTextPrefix = function () { return Default.FabbisognoRow.localTextPrefix; };
            FabbisognoGrid.prototype.getService = function () { return Default.FabbisognoService.baseUrl; };
            FabbisognoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FabbisognoGrid);
            return FabbisognoGrid;
        }(Serenity.EntityGrid));
        Default.FabbisognoGrid = FabbisognoGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ImpiantoDialog = /** @class */ (function (_super) {
            __extends(ImpiantoDialog, _super);
            function ImpiantoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ImpiantoForm(_this.idPrefix);
                return _this;
            }
            ImpiantoDialog.prototype.getFormKey = function () { return Default.ImpiantoForm.formKey; };
            ImpiantoDialog.prototype.getIdProperty = function () { return Default.ImpiantoRow.idProperty; };
            ImpiantoDialog.prototype.getLocalTextPrefix = function () { return Default.ImpiantoRow.localTextPrefix; };
            ImpiantoDialog.prototype.getNameProperty = function () { return Default.ImpiantoRow.nameProperty; };
            ImpiantoDialog.prototype.getService = function () { return Default.ImpiantoService.baseUrl; };
            ImpiantoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImpiantoDialog);
            return ImpiantoDialog;
        }(Serenity.EntityDialog));
        Default.ImpiantoDialog = ImpiantoDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ImpiantoGrid = /** @class */ (function (_super) {
            __extends(ImpiantoGrid, _super);
            function ImpiantoGrid(container) {
                return _super.call(this, container) || this;
            }
            ImpiantoGrid.prototype.getColumnsKey = function () { return 'Default.Impianto'; };
            ImpiantoGrid.prototype.getDialogType = function () { return Default.ImpiantoDialog; };
            ImpiantoGrid.prototype.getIdProperty = function () { return Default.ImpiantoRow.idProperty; };
            ImpiantoGrid.prototype.getLocalTextPrefix = function () { return Default.ImpiantoRow.localTextPrefix; };
            ImpiantoGrid.prototype.getService = function () { return Default.ImpiantoService.baseUrl; };
            ImpiantoGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Impianto/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ImpiantoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImpiantoGrid);
            return ImpiantoGrid;
        }(Serenity.EntityGrid));
        Default.ImpiantoGrid = ImpiantoGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var MaterialeDialog = /** @class */ (function (_super) {
            __extends(MaterialeDialog, _super);
            function MaterialeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.MaterialeForm(_this.idPrefix);
                return _this;
            }
            MaterialeDialog.prototype.getFormKey = function () { return Default.MaterialeForm.formKey; };
            MaterialeDialog.prototype.getIdProperty = function () { return Default.MaterialeRow.idProperty; };
            MaterialeDialog.prototype.getLocalTextPrefix = function () { return Default.MaterialeRow.localTextPrefix; };
            MaterialeDialog.prototype.getNameProperty = function () { return Default.MaterialeRow.nameProperty; };
            MaterialeDialog.prototype.getService = function () { return Default.MaterialeService.baseUrl; };
            MaterialeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaterialeDialog);
            return MaterialeDialog;
        }(Serenity.EntityDialog));
        Default.MaterialeDialog = MaterialeDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var MaterialeGrid = /** @class */ (function (_super) {
            __extends(MaterialeGrid, _super);
            function MaterialeGrid(container) {
                return _super.call(this, container) || this;
            }
            MaterialeGrid.prototype.getColumnsKey = function () { return 'Default.Materiale'; };
            MaterialeGrid.prototype.getDialogType = function () { return Default.MaterialeDialog; };
            MaterialeGrid.prototype.getIdProperty = function () { return Default.MaterialeRow.idProperty; };
            MaterialeGrid.prototype.getLocalTextPrefix = function () { return Default.MaterialeRow.localTextPrefix; };
            MaterialeGrid.prototype.getService = function () { return Default.MaterialeService.baseUrl; };
            MaterialeGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                //this.addQuickFilter({
                //    field: MaterialeRow.Fields.NomeRisorsaMineraleIstat
                //    type: Serenity.EnumEditor,
                //    options: {
                //        enumType: Modules.Default.Area.TipoISTAT,
                //    }
                //});
                //si può fare anche così, ma è più facile LookupEditor e QuickFilter nelle Columns
                //this.addQuickFilter({
                //    field: MaterialeRow.Fields.IdTipoMateriale,
                //    type: Serenity.LookupEditor,
                //    options: {
                //        lookupKey: "Default.TipoMateriale"
                //    }
                //});
            };
            MaterialeGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Materiale/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            MaterialeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaterialeGrid);
            return MaterialeGrid;
        }(Serenity.EntityGrid));
        Default.MaterialeGrid = MaterialeGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var MinieraDialog = /** @class */ (function (_super) {
            __extends(MinieraDialog, _super);
            function MinieraDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.MinieraForm(_this.idPrefix);
                return _this;
            }
            MinieraDialog.prototype.getFormKey = function () { return Default.MinieraForm.formKey; };
            MinieraDialog.prototype.getIdProperty = function () { return Default.MinieraRow.idProperty; };
            MinieraDialog.prototype.getLocalTextPrefix = function () { return Default.MinieraRow.localTextPrefix; };
            MinieraDialog.prototype.getNameProperty = function () { return Default.MinieraRow.nameProperty; };
            MinieraDialog.prototype.getService = function () { return Default.MinieraService.baseUrl; };
            MinieraDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MinieraDialog);
            return MinieraDialog;
        }(Serenity.EntityDialog));
        Default.MinieraDialog = MinieraDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var MinieraGrid = /** @class */ (function (_super) {
            __extends(MinieraGrid, _super);
            function MinieraGrid(container) {
                return _super.call(this, container) || this;
            }
            MinieraGrid.prototype.getColumnsKey = function () { return 'Default.Miniera'; };
            MinieraGrid.prototype.getDialogType = function () { return Default.MinieraDialog; };
            MinieraGrid.prototype.getIdProperty = function () { return Default.MinieraRow.idProperty; };
            MinieraGrid.prototype.getLocalTextPrefix = function () { return Default.MinieraRow.localTextPrefix; };
            MinieraGrid.prototype.getService = function () { return Default.MinieraService.baseUrl; };
            MinieraGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Miniera/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            MinieraGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MinieraGrid);
            return MinieraGrid;
        }(Serenity.EntityGrid));
        Default.MinieraGrid = MinieraGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoDialog = /** @class */ (function (_super) {
            __extends(PianoDialog, _super);
            function PianoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PianoForm(_this.idPrefix);
                return _this;
            }
            PianoDialog.prototype.getFormKey = function () { return Default.PianoForm.formKey; };
            PianoDialog.prototype.getIdProperty = function () { return Default.PianoRow.idProperty; };
            PianoDialog.prototype.getLocalTextPrefix = function () { return Default.PianoRow.localTextPrefix; };
            PianoDialog.prototype.getNameProperty = function () { return Default.PianoRow.nameProperty; };
            PianoDialog.prototype.getService = function () { return Default.PianoService.baseUrl; };
            PianoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PianoDialog);
            return PianoDialog;
        }(Serenity.EntityDialog));
        Default.PianoDialog = PianoDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoGrid = /** @class */ (function (_super) {
            __extends(PianoGrid, _super);
            function PianoGrid(container) {
                return _super.call(this, container) || this;
            }
            PianoGrid.prototype.getColumnsKey = function () { return 'Default.Piano'; };
            PianoGrid.prototype.getDialogType = function () { return Default.PianoDialog; };
            PianoGrid.prototype.getIdProperty = function () { return Default.PianoRow.idProperty; };
            PianoGrid.prototype.getLocalTextPrefix = function () { return Default.PianoRow.localTextPrefix; };
            PianoGrid.prototype.getService = function () { return Default.PianoService.baseUrl; };
            PianoGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Piano/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            PianoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PianoGrid);
            return PianoGrid;
        }(Serenity.EntityGrid));
        Default.PianoGrid = PianoGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoAreaDialog = /** @class */ (function (_super) {
            __extends(PianoAreaDialog, _super);
            function PianoAreaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PianoAreaForm(_this.idPrefix);
                return _this;
            }
            PianoAreaDialog.prototype.getFormKey = function () { return Default.PianoAreaForm.formKey; };
            PianoAreaDialog.prototype.getIdProperty = function () { return Default.PianoAreaRow.idProperty; };
            PianoAreaDialog.prototype.getLocalTextPrefix = function () { return Default.PianoAreaRow.localTextPrefix; };
            PianoAreaDialog.prototype.getNameProperty = function () { return Default.PianoAreaRow.nameProperty; };
            PianoAreaDialog.prototype.getService = function () { return Default.PianoAreaService.baseUrl; };
            PianoAreaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PianoAreaDialog);
            return PianoAreaDialog;
        }(Serenity.EntityDialog));
        Default.PianoAreaDialog = PianoAreaDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoAreaEditDialog = /** @class */ (function (_super) {
            __extends(PianoAreaEditDialog, _super);
            function PianoAreaEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.PianoAreaForm(_this.idPrefix);
                return _this;
            }
            PianoAreaEditDialog.prototype.getFormKey = function () { return Default.PianoAreaForm.formKey; };
            PianoAreaEditDialog.prototype.getNameProperty = function () { return Default.PianoAreaRow.nameProperty; };
            PianoAreaEditDialog.prototype.getLocalTextPrefix = function () { return Default.PianoAreaRow.localTextPrefix; };
            PianoAreaEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PianoAreaEditDialog);
            return PianoAreaEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.PianoAreaEditDialog = PianoAreaEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoAreaEditor = /** @class */ (function (_super) {
            __extends(PianoAreaEditor, _super);
            function PianoAreaEditor(container) {
                return _super.call(this, container) || this;
            }
            PianoAreaEditor.prototype.getColumnsKey = function () { return "Default.PianoArea"; };
            PianoAreaEditor.prototype.getDialogType = function () { return Default.PianoAreaEditDialog; };
            PianoAreaEditor.prototype.getLocalTextPrefix = function () { return Default.PianoAreaRow.localTextPrefix; };
            PianoAreaEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            PianoAreaEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.IdAreaNome = Default.AreaRow.getLookup().itemById[row.IdArea].Nome;
                return true;
            };
            PianoAreaEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PianoAreaEditor);
            return PianoAreaEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.PianoAreaEditor = PianoAreaEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PianoAreaGrid = /** @class */ (function (_super) {
            __extends(PianoAreaGrid, _super);
            function PianoAreaGrid(container) {
                return _super.call(this, container) || this;
            }
            PianoAreaGrid.prototype.getColumnsKey = function () { return 'Default.PianoArea'; };
            PianoAreaGrid.prototype.getDialogType = function () { return Default.PianoAreaDialog; };
            PianoAreaGrid.prototype.getIdProperty = function () { return Default.PianoAreaRow.idProperty; };
            PianoAreaGrid.prototype.getLocalTextPrefix = function () { return Default.PianoAreaRow.localTextPrefix; };
            PianoAreaGrid.prototype.getService = function () { return Default.PianoAreaService.baseUrl; };
            PianoAreaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PianoAreaGrid);
            return PianoAreaGrid;
        }(Serenity.EntityGrid));
        Default.PianoAreaGrid = PianoAreaGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PotenzialeDialog = /** @class */ (function (_super) {
            __extends(PotenzialeDialog, _super);
            function PotenzialeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PotenzialeForm(_this.idPrefix);
                return _this;
            }
            PotenzialeDialog.prototype.getFormKey = function () { return Default.PotenzialeForm.formKey; };
            PotenzialeDialog.prototype.getIdProperty = function () { return Default.PotenzialeRow.idProperty; };
            PotenzialeDialog.prototype.getLocalTextPrefix = function () { return Default.PotenzialeRow.localTextPrefix; };
            PotenzialeDialog.prototype.getService = function () { return Default.PotenzialeService.baseUrl; };
            PotenzialeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PotenzialeDialog);
            return PotenzialeDialog;
        }(Serenity.EntityDialog));
        Default.PotenzialeDialog = PotenzialeDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PotenzialeEditDialog = /** @class */ (function (_super) {
            __extends(PotenzialeEditDialog, _super);
            function PotenzialeEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.PotenzialeForm(_this.idPrefix);
                return _this;
            }
            PotenzialeEditDialog.prototype.getFormKey = function () { return Default.PotenzialeForm.formKey; };
            PotenzialeEditDialog.prototype.getNameProperty = function () { return Default.PotenzialeRow.nameProperty; };
            PotenzialeEditDialog.prototype.getLocalTextPrefix = function () { return Default.PotenzialeRow.localTextPrefix; };
            PotenzialeEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PotenzialeEditDialog);
            return PotenzialeEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.PotenzialeEditDialog = PotenzialeEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PotenzialeEditor = /** @class */ (function (_super) {
            __extends(PotenzialeEditor, _super);
            function PotenzialeEditor(container) {
                return _super.call(this, container) || this;
            }
            PotenzialeEditor.prototype.getColumnsKey = function () { return "Default.Potenziale"; };
            PotenzialeEditor.prototype.getDialogType = function () { return Default.PotenzialeEditDialog; };
            PotenzialeEditor.prototype.getLocalTextPrefix = function () { return Default.PotenzialeRow.localTextPrefix; };
            PotenzialeEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            PotenzialeEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.IdMaterialeDescrizione = Default.MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;
                return true;
            };
            PotenzialeEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PotenzialeEditor);
            return PotenzialeEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.PotenzialeEditor = PotenzialeEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var PotenzialeGrid = /** @class */ (function (_super) {
            __extends(PotenzialeGrid, _super);
            function PotenzialeGrid(container) {
                return _super.call(this, container) || this;
            }
            PotenzialeGrid.prototype.getColumnsKey = function () { return 'Default.Potenziale'; };
            PotenzialeGrid.prototype.getDialogType = function () { return Default.PotenzialeDialog; };
            PotenzialeGrid.prototype.getIdProperty = function () { return Default.PotenzialeRow.idProperty; };
            PotenzialeGrid.prototype.getLocalTextPrefix = function () { return Default.PotenzialeRow.localTextPrefix; };
            PotenzialeGrid.prototype.getService = function () { return Default.PotenzialeService.baseUrl; };
            PotenzialeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PotenzialeGrid);
            return PotenzialeGrid;
        }(Serenity.EntityGrid));
        Default.PotenzialeGrid = PotenzialeGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProdottoDialog = /** @class */ (function (_super) {
            __extends(ProdottoDialog, _super);
            function ProdottoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ProdottoForm(_this.idPrefix);
                return _this;
            }
            ProdottoDialog.prototype.getFormKey = function () { return Default.ProdottoForm.formKey; };
            ProdottoDialog.prototype.getIdProperty = function () { return Default.ProdottoRow.idProperty; };
            ProdottoDialog.prototype.getLocalTextPrefix = function () { return Default.ProdottoRow.localTextPrefix; };
            ProdottoDialog.prototype.getNameProperty = function () { return Default.ProdottoRow.nameProperty; };
            ProdottoDialog.prototype.getService = function () { return Default.ProdottoService.baseUrl; };
            ProdottoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProdottoDialog);
            return ProdottoDialog;
        }(Serenity.EntityDialog));
        Default.ProdottoDialog = ProdottoDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProdottoEditDialog = /** @class */ (function (_super) {
            __extends(ProdottoEditDialog, _super);
            function ProdottoEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.ProdottoForm(_this.idPrefix);
                return _this;
            }
            ProdottoEditDialog.prototype.getFormKey = function () { return Default.ProdottoForm.formKey; };
            ProdottoEditDialog.prototype.getNameProperty = function () { return Default.ProdottoRow.nameProperty; };
            ProdottoEditDialog.prototype.getLocalTextPrefix = function () { return Default.ProdottoRow.localTextPrefix; };
            ProdottoEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProdottoEditDialog);
            return ProdottoEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.ProdottoEditDialog = ProdottoEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProdottoEditor = /** @class */ (function (_super) {
            __extends(ProdottoEditor, _super);
            function ProdottoEditor(container) {
                return _super.call(this, container) || this;
            }
            ProdottoEditor.prototype.getColumnsKey = function () { return "Default.Prodotto"; };
            ProdottoEditor.prototype.getDialogType = function () { return Default.ProdottoEditDialog; };
            ProdottoEditor.prototype.getLocalTextPrefix = function () { return Default.ProdottoRow.localTextPrefix; };
            ProdottoEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            ProdottoEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.IdMaterialeDescrizione = Default.MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;
                return true;
            };
            ProdottoEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProdottoEditor);
            return ProdottoEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.ProdottoEditor = ProdottoEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProdottoGrid = /** @class */ (function (_super) {
            __extends(ProdottoGrid, _super);
            function ProdottoGrid(container) {
                return _super.call(this, container) || this;
            }
            ProdottoGrid.prototype.getColumnsKey = function () { return 'Default.Prodotto'; };
            ProdottoGrid.prototype.getDialogType = function () { return Default.ProdottoDialog; };
            ProdottoGrid.prototype.getIdProperty = function () { return Default.ProdottoRow.idProperty; };
            ProdottoGrid.prototype.getLocalTextPrefix = function () { return Default.ProdottoRow.localTextPrefix; };
            ProdottoGrid.prototype.getService = function () { return Default.ProdottoService.baseUrl; };
            ProdottoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProdottoGrid);
            return ProdottoGrid;
        }(Serenity.EntityGrid));
        Default.ProdottoGrid = ProdottoGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProrogaDialog = /** @class */ (function (_super) {
            __extends(ProrogaDialog, _super);
            function ProrogaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ProrogaForm(_this.idPrefix);
                return _this;
            }
            ProrogaDialog.prototype.getFormKey = function () { return Default.ProrogaForm.formKey; };
            ProrogaDialog.prototype.getIdProperty = function () { return Default.ProrogaRow.idProperty; };
            ProrogaDialog.prototype.getLocalTextPrefix = function () { return Default.ProrogaRow.localTextPrefix; };
            ProrogaDialog.prototype.getNameProperty = function () { return Default.ProrogaRow.nameProperty; };
            ProrogaDialog.prototype.getService = function () { return Default.ProrogaService.baseUrl; };
            ProrogaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProrogaDialog);
            return ProrogaDialog;
        }(Serenity.EntityDialog));
        Default.ProrogaDialog = ProrogaDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProrogaEditDialog = /** @class */ (function (_super) {
            __extends(ProrogaEditDialog, _super);
            function ProrogaEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.ProrogaForm(_this.idPrefix);
                return _this;
            }
            ProrogaEditDialog.prototype.getFormKey = function () { return Default.ProrogaForm.formKey; };
            ProrogaEditDialog.prototype.getNameProperty = function () { return Default.ProrogaRow.nameProperty; };
            ProrogaEditDialog.prototype.getLocalTextPrefix = function () { return Default.ProrogaRow.localTextPrefix; };
            ProrogaEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProrogaEditDialog);
            return ProrogaEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.ProrogaEditDialog = ProrogaEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProrogaEditor = /** @class */ (function (_super) {
            __extends(ProrogaEditor, _super);
            function ProrogaEditor(container) {
                return _super.call(this, container) || this;
            }
            ProrogaEditor.prototype.getColumnsKey = function () { return "Default.Proroga"; };
            ProrogaEditor.prototype.getDialogType = function () { return Default.ProrogaEditDialog; };
            ProrogaEditor.prototype.getLocalTextPrefix = function () { return Default.ProrogaRow.localTextPrefix; };
            ProrogaEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            ProrogaEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                //row.IdMaterialeDescrizione = MaterialeRow.getLookup().itemById[row.IdMateriale].Descrizione;
                return true;
            };
            ProrogaEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProrogaEditor);
            return ProrogaEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.ProrogaEditor = ProrogaEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ProrogaGrid = /** @class */ (function (_super) {
            __extends(ProrogaGrid, _super);
            function ProrogaGrid(container) {
                return _super.call(this, container) || this;
            }
            ProrogaGrid.prototype.getColumnsKey = function () { return 'Default.Proroga'; };
            ProrogaGrid.prototype.getDialogType = function () { return Default.ProrogaDialog; };
            ProrogaGrid.prototype.getIdProperty = function () { return Default.ProrogaRow.idProperty; };
            ProrogaGrid.prototype.getLocalTextPrefix = function () { return Default.ProrogaRow.localTextPrefix; };
            ProrogaGrid.prototype.getService = function () { return Default.ProrogaService.baseUrl; };
            ProrogaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProrogaGrid);
            return ProrogaGrid;
        }(Serenity.EntityGrid));
        Default.ProrogaGrid = ProrogaGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RegioneDialog = /** @class */ (function (_super) {
            __extends(RegioneDialog, _super);
            function RegioneDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RegioneForm(_this.idPrefix);
                return _this;
            }
            RegioneDialog.prototype.getFormKey = function () { return Default.RegioneForm.formKey; };
            RegioneDialog.prototype.getIdProperty = function () { return Default.RegioneRow.idProperty; };
            RegioneDialog.prototype.getLocalTextPrefix = function () { return Default.RegioneRow.localTextPrefix; };
            RegioneDialog.prototype.getNameProperty = function () { return Default.RegioneRow.nameProperty; };
            RegioneDialog.prototype.getService = function () { return Default.RegioneService.baseUrl; };
            RegioneDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegioneDialog);
            return RegioneDialog;
        }(Serenity.EntityDialog));
        Default.RegioneDialog = RegioneDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RegioneGrid = /** @class */ (function (_super) {
            __extends(RegioneGrid, _super);
            function RegioneGrid(container) {
                return _super.call(this, container) || this;
            }
            RegioneGrid.prototype.getColumnsKey = function () { return 'Default.Regione'; };
            RegioneGrid.prototype.getDialogType = function () { return Default.RegioneDialog; };
            RegioneGrid.prototype.getIdProperty = function () { return Default.RegioneRow.idProperty; };
            RegioneGrid.prototype.getLocalTextPrefix = function () { return Default.RegioneRow.localTextPrefix; };
            RegioneGrid.prototype.getService = function () { return Default.RegioneService.baseUrl; };
            RegioneGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegioneGrid);
            return RegioneGrid;
        }(Serenity.EntityGrid));
        Default.RegioneGrid = RegioneGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDialog = /** @class */ (function (_super) {
            __extends(RendicontoDialog, _super);
            function RendicontoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RendicontoForm(_this.idPrefix);
                return _this;
            }
            RendicontoDialog.prototype.getFormKey = function () { return Default.RendicontoForm.formKey; };
            RendicontoDialog.prototype.getIdProperty = function () { return Default.RendicontoRow.idProperty; };
            RendicontoDialog.prototype.getLocalTextPrefix = function () { return Default.RendicontoRow.localTextPrefix; };
            RendicontoDialog.prototype.getNameProperty = function () { return Default.RendicontoRow.nameProperty; };
            RendicontoDialog.prototype.getService = function () { return Default.RendicontoService.baseUrl; };
            RendicontoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RendicontoDialog);
            return RendicontoDialog;
        }(Serenity.EntityDialog));
        Default.RendicontoDialog = RendicontoDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoGrid = /** @class */ (function (_super) {
            __extends(RendicontoGrid, _super);
            function RendicontoGrid(container) {
                return _super.call(this, container) || this;
            }
            RendicontoGrid.prototype.getColumnsKey = function () { return 'Default.Rendiconto'; };
            RendicontoGrid.prototype.getDialogType = function () { return Default.RendicontoDialog; };
            RendicontoGrid.prototype.getIdProperty = function () { return Default.RendicontoRow.idProperty; };
            RendicontoGrid.prototype.getLocalTextPrefix = function () { return Default.RendicontoRow.localTextPrefix; };
            RendicontoGrid.prototype.getService = function () { return Default.RendicontoService.baseUrl; };
            RendicontoGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Rendiconto/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            RendicontoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RendicontoGrid);
            return RendicontoGrid;
        }(Serenity.EntityGrid));
        Default.RendicontoGrid = RendicontoGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var Rendiconto2Dialog = /** @class */ (function (_super) {
            __extends(Rendiconto2Dialog, _super);
            function Rendiconto2Dialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.Rendiconto2Form(_this.idPrefix);
                return _this;
            }
            Rendiconto2Dialog.prototype.getFormKey = function () { return Default.Rendiconto2Form.formKey; };
            Rendiconto2Dialog.prototype.getIdProperty = function () { return Default.Rendiconto2Row.idProperty; };
            Rendiconto2Dialog.prototype.getLocalTextPrefix = function () { return Default.Rendiconto2Row.localTextPrefix; };
            Rendiconto2Dialog.prototype.getNameProperty = function () { return Default.Rendiconto2Row.nameProperty; };
            Rendiconto2Dialog.prototype.getService = function () { return Default.Rendiconto2Service.baseUrl; };
            Rendiconto2Dialog = __decorate([
                Serenity.Decorators.registerClass()
            ], Rendiconto2Dialog);
            return Rendiconto2Dialog;
        }(Serenity.EntityDialog));
        Default.Rendiconto2Dialog = Rendiconto2Dialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var Rendiconto2Grid = /** @class */ (function (_super) {
            __extends(Rendiconto2Grid, _super);
            function Rendiconto2Grid(container) {
                return _super.call(this, container) || this;
            }
            Rendiconto2Grid.prototype.getColumnsKey = function () { return 'Default.Rendiconto2'; };
            Rendiconto2Grid.prototype.getDialogType = function () { return Default.Rendiconto2Dialog; };
            Rendiconto2Grid.prototype.getIdProperty = function () { return Default.Rendiconto2Row.idProperty; };
            Rendiconto2Grid.prototype.getLocalTextPrefix = function () { return Default.Rendiconto2Row.localTextPrefix; };
            Rendiconto2Grid.prototype.getService = function () { return Default.Rendiconto2Service.baseUrl; };
            Rendiconto2Grid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Rendiconto2/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            Rendiconto2Grid = __decorate([
                Serenity.Decorators.registerClass()
            ], Rendiconto2Grid);
            return Rendiconto2Grid;
        }(Serenity.EntityGrid));
        Default.Rendiconto2Grid = Rendiconto2Grid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var Rendiconto3Dialog = /** @class */ (function (_super) {
            __extends(Rendiconto3Dialog, _super);
            function Rendiconto3Dialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.Rendiconto3Form(_this.idPrefix);
                return _this;
            }
            Rendiconto3Dialog.prototype.getFormKey = function () { return Default.Rendiconto3Form.formKey; };
            Rendiconto3Dialog.prototype.getIdProperty = function () { return Default.Rendiconto3Row.idProperty; };
            Rendiconto3Dialog.prototype.getLocalTextPrefix = function () { return Default.Rendiconto3Row.localTextPrefix; };
            Rendiconto3Dialog.prototype.getNameProperty = function () { return Default.Rendiconto3Row.nameProperty; };
            Rendiconto3Dialog.prototype.getService = function () { return Default.Rendiconto3Service.baseUrl; };
            Rendiconto3Dialog = __decorate([
                Serenity.Decorators.registerClass()
            ], Rendiconto3Dialog);
            return Rendiconto3Dialog;
        }(Serenity.EntityDialog));
        Default.Rendiconto3Dialog = Rendiconto3Dialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var Rendiconto3Grid = /** @class */ (function (_super) {
            __extends(Rendiconto3Grid, _super);
            function Rendiconto3Grid(container) {
                return _super.call(this, container) || this;
            }
            Rendiconto3Grid.prototype.getColumnsKey = function () { return 'Default.Rendiconto3'; };
            Rendiconto3Grid.prototype.getDialogType = function () { return Default.Rendiconto3Dialog; };
            Rendiconto3Grid.prototype.getIdProperty = function () { return Default.Rendiconto3Row.idProperty; };
            Rendiconto3Grid.prototype.getLocalTextPrefix = function () { return Default.Rendiconto3Row.localTextPrefix; };
            Rendiconto3Grid.prototype.getService = function () { return Default.Rendiconto3Service.baseUrl; };
            Rendiconto3Grid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Default/Rendiconto3/ListExcel',
                    separator: true
                }));
                buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            Rendiconto3Grid = __decorate([
                Serenity.Decorators.registerClass()
            ], Rendiconto3Grid);
            return Rendiconto3Grid;
        }(Serenity.EntityGrid));
        Default.Rendiconto3Grid = Rendiconto3Grid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoApprovvigionamentoDialog = /** @class */ (function (_super) {
            __extends(RendicontoApprovvigionamentoDialog, _super);
            function RendicontoApprovvigionamentoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RendicontoApprovvigionamentoForm(_this.idPrefix);
                return _this;
            }
            RendicontoApprovvigionamentoDialog.prototype.getFormKey = function () { return Default.RendicontoApprovvigionamentoForm.formKey; };
            RendicontoApprovvigionamentoDialog.prototype.getIdProperty = function () { return Default.RendicontoApprovvigionamentoRow.idProperty; };
            RendicontoApprovvigionamentoDialog.prototype.getLocalTextPrefix = function () { return Default.RendicontoApprovvigionamentoRow.localTextPrefix; };
            RendicontoApprovvigionamentoDialog.prototype.getNameProperty = function () { return Default.RendicontoApprovvigionamentoRow.nameProperty; };
            RendicontoApprovvigionamentoDialog.prototype.getService = function () { return Default.RendicontoApprovvigionamentoService.baseUrl; };
            RendicontoApprovvigionamentoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RendicontoApprovvigionamentoDialog);
            return RendicontoApprovvigionamentoDialog;
        }(Serenity.EntityDialog));
        Default.RendicontoApprovvigionamentoDialog = RendicontoApprovvigionamentoDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoApprovvigionamentoEditDialog = /** @class */ (function (_super) {
            __extends(RendicontoApprovvigionamentoEditDialog, _super);
            function RendicontoApprovvigionamentoEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.RendicontoApprovvigionamentoForm(_this.idPrefix);
                return _this;
            }
            RendicontoApprovvigionamentoEditDialog.prototype.getFormKey = function () { return Default.RendicontoApprovvigionamentoForm.formKey; };
            RendicontoApprovvigionamentoEditDialog.prototype.getNameProperty = function () { return Default.RendicontoApprovvigionamentoRow.nameProperty; };
            RendicontoApprovvigionamentoEditDialog.prototype.getLocalTextPrefix = function () { return Default.RendicontoApprovvigionamentoRow.localTextPrefix; };
            RendicontoApprovvigionamentoEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RendicontoApprovvigionamentoEditDialog);
            return RendicontoApprovvigionamentoEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.RendicontoApprovvigionamentoEditDialog = RendicontoApprovvigionamentoEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoApprovvigionamentoEditor = /** @class */ (function (_super) {
            __extends(RendicontoApprovvigionamentoEditor, _super);
            function RendicontoApprovvigionamentoEditor(container) {
                return _super.call(this, container) || this;
            }
            RendicontoApprovvigionamentoEditor.prototype.getColumnsKey = function () { return "Default.RendicontoApprovvigionamento"; };
            RendicontoApprovvigionamentoEditor.prototype.getDialogType = function () { return Default.RendicontoApprovvigionamentoEditDialog; };
            RendicontoApprovvigionamentoEditor.prototype.getLocalTextPrefix = function () { return Default.RendicontoApprovvigionamentoRow.localTextPrefix; };
            RendicontoApprovvigionamentoEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            RendicontoApprovvigionamentoEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.TipoApprovvigionamento = Q.toId(row.TipoApprovvigionamento);
                return true;
            };
            RendicontoApprovvigionamentoEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RendicontoApprovvigionamentoEditor);
            return RendicontoApprovvigionamentoEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.RendicontoApprovvigionamentoEditor = RendicontoApprovvigionamentoEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoApprovvigionamentoGrid = /** @class */ (function (_super) {
            __extends(RendicontoApprovvigionamentoGrid, _super);
            function RendicontoApprovvigionamentoGrid(container) {
                return _super.call(this, container) || this;
            }
            RendicontoApprovvigionamentoGrid.prototype.getColumnsKey = function () { return 'Default.RendicontoApprovvigionamento'; };
            RendicontoApprovvigionamentoGrid.prototype.getDialogType = function () { return Default.RendicontoApprovvigionamentoDialog; };
            RendicontoApprovvigionamentoGrid.prototype.getIdProperty = function () { return Default.RendicontoApprovvigionamentoRow.idProperty; };
            RendicontoApprovvigionamentoGrid.prototype.getLocalTextPrefix = function () { return Default.RendicontoApprovvigionamentoRow.localTextPrefix; };
            RendicontoApprovvigionamentoGrid.prototype.getService = function () { return Default.RendicontoApprovvigionamentoService.baseUrl; };
            RendicontoApprovvigionamentoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RendicontoApprovvigionamentoGrid);
            return RendicontoApprovvigionamentoGrid;
        }(Serenity.EntityGrid));
        Default.RendicontoApprovvigionamentoGrid = RendicontoApprovvigionamentoGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneTerritorialeDialog = /** @class */ (function (_super) {
            __extends(RendicontoDestinazioneTerritorialeDialog, _super);
            function RendicontoDestinazioneTerritorialeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RendicontoDestinazioneTerritorialeForm(_this.idPrefix);
                return _this;
            }
            RendicontoDestinazioneTerritorialeDialog.prototype.getFormKey = function () { return Default.RendicontoDestinazioneTerritorialeForm.formKey; };
            RendicontoDestinazioneTerritorialeDialog.prototype.getIdProperty = function () { return Default.RendicontoDestinazioneTerritorialeRow.idProperty; };
            RendicontoDestinazioneTerritorialeDialog.prototype.getLocalTextPrefix = function () { return Default.RendicontoDestinazioneTerritorialeRow.localTextPrefix; };
            RendicontoDestinazioneTerritorialeDialog.prototype.getService = function () { return Default.RendicontoDestinazioneTerritorialeService.baseUrl; };
            RendicontoDestinazioneTerritorialeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RendicontoDestinazioneTerritorialeDialog);
            return RendicontoDestinazioneTerritorialeDialog;
        }(Serenity.EntityDialog));
        Default.RendicontoDestinazioneTerritorialeDialog = RendicontoDestinazioneTerritorialeDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneTerritorialeEditDialog = /** @class */ (function (_super) {
            __extends(RendicontoDestinazioneTerritorialeEditDialog, _super);
            function RendicontoDestinazioneTerritorialeEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.RendicontoDestinazioneTerritorialeForm(_this.idPrefix);
                return _this;
            }
            RendicontoDestinazioneTerritorialeEditDialog.prototype.getFormKey = function () { return Default.RendicontoDestinazioneTerritorialeForm.formKey; };
            RendicontoDestinazioneTerritorialeEditDialog.prototype.getNameProperty = function () { return Default.RendicontoDestinazioneTerritorialeRow.nameProperty; };
            RendicontoDestinazioneTerritorialeEditDialog.prototype.getLocalTextPrefix = function () { return Default.RendicontoDestinazioneTerritorialeRow.localTextPrefix; };
            RendicontoDestinazioneTerritorialeEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RendicontoDestinazioneTerritorialeEditDialog);
            return RendicontoDestinazioneTerritorialeEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.RendicontoDestinazioneTerritorialeEditDialog = RendicontoDestinazioneTerritorialeEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneTerritorialeEditor = /** @class */ (function (_super) {
            __extends(RendicontoDestinazioneTerritorialeEditor, _super);
            function RendicontoDestinazioneTerritorialeEditor(container) {
                return _super.call(this, container) || this;
            }
            RendicontoDestinazioneTerritorialeEditor.prototype.getColumnsKey = function () { return "Default.RendicontoDestinazioneTerritoriale"; };
            RendicontoDestinazioneTerritorialeEditor.prototype.getDialogType = function () { return Default.RendicontoDestinazioneTerritorialeEditDialog; };
            RendicontoDestinazioneTerritorialeEditor.prototype.getLocalTextPrefix = function () { return Default.RendicontoDestinazioneTerritorialeRow.localTextPrefix; };
            RendicontoDestinazioneTerritorialeEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            RendicontoDestinazioneTerritorialeEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.TipoDestinazioneTerritoriale = Q.toId(row.TipoDestinazioneTerritoriale);
                return true;
            };
            RendicontoDestinazioneTerritorialeEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RendicontoDestinazioneTerritorialeEditor);
            return RendicontoDestinazioneTerritorialeEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.RendicontoDestinazioneTerritorialeEditor = RendicontoDestinazioneTerritorialeEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneTerritorialeGrid = /** @class */ (function (_super) {
            __extends(RendicontoDestinazioneTerritorialeGrid, _super);
            function RendicontoDestinazioneTerritorialeGrid(container) {
                return _super.call(this, container) || this;
            }
            RendicontoDestinazioneTerritorialeGrid.prototype.getColumnsKey = function () { return 'Default.RendicontoDestinazioneTerritoriale'; };
            RendicontoDestinazioneTerritorialeGrid.prototype.getDialogType = function () { return Default.RendicontoDestinazioneTerritorialeDialog; };
            RendicontoDestinazioneTerritorialeGrid.prototype.getIdProperty = function () { return Default.RendicontoDestinazioneTerritorialeRow.idProperty; };
            RendicontoDestinazioneTerritorialeGrid.prototype.getLocalTextPrefix = function () { return Default.RendicontoDestinazioneTerritorialeRow.localTextPrefix; };
            RendicontoDestinazioneTerritorialeGrid.prototype.getService = function () { return Default.RendicontoDestinazioneTerritorialeService.baseUrl; };
            RendicontoDestinazioneTerritorialeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RendicontoDestinazioneTerritorialeGrid);
            return RendicontoDestinazioneTerritorialeGrid;
        }(Serenity.EntityGrid));
        Default.RendicontoDestinazioneTerritorialeGrid = RendicontoDestinazioneTerritorialeGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneUsoDialog = /** @class */ (function (_super) {
            __extends(RendicontoDestinazioneUsoDialog, _super);
            function RendicontoDestinazioneUsoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RendicontoDestinazioneUsoForm(_this.idPrefix);
                return _this;
            }
            RendicontoDestinazioneUsoDialog.prototype.getFormKey = function () { return Default.RendicontoDestinazioneUsoForm.formKey; };
            RendicontoDestinazioneUsoDialog.prototype.getIdProperty = function () { return Default.RendicontoDestinazioneUsoRow.idProperty; };
            RendicontoDestinazioneUsoDialog.prototype.getLocalTextPrefix = function () { return Default.RendicontoDestinazioneUsoRow.localTextPrefix; };
            RendicontoDestinazioneUsoDialog.prototype.getService = function () { return Default.RendicontoDestinazioneUsoService.baseUrl; };
            RendicontoDestinazioneUsoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RendicontoDestinazioneUsoDialog);
            return RendicontoDestinazioneUsoDialog;
        }(Serenity.EntityDialog));
        Default.RendicontoDestinazioneUsoDialog = RendicontoDestinazioneUsoDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneUsoEditDialog = /** @class */ (function (_super) {
            __extends(RendicontoDestinazioneUsoEditDialog, _super);
            function RendicontoDestinazioneUsoEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.RendicontoDestinazioneUsoForm(_this.idPrefix);
                return _this;
            }
            RendicontoDestinazioneUsoEditDialog.prototype.getFormKey = function () { return Default.RendicontoDestinazioneUsoForm.formKey; };
            RendicontoDestinazioneUsoEditDialog.prototype.getNameProperty = function () { return Default.RendicontoDestinazioneUsoRow.nameProperty; };
            RendicontoDestinazioneUsoEditDialog.prototype.getLocalTextPrefix = function () { return Default.RendicontoDestinazioneUsoRow.localTextPrefix; };
            RendicontoDestinazioneUsoEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RendicontoDestinazioneUsoEditDialog);
            return RendicontoDestinazioneUsoEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.RendicontoDestinazioneUsoEditDialog = RendicontoDestinazioneUsoEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneUsoEditor = /** @class */ (function (_super) {
            __extends(RendicontoDestinazioneUsoEditor, _super);
            function RendicontoDestinazioneUsoEditor(container) {
                return _super.call(this, container) || this;
            }
            RendicontoDestinazioneUsoEditor.prototype.getColumnsKey = function () { return "Default.RendicontoDestinazioneUso"; };
            RendicontoDestinazioneUsoEditor.prototype.getDialogType = function () { return Default.RendicontoDestinazioneUsoEditDialog; };
            RendicontoDestinazioneUsoEditor.prototype.getLocalTextPrefix = function () { return Default.RendicontoDestinazioneUsoRow.localTextPrefix; };
            RendicontoDestinazioneUsoEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            RendicontoDestinazioneUsoEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.TipoDestinazioneUso = Q.toId(row.TipoDestinazioneUso);
                return true;
            };
            RendicontoDestinazioneUsoEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RendicontoDestinazioneUsoEditor);
            return RendicontoDestinazioneUsoEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.RendicontoDestinazioneUsoEditor = RendicontoDestinazioneUsoEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var RendicontoDestinazioneUsoGrid = /** @class */ (function (_super) {
            __extends(RendicontoDestinazioneUsoGrid, _super);
            function RendicontoDestinazioneUsoGrid(container) {
                return _super.call(this, container) || this;
            }
            RendicontoDestinazioneUsoGrid.prototype.getColumnsKey = function () { return 'Default.RendicontoDestinazioneUso'; };
            RendicontoDestinazioneUsoGrid.prototype.getDialogType = function () { return Default.RendicontoDestinazioneUsoDialog; };
            RendicontoDestinazioneUsoGrid.prototype.getIdProperty = function () { return Default.RendicontoDestinazioneUsoRow.idProperty; };
            RendicontoDestinazioneUsoGrid.prototype.getLocalTextPrefix = function () { return Default.RendicontoDestinazioneUsoRow.localTextPrefix; };
            RendicontoDestinazioneUsoGrid.prototype.getService = function () { return Default.RendicontoDestinazioneUsoService.baseUrl; };
            RendicontoDestinazioneUsoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RendicontoDestinazioneUsoGrid);
            return RendicontoDestinazioneUsoGrid;
        }(Serenity.EntityGrid));
        Default.RendicontoDestinazioneUsoGrid = RendicontoDestinazioneUsoGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ScartoDialog = /** @class */ (function (_super) {
            __extends(ScartoDialog, _super);
            function ScartoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ScartoForm(_this.idPrefix);
                return _this;
            }
            ScartoDialog.prototype.getFormKey = function () { return Default.ScartoForm.formKey; };
            ScartoDialog.prototype.getIdProperty = function () { return Default.ScartoRow.idProperty; };
            ScartoDialog.prototype.getLocalTextPrefix = function () { return Default.ScartoRow.localTextPrefix; };
            ScartoDialog.prototype.getNameProperty = function () { return Default.ScartoRow.nameProperty; };
            ScartoDialog.prototype.getService = function () { return Default.ScartoService.baseUrl; };
            ScartoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ScartoDialog);
            return ScartoDialog;
        }(Serenity.EntityDialog));
        Default.ScartoDialog = ScartoDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ScartoEditDialog = /** @class */ (function (_super) {
            __extends(ScartoEditDialog, _super);
            function ScartoEditDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Default.ScartoForm(_this.idPrefix);
                return _this;
            }
            ScartoEditDialog.prototype.getFormKey = function () { return Default.ScartoForm.formKey; };
            ScartoEditDialog.prototype.getNameProperty = function () { return Default.ScartoRow.nameProperty; };
            ScartoEditDialog.prototype.getLocalTextPrefix = function () { return Default.ScartoRow.localTextPrefix; };
            ScartoEditDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ScartoEditDialog);
            return ScartoEditDialog;
        }(CaveSerene.Common.GridEditorDialog));
        Default.ScartoEditDialog = ScartoEditDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ScartoEditor = /** @class */ (function (_super) {
            __extends(ScartoEditor, _super);
            function ScartoEditor(container) {
                return _super.call(this, container) || this;
            }
            ScartoEditor.prototype.getColumnsKey = function () { return "Default.Scarto"; };
            ScartoEditor.prototype.getDialogType = function () { return Default.ScartoEditDialog; };
            ScartoEditor.prototype.getLocalTextPrefix = function () { return Default.ScartoRow.localTextPrefix; };
            ScartoEditor.prototype.getAddButtonCaption = function () {
                return "Aggiungi";
            };
            ScartoEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.TipoScarto = Q.toId(row.TipoScarto);
                return true;
            };
            ScartoEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ScartoEditor);
            return ScartoEditor;
        }(CaveSerene.Common.GridEditorBase));
        Default.ScartoEditor = ScartoEditor;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var ScartoGrid = /** @class */ (function (_super) {
            __extends(ScartoGrid, _super);
            function ScartoGrid(container) {
                return _super.call(this, container) || this;
            }
            ScartoGrid.prototype.getColumnsKey = function () { return 'Default.Scarto'; };
            ScartoGrid.prototype.getDialogType = function () { return Default.ScartoDialog; };
            ScartoGrid.prototype.getIdProperty = function () { return Default.ScartoRow.idProperty; };
            ScartoGrid.prototype.getLocalTextPrefix = function () { return Default.ScartoRow.localTextPrefix; };
            ScartoGrid.prototype.getService = function () { return Default.ScartoService.baseUrl; };
            ScartoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ScartoGrid);
            return ScartoGrid;
        }(Serenity.EntityGrid));
        Default.ScartoGrid = ScartoGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var TipoMaterialeDialog = /** @class */ (function (_super) {
            __extends(TipoMaterialeDialog, _super);
            function TipoMaterialeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TipoMaterialeForm(_this.idPrefix);
                return _this;
            }
            TipoMaterialeDialog.prototype.getFormKey = function () { return Default.TipoMaterialeForm.formKey; };
            TipoMaterialeDialog.prototype.getIdProperty = function () { return Default.TipoMaterialeRow.idProperty; };
            TipoMaterialeDialog.prototype.getLocalTextPrefix = function () { return Default.TipoMaterialeRow.localTextPrefix; };
            TipoMaterialeDialog.prototype.getNameProperty = function () { return Default.TipoMaterialeRow.nameProperty; };
            TipoMaterialeDialog.prototype.getService = function () { return Default.TipoMaterialeService.baseUrl; };
            TipoMaterialeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TipoMaterialeDialog);
            return TipoMaterialeDialog;
        }(Serenity.EntityDialog));
        Default.TipoMaterialeDialog = TipoMaterialeDialog;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Default;
    (function (Default) {
        var TipoMaterialeGrid = /** @class */ (function (_super) {
            __extends(TipoMaterialeGrid, _super);
            function TipoMaterialeGrid(container) {
                return _super.call(this, container) || this;
            }
            TipoMaterialeGrid.prototype.getColumnsKey = function () { return 'Default.TipoMateriale'; };
            TipoMaterialeGrid.prototype.getDialogType = function () { return Default.TipoMaterialeDialog; };
            TipoMaterialeGrid.prototype.getIdProperty = function () { return Default.TipoMaterialeRow.idProperty; };
            TipoMaterialeGrid.prototype.getLocalTextPrefix = function () { return Default.TipoMaterialeRow.localTextPrefix; };
            TipoMaterialeGrid.prototype.getService = function () { return Default.TipoMaterialeService.baseUrl; };
            TipoMaterialeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TipoMaterialeGrid);
            return TipoMaterialeGrid;
        }(Serenity.EntityGrid));
        Default.TipoMaterialeGrid = TipoMaterialeGrid;
    })(Default = CaveSerene.Default || (CaveSerene.Default = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = CaveSerene.Membership || (CaveSerene.Membership = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = CaveSerene.Membership || (CaveSerene.Membership = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = CaveSerene.Membership || (CaveSerene.Membership = {}));
})(CaveSerene || (CaveSerene = {}));
var CaveSerene;
(function (CaveSerene) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = CaveSerene.Membership || (CaveSerene.Membership = {}));
})(CaveSerene || (CaveSerene = {}));
//# sourceMappingURL=CaveSerene.js.map