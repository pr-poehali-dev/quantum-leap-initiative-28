import { useState } from "react"
import { Button } from "@/components/ui/button"
import func2url from "../../backend/func2url.json"

export function CTASection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(func2url["send-email"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus("success")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Сделай следующий шаг с NovoStep</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Есть вопросы о размере, доставке или хочешь заказать? Напишите нам — ответим быстро.
          </p>

          {status === "success" ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 max-w-lg mx-auto">
              <p className="text-green-400 text-xl font-semibold mb-2">Сообщение отправлено!</p>
              <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 text-left">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <textarea
                placeholder="Ваш вопрос или сообщение"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
              {status === "error" && (
                <p className="text-red-400 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-4"
              >
                {status === "loading" ? "Отправляем..." : "Отправить сообщение"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
