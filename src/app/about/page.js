import Title from '@/components/Title/Title';
import styles from './page.module.scss';
import Image from 'next/image';

export const metadata = {
  title: 'About | Mineering',
  description: '',
};

const About = () => {
  return (
    <div className={styles.container}>
      <Title title='About' />

      <div className={styles['content-container']}>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </h1>
      </div>
      <div className={styles['value-container']}>
        <div className={styles.first}>
          <div className={styles.left}>
            <Image src={'/images/value.png'} alt='' priority fill />
          </div>
          <div className={styles.right}>
            <h1>Company Vision</h1>
            <p>
              We strive to help our clients make sustainable improvements in
              their core businesses and build an enduring firm that attracts,
              co-evolves and retains exceptional human capital.
            </p>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.subheading}>
            <h2>Core Values</h2>
            <p>
              Mineering is proud to be a value-driven company where we place
              emphases on:
            </p>
          </div>
          <div className={styles.grid}>
            <div className={styles['value-wrapper']}>
              <Image
                src={'/images/icon-1.png'}
                priority
                width={20}
                height={20}
              />
              <p>Integrity</p>
            </div>
            <div className={styles['value-wrapper']}>
              <Image
                src={'/images/icon-2.png'}
                priority
                width={20}
                height={20}
              />
              <p>Mutual Respect</p>
            </div>
            <div className={styles['value-wrapper']}>
              <Image
                src={'/images/icon-3.png'}
                priority
                width={20}
                height={20}
              />
              <p>Client Centricity</p>
            </div>
            <div className={styles['value-wrapper']}>
              <Image
                src={'/images/icon-4.png'}
                priority
                width={20}
                height={20}
              />
              <p>Entrepreneural</p>
            </div>
            <div className={styles['value-wrapper']}>
              <Image
                src={'/images/icon-5.png'}
                priority
                width={20}
                height={20}
              />
              <p>Executional Excellence</p>
            </div>
            <div className={styles['value-wrapper']}>
              <Image
                src={'/images/icon-6.png'}
                priority
                width={20}
                height={20}
              />
              <p>Teamwork</p>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles['image-wrapper']}>
              <Image src={'/images/overlay-team.png'} fill priority />
            </div>
            <div className={styles['overlay-1']}></div>
            <div className={styles.title}>
              <h2>Our Team</h2>
              <p>
                Our collaborative approach reinforces partnership, trust,
                confidence, and resilience for diverging perspectives
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.industries}>
        <h1>Industries</h1>
        <div className={styles['industries-wrapper']}>
          <p>Oil and Gas</p>
          <p>Mining and Mineral Processing</p>
          <p>Electric Power</p>
          <p>Renewable Energy</p>
          <p>Coastal and Offshore Infrastructure</p>
        </div>
      </div>

      <div className={styles.expertise}>
        {/* <div className={styles['image-wrapper']}>
          <Image src={'/images/expertise.png'} fill priority />
        </div> */}
        <h1>Our Expertise and Go-To-Market Offerings</h1>
        <h2>Specializing in</h2>
        <div className={styles['expertise-wrapper']}>
          <p>Technical Due Diligence</p>
          <p>Technical Solution Engineering</p>
          <p>Project Manageent</p>
          <p>Project Manageent</p>
          <p>Development of Contract Strategy</p>
          <p>Contract Negotiation</p>
          <p>Project Scheduling and Costing</p>
          <p>Feasibility Studies</p>
          <p>Transaction Advisory and Project Finance</p>
          <p>Design Constructability Reviews</p>
          <p>Government Liaisons</p>
          <p>Assets and System Management</p>
        </div>
      </div>

      <div className={styles.focused}>
        <h1>Our Industry Focused</h1>
        <div className={styles.grid}>
          <div>
            <h2>Collaboration Approach</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute iru
            </p>
          </div>
          <div>
            <h2>Focus On Delivery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla par
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
