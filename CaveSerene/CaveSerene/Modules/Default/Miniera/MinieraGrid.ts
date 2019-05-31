
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class MinieraGrid extends Serenity.EntityGrid<MinieraRow, any> {
        protected getColumnsKey() { return 'Default.Miniera'; }
        protected getDialogType() { return MinieraDialog; }
        protected getIdProperty() { return MinieraRow.idProperty; }
        protected getLocalTextPrefix() { return MinieraRow.localTextPrefix; }
        protected getService() { return MinieraService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Miniera/ListExcel',
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