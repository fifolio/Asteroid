import { Client, Account, Databases, } from 'appwrite';

export const appwriteConfig = {
    projectId: `${import.meta.env.VITE_APPWRITE_PROJECT_ID}`,
    endpoint: `${import.meta.env.VITE_APPWRITE_ENDPOINT_URL}`,
    database: `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`,
    collection_hot: `${import.meta.env.VITE_APPWRITE_COLL_HOT}`,
    collection_new: `${import.meta.env.VITE_APPWRITE_COLL_NEW}`,
    collection_blog: `${import.meta.env.VITE_APPWRITE_COLL_BLOG}`,
    collection_feature: `${import.meta.env.VITE_APPWRITE_COLL_FEATURE}`,
}

export const client = new Client();

client.setEndpoint(appwriteConfig.endpoint).setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);