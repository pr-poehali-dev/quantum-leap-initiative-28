import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "AirFlow подошва",
    description: "Запатентованная технология амортизации с воздушными камерами — каждый шаг мягкий, как первый.",
    icon: "zap",
    badge: "Технология",
  },
  {
    title: "Eco-материалы",
    description: "Верх из переработанного пластика и натуральных волокон — стильно, прочно и экологично.",
    icon: "globe",
    badge: "Eco",
  },
  {
    title: "Идеальная посадка",
    description: "Анатомическая колодка и адаптивный язычок обеспечивают идеальный комфорт с первой примерки.",
    icon: "target",
    badge: "Комфорт",
  },
  {
    title: "Износостойкость",
    description: "Резиновая подошва с защитой от истирания выдерживает до 1000 км — проверено лабораторно.",
    icon: "brain",
    badge: "Прочность",
  },
  {
    title: "Дышащий верх",
    description: "Сетчатые панели с терморегуляцией держат ноги сухими при любой нагрузке.",
    icon: "link",
    badge: "Вентиляция",
  },
  {
    title: "Стиль без компромиссов",
    description: "Минималистичный дизайн, который подходит и для пробежки, и для повседневного образа.",
    icon: "lock",
    badge: "Дизайн",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Технологии в каждом шаге</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            NovoStep — это не просто кроссовки. Это результат инженерной мысли и любви к движению
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}