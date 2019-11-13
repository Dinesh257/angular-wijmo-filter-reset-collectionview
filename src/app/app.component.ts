import { Component, OnInit, ViewChild } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcGridFilter from '@grapecity/wijmo.grid.filter';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('orderDetailsPortfolioGrid') orderDetailsPortfolioGrid: wjcGrid.FlexGrid;
  source: wjcCore.CollectionView;
  data =[];
  private _filterRows: any[];

  constructor() {
    this.source = this.getData(100);
  }

  onFilterApplied(s, e) {
    this._filterRows = [];
    const view = this.source;
    view.sourceCollection.forEach(item => {
      if(view.filter && view.filter(item)) {
        this._filterRows.push(item);
      }
    });

  }
  
  onClick() {
    console.log(this._filterRows);
  }
  public toggleSingleAccountSelection(selectedRow: any, checkboxChecked: boolean): void {
        if (this.source && this.source.itemCount > 0) {
            selectedRow.isSelected = checkboxChecked;
            selectedRow.disableSelection = false;
        }
    }
  onReset(){
      this.orderDetailsPortfolioGrid.rows.forEach((assetFromGrid, index) => {
            if (assetFromGrid.dataItem.isSelected) {
                const assetDetail = this.data.find((portfolio) =>
                    portfolio.id === assetFromGrid.dataItem.id);
                this.orderDetailsPortfolioGrid.rows[index].dataItem = assetDetail;
            }
        });
  }

  getData(count: number) {
    this.data=[
      {
        id:1,
        isSelected: false,
        country: 'A',
        date:1,
        amount:1
      },
         {
        id:2,
                isSelected: false,

        country: 'B',
        date:2,
        amount:2
      },
         {
        id:3,
                isSelected: false,

        country: 'C',
        date:3,
        amount:3
      },
         {
        id:4,
                isSelected: false,

        country: 'D',
        date:4,
        amount:4
      },
         {
        id:5,
                isSelected: false,

        country: 'E',
        date:5,
        amount:5
      },
         {
        id:6,
                isSelected: false,

        country: 'F',
        date:6,
        amount:6
      },
         {
        id:7,
                isSelected: false,

        country: 'G',
        date:7,
        amount:7
      }
    ];

    return new wjcCore.CollectionView(this.data);
  }
}