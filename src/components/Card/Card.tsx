'use client';

import { Product } from '@/interfaces/Product';
import styles from './Card.module.scss';
import { useState } from 'react';

interface CardsProps {
  products: Product[];
}

export default function Cards({ products }: CardsProps) {

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className={styles.cardsContainer}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <div
            key={index}
            className={styles.productCard}
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.photo}
              alt={product.productName}
              className={styles.productImage}
            />
            <h3 className={styles.productName}>{product.productName}</h3>
            <p className={styles.productDescription}>{product.descriptionShort}</p>
            <p className={styles.productPrice}>
              R$ {product.price.toLocaleString('pt-BR')}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>
            <img src={selectedProduct.photo} alt={selectedProduct.productName} />
            <h2>{selectedProduct.productName}</h2>
            <p className={styles.price}>{selectedProduct.price}</p>
            <button className={styles.buyBtn}>Comprar</button>
          </div>
        </div>
      )}
    </div>
  );
}