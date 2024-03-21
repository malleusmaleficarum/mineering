'use client';

import Link from 'next/link';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb';
import Arrow from '../../../public/images/chevron-down.svg?svgr';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [breadcrumbData, setBreadCrumbData] = useState([]);
  const [childMenu1, setChildMenu1] = useState(false);
  const [childMenu2, setChildMenu2] = useState(false);
  const pathname = usePathname();
  const path = pathname.split('/').filter((path) => path);
  path.unshift('home');
  const { scrollY } = useScroll();
  const [hide, setHide] = useState(false);
  const isLinkActive = (path) => path === pathname;

  useEffect(() => {
    setIsActive(false);
    // scrollToTop();
  }, [pathname]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 80) {
      setHide(true);
    } else {
      setHide(false);
    }
  });

  useEffect(() => {
    isActive
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [isActive]);

  const handleClick = () => {
    setIsActive(!isActive);
    setChildMenu1(false);
    setChildMenu2(false);
  };

  const scrollToTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <motion.div
      className={styles.full}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hide ? 'hidden' : 'visible'}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <nav className={styles.container}>
        <div className={styles.left}>
          <Link href={'/'}>
            <div className={styles['image-container']}>
              <Image src={'/images/logo.png'} alt='logo' fill priority />
            </div>
          </Link>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <Link
                href={'/'}
                className={isLinkActive('/') ? `${styles['active-link']}` : ''}
              >
                Home
                {isLinkActive('/')}
              </Link>
            </li>
            <li>
              <Link
                href={'/about-us'}
                className={
                  isLinkActive('/about-us') ? `${styles['active-link']}` : ''
                }
              >
                About Us
              </Link>
            </li>
            <li>
              <Link href={'/products-and-services'}>
                <p>
                  Products and Services{' '}
                  <span>
                    <Arrow style={{ fill: 'black' }} />
                  </span>
                </p>
              </Link>
              <ul className={styles['drop-down']}>
                <li>
                  <Link href={'/products-and-services/aims'}>
                    Asset Integrity Management System (AIMS)
                  </Link>
                </li>
                <li>
                  <Link href={'/products-and-services/aims'}>
                    Mining Technology and Mineral Processing
                  </Link>
                </li>
                <li>
                  <Link href={'/products-and-services/engineering-services'}>
                    Engineering Services
                  </Link>
                </li>
                <li>
                  <Link href={'/products-and-services/aims'}>
                    Professional Development Programs
                  </Link>
                </li>
                <li>
                  <Link href={'/products-and-services/aims'}>
                    Engineering Software Development
                  </Link>
                </li>
                <li>
                  <Link href={'/products-and-services/aims'}>
                    Geothermal, Coal and Hydropower Plant
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href={'/projects-and-resources'}
                className={
                  isLinkActive('/news') ? `${styles['active-link']}` : ''
                }
              >
                <p>
                  Projects and Resources{' '}
                  <span>
                    <Arrow style={{ fill: 'black' }} />
                  </span>
                </p>
              </Link>
              <ul className={styles['drop-down']}>
                <li>
                  <Link href={'/projects-and-resources'}>
                    Previous Projects
                  </Link>
                </li>
                <li>
                  <Link href={'/projects-and-resources'}>
                    Whitepaper and Presentations
                  </Link>
                </li>
                <li>
                  <Link href={'/projects-and-resources'}>Brochures</Link>
                </li>
                <li>
                  <Link href={'/projects-and-resources'}>News</Link>
                </li>
                <li>
                  <Link href={'/projects-and-resources'}>Glosarry</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={'/contact-us'}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.sm}>
          <button onClick={handleClick}>
            {isActive ? (
              <Image
                src={'/images/close-icon.png'}
                alt='close'
                width={15}
                height={15}
              />
            ) : (
              <Image
                src={'/images/hamburger-icon.png'}
                alt='close'
                width={15}
                height={15}
              />
            )}
          </button>
        </div>
        {/* MOBILE */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              variants={mobileVars}
              initial='initial'
              animate='animate'
              exit='exit'
              className={`${styles['mobile-menu-container']}`}
            >
              <motion.ul
                variants={staggerVars}
                initial='initial'
                animate='open'
                exit='initial'
              >
                <li>
                  <motion.div variants={mobileLinkVars}>
                    <Link href={'/'}>Home</Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div variants={mobileLinkVars}>
                    <Link href={'/about-us'}>About Us</Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div variants={mobileLinkVars}>
                    <button
                      className={styles.button}
                      onClick={() => setChildMenu1(!childMenu1)}
                    >
                      <p>
                        Products and Services{' '}
                        <span>
                          <Arrow style={{ fill: '#f0f0f0' }} />
                        </span>
                      </p>
                    </button>
                    {childMenu1 && (
                      <ul className={styles.child}>
                        <li>
                          <Link href={'/products-and-services/aims'}>
                            Asset Integrity Management System (AIMS)
                          </Link>
                        </li>
                        <li>
                          <Link href={'/products-and-services/aims'}>
                            Mining Technology and Mineral Processing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={'/products-and-services/engineering-services'}
                          >
                            Engineering Services
                          </Link>
                        </li>
                        <li>
                          <Link href={'/products-and-services/aims'}>
                            Professional Development Programs
                          </Link>
                        </li>
                        <li>
                          <Link href={'/products-and-services/aims'}>
                            Engineering Software Development
                          </Link>
                        </li>
                        <li>
                          <Link href={'/products-and-services/aims'}>
                            Geothermal, Coal and Hydropower Plant
                          </Link>
                        </li>
                      </ul>
                    )}
                  </motion.div>
                </li>
                <li>
                  <motion.div variants={mobileLinkVars}>
                    <button
                      className={styles.button}
                      onClick={() => setChildMenu2(!childMenu2)}
                    >
                      <p>
                        Projects and Resources{' '}
                        <span>
                          <Arrow style={{ fill: '#f0f0f0' }} />
                        </span>
                      </p>
                    </button>
                    {childMenu2 && (
                      <ul className={styles.child}>
                        <li>
                          <Link href={'/projects-and-resources'}>
                            Previous Projects
                          </Link>
                        </li>
                        <li>
                          <Link href={'/projects-and-resources'}>
                            Whitepaper and Presentations
                          </Link>
                        </li>
                        <li>
                          <Link href={'/projects-and-resources'}>
                            Brochures
                          </Link>
                        </li>
                        <li>
                          <Link href={'/projects-and-resources'}>News</Link>
                        </li>
                        <li>
                          <Link href={'/projects-and-resources'}>Glosarry</Link>
                        </li>
                      </ul>
                    )}
                  </motion.div>
                </li>
                <li>
                  <motion.div variants={mobileLinkVars}>
                    <Link href={'/contact-us'}>Contact Us</Link>
                  </motion.div>
                </li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <Breadcrumb path={path} />
    </motion.div>
  );
};

const mobileVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: '100%',
  },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const staggerVars = {
  initial: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

export default Header;
