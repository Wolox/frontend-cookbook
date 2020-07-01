package com.example.paginationDemo.Repository;

import com.example.paginationDemo.model.Product;
import org.springframework.data.repository.PagingAndSortingRepository;


public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
}