import Link from 'next/link'
import { Stethoscope, Instagram, Facebook, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1: Logo e Descrição */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Stethoscope className="h-6 w-6 text-emerald-500" />
            <span className="font-bold text-xl text-white">FisioHome</span>
          </Link>
          <p className="text-sm text-gray-400">
            Cuidado e reabilitação no conforto da sua casa.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Atendimento em [Nome da Cidade/Região]
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
          <nav className="flex flex-col gap-2">
            <Link href="#inicio" className="text-sm hover:text-emerald-400 transition-colors">
              Início
            </Link>
            <Link href="#servicos" className="text-sm hover:text-emerald-400 transition-colors">
              Serviços
            </Link>
            <Link href="#depoimentos" className="text-sm hover:text-emerald-400 transition-colors">
              Depoimentos
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Siga-nos</h4>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 mt-8 pt-8 border-t border-gray-700 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} FisioHome. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}