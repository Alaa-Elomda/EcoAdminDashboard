import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { AdminService } from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http';

// interface User {
//   _id: string;
//   name: string;
//   gender: string;
// }

// interface product {
//   _id: string;
//   name: string;
//   category: string;
// }

// interface Category {
//   id: number;
//   categoryName: string;
// }

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  malePercentage: number = 0;
  femalePercentage: number = 0;
  totalUsersCount: number = 0;
  maleUsersCount: number = 0;
  femaleUsersCount: number = 0;

  products: any[] = [];
  categoryPercentages: { [category: string]: number } = {};
  categoryCounts: { [category: string]: number } = {};

  orders: any[] = [];
  totalOrdersCount = 0;
  acceptedOrdersCount = 0;
  acceptedOrdersPercentage = 0;
  pendingOrdersCount = 0;
  pendingOrdersPercentage = 0;
  rejectedOrdersCount = 0;
  rejectedOrdersPercentage = 0;

  totalProductsCount = 0;
  categoryCount = 0;

  categories: any[] = [];

  chartBarData: any = {};
  chartPieData: any = {};
  chartDoughnutData: any = {};

  constructor(public myService: AdminService) {}

  private calculateGenderPercentage(): void {
    const totalUsers = this.users.length;
    const maleUsers = this.users.filter(
      (user) => user.gender === 'Male'
    ).length;
    const femaleUsers = this.users.filter(
      (user) => user.gender === 'Female'
    ).length;

    this.malePercentage = (maleUsers / totalUsers) * 100;
    this.femalePercentage = (femaleUsers / totalUsers) * 100;
    this.totalUsersCount = totalUsers;
    this.maleUsersCount = maleUsers;
    this.femaleUsersCount = femaleUsers;

    this.initializeChart();
  }

  private calculateCategoryPercentage(): void {
    const categoryCounts: { [category: string]: number } = {};

    this.products.forEach((product) => {
      if (product.category in categoryCounts) {
        categoryCounts[product.category]++;
      } else {
        categoryCounts[product.category] = 1;
      }
    });

    const totalProducts = this.products.length;
    const categoryPercentages: { [category: string]: number } = {};

    Object.entries(categoryCounts).forEach(([category, count]) => {
      categoryPercentages[category] = (count / totalProducts) * 100;
    });

    const categoryCount = Object.keys(categoryCounts).length;

    this.categoryCounts = categoryCounts;
    this.categoryPercentages = categoryPercentages;
    this.totalProductsCount = totalProducts;
    this.categories = Object.keys(categoryPercentages);
    this.categoryCount = categoryCount;

    this.initializeChart();
  }

  private calculateOrdersCount(): void {
    const totalOrders = this.orders.length;
    const acceptedOrders = this.orders.filter(
      (order) => order.orderStatus === 'Accepted'
    );
    const pendingOrders = this.orders.filter(
      (order) => order.orderStatus === 'Pending'
    );
    const rejectedOrders = this.orders.filter(
      (order) => order.orderStatus === 'Rejected'
    );
    const acceptedOrdersCount = acceptedOrders.length;
    const pendingOrdersCount = pendingOrders.length;
    const rejectedOrdersCount = rejectedOrders.length;
    const acceptedOrdersPercentage = (acceptedOrdersCount / totalOrders) * 100;
    const pendingOrdersPercentage = (pendingOrdersCount / totalOrders) * 100;
    const rejectedOrdersPercentage = (rejectedOrdersCount / totalOrders) * 100;

    this.totalOrdersCount = totalOrders;
    this.acceptedOrdersCount = acceptedOrdersCount;
    this.pendingOrdersCount = pendingOrdersCount;
    this.rejectedOrdersCount = rejectedOrdersCount;
    this.acceptedOrdersPercentage = acceptedOrdersPercentage;
    this.pendingOrdersPercentage = pendingOrdersPercentage;
    this.rejectedOrdersPercentage = rejectedOrdersPercentage;

    this.initializeChart();
  }

  private getCategoryNames(): void {
    const categoryNames = this.categories.map(
      (category) => category.categoryName
    );
    this.categories = categoryNames;
    this.initializeChart();
  }

  private initializeChart(): void {
    const topCategories = Object.entries(this.categoryCounts)
      .sort((a, b) => b[1] - a[1]) // sort by count in descending order
      .slice(0, 7); // get the top 7 categories by count

    const data = topCategories.map(([category, count]) => count);
    this.chartBarData = {
      labels: [...this.categories].slice(0, 7),
      datasets: [
        {
          label: 'Product Counts',
          backgroundColor: '#f87979',
          data,
        },
      ],
    };

    this.chartPieData = {
      labels: ['Products', 'Users', 'Orders'],
      datasets: [
        {
          data: [
            this.totalProductsCount,
            this.totalUsersCount,
            this.totalOrdersCount,
          ],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    this.chartDoughnutData = {
      labels: ['All Users', 'Males', 'Females'],
      datasets: [
        {
          backgroundColor: ['#41B883', '#00D8FF', '#E46651'],
          data: [
            this.totalUsersCount,
            this.maleUsersCount,
            this.femaleUsersCount,
          ],
        },
      ],
    };
  }

  ngOnInit(): void {
    //to calculate the percentage per each category of products
    this.calculateCategoryPercentage();

    this.myService.getAllUsers().subscribe(
      (response: any) => {
        this.users = Object.values(response);
        this.calculateGenderPercentage();
      },
      (error) => {
        console.log(error);
      }
    );

    this.myService.getAllProducts().subscribe(
      (response: any) => {
        this.products = Object.values(response);
        this.calculateCategoryPercentage();
      },
      (error) => {
        console.log(error);
      }
    );

    this.myService.getAllOrders().subscribe(
      (response: any) => {
        this.orders = Object.values(response);
        this.calculateOrdersCount();
      },
      (error) => {
        console.log(error);
      }
    );

    this.myService.getCategories().subscribe(
      (response: any) => {
        this.categories = Object.values(response);
        this.getCategoryNames();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
