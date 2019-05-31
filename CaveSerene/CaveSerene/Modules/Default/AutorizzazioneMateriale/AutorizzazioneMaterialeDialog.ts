
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class AutorizzazioneMaterialeDialog extends Serenity.EntityDialog<AutorizzazioneMaterialeRow, any> {
        protected getFormKey() { return AutorizzazioneMaterialeForm.formKey; }
        protected getIdProperty() { return AutorizzazioneMaterialeRow.idProperty; }
        protected getLocalTextPrefix() { return AutorizzazioneMaterialeRow.localTextPrefix; }
        protected getService() { return AutorizzazioneMaterialeService.baseUrl; }

        protected form = new AutorizzazioneMaterialeForm(this.idPrefix);

    }
}