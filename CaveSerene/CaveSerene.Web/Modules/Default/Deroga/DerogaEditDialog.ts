/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class DerogaEditDialog extends
        Common.GridEditorDialog<DerogaRow> {
        protected getFormKey() { return DerogaForm.formKey; }
        protected getNameProperty() { return DerogaRow.nameProperty; }
        protected getLocalTextPrefix() { return DerogaRow.localTextPrefix; }

        protected form: DerogaForm;

        constructor() {
            super();
            this.form = new DerogaForm(this.idPrefix);
        }
    }
}