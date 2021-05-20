
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class Rendiconto2Dialog extends Serenity.EntityDialog<Rendiconto2Row, any> {
        protected getFormKey() { return Rendiconto2Form.formKey; }
        protected getIdProperty() { return Rendiconto2Row.idProperty; }
        protected getLocalTextPrefix() { return Rendiconto2Row.localTextPrefix; }
        protected getNameProperty() { return Rendiconto2Row.nameProperty; }
        protected getService() { return Rendiconto2Service.baseUrl; }

        protected form = new Rendiconto2Form(this.idPrefix);

    }
}