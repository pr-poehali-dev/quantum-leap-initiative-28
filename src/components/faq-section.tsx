import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как определить свой размер?",
      answer:
        "На странице каждой модели есть таблица размеров с измерением стопы в сантиметрах. Если вы на границе размеров — рекомендуем брать больший. Также можно написать нам, и мы поможем с выбором.",
    },
    {
      question: "Какие условия доставки?",
      answer:
        "Доставляем по всей России курьером и Почтой России. Срок — 2-5 рабочих дней в зависимости от региона. Доставка бесплатная при заказе от 5 000 ₽.",
    },
    {
      question: "Можно ли вернуть или обменять кроссовки?",
      answer:
        "Да, в течение 30 дней с момента получения. Главное условие — обувь не должна быть в носке. Обмен и возврат оформляем бесплатно.",
    },
    {
      question: "Из каких материалов сделаны кроссовки?",
      answer:
        "Верх — из переработанного полиэстера и натуральных волокон. Подошва — из высокопрочной резины. Все материалы сертифицированы и не содержат токсичных веществ.",
    },
    {
      question: "Как ухаживать за кроссовками?",
      answer:
        "Рекомендуем ручную стирку при температуре до 30°C. Не сушить в барабане и на прямом солнце. Для очистки подошвы подойдёт щётка с мыльным раствором.",
    },
    {
      question: "Есть ли программа лояльности?",
      answer:
        "Да! За каждую покупку начисляем бонусные баллы — 1 балл за каждые 100 ₽. Баллами можно оплатить до 30% следующего заказа.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о размерах, доставке, возврате и уходе за обувью NovoStep.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}