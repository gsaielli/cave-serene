/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ScartoEditDialog extends
        Common.GridEditorDialog<ScartoRow> {
        protected getFormKey() { return ScartoForm.formKey; }
        protected getNameProperty() { return ScartoRow.nameProperty; }
        protected getLocalTextPrefix() { return ScartoRow.localTextPrefix; }

        protected form: ScartoForm;

        constructor() {
            super();
            this.form = new ScartoForm(this.idPrefix);
        }
    }
}