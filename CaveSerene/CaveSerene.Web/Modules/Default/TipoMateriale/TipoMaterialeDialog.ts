
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class TipoMaterialeDialog extends Serenity.EntityDialog<TipoMaterialeRow, any> {
        protected getFormKey() { return TipoMaterialeForm.formKey; }
        protected getIdProperty() { return TipoMaterialeRow.idProperty; }
        protected getLocalTextPrefix() { return TipoMaterialeRow.localTextPrefix; }
        protected getNameProperty() { return TipoMaterialeRow.nameProperty; }
        protected getService() { return TipoMaterialeService.baseUrl; }

        protected form = new TipoMaterialeForm(this.idPrefix);

    }
}