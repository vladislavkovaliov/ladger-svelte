/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface DtoCategoryResponse {
  /** @example "cat_123" */
  CategoryName: string;
  /** @example "2026-01-20T00:00:00Z" */
  CreatedAt: string;
  /** @example "64f8c..." */
  ID: string;
  /** @example "2026-01-20T00:00:00Z" */
  UpdatedAt: string;
}

export interface DtoConfigResponse {
  /** @example "8080" */
  Port: string;
  /** @example "ok" */
  Secret: string;
  /** @example "ok" */
  Status: string;
  /** @example "ok" */
  "http://localhost:27017": string;
}

export interface DtoCreateCategoryRequest {
  /** @example "cat_123" */
  CategoryName: string;
}

export interface DtoCreatePaymentRequest {
  /** @example 1500 */
  Amount: number;
  /** @example "cat_123" */
  CategoryID: string;
}

export interface DtoErrorResponse {
  /** @example "internal server error" */
  error: string;
}

export interface DtoHealthResponse {
  /** @example "ok" */
  Status: string;
}

export interface DtoLoginRequest {
  Email: string;
  Password: string;
}

export interface DtoLoginResponse {
  Token: string;
}

export interface DtoPaymentResponse {
  /** @example 1500 */
  Amount: number;
  /** @example "cat_123" */
  CategoryID: string;
  /** @example "2026-01-20T00:00:00Z" */
  CreatedAt: string;
  /** @example "64f8c..." */
  ID: string;
  /** @example "2026-01-20T00:00:00Z" */
  UpdatedAt: string;
}

export interface DtoRegisterRequest {
  /** @example "test@mail.com" */
  Email: string;
  /** @example "123456" */
  Password: string;
}

export interface DtoUserResponse {
  /** @example "2026-01-20T00:00:00Z" */
  CreatedAt: string;
  /** @example "test@mail.com" */
  Email: string;
  /** @example "64f8c..." */
  ID: string;
}

export type CreateCreateData = DtoUserResponse;

export type LoginCreateData = DtoLoginResponse;

export type ProtectedListData = DtoHealthResponse;

export type CategoriesListData = DtoCategoryResponse[];

export type CategoriesCreateData = DtoCategoryResponse;

export type ConfigListData = DtoConfigResponse;

export type HealthListData = DtoHealthResponse;

export type PaymentsListData = DtoPaymentResponse[];

export type PaymentsCreateData = DtoPaymentResponse;

export type UsersListData = DtoUserResponse[];
