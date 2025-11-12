import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section id="contato" className="w-full py-20 md:py-32 bg-emerald-600">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Pronto para começar sua recuperação?
        </h2>
        <p className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto">
          Não deixe a dor ou a dificuldade de locomoção impedirem seu bem-estar. Entre em contato e agende sua primeira avaliação.
        </p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild>
            <a href="https://wa.me/5511982295463" target="_blank" rel="noopener noreferrer">
              Fale Conosco Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}