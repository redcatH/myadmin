
export namespace Identity{
    export interface State{
        roles?:IdentityRoleDto[];
    }
}



export interface IdentityRoleDtoListResultDto {
    /**  */
    items?: IdentityRoleDto[];
  }
  
  export interface IdentityRoleDtoPagedResultDto {
    /**  */
    totalCount?: number;
  
    /**  */
    items?: IdentityRoleDto[];
  }
  
  export interface IdentityRoleCreateDto {
    /**  */
    name?: string;
  
    /**  */
    isDefault?: boolean;
  
    /**  */
    isPublic?: boolean;
  
    /**  */
    extraProperties?: object;
  }
  
  export interface IdentityRoleUpdateDto {
    /**  */
    concurrencyStamp?: string;
  
    /**  */
    name?: string;
  
    /**  */
    isDefault?: boolean;
  
    /**  */
    isPublic?: boolean;
  
    /**  */
    extraProperties?: object;
  }


  export interface IdentityRoleDto {
    /**  */
    name?: string;
  
    /**  */
    isDefault?: boolean;
  
    /**  */
    isStatic?: boolean;
  
    /**  */
    isPublic?: boolean;
  
    /**  */
    concurrencyStamp?: string;
  
    /**  */
    id?: string;
  
    /**  */
    extraProperties?: object;
  }