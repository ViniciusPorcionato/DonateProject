import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonialsList = [
  {
    name: 'Roberto C.',
    feedback: 'Fui atendido pela Daniela após a COVID-19. O trabalho dela em Fisioterapia Respiratória foi a chave para eu recuperar minha capacidade pulmonar rapidamente. Profissionalismo e atenção nota 10!',
  },
  {
    name: 'Sra. Júlia',
    feedback: 'A Fisioterapeuta Daniela nos apoiou nos Cuidados Paliativos do meu pai. O conforto e o foco na qualidade de vida que ela trouxe foi inestimável para a família. Somos muito gratos.',
  },
  {
    name: 'Carla M.',
    feedback: 'Graças à Daniela, a reabilitação da Oncologia foi muito mais suave. Ela personalizou meu tratamento para a fadiga e me deu a confiança necessária para retomar minhas atividades.',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="w-full py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            O que meus pacientes dizem
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Feedbacks reais de pessoas que melhoraram sua qualidade de vida.
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