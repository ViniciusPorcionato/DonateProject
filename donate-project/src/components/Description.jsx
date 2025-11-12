
import Image from 'next/image'; 

export default function Description() {
  return (
    <section id="sobre-mim" className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Quem é a Daniela?</h2>
          <div className="md:flex md:items-center md:text-left md:space-x-16 max-w-4xl mx-auto">
          <div className="flex-shrink-0 mx-auto md:mx-8 mb-8 md:mb-0">
            <Image
              src="/dani.jpeg" 
              alt="Foto de Daniela, Fisioterapeuta"
              width={250} 
              height={250}
              className="rounded-full object-cover shadow-xl" 
            />
          </div>
          <div className="flex-grow">
            <p className="text-lg md:text-xl text-gray-600">
              Daniela é uma fisioterapeuta com uma sólida trajetória profissional que se inicia em 2000, com sua graduação pela UniABC. Sua busca contínua por excelência é evidente em suas especializações, incluindo uma Pós-graduação em Fisioterapia Cardiorrespiratória (UniABC, 2002).
              <br /><br />
              Complementando sua expertise clínica, Daniela possui um MBA em Gestão em Saúde pela Universidade São Camilo (2021), demonstrando sua visão abrangente do setor. Mais recentemente, em 2024, aprimorou seus conhecimentos em uma área de grande sensibilidade, concluindo a formação em Fisioterapia em Oncologia e Cuidados Paliativos pela Phisio Cursos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}