import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonialsList = [
  {
    name: 'Maria S.',
    feedback: 'O atendimento em casa foi um divisor de águas na minha recuperação. Profissionalismo e cuidado nota 10!',
  },
  {
    name: 'João P.',
    feedback: 'Depois da cirurgia, achei que demoraria a andar. A fisioterapia domiciliar acelerou muito meu progresso.',
  },
  {
    name: 'Ana L.',
    feedback: 'Minha mãe (idosa) está muito mais confiante e com menos dores. Recomendo de olhos fechados!',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="w-full py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            O que nossos pacientes dizem
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Feedbacks reais de pessoas que transformaram suas vidas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((item) => (
            <Card key={item.name} className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  <Star className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                  <Star className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                  <Star className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                  <Star className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                  <Star className="h-5 w-5 fill-emerald-500 text-emerald-500" />
                </div>
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-emerald-300 pl-4">
                  "{item.feedback}"
                </blockquote>
                <p className="mt-4 font-semibold text-gray-900">- {item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}