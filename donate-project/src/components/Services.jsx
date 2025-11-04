import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { HeartPulse, Bone, Users, ShieldCheck } from 'lucide-react'

const servicesList = [
  {
    icon: <Bone className="h-8 w-8 text-emerald-600" />,
    title: 'Fisioterapia Ortopédica',
    description: 'Tratamento de lesões musculares, fraturas, pós-cirúrgicos e dores na coluna.',
  },
  {
    icon: <Users className="h-8 w-8 text-emerald-600" />,
    title: 'Fisioterapia Geriátrica',
    description: 'Foco na manutenção da mobilidade, prevenção de quedas e qualidade de vida para idosos.',
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-emerald-600" />,
    title: 'Recuperação Neurológica',
    description: 'Reabilitação para pacientes pós-AVC, com Parkinson, Esclerose Múltipla e outras condições.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />,
    title: 'Prevenção de Lesões',
    description: 'Avaliação e criação de programas de exercícios para prevenir futuras lesões e dores.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nossos Tratamentos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Oferecemos uma gama completa de serviços de fisioterapia para atender suas necessidades específicas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <Card key={service.title} className="bg-gray-50 border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                  {service.icon}
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="mt-2 text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}