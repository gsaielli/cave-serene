
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class Rendiconto2Grid extends Serenity.EntityGrid<Rendiconto2Row, any> {
        protected getColumnsKey() { return 'Default.Rendiconto2'; }
        protected getDialogType() { return Rendiconto2Dialog; }
        protected getIdProperty() { return Rendiconto2Row.idProperty; }
        protected getLocalTextPrefix() { return Rendiconto2Row.localTextPrefix; }
        protected getService() { return Rendiconto2Service.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons[0].title = "Aggiungi Rendiconto Miniera";

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Rendiconto2/ListExcel',
                separator: true
            }));

            buttons.push(CaveSerene.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}