import Image from 'next/image';
import styles from './page.module.css';
import Hero from '@/components/hero/Hero';
import HomeAbout from '@/components/homeAbout/HomeAbout';
import HomeService from '@/components/homeService/HomeService';
import Slider from '@/components/Slider/Slider';
import Clients from '@/components/clients/Clients';
import HomeContact from '@/components/homeContact/HomeContact';

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeService />
      <Slider />
      <Clients />
      <HomeContact />
    </div>
  );
}
