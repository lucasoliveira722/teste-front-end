import React from "react";
import styles from './Footer.module.scss';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Newsletter Section */}
            <div className={styles.newsletter}>
                <div className={styles.newsletterContent}>
                    <div className={styles.newsletterText}>
                        <h2>Inscreva-se na nossa newsletter</h2>
                        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                    </div>

                    <div className={styles.newsletterForm}>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Digite seu nome" />
                            <input type="email" placeholder="Digite seu e-mail" />
                        </div>

                        <div className={styles.checkboxGroup}>
                            <label>
                                <input type="checkbox" />
                                <span>Aceito os termos e condições</span>
                            </label>
                        </div>

                        <button type="submit">INSCREVER</button>
                    </div>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className={styles.footerLinks}>
                <div className={styles.footerContent}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <div className={styles.logo}>
                            <span className={styles.logoCircle}>e</span>converse
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className={styles.socialIcons}>
                            <FaInstagram className={styles.socialIcon} />
                            <FaFacebook className={styles.socialIcon} />
                            <FaLinkedin className={styles.socialIcon} />
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className={styles.verticalDivider}></div>

                    {/* Institutional Column */}
                    <div className={styles.linkColumn}>
                        <h3>Institucional</h3>
                        <ul>
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Movimento</a></li>
                            <li><a href="#">Trabalhe conosco</a></li>
                        </ul>
                    </div>

                    {/* Vertical Divider */}
                    <div className={styles.verticalDivider}></div>

                    {/* Help Column */}
                    <div className={styles.linkColumn}>
                        <h3>Ajuda</h3>
                        <ul>
                            <li><a href="#">Suporte</a></li>
                            <li><a href="#">Fale Conosco</a></li>
                            <li><a href="#">Perguntas Frequentes</a></li>
                        </ul>
                    </div>

                    {/* Vertical Divider */}
                    <div className={styles.verticalDivider}></div>

                    {/* Terms Column */}
                    <div className={styles.linkColumn}>
                        <h3>Termos</h3>
                        <ul>
                            <li><a href="#">Termos e Condições</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Troca e Devolução</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className={styles.bottomText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </footer>
    );
}
