import React from "react";
import Image from "next/image";
import styles from './Partners.module.scss';
import partnersImage from '@/assets/partners_image.jpg';

export default function Partners() {
    return (
        <section className={styles.partners}>
            <div className={styles.partnersContainer}>
                {/* First Banner */}
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={partnersImage}
                            alt="Apple Store Partners"
                            className={styles.image}
                            fill
                            priority
                        />
                    </div>
                    <div className={styles.bannerContent}>
                        <h2 className={styles.bannerTitle}>Parceiros</h2>
                        <p className={styles.bannerDescription}>
                            Lorem ipsum dolor sit amet, consectetur
                        </p>
                        <button className={styles.ctaButton}>CONFIRA</button>
                    </div>
                </div>

                {/* Second Banner */}
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={partnersImage}
                            alt="Apple Store Partners"
                            className={styles.image}
                            fill
                            priority
                        />
                    </div>
                    <div className={styles.bannerContent}>
                        <h2 className={styles.bannerTitle}>Parceiros</h2>
                        <p className={styles.bannerDescription}>
                            Lorem ipsum dolor sit amet, consectetur
                        </p>
                        <button className={styles.ctaButton}>CONFIRA</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
