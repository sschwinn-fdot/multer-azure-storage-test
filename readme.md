This project contains an express app to accept form/multipart requests to test uploading files to azure blob storage via the existing code for the package multer-azure-blob-storage (multers/MulterAzureStorage.ts), and an updated version (multers/MulterAzureStorageV2.ts), which has been updated to use Microsoft's newer @azure/blob-storage package.

To run - add a .env file at the root with the following keys
# Environment variable names from multer code
AZURE_STORAGE_CONNECTION_STRING=any valid blob storage connection string
AZURE_STORAGE_ACCESS_KEY=storage account access key
AZURE_STORAGE_ACCOUNT=storage account name
AZURE_STORAGE_SAS_TOKEN=valid SAS token for this account
AZURE_STORAGE_CONTAINER_NAME=container name

# Environment variable names to test passing explicitly
ENV_STORAGE_CONNECTION_STRING=any valid blob storage connection string
ENV_STORAGE_ACCESS_KEY=storage account access key
ENV_STORAGE_ACCOUNT=storage account name
ENV_STORAGE_SAS_TOKEN=valid SAS token for this account
ENV_STORAGE_CONTAINER_NAME=container name

# Azure credentials
AZURE_CLIENT_ID=app registration client ID
AZURE_TENANT_ID=tenant ID
AZURE_CLIENT_SECRET=app registration client secret

For the Azure Credentials section you can enter any valid Azure credentials as described here.
<https://learn.microsoft.com/en-us/javascript/api/overview/azure/identity-readme?view=azure-node-latest#environment-variables>

To test - run command 'npm start' to build and start the express server. When it starts up, send a POST request with form-data to the endpoints (example, <http://localhost:3001/uploadSas>), where one kvp has key "files" and value of at least one file. This was tested with Postman - if you create a post request and select 'form-data' for the body format, add a key with name 'files', hover over the right side of the entry box and you can select from 'text' or 'file'. Select option 'file' and you can choose a file to send.
