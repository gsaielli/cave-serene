
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class EnteGrid extends Serenity.EntityGrid<EnteRow, any> {
        protected getColumnsKey() { return 'Default.Ente'; }
        protected getDialogType() { return EnteDialog; }
        protected getIdProperty() { return EnteRow.idProperty; }
        protected getLocalTextPrefix() { return EnteRow.localTextPrefix; }
        protected getService() { return EnteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getDefaultSortBy() {
            return [EnteRow.Fields.Nome];
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Ente/ListExcel',
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