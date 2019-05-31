
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class PianoAreaGrid extends Serenity.EntityGrid<PianoAreaRow, any> {
        protected getColumnsKey() { return 'Default.PianoArea'; }
        protected getDialogType() { return PianoAreaDialog; }
        protected getIdProperty() { return PianoAreaRow.idProperty; }
        protected getLocalTextPrefix() { return PianoAreaRow.localTextPrefix; }
        protected getService() { return PianoAreaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}