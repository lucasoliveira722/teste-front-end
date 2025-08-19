import React from "react";
import styles from './Header.module.scss';
import { FaSearch, FaShoppingCart, FaHeart, FaBox, FaUser, FaShieldAlt, FaTruck, FaCalendarAlt } from "react-icons/fa";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <span><FaShieldAlt className={styles.icon} /> Compra <a href="#">100% segura</a></span>
                <span><FaTruck className={styles.icon} /> <a href="#">Frete grátis</a> acima de R$ 200</span>
                <span><FaCalendarAlt className={styles.icon} /> <a href="#">Parcele</a> suas compras</span>
            </div>

            <div className={styles.headerMain}>
                {/* Logo */}
                <div className={styles.headerLogo}>
                    <span className={styles.logo}>
                        <span className={styles.logoCircle}>e</span>converse
                    </span>
                </div>

                {/* Search */}
                <div className={styles.headerSearch}>
                    <input type="text" placeholder="O que você está buscando?" />
                    <button><FaSearch /></button>
                </div>

                {/* Icons */}
                <div className={styles.headerIcons}>
                    <FaBox className={styles.icon} title="Pedidos" />
                    <FaHeart className={styles.icon} title="Favoritos" />
                    <FaUser className={styles.icon} title="Perfil" />
                    <FaShoppingCart className={styles.icon} title="Carrinho" />
                </div>
            </div>

            <nav className={styles.headerNav}>
                <a href="#">TODAS CATEGORIAS</a>
                <a href="#">SUPERMERCADO</a>
                <a href="#">LIVROS</a>
                <a href="#">MODA</a>
                <a href="#">LANÇAMENTOS</a>
                <a href="#" className={styles.highlight}>OFERTAS DO DIA</a>
                <a href="#">ASSINATURA</a>
            </nav>
        </header>
    );
};
