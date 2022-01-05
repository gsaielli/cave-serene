
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class ImpiantoGrid extends Serenity.EntityGrid<ImpiantoRow, any> {
        protected getColumnsKey() { return 'Default.Impianto'; }
        protected getDialogType() { return ImpiantoDialog; }
        protected getIdProperty() { return ImpiantoRow.idProperty; }
        protected getLocalTextPrefix() { return ImpiantoRow.localTextPrefix; }
        protected getService() { return ImpiantoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons[0].title = "Aggiungi Impianto";

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Impianto/ListExcel',
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