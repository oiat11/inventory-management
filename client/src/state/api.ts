import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface Product{
    productId: string;
    name: string;
    price: number;
    rating?: number;
    stockQuantity?: number;
}

export interface SaleSummary {
    saleSummaryId: string;
    totalSale: number;
    changePercentage: number;
    date: String
}

export interface PurchaseSummary {
    purchaseSummaryId: string;
    totalPurchased: number;
    changePercentage: number;
    date: String
}

export interface ExpenseSummary {
    expenseSummaryId: string;
    totalExpense: number;
    changePercentage: number;
    date: String
}

export interface ExpenseByCategorySummary {
    expenseByCategorySummaryId: string;
    category: string;
    amount: number;
    date: String
}

export interface DashboardMetrics {
    popularProducts: Product[];
    saleSummary: SaleSummary[];
    purchaseSummary: PurchaseSummary[];
    expenseSummary: ExpenseSummary[];
    expenseByCategorySummary: ExpenseByCategorySummary[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: 'api',
    tagTypes: ['DashboardMetrics'],
    endpoints:(build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({
            query: () => ({
                url: '/dashboard',
                method: 'GET',
            }),
            providesTags: ['DashboardMetrics'],
        }),
    }) 
});

export const {useGetDashboardMetricsQuery} = api;