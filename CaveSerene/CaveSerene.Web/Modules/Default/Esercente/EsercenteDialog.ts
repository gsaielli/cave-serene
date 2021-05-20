
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class EsercenteDialog extends Serenity.EntityDialog<EsercenteRow, any> {
        protected getFormKey() { return EsercenteForm.formKey; }
        protected getIdProperty() { return EsercenteRow.idProperty; }
        protected getLocalTextPrefix() { return EsercenteRow.localTextPrefix; }
        protected getNameProperty() { return EsercenteRow.nameProperty; }
        protected getService() { return EsercenteService.baseUrl; }

        protected form = new EsercenteForm(this.idPrefix);

    }
}