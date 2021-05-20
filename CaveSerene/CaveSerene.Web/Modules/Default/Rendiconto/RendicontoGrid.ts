
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class RendicontoGrid extends Serenity.EntityGrid<RendicontoRow, any> {
        protected getColumnsKey() { return 'Default.Rendiconto'; }
        protected getDialogType() { return RendicontoDialog; }
        protected getIdProperty() { return RendicontoRow.idProperty; }
        protected getLocalTextPrefix() { return RendicontoRow.localTextPrefix; }
        protected getService() { return RendicontoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Rendiconto/ListExcel',
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