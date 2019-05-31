/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ProrogaEditDialog extends
        Common.GridEditorDialog<ProrogaRow> {
        protected getFormKey() { return ProrogaForm.formKey; }
        protected getNameProperty() { return ProrogaRow.nameProperty; }
        protected getLocalTextPrefix() { return ProrogaRow.localTextPrefix; }

        protected form: ProrogaForm;

        constructor() {
            super();
            this.form = new ProrogaForm(this.idPrefix);
        }
    }
}