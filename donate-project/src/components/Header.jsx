import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Stethoscope, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Stethoscope className="h-6 w-6 text-emerald-600" />
          <span className="font-bold text-lg text-gray-900">Fisio Dani</span>
        </Link>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6">
          <Link href="#inicio" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
            Início
          </Link>
         <Link href="#sobre-mim" className='text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors'>
              Sobre mim
          </Link>
          <Link href="#servicos" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
            Serviços
          </Link>
          <Link href="#depoimentos" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
            Depoimentos
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <a href="https://wa.me/5511982295463" target="_blank" rel="noopener noreferrer">
              Agende sua Avaliação
            </a>
          </Button>
        </div>

        {/* Menu Mobile (Ícone) */}
        <div className="md:hidden">
          <Button size="icon" variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}