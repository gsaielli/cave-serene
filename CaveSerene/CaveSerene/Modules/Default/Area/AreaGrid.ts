
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class AreaGrid extends Serenity.EntityGrid<AreaRow, any> {
        protected getColumnsKey() { return 'Default.Area'; }
        protected getDialogType() { return AreaDialog; }
        protected getIdProperty() { return AreaRow.idProperty; }
        protected getLocalTextPrefix() { return AreaRow.localTextPrefix; }
        protected getService() { return AreaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons[0].title = "Aggiungi Area Estrattiva";

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Area/ListExcel',
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