import styles from './homeAbout.module.scss';

const HomeAbout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>
          &quot;Petroneering LLC is a recognized leader among boutique offshore
          technology development and consulting firms. We are headquartered
          right in the energy corridor of Houston, Texas, U.S.A. with satellite
          and affiliate offices around the world. We&apos;ve designed and
          engineered our patented offshore technologies and will make functional
          knowledge, deep sector experience and global networks available to our
          oil & gas clients worldwide.&quot;
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
