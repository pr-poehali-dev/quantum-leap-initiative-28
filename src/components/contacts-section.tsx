import Icon from "@/components/ui/icon"

export function ContactsSection() {
  return (
    <section id="contacts" className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Контакты</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Мы находимся в Москве и готовы ответить на любые вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={22} className="text-red-500" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg mb-1">Адрес магазина</p>
                <p className="text-gray-400">г. Москва, ул. Тверская, д. 14, офис 201</p>
                <p className="text-gray-500 text-sm mt-1">Пн–Пт: 10:00–20:00, Сб–Вс: 11:00–18:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={22} className="text-red-500" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg mb-1">Телефон</p>
                <a href="tel:+74951234567" className="text-gray-400 hover:text-red-400 transition-colors">
                  +7 (495) 123-45-67
                </a>
                <p className="text-gray-500 text-sm mt-1">Звоните в рабочее время</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={22} className="text-red-500" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg mb-1">Email</p>
                <a href="mailto:hello@novostep.ru" className="text-gray-400 hover:text-red-400 transition-colors">
                  hello@novostep.ru
                </a>
                <p className="text-gray-500 text-sm mt-1">Ответим в течение 24 часов</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" size={22} className="text-red-500" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg mb-1">Мессенджеры</p>
                <div className="flex gap-4 mt-1">
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">Telegram</a>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">WhatsApp</a>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">VK</a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-red-500/20 h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.6823095444577!2d37.60535731590876!3d55.76393198055636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5b2b7ed229%3A0x5b7c93da5a7a0d91!2z0KLQstC10YDRgdC60LDRjywgMTQsINCc0L7RgdC60LLQsCwgMTI1MDA5!5e0!3m2!1sru!2sru!4v1700000000000!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта офиса NovoStep"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
