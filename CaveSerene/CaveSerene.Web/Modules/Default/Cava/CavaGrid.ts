
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class CavaGrid extends Serenity.EntityGrid<CavaRow, any> {
        protected getColumnsKey() { return 'Default.Cava'; }
        protected getDialogType() { return CavaDialog; }
        protected getIdProperty() { return CavaRow.idProperty; }
        protected getLocalTextPrefix() { return CavaRow.localTextPrefix; }
        protected getService() { return CavaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons[0].title = "Aggiungi Cava";

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Cava/ListExcel',
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