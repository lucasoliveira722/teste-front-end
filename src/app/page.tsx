'use client';

import Cards from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Categories from "@/components/Categories/Categories";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import Partners from "@/components/Partners/Partners";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import { Product } from "@/interfaces/Product";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(null);

        // Use the local API route instead of calling external API directly
        const response = await axios.get('/api/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>
        <button
          onClick={() => window.location.reload()}
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Hero />
      <Categories />
      <RelatedProducts />
      <Partners />
      <main style={{ flex: 1 }}>
        <Cards products={products} />
      </main>
      <Footer />
    </div>
  );
}
