import Link from 'next/link';
import styles from './notfound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Go back to <Link href={'/'}>Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
