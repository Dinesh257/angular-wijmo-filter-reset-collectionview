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
  selectAllAssets: boolean;
  data =[
      {
        id:1,
        country: 'A',
        date:1,
        amount:1
      },
         {
        id:2,
        country: 'B',
        date:2,
        amount:2
      },
         {
        id:3,
        country: 'C',
        date:3,
        amount:3
      },
         {
        id:4,
        country: 'D',
        date:4,
        amount:4
      },
         {
        id:5,
        country: 'E',
        date:5,
        amount:5
      },
         {
        id:6,
        country: 'F',
        date:6,
        amount:6
      },
         {
        id:7,
        country: 'G',
        date:7,
        amount:7
      }
    ];
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
  
   public toggleAllAccountSelection(checkboxChecked: boolean): void {
        if (this.source && this.source.itemCount > 0) {
          this.selectAllAssets = checkboxChecked;
            this.source._view.forEach((row) => {
                    row.isSelected = checkboxChecked;
            });
        }
    }
  public toggleSingleAccountSelection(selectedRow: any, checkboxChecked: boolean): void {
        if (this.source && this.source.itemCount > 0) {
            selectedRow.isSelected = checkboxChecked;
        }
    }
    
  onReset(){
      this.orderDetailsPortfolioGrid.rows.forEach((assetFromGrid, index) => {
            if (assetFromGrid.dataItem.isSelected) {
                const assetDetail = this.data.find((portfolio) =>
                    portfolio.id === assetFromGrid.dataItem.id);
                let item = this.orderDetailsPortfolioGrid.rows[index].dataItem; 
                this.source.editItem(item);
                Object.keys(item).forEach(i => {
                  console.log( i);
                  console.log( item[i]);
                  console.log( assetDetail[i]);
                  item[i] = assetDetail[i];
                })
                this.source.commitEdit();
            }
        });
        this.selectAllAssets = false;
        this.orderDetailsPortfolioGrid.refresh();
  }

  getData(count: number) {
   
  let data = [
      {
        id:1,
        country: 'A',
        date:1,
        amount:1
      },
         {
        id:2,
        country: 'B',
        date:2,
        amount:2
      },
         {
        id:3,
        country: 'C',
        date:3,
        amount:3
      },
         {
        id:4,
        country: 'D',
        date:4,
        amount:4
      },
         {
        id:5,
        country: 'E',
        date:5,
        amount:5
      },
         {
        id:6,
        country: 'F',
        date:6,
        amount:6
      },
         {
        id:7,
        country: 'G',
        date:7,
        amount:7
      }
    ];
    return new wjcCore.CollectionView(data);
  }
}