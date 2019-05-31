
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class Rendiconto3Grid extends Serenity.EntityGrid<Rendiconto3Row, any> {
        protected getColumnsKey() { return 'Default.Rendiconto3'; }
        protected getDialogType() { return Rendiconto3Dialog; }
        protected getIdProperty() { return Rendiconto3Row.idProperty; }
        protected getLocalTextPrefix() { return Rendiconto3Row.localTextPrefix; }
        protected getService() { return Rendiconto3Service.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Rendiconto3/ListExcel',
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