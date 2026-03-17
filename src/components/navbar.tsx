import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://cdn.poehali.dev/projects/42419e41-2181-4bf9-919b-f81540f37b8a/bucket/2afd84dd-4ad6-4c91-8568-a584e6c3c092.png"
              alt="NovoStep"
              className="h-10 w-auto invert"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#technology"
                className="font-geist text-white hover:text-red-500 transition-colors duration-200"
              >
                Технологии
              </a>
              <a href="#applications" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Коллекции
              </a>
              <a href="#faq" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Вопросы
              </a>
              <a href="#contacts" className="font-geist text-white hover:text-red-500 transition-colors duration-200">
                Контакты
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-red-500 hover:bg-red-600 text-white font-geist border-0">Купить сейчас</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-red-500/20">
              <a
                href="#technology"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Технологии
              </a>
              <a
                href="#applications"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Коллекции
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <a
                href="#contacts"
                className="block px-3 py-2 font-geist text-white hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-geist border-0">
                  Купить сейчас
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}