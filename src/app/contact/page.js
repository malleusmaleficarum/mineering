import Image from 'next/image';
import styles from './page.module.scss';

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
        <h1 className={styles.title}>Contact</h1>
      </div>
      <div className={styles['content-container']}>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad
        </p>
        {/* grid */}
        <div className={styles.grid}>
          <div className={styles.contact}>
            <div className={styles.address}>
              <h2>Office 1</h2>
              <p>
                Jl. Kemang, Bangka, Kecamatan Mampang Prapatan, Kota Jakarta
                Selatan, DKI Jakarta
              </p>
            </div>
            <div className={styles.info}>
              <h2>Info 1</h2>
              <div className={styles['info-detail']}>
                <Image
                  src={'/images/phone.png'}
                  width={15}
                  height={15}
                  priority
                />
                <p>0811-1111-1111</p>
              </div>
              <div className={styles['info-detail']}>
                <Image
                  src={'/images/email.png'}
                  width={15}
                  height={15}
                  priority
                />
                <p>mineering@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.address}>
              <h2>Office 2</h2>
              <p>
                Jl. Kemang, Bangka, Kecamatan Mampang Prapatan, Kota Jakarta
                Selatan, DKI Jakarta
              </p>
            </div>
            <div className={styles.info}>
              <h2>Info 2</h2>
              <div className={styles['info-detail']}>
                <Image
                  src={'/images/phone.png'}
                  width={15}
                  height={15}
                  priority
                />
                <p>0811-1111-1111</p>
              </div>
              <div className={styles['info-detail']}>
                <Image
                  src={'/images/email.png'}
                  width={15}
                  height={15}
                  priority
                />
                <p>mineering@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
