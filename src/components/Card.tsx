'use client';

import { Product } from '@/interfaces/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '20px' }}>
        {products.map((product, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <img 
              src={product.photo} 
              alt={product.productName}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h3 style={{ margin: '12px 0 8px 0', fontSize: '16px' }}>{product.productName}</h3>
            <p style={{ margin: '8px 0', fontSize: '14px', color: '#666' }}>{product.descriptionShort}</p>
            <p style={{ margin: '8px 0', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
              R$ {product.price.toLocaleString('pt-BR')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}