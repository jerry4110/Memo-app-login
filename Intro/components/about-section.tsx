export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <img src="/fashion-atelier-interior-with-clothing-racks-and-e.jpg" alt="MAISON 아틀리에" className="w-full h-auto rounded-sm" />
          </div>
          <div className="max-w-lg">
            <span className="text-sm tracking-widest uppercase text-muted-foreground">About Us</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight text-card-foreground leading-tight">
              우리의 이야기
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              2015년 서울에서 시작된 MAISON은 &ldquo;시대를 초월한 우아함&rdquo;을 추구하는 프리미엄 패션 브랜드입니다.
              우리는 빠르게 변하는 트렌드가 아닌, 오래도록 사랑받을 수 있는 클래식한 디자인을 선보입니다.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              장인의 손길로 완성되는 섬세한 디테일, 최고급 소재만을 사용한 품질, 그리고 지속 가능한 패션을 향한 우리의
              철학이 MAISON의 모든 제품에 담겨 있습니다.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-light text-card-foreground">10+</p>
                <p className="mt-1 text-sm text-muted-foreground">년의 역사</p>
              </div>
              <div>
                <p className="text-3xl font-light text-card-foreground">50K+</p>
                <p className="mt-1 text-sm text-muted-foreground">고객</p>
              </div>
              <div>
                <p className="text-3xl font-light text-card-foreground">30+</p>
                <p className="mt-1 text-sm text-muted-foreground">전국 매장</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
