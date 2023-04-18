import { Component } from '@angular/core';
import { ObjectItem } from 'src/app/model/objectItem';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  activeSort: string = "";
  ascOrder: number = 1;

  objectItems: ObjectItem[] = [
    {
      type: "pdf",
      filename: "Wordpress Guid",
      year: 2010,
      contactname: "Christopher",
    },
    {
      type: "word",
      filename: "Covid statistics",
      year: 2019,
      contactname: "David",
    },
    {
      type: "folder",
      filename: "Sample codes",
      year: 2023,
      contactname: "Richard",
    },
    {
      type: "img",
      filename: "Codezip",
      year: 2021,
      contactname: "Robert",
    },
    {
      type: "word",
      filename: "Swift Tutorial",
      year: 2018,
      contactname: "Christopher",
    },
  ];

  sortBy(by: string) {
    if (this.activeSort == by) {
      this.ascOrder *= -1;
    } else {
      this.activeSort = by;
      this.ascOrder = 1;
    }

    this.objectItems.sort((a, b) => {
      if (a[by] < b[by]) return -(this.ascOrder);
      if (a[by] > b[by]) return this.ascOrder;
      return 0;
    });
  }
}
