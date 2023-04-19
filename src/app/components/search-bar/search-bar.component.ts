import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, ServerMenuItem } from 'src/app/model/menuItem';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  toggle: boolean = false;
  toggle2: boolean = false;
  toggle3: boolean = false;
  activeMenu: MenuItem;
  menu: any[] = [];
  rootMenu: MenuItem [] = [];
  year: number;
  contact: string = "";
  type: string = "word";
  years: number[] = [...Array(34).keys()].map(y => 1990 + y);

  serverReply: string = `[
    {
        "author_name": "",
        "r_object_id": "0b759c3580fbee12",
        "r_modify_date": "11:35:39 17/02/2023",
        "object_name": "אקולוגיה, סביבה ויער בישראל",
        "doc_year": "0",
        "attr_sub_type": ""
    },

    {
      "author_name": "",
      "r_object_id": "0b759c3580fbee12",
      "r_modify_date": "11:35:39 17/02/2023",
      "object_name": "אקולוגיה, סביבה ויער בישראל",
      "doc_year": "0",
      "attr_sub_type": ""
    }
  ]`;

  keyword: string = "";
  @Output() searchObjects = new EventEmitter();

  searchFn() {
    console.log(this.year, this.contact, this.type);
    this.router.navigateByUrl(`/search?keyword=${this.keyword}&category=${this.activeMenu.objectId}&type=${this.type}&contact=${this.contact}&year=${this.year}`);
  }

  toggleSearch() {
    this.toggle3 = !this.toggle3;
  }

  selectMenu(selectedMenu: MenuItem) {
    this.activeMenu = selectedMenu;
    this.rootMenu.map(m => {
      m.children = [];
    });

    this.toggle = !this.toggle;
  }

  constructor(private router: Router) {
    this.activeMenu = new MenuItem();
    this.menu = JSON.parse(this.serverReply);
    const localMenu = this.getFromServerMenuArray(false, "ourId");
    this.rootMenu = this.createMenuArray(localMenu);
  };

  toggleMenu() {
    this.toggle = !this.toggle;
  }

  openSubmenu(menuItemObject: MenuItem, menuLevelIndex: number) {
    if(menuItemObject.children.length > 0) {
      menuItemObject.children = [];
    } else {
      const serverMenuArray = this.getFromServerMenuArray(false, menuItemObject.objectId);
      const newMenuArray = this.createMenuArray(serverMenuArray);
      const allChildren = this.findProperties(this.rootMenu, "children", menuLevelIndex );
      allChildren.forEach((childrenObject) => {
        if(childrenObject["menuLevelIndex"] == menuLevelIndex) {
          childrenObject["array"] = [];
        }
      });
      menuItemObject.children = newMenuArray;
      menuItemObject.menuLevelIndex = menuLevelIndex;
    }
  }

  getFromServerMenuArray(isRoot: boolean = false, objectId: string) {
    if (isRoot) {
      return this.menu;
    } else {
      let count = 0;
      const limit = 5;
      const menuArray: ServerMenuItem [] = [];
      while(count < limit) {
        const serverMenuObject = new ServerMenuItem;
        serverMenuObject.object_name = "generic menu_" + count;
        serverMenuObject.r_object_id = "id_" + objectId + count;
        menuArray.push(serverMenuObject);
        count++;
      }
      return menuArray;
    }
  }

  createMenuArray(menuArray: ServerMenuItem []) {
    const newMenuItemObject: MenuItem [] = [];
    menuArray.forEach((menuArrayItem) => {
      const nextItem = new MenuItem;
      nextItem.name = menuArrayItem.object_name;
      nextItem.objectId = menuArrayItem.r_object_id;
      newMenuItemObject.push(nextItem);
    })
    return newMenuItemObject;
  }

  findProperties<T>(obj: T, propName: string, menuLevelIndex: number): Array<T[keyof T]> {
    const results: any [] = [];

    // Recursive function to search for properties
    function search(obj: any) {
      // Check if the current object is null or undefined
      if (!obj) {
        return;
      }

      // Check if the current object has the desired property
      if (obj.hasOwnProperty(propName)) {
        results.push({array: obj[propName], menuLevelIndex: obj["menuLevelIndex"]});
        if (obj["menuLevelIndex"] == menuLevelIndex) {
          obj[propName] = [];
        }
      }

      // Recursively search the sub-properties of the current object
      for (let key in obj) {
        if (typeof obj[key] === 'object') {
          search(obj[key]);
        }
      }
    }

    // Start the search with the input object
    search(obj);

    return results;
  }
}
