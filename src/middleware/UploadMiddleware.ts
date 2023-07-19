const multer = require("multer");
import { MulterAzureStorage } from "../multers";
import { MulterAzureStorageV2 } from "../multers";

//Confirm existing code works pulling vals directly from .env file
const azureStorageV1 = new MulterAzureStorage({
  containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
  containerAccessLevel: "blob",
  //urlExpirationTime: 60,
});

//Confirm it passing explicit values instead
const azureStorageV1a = new MulterAzureStorage({
  connectionString: process.env.ENV_STORAGE_CONNECTION_STRING,
  accessKey: process.env.ENV_STORAGE_ACCESS_KEY,
  accountName: process.env.ENV_STORAGE_ACCOUNT_NAME,
  containerName: process.env.ENV_STORAGE_CONTAINER_NAME,
  containerAccessLevel: "blob",
  urlExpirationTime: 60,
});

//Try out new authentication methods
const azureStorageV2AzureAd = new MulterAzureStorageV2({
    authenticationType: "azure ad",
    accountName: process.env.AZURE_STORAGE_ACCOUNT_NAME,
    containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
    containerAccessLevel: "blob",
    urlExpirationTime: 60,
  });

  const azureStorageV2Conn = new MulterAzureStorageV2({
    authenticationType: "connection string",
    connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
    containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
    containerAccessLevel: "blob",
    urlExpirationTime: 60,
  });

  const azureStorageV2Sas = new MulterAzureStorageV2({
    authenticationType: "sas token",
    sasToken: process.env.AZURE_STORAGE_SAS_TOKEN,
    accessKey: process.env.AZURE_STORAGE_ACCESS_KEY,
    accountName: process.env.AZURE_STORAGE_ACCOUNT_NAME,
    containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
    containerAccessLevel: "blob",
    urlExpirationTime: 60,
  });

  //Confirm new updated version is backward compatible
  const azureStorageV2BackwardComp = new MulterAzureStorageV2({   
    connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
    accessKey: process.env.AZURE_STORAGE_ACCESS_KEY,
    accountName: process.env.AZURE_STORAGE_ACCOUNT_NAME,
    containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
    containerAccessLevel: "blob",
    urlExpirationTime: 60,
  });

console.log("Exporting multers");

export const uploadV1 = multer({
  storage: azureStorageV1,
});

export const uploadAd = multer({
    storage: azureStorageV2AzureAd,
});

export const uploadConn = multer({
    storage: azureStorageV2Conn,
});

export const uploadSas = multer({
    storage: azureStorageV2Sas,
});

export const uploadBack = multer({
    storage: azureStorageV2BackwardComp,
});