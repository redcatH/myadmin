/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

export class IList<T> extends Array<T> {}
export class List<T> extends Array<T> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount: number;
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount!: number;
}

// customer definition
// empty

@Injectable({ providedIn: 'root' })
export class AbpTenantProxyService {
  constructor(private http: HttpClient) {}

  /**
   *
   */
  byName(
    params: {
      /**  */
      name: string;
    } = {} as any
  ): Observable<FindTenantResultDto> {
    let url = '/api/abp/multi-tenancy/tenants/by-name/';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<FindTenantResultDto>;
  }
  /**
   *
   */
  byId(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<FindTenantResultDto> {
    let url = '/api/abp/multi-tenancy/tenants/by-id/';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<FindTenantResultDto>;
  }
}

@Injectable({ providedIn: 'root' })
export class LoginProxyService {
  constructor(private http: HttpClient) {}

  /**
   *
   */
  login(
    params: {
      /** requestBody */
      body?: UserLoginInfo;
    } = {} as any
  ): Observable<AbpLoginResult> {
    let url = '/api/account/login';
    let options: any = {
      body: params.body,
      method: 'post'
    };
    return (this.http.request('post', url, options) as any) as Observable<AbpLoginResult>;
  }
  /**
   *
   */
  logout(): Observable<any> {
    let url = '/api/account/logout';
    let options: any = {
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<any>;
  }
  /**
   *
   */
  checkPassword(
    params: {
      /** requestBody */
      body?: UserLoginInfo;
    } = {} as any
  ): Observable<AbpLoginResult> {
    let url = '/api/account/checkPassword';
    let options: any = {
      body: params.body,
      method: 'post'
    };
    return (this.http.request('post', url, options) as any) as Observable<AbpLoginResult>;
  }
}

@Injectable({ providedIn: 'root' })
export class PublicProxyService {
  constructor(private http: HttpClient) {}

  /**
   *
   */
  currentUser(): Observable<AppUserDto> {
    let url = '/api/app/public/currentUser';
    let options: any = {
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<AppUserDto>;
  }
}

@Injectable({ providedIn: 'root' })
export class RoleProxyService {
  constructor(private http: HttpClient) {}

