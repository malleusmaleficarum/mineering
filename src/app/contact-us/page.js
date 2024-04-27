import Image from 'next/image';
import styles from './page.module.scss';

export const metadata = {
  title: 'Contact Us',
  description: '',
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        {/* image */}
        <div className={styles['image-container']}>
          <Image src={'/images/title-overlay.png'} alt='' fill priority />
        </div>
        {/* overlay */}
        <div className={styles.overlay} />
        {/* title */}
        <h1 className={styles.title}>Contact Us</h1>
      </div>
      <div className={styles['full-content']}>
        <div className={styles['content-container']}>
          <p className={styles.subheading}>
            Ready to unlock your full potential? <br />
            Contact Petroneering today to discuss how our expertise can fuel
            your success.
          </p>
          {/* grid */}
          <div className={styles.contact}>
            <div className={styles.address}>
              <h2>Office Address</h2>
              <p>
                Menara Kuningan Lantai 31 Unit A Jl. H.R. Rasuna Said Blok X/7
                Kav.5, Karet Kuningan, Setiabudi, Jakarta Selatan, Jakarta 12940
              </p>
            </div>
            <div className={styles.info}>
              <h2>Info</h2>
              <div className={styles['info-detail']}>
                <Image
                  src={'/images/phone.png'}
                  width={15}
                  height={15}
                  priority
                />
                <p>+62 2121684146</p>
              </div>
              <div className={styles['info-detail']}>
                <Image
                  src={'/images/email.png'}
                  width={15}
                  height={15}
                  priority
                />
                <p>general.admin@mineeringenergi.com </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
