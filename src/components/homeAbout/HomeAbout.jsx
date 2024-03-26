import styles from './homeAbout.module.scss';

const HomeAbout = () => {
  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Lorem ipsum <br />
            Dolor sit amet consectetur
          </h1>
          <p>
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita quae cupiditate, unde cumque aspernatur maxime dolor
            nostrum sequi aliquid, non facere rem debitis alias id nam aliquam
            commodi! Quo, natus. Odio excepturi molestiae, similique assumenda
            numquam quos earum ut accusantium aliquid amet obcaecati, adipisci
            dolore consectetur debitis ipsum hic velit!&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
