import React, { useState } from "react";
import styles from './RelatedProducts.module.scss';

export default function RelatedProducts() {
    const [activeCategory, setActiveCategory] = useState('CELULAR');

    const categories = [
        { id: 'celular', name: 'CELULAR', isActive: true },
        { id: 'acessorios', name: 'ACESSÓRIOS', isActive: false },
        { id: 'tablets', name: 'TABLETS', isActive: false },
        { id: 'notebooks', name: 'NOTEBOOKS', isActive: false },
        { id: 'tvs', name: 'TVS', isActive: false },
        { id: 'ver-todos', name: 'VER TODOS', isActive: false }
    ];

    const handleCategoryClick = (categoryId: string) => {
        setActiveCategory(categoryId);
    };

    return (
        <section className={styles.relatedProducts}>
            <div className={styles.container}>
                {/* Title with decorative lines */}
                <div className={styles.titleSection}>
                    <div className={styles.titleLine}></div>
                    <h2 className={styles.title}>Produtos relacionados</h2>
                    <div className={styles.titleLine}></div>
                </div>

                {/* Category filter bar */}
                <div className={styles.categoryFilter}>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`${styles.filterButton} ${activeCategory === category.id ? styles.active : ''
                                }`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
