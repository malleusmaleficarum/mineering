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
        <h1>Let&apos;s collaborate together!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
        <Link href={'#'}>Contact Us</Link>
      </div>
    </div>
  );
};

export default HomeContact;
