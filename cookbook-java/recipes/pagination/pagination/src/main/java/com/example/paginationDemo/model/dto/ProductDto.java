package com.example.paginationDemo.model.dto;

import com.example.paginationDemo.model.Product;

public class ProductDto {

    private long id;
    private String name;
    private double price;

    public ProductDto() {
    }

    public ProductDto(long id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public static ProductDto from(Product product) {


        return new ProductDto(product.getId(), product.getName(), product.getPrice());
    }
}
