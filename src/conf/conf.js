/* cspell:ignore appwrite */
const conf = {
    appwriteUrl: String(import.meta.env.VITE_APP_WRITE_URL),
    projectId: String(import.meta.env.VITE_PROJECT_ID),
    //apiKey: String(import.meta.env.VITE_APP_WRITE_API_KEY),
    databaseId: String(import.meta.env.VITE_APP_WRITE_DATABASE_ID),
    collectionId: String(import.meta.env.VITE_APP_WRITE_COLLECTION_ID),
    bucketId: String(import.meta.env.VITE_APP_WRITE_BUCKET_ID),
    //functionId: import.meta.env.VITE_APP_WRITE_FUNCTION_ID,
};
export default conf;

