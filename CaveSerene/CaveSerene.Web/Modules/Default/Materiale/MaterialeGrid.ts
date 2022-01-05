
namespace CaveSerene.Default {

    @Serenity.Decorators.registerClass()
    export class MaterialeGrid extends Serenity.EntityGrid<MaterialeRow, any> {
        protected getColumnsKey() { return 'Default.Materiale'; }
        protected getDialogType() { return MaterialeDialog; }
        protected getIdProperty() { return MaterialeRow.idProperty; }
        protected getLocalTextPrefix() { return MaterialeRow.localTextPrefix; }
        protected getService() { return MaterialeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createQuickFilters() {
            super.createQuickFilters();
            //this.addQuickFilter({
            //    field: MaterialeRow.Fields.NomeRisorsaMineraleIstat
            //    type: Serenity.EnumEditor,
            //    options: {
            //        enumType: Modules.Default.Area.TipoISTAT,
                    
            //    }
            //});
            //si può fare anche così, ma è più facile LookupEditor e QuickFilter nelle Columns
            //this.addQuickFilter({
            //    field: MaterialeRow.Fields.IdTipoMateriale,
            //    type: Serenity.LookupEditor,
            //    options: {
            //        lookupKey: "Default.TipoMateriale"
            //    }
            //});
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons[0].title = "Aggiungi Materiale";

            buttons.push(CaveSerene.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Materiale/ListExcel',
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