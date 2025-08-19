import React from "react";
import styles from './Categories.module.scss';
import {
    FaDesktop,
    FaStore,
    FaWineBottle,
    FaTools,
    FaHeart,
    FaRunning,
    FaTshirt
} from "react-icons/fa";

export default function Categories() {
    const categories = [
        {
            id: 1,
            name: "Tecnologia",
            icon: FaDesktop,
            color: "purple"
        },
        {
            id: 2,
            name: "Supermercado",
            icon: FaStore,
            color: "black"
        },
        {
            id: 3,
            name: "Bebidas",
            icon: FaWineBottle,
            color: "black"
        },
        {
            id: 4,
            name: "Ferramentas",
            icon: FaTools,
            color: "black"
        },
        {
            id: 5,
            name: "Saúde",
            icon: FaHeart,
            color: "black"
        },
        {
            id: 6,
            name: "Esportes e Fitness",
            icon: FaRunning,
            color: "black"
        },
        {
            id: 7,
            name: "Moda",
            icon: FaTshirt,
            color: "black"
        }
    ];

    return (
        <section className={styles.categories}>
            <div className={styles.categoriesContainer}>
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className={`${styles.categoryCard} ${styles[category.color]}`}
                    >
                        <div className={styles.iconContainer}>
                            <category.icon className={styles.icon} />
                        </div>
                        <span className={styles.categoryName}>{category.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
