import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="text-sm tracking-widest uppercase opacity-60">Contact</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">문의하기</h2>
            <p className="mt-6 opacity-80 leading-relaxed">
              MAISON에 대해 궁금한 점이 있으시거나 협업을 원하신다면 언제든 연락해 주세요. 전문 상담원이 친절하게 안내해
              드립니다.
            </p>
            <div className="mt-10 space-y-4">
              <div>
                <p className="text-sm opacity-60">이메일</p>
                <p className="mt-1">contact@maison.kr</p>
              </div>
              <div>
                <p className="text-sm opacity-60">전화</p>
                <p className="mt-1">02-1234-5678</p>
              </div>
              <div>
                <p className="text-sm opacity-60">주소</p>
                <p className="mt-1">서울특별시 강남구 압구정로 123</p>
              </div>
            </div>
          </div>

          <div className="bg-card text-card-foreground p-8 rounded-sm">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    이름
                  </label>
                  <Input id="name" placeholder="홍길동" className="mt-2" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    이메일
                  </label>
                  <Input id="email" type="email" placeholder="example@email.com" className="mt-2" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium">
                  제목
                </label>
                <Input id="subject" placeholder="문의 제목을 입력해주세요" className="mt-2" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  메시지
                </label>
                <Textarea id="message" placeholder="문의 내용을 입력해주세요" rows={5} className="mt-2" />
              </div>
              <Button type="submit" className="w-full">
                문의 보내기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
