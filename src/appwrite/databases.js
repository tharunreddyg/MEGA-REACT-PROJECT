// cspell:ignore appwrite
import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  account;
  databases;
  bucket;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, FeaturedImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.collectionId,
        ID.unique(),
        slug,
        { title, content, FeaturedImage, status, userId },
      );
    } catch (error) {
      console.log("Error creating post:", error);
    }
  }

  async updatePosts(
    slug,
    { title, content, FeaturedImage, status: postStatus },
  ) {
    try {
      return await this.databases.updateDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        { title, content, FeaturedImage, status: postStatus },
      );
    } catch (error) {
      console.log("Error updating post:", error);
    }
  }

  async deletePosts(slug) {
    try {
      await this.databases.deleteDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
      );
      return true;
    } catch (error) {
      console.log("Error in Delete Post:", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
      );
    } catch (error) {
      console.log("Error at getPost:", error);
      return false;
    }
  }
  async getPosts(queries = []) {
    try {
      const queryList = queries.length ? queries : [Query.equal("status", "active")];
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.collectionId,
        queryList,
      );
    } catch (error) {
      console.log("Error at getPosts:", error);
      return false;
    }
  }
  async uploadFile(file){
    try{
      return await this.bucket.createFile(
        conf.bucketId,
        ID.unique(),
        file
      );
    }catch(error){
      console.log("Error at uploadFile",error);
    }
  }

  async deleteFile(fileId){
    try{
      return await this.bucket.deleteFile(
        conf.bucketId,
        fileId
      )
    }catch(error){
      console.log("Error at DeleteFile",error);
    }
  }
  async getFilePreview(fileId){
    try{
      return await this.bucket.getFilePreview(
        conf.bucketId,
        fileId
      )
    }catch(error){
      console.log("Error at getFilePreview",error);
      return false;
    }
  }

}

const services = new Service();
export default services;
