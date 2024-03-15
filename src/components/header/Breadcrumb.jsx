import Link from 'next/link';
import styles from './breadcrumb.module.scss';

const Breadcrumb = ({ path }) => {
  return (
    <div className={styles.container}>
      {path.map((p, i) => {
        const lastItem = i === path.length - 1;
        if (lastItem) {
          return <p key={i}>{decodeURI(p.replace('-', ' '))}</p>;
        } else if (i === 0) {
          return (
            <div key={i}>
              <Link href={'/'}>{p}</Link>
              <span>&nbsp;&gt;&nbsp;</span>
            </div>
          );
        } else {
          return (
            <div key={i}>
              <Link href={`/${p}`}>{p}</Link>
              <span>&nbsp;&gt;&nbsp;</span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Breadcrumb;
