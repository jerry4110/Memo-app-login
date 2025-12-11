import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-wider text-foreground">
              MAISON
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              시대를 초월한 우아함과 현대적 세련미가 만나는 곳
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wide text-foreground">회사 소개</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  브랜드 스토리
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  브랜드 가치
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  매장 찾기
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  채용 안내
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wide text-foreground">고객 서비스</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  배송 안내
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  교환 및 반품
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  사이즈 가이드
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wide text-foreground">뉴스레터</h4>
            <p className="mt-4 text-sm text-muted-foreground">새로운 컬렉션과 이벤트 소식을 받아보세요.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="이메일 주소"
                className="flex-1 px-4 py-2 text-sm border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
              >
                구독
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 MAISON. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
