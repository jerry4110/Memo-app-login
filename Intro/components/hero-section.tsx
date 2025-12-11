import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 영역 */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-tight text-balance">
              시대를 초월한
              <br />
              <span className="italic">우아함</span>을 입다
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              MAISON은 현대적 세련미와 클래식한 우아함이 조화를 이루는 프리미엄 패션 브랜드입니다. 당신만의 스타일을
              발견하세요.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Link href="#about" className="group">
                <span className="text-sm tracking-widest uppercase text-muted-foreground">브랜드 스토리</span>
                <div className="mt-2 flex items-center justify-center w-10 h-10 rounded-full border border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
              <Link href="#products" className="group ml-0 sm:ml-16">
                <span className="text-sm tracking-widest uppercase text-muted-foreground">컬렉션 보기</span>
                <div className="mt-2 flex items-center justify-center w-10 h-10 rounded-full border border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src="/elegant-fashion-model-wearing-minimalist-clothing-.jpg"
                alt="패션 모델"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
