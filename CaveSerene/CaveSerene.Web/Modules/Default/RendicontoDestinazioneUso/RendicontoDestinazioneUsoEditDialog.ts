/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RendicontoDestinazioneUsoEditDialog extends
        Common.GridEditorDialog<RendicontoDestinazioneUsoRow> {
        protected getFormKey() { return RendicontoDestinazioneUsoForm.formKey; }
        protected getNameProperty() { return RendicontoDestinazioneUsoRow.nameProperty; }
        protected getLocalTextPrefix() { return RendicontoDestinazioneUsoRow.localTextPrefix; }

        protected form: RendicontoDestinazioneUsoForm;

        constructor() {
            super();
            this.form = new RendicontoDestinazioneUsoForm(this.idPrefix);
        }
    }
}