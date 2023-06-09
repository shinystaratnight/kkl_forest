/**
 * KKL Dctm Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface FolderContentInfo { 
    /**
     * The id of the application
     */
    appId: string;
    /**
     * The id of the document in Documentum
     */
    objectId?: string;
    /**
     * The folder path in Documentum
     */
    folderPath?: string;
    /**
     * The unique identifier attribute in Documentum
     */
    uniqueIdentAttr?: string;
    /**
     * The unique identifier value to query Documentum
     */
    uniqueIdentValue?: string;
    /**
     * The index of the requested page starts from 0
     */
    pageNumber?: number;
    /**
     * Number of items in the page
     */
    pageSize?: number;
    /**
     * Query filter ALL folders and documents
     */
    filter?: FolderContentInfo.FilterEnum;
}
export namespace FolderContentInfo {
    export type FilterEnum = 'ALL' | 'FOLDERS' | 'DOCUMENTS';
    export const FilterEnum = {
        All: 'ALL' as FilterEnum,
        Folders: 'FOLDERS' as FilterEnum,
        Documents: 'DOCUMENTS' as FilterEnum
    };
}


