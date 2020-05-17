import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems:Array<any>
  constructor() { 
    this.menuItems=[];
  }
/**
 * 
 * @param items 
 */
  addMenu(items:Array<{
    text:string,
    heading?:boolean,
    link?:string,
    elink?:string,  
    target?:string
    icon?:string,
    alert?:string,
    submenu?:Array<any>,
    children?:Array<any>}>)
    {
    items.forEach((item)=>{
      this.menuItems.push(item);
    })
  }

  getMenu(){
    return this.menuItems;
  }
}
