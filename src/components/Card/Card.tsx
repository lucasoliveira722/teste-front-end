'use client';

import { Product } from '@/interfaces/Product';
import styles from './Card.module.scss';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CardsProps {
  products: Product[];
}

export default function Cards({ products }: CardsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    const maxPage = Math.ceil(products.length / 4) - 1;
    setCurrentPage(prev => Math.min(maxPage, prev + 1));
  };

  const startIndex = currentPage * 4;
  const visibleProducts = products.slice(startIndex, startIndex + 4);

  return (
    <div className={styles.cardsContainer}>
      <h1 className={styles.title}>Produtos relacionados</h1>
      <p className={styles.subtitle}>Ver todos</p>

      <div className={styles.carouselContainer}>
        {/* Left Navigation Button */}
        <button
          className={`${styles.navButton} ${styles.navLeft}`}
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >
          <FaChevronLeft />
        </button>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {visibleProducts.map((product, index) => (
            <div
              key={startIndex + index}
              className={styles.productCard}
              onClick={() => setSelectedProduct(product)}
            >
              <div className={styles.productImageContainer}>
                <img
                  src={product.photo}
                  alt={product.productName}
                  className={styles.productImage}
                />
              </div>

              <div className={styles.productInfo}>
                <p className={styles.productDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className={styles.pricing}>
                  <span className={styles.originalPrice}>R$ 30,90</span>
                  <span className={styles.currentPrice}>R$ 28,90</span>
                  <span className={styles.installment}>ou 2x de R$ 49,95 sem juros</span>
                  <span className={styles.shipping}>Frete grátis</span>
                </div>

                <button className={styles.buyButton}>COMPRAR</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          className={`${styles.navButton} ${styles.navRight}`}
          onClick={handleNext}
          disabled={currentPage >= Math.ceil(products.length / 4) - 1}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Modal - Updated to match the image design */}
      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>

            {/* Left Section - Product Image */}
            <div className={styles.modalLeft}>
              <img
                src={selectedProduct.photo}
                alt={selectedProduct.productName}
              />
            </div>

            {/* Right Section - Product Details */}
            <div className={styles.modalRight}>
              <h2 className={styles.modalTitle}>
                {selectedProduct.productName}
              </h2>

              <p className={styles.modalPrice}>
                R$ {selectedProduct.price.toLocaleString('pt-BR')}
              </p>

              <p className={styles.modalDescription}>
                {selectedProduct.descriptionShort}
              </p>

              <a href="#" className={styles.modalDetailsLink}>
                Veja mais detalhes do produto
              </a>

              <div className={styles.quantitySelector}>
                <button
                  className={styles.quantityBtn}
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  className={styles.quantityInput}
                  value={quantity.toString().padStart(2, '0')}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  min="1"
                />
                <button
                  className={styles.quantityBtn}
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>

              <button className={styles.buyBtn}>
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}