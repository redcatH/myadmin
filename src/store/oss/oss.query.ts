import { Query } from "@datorama/akita";
import { ossConfigState, OssStore } from './oss.store';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class OssQuery extends Query<ossConfigState>{
    isExpired$ = this.select(state=>{
        state.expire<new Date()
    });
    token$=this.select(state=> state.token);
    uploadHost$=this.select(state=> state.uploadHost);
    cdnHost$=this.select(state=> state.cdnHost);
    constructor(protected state: OssStore){
        super(state);
    }
}