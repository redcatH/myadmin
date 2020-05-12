import { Store, StoreConfig } from "@datorama/akita";
import { Time } from "@angular/common";
import { Injectable } from '@angular/core';

export interface ossConfigState {
  cdnHost: string;
  uploadHost: string;
  expire: Date;
  token: string;
}

export function createInitialState(): ossConfigState {
  return {
    cdnHost: "String",
    uploadHost: "String",
    expire: new Date(),
    token: ""
  };
}

@Injectable({providedIn:"root"})
@StoreConfig({ name: "oss" })
export class OssStore extends Store<ossConfigState> {
    constructor(){
        super(createInitialState())
    }
}
