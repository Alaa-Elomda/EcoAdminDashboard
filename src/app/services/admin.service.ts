import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private myClient: HttpClient) {}
  // private baseURL = 'http://localhost:3000';
  // private productURL = 'http://localhost:3000/product';
  // private orderURL = 'http://localhost:3000/order';
  // private userURL = 'http://localhost:3000/user';
  // private categoryURL = 'http://localhost:3000/category';
  private baseURL = 'https://eco-back-9qg1.onrender.com';
  private productURL = 'https://eco-back-9qg1.onrender.com/product';
  private orderURL = 'https://eco-back-9qg1.onrender.com/order';
  private userURL = 'https://eco-back-9qg1.onrender.com/user';
  private categoryURL = 'https://eco-back-9qg1.onrender.com/category';

  //Methods

  // 1)Get All Products
  getAllProducts() {
    return this.myClient.get(this.productURL);
  }

  // 2)Get Student By ID
  getProductByID(id: any) {
    return this.myClient.get(`${this.productURL}/${id}`);
  }

  // 3)Update Student By ID
  UpdateProductByID(id: any, editedProduct: any) {
    return this.myClient.patch(`${this.productURL}/${id}`, editedProduct);
  }

  AddNewProduct(newProduct: any) {
    return this.myClient.post(this.productURL, newProduct);
  }

  deleteProduct(id: any) {
    return this.myClient.delete(`${this.productURL}/${id}`);
  }

  /*Order operations */
  getAllOrders() {
    return this.myClient.get(this.orderURL);
  }
  getOrderByID(id: any) {
    // return this.myClient.get(this.BaseURL+"/"+id);
    return this.myClient.get(`${this.orderURL}/${id}`);
  }
  UpdateOrderByID(id: any, editedOrder: any) {
    // return this.myClient.get(this.BaseURL+"/"+id);
    return this.myClient.patch(`${this.orderURL}/${id}`, editedOrder);
  }
  deleteOrder(id: any) {
    return this.myClient.delete(`${this.orderURL}/${id}`);
  }

  /*user operations */
  // 1)Get All Users
  getAllUsers() {
    return this.myClient.get(this.userURL);
  }

  // 2)Get User By ID
  getUserByID(id: any) {
    // return this.myClient.get(this.BaseURL+"/"+id);
    return this.myClient.get(`${this.userURL}/${id}`);
  }

  deleteUser(id: any) {
    return this.myClient.delete(`${this.userURL}/${id}`);
  }

  UpdateProductImage(id: any, image: any) {
    return this.myClient.patch(`${this.productURL}/image/${id}`, image);
  }

  getImage(id: any) {
    // return this.myClient.get(this.BaseURL+"/"+id);
    return this.myClient.get(`${this.baseURL}/image/${id}`);
  }

  getCategories() {
    return this.myClient.get(this.categoryURL);
  }
  getCategoryByID(id: any) {
    return this.myClient.get(`${this.categoryURL}/${id}`);
  }
  addCategory(newCategory: any) {
    return this.myClient.post(this.categoryURL, newCategory);
  }
  UpdateCategoryById(id: any, editedCategory: any) {
    return this.myClient.patch(`${this.categoryURL}/${id}`, editedCategory);
  }

  deleteCategory(id: any) {
    return this.myClient.delete(`${this.categoryURL}/${id}`);
  }
}