  /**
   *
   */
  all(): Observable<IdentityRoleDtoListResultDto> {
    let url = '/api/identity/roles/all';
    let options: any = {
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityRoleDtoListResultDto>;
  }
  /**
   *
   */
  roles(
    params: {
      /**  */
      sorting?: string;
      /**  */
      skipCount?: number;
      /**  */
      maxResultCount?: number;
    } = {} as any
  ): Observable<IdentityRoleDtoPagedResultDto> {
    let url = '/api/identity/roles';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityRoleDtoPagedResultDto>;
  }
  /**
   *
   */
  roles1(
    params: {
      /** requestBody */
      body?: IdentityRoleCreateDto;
    } = {} as any
  ): Observable<IdentityRoleDto> {
    let url = '/api/identity/roles';
    let options: any = {
      body: params.body,
      method: 'post'
    };
    return (this.http.request('post', url, options) as any) as Observable<IdentityRoleDto>;
  }
  /**
   *
   */
  roles2(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<IdentityRoleDto> {
    let url = '/api/identity/roles/';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityRoleDto>;
  }
  /**
   *
   */
  roles3(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: IdentityRoleUpdateDto;
    } = {} as any
  ): Observable<IdentityRoleDto> {
    let url = '/api/identity/roles/';
    let options: any = {
      params: { id: params.id },
      body: params.body,
      method: 'put'
    };
    return (this.http.request('put', url, options) as any) as Observable<IdentityRoleDto>;
  }
  /**
   *
   */
  roles4(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<any> {
    let url = '/api/identity/roles/';
    let options: any = {
      params: { id: params.id },
      method: 'delete'
    };
    return (this.http.request('delete', url, options) as any) as Observable<any>;
  }
}

@Injectable({ providedIn: 'root' })
export class UserProxyService {
  constructor(private http: HttpClient) {}

  /**
   *
   */
  users(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<IdentityUserDto> {
    let url = '/api/identity/users/';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityUserDto>;
  }
  /**
   *
   */
  users1(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: IdentityUserUpdateDto;
    } = {} as any
  ): Observable<IdentityUserDto> {
    let url = '/api/identity/users/';
    let options: any = {
      params: { id: params.id },
      body: params.body,
      method: 'put'
    };
    return (this.http.request('put', url, options) as any) as Observable<IdentityUserDto>;
  }
  /**
   *
   */
  users2(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<any> {
    let url = '/api/identity/users/';
    let options: any = {
      params: { id: params.id },
      method: 'delete'
    };
    return (this.http.request('delete', url, options) as any) as Observable<any>;
  }
  /**
   *
   */
  users3(
    params: {
      /**  */
      filter?: string;
      /**  */
      sorting?: string;
      /**  */
      skipCount?: number;
      /**  */
      maxResultCount?: number;
    } = {} as any
  ): Observable<IdentityUserDtoPagedResultDto> {
    let url = '/api/identity/users';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityUserDtoPagedResultDto>;
  }
  /**
   *
   */
  users4(
    params: {
      /** requestBody */
      body?: IdentityUserCreateDto;
    } = {} as any
  ): Observable<IdentityUserDto> {
    let url = '/api/identity/users';
    let options: any = {
      body: params.body,
      method: 'post'
    };
    return (this.http.request('post', url, options) as any) as Observable<IdentityUserDto>;
  }
  /**
   *
   */
  roles(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<IdentityRoleDtoListResultDto> {
    let url = '/api/identity/users//roles';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityRoleDtoListResultDto>;
  }
  /**
   *
   */
  roles1(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: IdentityUserUpdateRolesDto;
    } = {} as any
  ): Observable<any> {
    let url = '/api/identity/users//roles';
    let options: any = {
      params: { id: params.id },
      body: params.body,
      method: 'put'
    };
    return (this.http.request('put', url, options) as any) as Observable<any>;
  }
  /**
   *
   */
  byUsername(
    params: {
      /**  */
      username: string;
    } = {} as any
  ): Observable<IdentityUserDto> {
    let url = '/api/identity/users/by-username/';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityUserDto>;
  }
  /**
   *
   */
  byEmail(
    params: {
      /**  */
      email: string;
    } = {} as any
  ): Observable<IdentityUserDto> {
    let url = '/api/identity/users/by-email/';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<IdentityUserDto>;
  }
}

@Injectable({ providedIn: 'root' })
export class UserLookupProxyService {
  constructor(private http: HttpClient) {}

  /**
   *
   */
  lookup(
    params: {
      /**  */
      id: string;
    } = {} as any
  ): Observable<UserData> {
    let url = '/api/identity/users/lookup/';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<UserData>;
  }
  /**
   *
   */
  byUsername(
    params: {
      /**  */
      userName: string;
    } = {} as any
  ): Observable<UserData> {
    let url = '/api/identity/users/lookup/by-username/';
    const _copy: any = { ...params };
    let options: any = {
      params: new HttpParams({ fromObject: _copy }),
      method: 'get'
    };
    return (this.http.request('get', url, options) as any) as Observable<UserData>;
  }
}

export interface ControllerInterfaceApiDescriptionModel {
  /**  */
  type?: string;
}

export interface MethodParameterApiDescriptionModel {
  /**  */
  name?: string;

  /**  */
  typeAsString?: string;

  /**  */
  type?: string;

  /**  */
  typeSimple?: string;

  /**  */
  isOptional?: boolean;

  /**  */
  defaultValue?: object;
}

export interface ParameterApiDescriptionModel {
  /**  */
  nameOnMethod?: string;

  /**  */
  name?: string;

  /**  */
  type?: string;

  /**  */
  typeSimple?: string;

  /**  */
  isOptional?: boolean;

  /**  */
  defaultValue?: object;

  /**  */
  constraintTypes?: string[];

  /**  */
  bindingSourceId?: string;

  /**  */
  descriptorName?: string;
}

export interface ReturnValueApiDescriptionModel {
  /**  */
  type?: string;

  /**  */
  typeSimple?: string;
}

export interface ActionApiDescriptionModel {
  /**  */
  uniqueName?: string;

  /**  */
  name?: string;

  /**  */
  httpMethod?: string;

  /**  */
  url?: string;

  /**  */
  supportedVersions?: string[];

  /**  */
  parametersOnMethod?: MethodParameterApiDescriptionModel[];

  /**  */
  parameters?: ParameterApiDescriptionModel[];

  /**  */
  returnValue?: ReturnValueApiDescriptionModel;
}

export interface ControllerApiDescriptionModel {
  /**  */
  controllerName?: string;

  /**  */
  type?: string;

  /**  */
  interfaces?: ControllerInterfaceApiDescriptionModel[];

  /**  */
  actions?: object;
}

export interface ModuleApiDescriptionModel {
  /**  */
  rootPath?: string;

  /**  */
  remoteServiceName?: string;

  /**  */
  controllers?: object;
}

export interface PropertyApiDescriptionModel {
  /**  */
  name?: string;

  /**  */
  type?: string;

  /**  */
  typeSimple?: string;
}

export interface TypeApiDescriptionModel {
  /**  */
  baseType?: string;

  /**  */
  isEnum?: boolean;

  /**  */
  enumNames?: string[];

  /**  */
  enumValues?: object[];

  /**  */
  properties?: PropertyApiDescriptionModel[];
}

export interface ApplicationApiDescriptionModel {
  /**  */
  modules?: object;

  /**  */
  types?: object;
}

export interface RemoteServiceValidationErrorInfo {
  /**  */
  message?: string;

  /**  */
  members?: string[];
}

export interface RemoteServiceErrorInfo {
  /**  */
  code?: string;

  /**  */
  message?: string;

  /**  */
  details?: string;

  /**  */
  validationErrors?: RemoteServiceValidationErrorInfo[];
}

export interface RemoteServiceErrorResponse {
  /**  */
  error?: RemoteServiceErrorInfo;
}

export interface LanguageInfo {
  /**  */
  cultureName?: string;

  /**  */
  uiCultureName?: string;

  /**  */
  displayName?: string;

  /**  */
  flagIcon?: string;
}

export interface DateTimeFormatDto {
  /**  */
  calendarAlgorithmType?: string;

  /**  */
  dateTimeFormatLong?: string;

  /**  */
  shortDatePattern?: string;

  /**  */
  fullDateTimePattern?: string;

  /**  */
  dateSeparator?: string;

  /**  */
  shortTimePattern?: string;

  /**  */
  longTimePattern?: string;
}

export interface CurrentCultureDto {
  /**  */
  displayName?: string;

  /**  */
  englishName?: string;

  /**  */
  threeLetterIsoLanguageName?: string;

  /**  */
  twoLetterIsoLanguageName?: string;

  /**  */
  isRightToLeft?: boolean;

  /**  */
  cultureName?: string;

  /**  */
  name?: string;

  /**  */
  nativeName?: string;

  /**  */
  dateTimeFormat?: DateTimeFormatDto;
}

export interface ApplicationLocalizationConfigurationDto {
  /**  */
  values?: object;

  /**  */
  languages?: LanguageInfo[];

  /**  */
  currentCulture?: CurrentCultureDto;

  /**  */
  defaultResourceName?: string;
}

export interface ApplicationAuthConfigurationDto {
  /**  */
  policies?: object;

  /**  */
  grantedPolicies?: object;
}

export interface ApplicationSettingConfigurationDto {
  /**  */
  values?: object;
}

export interface CurrentUserDto {
  /**  */
  isAuthenticated?: boolean;

  /**  */
  id?: string;

  /**  */
  tenantId?: string;

  /**  */
  userName?: string;
}

export interface ApplicationFeatureConfigurationDto {
  /**  */
  values?: object;
}

export interface MultiTenancyInfoDto {
  /**  */
  isEnabled?: boolean;
}

export interface CurrentTenantDto {
  /**  */
  id?: string;

  /**  */
  name?: string;

  /**  */
  isAvailable?: boolean;
}

export interface LocalizableStringDto {
  /**  */
  name?: string;

  /**  */
  resource?: string;
}

export interface ExtensionPropertyApiGetDto {
  /**  */
  isAvailable?: boolean;
}

export interface ExtensionPropertyApiCreateDto {
  /**  */
  isAvailable?: boolean;
}

export interface ExtensionPropertyApiUpdateDto {
  /**  */
  isAvailable?: boolean;
}

export interface ExtensionPropertyApiDto {
  /**  */
  onGet?: ExtensionPropertyApiGetDto;

  /**  */
  onCreate?: ExtensionPropertyApiCreateDto;

  /**  */
  onUpdate?: ExtensionPropertyApiUpdateDto;
}

export interface ExtensionPropertyUiTableDto {
  /**  */
  isVisible?: boolean;
}

export interface ExtensionPropertyUiFormDto {
  /**  */
  isVisible?: boolean;
}

export interface ExtensionPropertyUiDto {
  /**  */
  onTable?: ExtensionPropertyUiTableDto;

  /**  */
  onCreateForm?: ExtensionPropertyUiFormDto;

  /**  */
  onEditForm?: ExtensionPropertyUiFormDto;
}

export interface ExtensionPropertyAttributeDto {
  /**  */
  type?: string;

  /**  */
  typeSimple?: string;

  /**  */
  configuration?: object;
}

export interface ExtensionPropertyDto {
  /**  */
  type?: string;

  /**  */
  typeSimple?: string;

  /**  */
  displayName?: LocalizableStringDto;

  /**  */
  api?: ExtensionPropertyApiDto;

  /**  */
  ui?: ExtensionPropertyUiDto;

  /**  */
  attributes?: ExtensionPropertyAttributeDto[];

  /**  */
  configuration?: object;
}

export interface EntityExtensionDto {
  /**  */
  properties?: object;

  /**  */
  configuration?: object;
}

export interface ModuleExtensionDto {
  /**  */
  entities?: object;

  /**  */
  configuration?: object;
}

export interface ObjectExtensionsDto {
  /**  */
  modules?: object;
}

export interface ApplicationConfigurationDto {
  /**  */
  localization?: ApplicationLocalizationConfigurationDto;

  /**  */
  auth?: ApplicationAuthConfigurationDto;

  /**  */
  setting?: ApplicationSettingConfigurationDto;

  /**  */
  currentUser?: CurrentUserDto;

  /**  */
  features?: ApplicationFeatureConfigurationDto;

  /**  */
  multiTenancy?: MultiTenancyInfoDto;

  /**  */
  currentTenant?: CurrentTenantDto;

  /**  */
  objectExtensions?: ObjectExtensionsDto;
}

export interface FindTenantResultDto {
  /**  */
  success?: boolean;

  /**  */
  tenantId?: string;

  /**  */
  name?: string;
}

export interface RegisterDto {
  /**  */
  userName?: string;

  /**  */
  emailAddress?: string;

  /**  */
  password?: string;

  /**  */
  appName?: string;
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

export interface IValueValidator {
  /**  */
  name?: string;

  /**  */
  properties?: object;
}

export interface IStringValueType {
  /**  */
  name?: string;

  /**  */
  properties?: object;

  /**  */
  validator?: IValueValidator;
}

export interface FeatureDto {
  /**  */
  name?: string;

  /**  */
  displayName?: string;

  /**  */
  value?: string;

  /**  */
  description?: string;

  /**  */
  valueType?: IStringValueType;

  /**  */
  depth?: number;

  /**  */
  parentName?: string;
}

export interface FeatureListDto {
  /**  */
  features?: FeatureDto[];
}

export interface UpdateFeatureDto {
  /**  */
  name?: string;

  /**  */
  value?: string;
}

export interface UpdateFeaturesDto {
  /**  */
  features?: UpdateFeatureDto[];
}

export interface UserLoginInfo {
  /**  */
  userNameOrEmailAddress?: string;

  /**  */
  password?: string;

  /**  */
  rememberMe?: boolean;

  /**  */
  tenanId?: string;
}

export interface AbpLoginResult {
  /**  */
  result?: LoginResultType;

  /**  */
  description?: string;
}

export interface ProviderInfoDto {
  /**  */
  providerName?: string;

  /**  */
  providerKey?: string;
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

export interface PermissionGroupDto {
  /**  */
  name?: string;

  /**  */
  displayName?: string;

  /**  */
  permissions?: PermissionGrantInfoDto[];
}

export interface GetPermissionListResultDto {
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

export interface ProfileDto {
  /**  */
  userName?: string;

  /**  */
  email?: string;

  /**  */
  name?: string;

  /**  */
  surname?: string;

  /**  */
  phoneNumber?: string;

  /**  */
  extraProperties?: object;
}

export interface UpdateProfileDto {
  /**  */
  userName?: string;

  /**  */
  email?: string;

  /**  */
  name?: string;

  /**  */
  surname?: string;

  /**  */
  phoneNumber?: string;

  /**  */
  extraProperties?: object;
}

export interface ChangePasswordInput {
  /**  */
  currentPassword?: string;

  /**  */
  newPassword?: string;
}

export interface AppUserDto {
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
  nickname?: string;

  /**  */
  headImgUrl?: string;
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
  extraProperties?: object;
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

export interface UserData {
  /**  */
  id?: string;

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
}

export type LoginResultType = 1 | 2 | 3 | 4 | 5;
