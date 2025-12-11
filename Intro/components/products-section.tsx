import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      name: "캐시미어 코트",
      category: "Outerwear",
      price: "₩890,000",
      image: "/elegant-cashmere-coat-on-hanger-minimalist-style.jpg",
    },
    {
      name: "실크 블라우스",
      category: "Tops",
      price: "₩320,000",
      image: "/silk-blouse-elegant-fashion-minimalist.jpg",
    },
    {
      name: "테일러드 팬츠",
      category: "Bottoms",
      price: "₩280,000",
      image: "/tailored-pants-elegant-fashion-minimalist-neutral.jpg",
    },
  ]

  return (
    <section id="products" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-sm tracking-widest uppercase text-muted-foreground">Collection</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight text-secondary-foreground">
              베스트 컬렉션
            </h2>
          </div>
          <Link
            href="#"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm tracking-wide text-muted-foreground hover:text-secondary-foreground transition-colors"
          >
            전체 보기 <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm bg-card">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                    <ArrowUpRight className="h-4 w-4 text-card-foreground" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs tracking-wide text-muted-foreground uppercase">{product.category}</p>
                <h3 className="mt-1 text-lg font-medium text-secondary-foreground">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
