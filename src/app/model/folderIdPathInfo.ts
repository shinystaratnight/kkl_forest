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


export interface FolderIdPathInfo { 
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
}

