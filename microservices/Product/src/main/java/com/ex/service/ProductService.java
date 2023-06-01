package com.ex.service;

import java.util.List;

import com.ex.resource.Product;

public interface ProductService {
	List<Product> findAll();

	List<Product> findByCategory(String category);

	Product findById(int id);
}
