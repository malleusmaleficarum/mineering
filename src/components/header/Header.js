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

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [breadcrumbData, setBreadCrumbData] = useState([]);
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
                href={'/about'}
                className={
                  isLinkActive('/about') ? `${styles['active-link']}` : ''
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link href={'/products'}>
                <p>
                  Services{' '}
                  <span>
                    <Image
                      className={styles.arrow}
                      src={'/images/arrow.png'}
                      width={10}
                      height={10}
                      priority
                    />
                  </span>
                </p>
              </Link>
              <ul className={styles['drop-down']}>
                <li>
                  <Link href={'#'}>
                    Asset Integrity Management System (AIMS)
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>
                    Mining Technology and Mineral Processing
                  </Link>
                </li>
                <li>
                  <Link href={'#'}>Engineering Services</Link>
                </li>
                <li>
                  <Link href={'#'}>Professional Development Programs</Link>
                </li>
                <li>
                  <Link href={'#'}>Engineering Software Development</Link>
                </li>
                <li>
                  <Link href={'#'}>Geothermal, Coal and Hydropower Plant</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href={'/news'}
                className={
                  isLinkActive('/news') ? `${styles['active-link']}` : ''
                }
              >
                <p>
                  Media{' '}
                  <span>
                    <Image
                      className={styles.arrow}
                      src={'/images/arrow.png'}
                      width={10}
                      height={10}
                      priority
                    />
                  </span>
                </p>
              </Link>
              <ul className={styles['drop-down']}>
                <li>
                  <Link href={'#'}>Previous Projects</Link>
                </li>
                <li>
                  <Link href={'#'}>News</Link>
                </li>
                <li>
                  <Link href={'#'}>Resources</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.sm}>
          <button onClick={handleClick}>{isActive ? 'x' : '='}</button>
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
                    <Link href={'/about'}>About</Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div variants={mobileLinkVars}>
                    <Link href={'#'}>Products and Services</Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div variants={mobileLinkVars}>
                    <Link href={'/news'}>News</Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div variants={mobileLinkVars}>
                    <Link href={'#'}>Contact</Link>
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
