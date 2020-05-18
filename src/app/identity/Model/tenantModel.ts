export interface TenantDto {
    /**  */
    name?: string;
  
    /**  */
    id?: string;
  
    /**  */
    extraProperties?: object;
  }
  
  export interface TenantUpdateDto {
    /**  */
    name?: string;
  
    /**  */
    // extraProperties?: object;
  }

  
export interface TenantDtoPagedResultDto {
    /**  */
    totalCount?: number;
  
    /**  */
    items?: TenantDto[];
  }
  
  export interface TenantCreateDto {
    /**  */
    adminEmailAddress?: string;
  
    /**  */
    adminPassword?: string;
  
    /**  */
    name?: string;
  
    /**  */
    extraProperties?: object;
  }