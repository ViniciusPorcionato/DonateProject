
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { HeartPulse, Wind, Users, Stethoscope } from 'lucide-react'

const servicesList = [
  {
    icon: <Wind className="h-8 w-8 text-emerald-600" />,
    title: 'Fisioterapia Respiratória',
    description: 'Técnicas para otimizar a função pulmonar, essenciais para quadros de DPOC, asma e recuperação pós-COVID.',
  },
  {
    icon: <Users className="h-8 w-8 text-emerald-600" />,
    title: 'Cuidados Paliativos',
    description: 'Foco no alívio do sofrimento e melhoria da qualidade de vida de pacientes e famílias que enfrentam doenças graves.',
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-emerald-600" />,
    title: 'Oncologia',
    description: 'Reabilitação pré e pós-tratamento oncológico, ajudando a minimizar efeitos colaterais como fadiga, dor e linfedema.',
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-emerald-600" />,
    title: 'Fisioterapia Cardiovascular',
    description: 'Programas de reabilitação cardíaca, visando a melhoria da capacidade funcional e prevenção de novos eventos.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Minhas especialidades
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ofereço um amplo conhecimento no atendimento para as seguintes necessidades de atendimento
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