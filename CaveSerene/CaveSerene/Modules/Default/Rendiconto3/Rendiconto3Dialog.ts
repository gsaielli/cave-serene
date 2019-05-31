
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class Rendiconto3Dialog extends Serenity.EntityDialog<Rendiconto3Row, any> {
        protected getFormKey() { return Rendiconto3Form.formKey; }
        protected getIdProperty() { return Rendiconto3Row.idProperty; }
        protected getLocalTextPrefix() { return Rendiconto3Row.localTextPrefix; }
        protected getNameProperty() { return Rendiconto3Row.nameProperty; }
        protected getService() { return Rendiconto3Service.baseUrl; }

        protected form = new Rendiconto3Form(this.idPrefix);

    }
}