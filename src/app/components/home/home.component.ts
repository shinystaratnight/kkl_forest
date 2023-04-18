import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, ServerMenuItem } from 'src/app/model/menuItem';
// @ts-nocheck
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  toggle: boolean = false;
  toggle2: boolean = false;
  menu: any[] = [];
  rootMenu: MenuItem [] = [];
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

  constructor(private router: Router) {
    this.menu = JSON.parse(this.serverReply);
    const localMenu = this.getFromServerMenuArray(false, "ourId");
    this.rootMenu = this.createMenuArray(localMenu);
  };

  searchFn(obj) {
    this.router.navigateByUrl(`/search?keyword=${obj.keyword}&category=${obj.id}`);
  }

  //define your method
  clickEvent($event: any) {
    this.toggle = !this.toggle;
    this.toggle2 = false;
    console.log(this.toggle);
  }

  clickEvent2($event: any) {
    this.toggle2 = !this.toggle2;
    console.log(this.toggle2);
  }

  openSubmenu(menuItemObject: MenuItem, menuLevelIndex: number) {
    console.log("menuItem: ", menuItemObject);
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
      console.log("our children in one place: ", allChildren);
      console.log("our children in one place: ", this.rootMenu.keys[0]);
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
