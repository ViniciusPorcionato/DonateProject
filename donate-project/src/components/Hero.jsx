import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section id="inicio" className="w-full py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
            25 Anos de Experiência e Cuidado Humanizado
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Alcance Sua Máxima Recuperação Com o Cuidado Certo.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600">
            Sou Daniela, Fisioterapeuta especialista nas áreas mais sensíveis, como Oncologia e Cuidados Paliativos. Reabilitação personalizada com excelência, onde você estiver.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <a href="https://wa.me/5511982295463" target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#servicos">
                Ver Serviços
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}