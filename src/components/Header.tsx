import React from "react";
import styles from './Header.module.scss';
import { FaSearch, FaShoppingCart, FaHeart, FaBox } from "react-icons/fa";

export default function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <span>Compra <a href="#">100% segura</a></span>
                <span><a href="#">Frete grátis</a> acima de R$ 200</span>
                <span><a href="#">Parcele</a> suas compras</span>
            </div>

            <div className="header__main">
                {/* Logo */}
                <div className="header__logo">
                    <span className="logo">econverse</span>
                </div>

                {/* Search */}
                <div className="header__search">
                    <input type="text" placeholder="O que você está buscando?" />
                    <button><FaSearch /></button>
                </div>

                {/* Icons */}
                <div className="header__icons">
                    <FaBox className="icon" title="Pedidos" />
                    <FaHeart className="icon" title="Favoritos" />
                    <FaShoppingCart className="icon" title="Carrinho" />
                </div>
            </div>

            <nav className="header__nav">
                <a href="#">TODAS CATEGORIAS</a>
                <a href="#">SUPERMERCADO</a>
                <a href="#">LIVROS</a>
                <a href="#">MODA</a>
                <a href="#">LANÇAMENTOS</a>
                <a href="#" className="highlight">OFERTAS DO DIA</a>
                <a href="#">ASSINATURA</a>
            </nav>
        </header>
    );
};
