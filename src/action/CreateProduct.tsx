/* eslint-disable @typescript-eslint/no-explicit-any */

import { client } from "@/sanity/lib/client";
import { Product } from "@/app/type/product";

const CreateProductInSanity = async (productInfo: Product) => {
  try {
    const productObject = {
      _type: "product",
      id: productInfo.id,
      title: productInfo.title,
      price: productInfo.price,
      dicountPercentage: productInfo.dicountPercentage, // Fixed typo
      tags: productInfo.tags, // Fixed typo
      productImage: productInfo.productImage,
      description: productInfo.description,
      isNew: productInfo.isNew,
    };

    const response = await client.create(productObject);
    console.log("Product created in Sanity:", response);
    return response;
  } catch (error) {
    console.error("Error creating product in Sanity:", error);
    throw new Error("Failed to create product in Sanity."); // Provide a user-friendly error message
  }
};

export default async function NewProduct(productData: Product) {
  try {
    // Create a product in Sanity
    const newProduct = await CreateProductInSanity(productData);
    
    if (!newProduct || !newProduct._id) {
      throw new Error("Failed to retrieve product ID after creation.");
    }

    return { success: true, data: newProduct }; // Return success response with product data
  } catch (error: any) {
    console.error("Error during product creation process:", error);
    return { success: false, error: error.message }; // Return failure response with error message
  }
}
