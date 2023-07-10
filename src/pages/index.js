import { Inter } from 'next/font/google'

import Sticky from 'react-stickynode';

import Navbar from "../components/Navbar"
import HeroComponent from "../components/HeroSection"
import FeaturesComponent from "../components/Features"
import FeaturesComplement from "../components/Features-2"
import PricingComponent from "../components/Pricing"
import TestimonialComponent from "../components/Testimonials"
import FooterComponent from "../components/Footer"
import {LayoutComponent} from "../components/Layout";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Sticky>
         <Navbar />
     </Sticky>     
      <HeroComponent/>
      <FeaturesComponent/>
      <FeaturesComplement/>
      <PricingComponent/>
      <TestimonialComponent/>
      <FooterComponent/>
     
    </>
  )
}
