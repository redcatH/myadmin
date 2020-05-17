export interface PermissionListResultDto {
    /**  */
    entityDisplayName?: string;
  
    /**  */
    groups?: PermissionGroupDto[];
  }

  export interface UpdatePermissionDto {
    /**  */
    name?: string;
  
    /**  */
    isGranted?: boolean;
  }
  

  export interface UpdatePermissionsDto {
    /**  */
    permissions?: UpdatePermissionDto[];
  }

  export interface PermissionGroupDto {
    /**  */
    name?: string;
  
    /**  */
    displayName?: string;
  
    /**  */
    permissions?: PermissionGrantInfoDto[];
  }

  export interface PermissionGrantInfoDto {
    /**  */
    name?: string;
  
    /**  */
    displayName?: string;
  
    /**  */
    parentName?: string;
  
    /**  */
    isGranted?: boolean;
  
    /**  */
    allowedProviders?: string[];
  
    /**  */
    grantedProviders?: ProviderInfoDto[];
  }

  export interface ProviderInfoDto {
    /**  */
    providerName?: string;
  
    /**  */
    providerKey?: string;
  }