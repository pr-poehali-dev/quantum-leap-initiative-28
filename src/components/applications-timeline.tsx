import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "NovoStep Run",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Беговая коллекция с максимальной амортизацией и лёгкостью. Созданы для тех, кто бегает ради результата —
            от утренней пробежки до полумарафона.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Вес от 195 г — одни из самых лёгких в классе
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              AirFlow подошва с двойной амортизацией
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Светоотражающие элементы для безопасности в темноте
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "NovoStep Street",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Городская коллекция на каждый день. Лаконичный силуэт, который вписывается в любой образ —
            от офиса до встречи с друзьями.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              12 цветовых решений в сезонной палитре
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Верх из премиальной эко-кожи и сетки
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Комфорт при ношении более 10 часов подряд
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "NovoStep Pro",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Профессиональная серия для спортивных тренировок. Усиленная поддержка стопы, нескользящая подошва
            и материалы, выдерживающие экстремальные нагрузки.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Стабилизирующая система для боковой защиты
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Влагоотводящая подкладка DryCool
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Тестировано в сотрудничестве с профессиональными атлетами
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Наши коллекции</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три линейки NovoStep — для бега, города и спорта. Каждая создана с одной целью:
            чтобы вы чувствовали себя непобедимо.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}