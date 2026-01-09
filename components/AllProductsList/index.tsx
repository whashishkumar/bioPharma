/** @format */

'use client';
import React, { useEffect, useState, Suspense } from 'react';
import Sidebar from './Sidebar';
import ProductListing from './ProductListing';
import { useAllProductsPageContext } from '@/context/AllProductsContext';
import Pagination from '@/ui/Pagination';
import { useRouter } from 'next/navigation';
import Loader from '@/ui/Loader';

export default function AllProductsList({ category }: any) {
	const {
		loading,
		productLoading,
		loadingProducts,
		categoryList,
		fetchAllCategoryList,
		productTypeList,
		fetchAllProductTypes,
		allProductsList,
		fetchOurProductList,
	} = useAllProductsPageContext();

	const router = useRouter();

	const { data } = categoryList || {};
	const { data: productsTypes = [] } = productTypeList || {};

	//Handle case where allProductsList might be an array or object with pagination
	const isArrayResponse = Array.isArray(allProductsList);
	const currentPageFromApi = isArrayResponse
		? 1
		: (allProductsList as any)?.current_page || 1;
	const totalPages = isArrayResponse
		? 1
		: (allProductsList as any)?.last_page || 1;
	const products = isArrayResponse
		? (allProductsList as any[]) || []
		: (allProductsList as any)?.products || [];

	const [activeProduct, setActiveProduct] = useState<string | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(
		category || null,
	);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const handleProductType = async (type: string): Promise<void> => {
		setActiveProduct(type);
		if (selectedCategory) {
			router.push(`/our-products/${selectedCategory}?type=${type}`);
		} else {
			router.push(`/our-products?type=${type}`);
		}
	};

	const handleSelectCategory = async (category: string): Promise<void> => {
		setSelectedCategory(category);
		router.push(`/our-products/${category}`);
	};

	const handlePageChange = async (page: number): Promise<void> => {
		setCurrentPage(page);
		window.scrollTo({ top: 20, behavior: 'smooth' });
	};

	const handleGetProductDetail = (slug: any) => {
		router.push(`/product-detail/${slug}`);
	};

	useEffect(() => {
		setCurrentPage(1);
	}, []);

	useEffect(() => {
		fetchOurProductList({
			mainCategory: selectedCategory || undefined,
			subCategory: activeProduct || undefined,
			currentPage,
		});
	}, [selectedCategory, activeProduct, currentPage]);

	useEffect(() => {
		fetchAllCategoryList();
		fetchAllProductTypes();
	}, []);
	return (
		<div className='py-12'>
			{productLoading ? (
				<Loader />
			) : (
				<div className='sub-container'>
					<div className='grid grid-cols-1 md:grid-cols-[20%_75%] gap-5 md:gap-[5%] '>
						<div className='w-full md:w-auto md:sticky md:top-25 self-start order-1 md:order-none'>
							<Sidebar
								categories={data}
								handleSelectCategory={handleSelectCategory}
								selectedCategory={selectedCategory || ''}
							/>
						</div>
						<div className='w-full'>
							<Suspense fallback={<Loader />}>
								<ProductListing
									filteredProducts={products}
									productstTypes={productsTypes}
									handleProductType={handleProductType}
									activeProduct={activeProduct}
									handleGetProductDetail={handleGetProductDetail}
								/>
							</Suspense>
							<Pagination
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={handlePageChange}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
