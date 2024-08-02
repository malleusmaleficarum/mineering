import Image from 'next/image';
import styles from './mediaCard.module.scss';
import Link from 'next/link';
import { format } from 'date-fns';
const MediaCard = ({ data, categories }) => {
  const catName = categories.filter((cat) => cat.id === data.categories[0]);

  return (
    <Link
      href={`/projects-and-resources/${data.slug}`}
      className={styles['card-container']}
    >
      {/* Image */}
      <div className={styles.left}>
        <div className={styles['image-container']}>
          <Image src={data.fimg_url} alt='' fill priority />
        </div>
      </div>
      {/* Info */}
      <div className={styles['info-container']}>
        <div className={styles.top}>
          <h1 dangerouslySetInnerHTML={{ __html: data.title.rendered }}></h1>

          <h2 dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}></h2>
          <h3>{catName[0].name}</h3>
        </div>
        <div className={styles.bottom}>
          <p>{format(new Date(data.date), 'dd LLLL yyyy')}</p>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
