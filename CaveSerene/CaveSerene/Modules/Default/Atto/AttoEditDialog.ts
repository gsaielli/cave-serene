/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class AttoEditDialog extends
        Common.GridEditorDialog<AttoRow> {
        protected getFormKey() { return AttoForm.formKey; }
        protected getNameProperty() { return AttoRow.nameProperty; }
        protected getLocalTextPrefix() { return AttoRow.localTextPrefix; }

        protected form: AttoForm;

        constructor() {
            super();
            this.form = new AttoForm(this.idPrefix);
        }
    }
}