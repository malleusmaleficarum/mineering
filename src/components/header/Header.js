'use client';

import Link from 'next/link';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hide, setHide] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 20) {
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

  const isLinkActive = (path) => path === pathname;
  const handleClick = () => {
    setIsActive(!isActive);
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
          <Link href={'/'}>LOGO</Link>
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
              <Link href={'#'}>Products and Services</Link>
            </li>
            <li>
              <Link href={'/news'}>News</Link>
            </li>
            <li>
              <Link href={'#'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.sm}>
          <button onClick={handleClick}>{isActive ? 'x' : '='}</button>
        </div>
        <div
          className={
            isActive
              ? `${styles['mobile-menu-container']} ${styles.active}`
              : `${styles['mobile-menu-container']}`
          }
        >
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'#'}>Products and Services</Link>
            </li>
            <li>
              <Link href={'/news'}>News</Link>
            </li>
            <li>
              <Link href={'#'}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
};

export default Header;
