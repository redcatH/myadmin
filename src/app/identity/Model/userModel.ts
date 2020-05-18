export interface IdentityUserUpdateDto {
    /**  */
    password?: string;
  
    /**  */
    concurrencyStamp?: string;
  
    /**  */
    userName?: string;
  
    /**  */
    name?: string;
  
    /**  */
    surname?: string;
  
    /**  */
    email?: string;
  
    /**  */
    phoneNumber?: string;
  
    /**  */
    twoFactorEnabled?: boolean;
  
    /**  */
    lockoutEnabled?: boolean;
  
    /**  */
    roleNames?: string[];
  
    /**  */
    extraProperties?: object;
  }
  export interface IdentityUserDto {
    /**  */
    tenantId?: string;
  
    /**  */
    userName?: string;
  
    /**  */
    name?: string;
  
    /**  */
    surname?: string;
  
    /**  */
    email?: string;
  
    /**  */
    emailConfirmed?: boolean;
  
    /**  */
    phoneNumber?: string;
  
    /**  */
    phoneNumberConfirmed?: boolean;
  
    /**  */
    twoFactorEnabled?: boolean;
  
    /**  */
    lockoutEnabled?: boolean;
  
    /**  */
    lockoutEnd?: Date;
  
    /**  */
    concurrencyStamp?: string;
  
    /**  */
    isDeleted?: boolean;
  
    /**  */
    deleterId?: string;
  
    /**  */
    deletionTime?: Date;
  
    /**  */
    lastModificationTime?: Date;
  
    /**  */
    lastModifierId?: string;
  
    /**  */
    creationTime?: Date;
  
    /**  */
    creatorId?: string;
  
    /**  */
    id?: string;
  
    /**  */
    extraProperties?: object;
  }
  export interface IdentityUserDtoPagedResultDto {
    /**  */
    totalCount?: number;
  
    /**  */
    items?: IdentityUserDto[];
  }
  
  export interface IdentityUserCreateDto {
    /**  */
    password?: string;
  
    /**  */
    userName?: string;
  
    /**  */
    name?: string;
  
    /**  */
    surname?: string;
  
    /**  */
    email?: string;
  
    /**  */
    phoneNumber?: string;
  
    /**  */
    twoFactorEnabled?: boolean;
  
    /**  */
    lockoutEnabled?: boolean;
  
    /**  */
    roleNames?: string[];
  
    /**  */
    extraProperties?: object;
  }
  
  export interface IdentityUserUpdateRolesDto {
    /**  */
    roleNames?: string[];
  }