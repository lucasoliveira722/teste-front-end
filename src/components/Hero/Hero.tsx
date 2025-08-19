import Image from 'next/image';
import styles from './Hero.module.scss';
import heroImage from '@/assets/hero_image.jpg';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1>Bem-vindo à Econverse</h1>
                    <p>Descubra produtos incríveis com os melhores preços do mercado</p>
                    <button className={styles.ctaButton}>Ver Produtos</button>
                </div>
                <div className={styles.heroImage}>
                    <Image
                        src={heroImage}
                        alt="Econverse Hero Banner"
                        width={1440}
                        height={390}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
