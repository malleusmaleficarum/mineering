import Title from '@/components/Title/Title';
import styles from './page.module.scss';
import Image from 'next/image';

export const metadata = {
  title: 'About Us',
  description: '',
};

const About = () => {
  return (
    <div className={styles.container}>
      <Title title='About Us' />

      <div className={styles['content-container']}>
        <h1>
          PT Mineering Energi International, a rapidly growing leader in
          offshore technology development and consulting, is headquartered in
          Jakarta, Indonesia. Our team boasts a proven track record of
          navigating industry complexities, ensuring you benefit from extensive
          experience.
          <br />
          <br />
          We leverage our cutting-edge, patented technologies and deep industry
          knowledge to empower oil and gas clients globally. Our team of
          industry veterans and functional experts, armed with doctoral and
          master&apos;s degrees from prestigious universities worldwide, offers
          unparalleled access to functional expertise, a global network, and
          seasoned guidance. This exceptional blend of credentials equips us to
          tackle your toughest challenges with a comprehensive range of
          integrated management and technical skills. We believe in lasting
          impact, delivering practical recommendations that pave the way for a
          more sustainable future.
          <br />
          <br />
          We foster a collaborative spirit, working alongside you to unlock your
          full potential within the industry. By enhancing your managerial
          capabilities and leadership skills, we empower you to become active
          participants and leaders in long-term collaborations.
        </h1>
      </div>
      <div className={styles['full-value']}>
        <div className={styles['value-container']}>
          <div className={styles.first}>
            <div className={styles.left}>
              <Image src={'/images/value.png'} alt='' priority fill />
            </div>
            <div className={styles.right}>
              <h1>Company Mission</h1>
              <p>
                At Mineering, we are committed to partnering with our clients to
                achieve lasting success. We focus on delivering solutions that
                drive long-term improvements in their core businesses, fostering
                a sustainable and thriving future. We believe in building a
                strong and enduring company that attracts, develops, and retains
                exceptional human capital.
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
                  alt=''
                />
                <p>Integrity</p>
              </div>
              <div className={styles['value-wrapper']}>
                <Image
                  src={'/images/icon-2.png'}
                  priority
                  width={20}
                  height={20}
                  alt=''
                />
                <p>Mutual Respect</p>
              </div>
              <div className={styles['value-wrapper']}>
                <Image
                  src={'/images/icon-3.png'}
                  priority
                  width={20}
                  height={20}
                  alt=''
                />
                <p>Client Centricity</p>
              </div>
              <div className={styles['value-wrapper']}>
                <Image
                  src={'/images/icon-4.png'}
                  priority
                  width={20}
                  height={20}
                  alt=''
                />
                <p>Entrepreneural</p>
              </div>
              <div className={styles['value-wrapper']}>
                <Image
                  src={'/images/icon-5.png'}
                  priority
                  width={20}
                  height={20}
                  alt=''
                />
                <p>Executional Excellence</p>
              </div>
              <div className={styles['value-wrapper']}>
                <Image
                  src={'/images/icon-6.png'}
                  priority
                  width={20}
                  height={20}
                  alt=''
                />
                <p>Teamwork</p>
              </div>
            </div>
            <div className={styles.team}>
              <div className={styles['image-wrapper']}>
                <Image src={'/images/overlay-team.png'} fill priority alt='' />
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

      <div className={styles['full-expertise']}>
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
      </div>
      <div className={styles.focused}>
        <h1>Our Industry Approach</h1>
        <div className={styles.grid}>
          <div>
            <h2>Delivering Excellence</h2>
            <p>
              Mineering sets itself apart with a meticulous approach to
              technical advisory and offshore technology development. Our
              unwavering commitment involves exhaustive due diligence,
              meticulous attention to detail, and unwavering objectivity, all
              delivered within a strictly confidential environment. This focus
              has led to an unmatched track record. This success hinges on
              several key principles: <br />
              <br />
              <ul>
                <li>
                  <b>Client-Centric Solutions:</b> We deliver cost-effective
                  solutions tailored to your specific exploration goals,
                  technical needs, and operational risks.
                </li>
                <li>
                  <b>Advanced Practices &amp; Flexibility:</b> Leveraging the
                  latest offshore engineering best practices, we provide a
                  comprehensive framework that can be flexibly adapted to your
                  project&apos;s unique scope and requirements.
                </li>
                <li>
                  <b>Collaborative Expertise:</b> Our team investigates various
                  design parameters and strategic locations to ensure optimal
                  configurations that meet all relevant offshore industry
                  certifications and best practices. Our highly skilled
                  engineers bring in-depth knowledge of floating platforms to
                  ensure your project meets regulatory requirements and delivers
                  exceptional results.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h2>Alliance</h2>
            <p>
              Mineering fosters strategic alliances with industry experts who
              complement our core strengths. These partnerships focus on either
              separate but interconnected project scopes, or the formation of
              joint project management teams.
              <br />
              <br />
              In the first scenario, we might handle a project&#39;s FEED
              (Front-End Engineering Design) and detailed engineering, while a
              partner tackles offshore fabrication or specialized shipbuilding.
              Alternatively, we can create joint teams combining our technical
              advisors with specialists from other firms. Both approaches offer
              clients access to global expertise and specialist knowledge,
              ensuring impactful solutions tailored to local contexts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
