const team = [
  {
    name: "Алексей Воронов",
    role: "Основатель и CEO",
    photo: "https://cdn.poehali.dev/projects/42419e41-2181-4bf9-919b-f81540f37b8a/files/a91323fa-2754-4476-b873-984bf86f89a2.jpg",
  },
  {
    name: "Марина Соколова",
    role: "Директор по дизайну",
    photo: "https://cdn.poehali.dev/projects/42419e41-2181-4bf9-919b-f81540f37b8a/files/b486efc9-b7f1-424d-ac76-671a73928bf3.jpg",
  },
  {
    name: "Дмитрий Орлов",
    role: "Главный технолог",
    photo: "https://cdn.poehali.dev/projects/42419e41-2181-4bf9-919b-f81540f37b8a/files/05d905bd-5325-400d-abb1-cc2c60d80aad.jpg",
  },
  {
    name: "Екатерина Лебедева",
    role: "Руководитель маркетинга",
    photo: "https://cdn.poehali.dev/projects/42419e41-2181-4bf9-919b-f81540f37b8a/files/715687d2-0720-49fc-adcf-7daa6062b50a.jpg",
  },
  {
    name: "Сергей Громов",
    role: "Финансовый директор",
    photo: "https://cdn.poehali.dev/projects/42419e41-2181-4bf9-919b-f81540f37b8a/files/c04def2f-a930-4918-9ef6-ebda492292f3.jpg",
  },
  {
    name: "Анастасия Петрова",
    role: "Менеджер по продажам",
    photo: "https://cdn.poehali.dev/projects/42419e41-2181-4bf9-919b-f81540f37b8a/files/ef7b17ad-6c20-4acc-bd04-dca5c8e0c36b.jpg",
  },
  {
    name: "Никита Зайцев",
    role: "Амбассадор бренда",
    photo: "https://cdn.poehali.dev/projects/42419e41-2181-4bf9-919b-f81540f37b8a/files/d6579fa0-d4ca-45ac-bcec-6ba1f3289700.jpg",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Наша команда</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Люди, которые каждый день делают NovoStep лучше
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-4 w-full aspect-square max-w-[180px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-2xl border border-white/10 group-hover:border-red-500/40 transition-colors duration-300"
                />
              </div>
              <p className="text-white font-semibold text-base">{member.name}</p>
              <p className="text-red-400 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
