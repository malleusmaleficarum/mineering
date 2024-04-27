import styles from './homeAbout.module.scss';

const HomeAbout = () => {
  return (
    <div className={styles.full}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Unveiling Hidden Value: Across Industries,
            <br /> From Start to Finish
          </h1>
          <p>
            &quot;At the heart of our mission is a relentless pursuit of
            technological solutions that redefine what&apos;s possible. With a
            comprehensive A-Z approach to engineering and management services,
            we&apos;re dedicated to transforming the landscape of the industry.
            Our commitment to executional excellence and innovative strategies
            ensures that we not only meet but exceed the ambitions of our
            partners. Join us in leveraging our global experience and expertise
            to navigate the future, where every challenge is an opportunity for
            breakthrough success.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
