
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ConcessioneGrid extends Serenity.EntityGrid<ConcessioneRow, any> {
        protected getColumnsKey() { return 'Default.Concessione'; }
        protected getDialogType() { return ConcessioneDialog; }
        protected getIdProperty() { return ConcessioneRow.idProperty; }
        protected getLocalTextPrefix() { return ConcessioneRow.localTextPrefix; }
        protected getService() { return ConcessioneService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons[0].title = "Aggiungi Concessione";

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Concessione/ListExcel',
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