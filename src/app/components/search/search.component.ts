import { Component } from '@angular/core';
import { ObjectItem } from 'src/app/model/objectItem';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
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
    this.objectItems.sort((a, b) => {
      if (a[by] < b[by]) return -1;
      if (a[by] > b[by]) return 1;
      return 0;
    });
  }
}
