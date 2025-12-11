export function ValuesSection() {
  const values = [
    {
      number: "1",
      title: "품질 우선",
      description:
        "최고급 원단과 소재만을 엄선하여 오랜 시간 변치 않는 품질을 약속합니다. 모든 제품은 장인의 손길로 꼼꼼하게 마감됩니다.",
    },
    {
      number: "2",
      title: "지속 가능성",
      description:
        "환경을 생각하는 지속 가능한 패션을 추구합니다. 친환경 소재 사용과 윤리적 생산 과정을 통해 미래 세대를 위한 책임을 다합니다.",
    },
    {
      number: "3",
      title: "시대를 초월한 디자인",
      description:
        "유행을 따르지 않고, 오래도록 사랑받을 수 있는 클래식한 디자인을 선보입니다. 당신의 옷장에서 영원히 빛날 아이템을 만듭니다.",
    },
  ]

  return (
    <section id="values" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest uppercase text-muted-foreground">Our Values</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight text-foreground">브랜드 가치</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.number}
              className="p-8 border border-border rounded-sm hover:border-accent transition-colors"
            >
              <span className="text-5xl font-light text-muted-foreground/30">{value.number}</span>
              <h3 className="mt-4 text-xl font-medium text-foreground">{value.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
