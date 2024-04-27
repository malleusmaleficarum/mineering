import Image from 'next/image';
import styles from './homeContact.module.scss';
import Link from 'next/link';

const HomeContact = () => {
  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <Image src={'/images/contact-overlay.png'} alt='' fill priority />
      </div>
      {/* content */}
      <div className={styles['content-container']}>
        <h1>Let&apos;s Build Tomorrow, Today</h1>
        <p>
          Reach out to us today to explore how our expertise can fuel your
          success. Together, let&apos;s build a sustainable and innovative
          future.{' '}
        </p>
        <Link href={'/contact-us'}>Contact Us</Link>
      </div>
    </div>
  );
};

export default HomeContact;
