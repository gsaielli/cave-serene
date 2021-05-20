/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class FabbisognoEditDialog extends
        Common.GridEditorDialog<FabbisognoRow> {
        protected getFormKey() { return FabbisognoForm.formKey; }
        protected getNameProperty() { return FabbisognoRow.nameProperty; }
        protected getLocalTextPrefix() { return FabbisognoRow.localTextPrefix; }

        protected form: FabbisognoForm;

        constructor() {
            super();
            this.form = new FabbisognoForm(this.idPrefix);
        }
    }
}