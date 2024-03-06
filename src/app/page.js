import Image from 'next/image';
import styles from './page.module.css';
import Hero from '@/components/hero/Hero';
import HomeAbout from '@/components/homeAbout/HomeAbout';
import Slider from '@/components/Slider/Slider';

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <Slider />
    </div>
  );
}
