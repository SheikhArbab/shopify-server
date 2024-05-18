import axios from 'axios';
import * as U from "../utils/utils.js";




export const getProducts = async (req, res, next) => {
    try {
     
        const response = await axios.get(U.url('products'));
        const products = response.data.products;
        res.json({ products });
    } catch (error) {
        // console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

export const getProductById = async (req, res, next) => {

       // Extract the product ID from the request parameters
       const productId = req.params.id; 
    try {
        const response = await axios.get(U.url(`products`,productId));
        const products = response.data.products;
        res.json({ products });
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

export const newProd = async (req, res, next) => {
    try {
        const response = await axios.post(U.url('products'), {product:req.body});
        const createdProduct = response.data.product;
        res.status(201).json({ createdProduct });
    } catch (error) {
        console.error('Error creating product:', error.message);
        res.status(500).json({ error: 'An error occurred while creating the product. Please try again later.' });
    }
};

export const updateProd = async (req, res, next) => {
    try {
        // Extract the product ID from the request parameters
        const productId = req.params.id;

        // Send a PUT request to update the product
        const response = await axios.put(U.url(`products`,productId), {product:req.body}); 

        // Extract the updated product from the response data
        const updatedProduct = response.data.product;

        // Return the updated product in the response
        res.json({ updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error.message);
        res.status(500).json({ error: 'An error occurred while updating the product. Please try again later.' });
    }
};

export const deleteProd = async (req, res, next) => {
    try {
        // Extract the product ID from the request parameters
        const productId = req.params.id;

        // Send a DELETE request to remove the product
        await axios.delete(U.url(`products`,productId));

        // Return a success message
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(500).json({ error: 'An error occurred while deleting the product. Please try again later.' });
    }
};
