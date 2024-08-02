import Image from 'next/image';
import styles from './sliderCard.module.scss';
import Link from 'next/link';

const SliderCard = ({ categories, data }) => {
  const catName = categories.filter((cat) => cat.id === data.categories[0]);
  return (
    <Link
      href={`/projects-and-resources/${data.slug}`}
      className={styles.container}
    >
      {/* Image */}
      <div className={styles['img-container']}>
        <Image src={data?.fimg_url} fill priority alt='' />
      </div>
      <h2 dangerouslySetInnerHTML={{ __html: data.title.rendered }}></h2>
      <h3>{catName[0].name}</h3>
      <div
        className={styles['exc-content']}
        dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
      ></div>
      <button>Read More</button>
    </Link>
  );
};

export default SliderCard;
