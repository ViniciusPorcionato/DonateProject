import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import  Description  from '@/components/Description'

export default function Home() {
  return (
    <>
      <Hero />
      <Description/>
      <Services />
      <Testimonials />
      <CTA />
    </>
  )
}