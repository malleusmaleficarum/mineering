import styles from './footer.module.scss';
const Footer = () => {
  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.left}>
          {' '}
          &#169; {new Date().getFullYear()} Mineering. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
