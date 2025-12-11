"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "MAISON의 옷을 입으면 자신감이 달라집니다. 품질과 디자인 모두 만족스럽고, 오래 입어도 변함없는 품질이 정말 좋습니다.",
      author: "김서연",
      title: "패션 에디터",
    },
    {
      quote:
        "시간이 지나도 질리지 않는 클래식한 디자인, 그리고 착용감까지 완벽합니다. 이제 다른 브랜드는 눈에 들어오지 않아요.",
      author: "이준혁",
      title: "기업 임원",
    },
    {
      quote: "지속 가능한 패션을 추구하면서도 스타일을 포기하지 않는 브랜드. MAISON을 알게 되어 정말 다행이에요.",
      author: "박지민",
      title: "환경 활동가",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm tracking-widest uppercase text-muted-foreground">Testimonials</span>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed">
            &ldquo;{testimonials[currentIndex].quote}&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-medium text-foreground">{testimonials[currentIndex].author}</p>
            <p className="text-sm text-muted-foreground">{testimonials[currentIndex].title}</p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-foreground" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
