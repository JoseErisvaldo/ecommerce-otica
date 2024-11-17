
import { CarouselTransition } from "../../components/layout/carousel";
import { ListCard } from "../../components/layout/EcommerceCard/listCard";import { ListCarousel } from "../../components/layout/EcommerceCard/listCarousel";
import Container from "../../layouts";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Óculos de Sol Ray-Ban Aviator",
      originalPrice: 120.0,
      discount: 10,
      description: "Óculos de sol estilo aviador com lentes polarizadas.",
      imageUrl:
        "https://images.unsplash.com/photo-1601945034775-2c330c121a7a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 2,
      name: "Óculos de Sol Oakley Holbrook",
      originalPrice: 150.0,
      discount: 15,
      description: "Design moderno com lentes de alta definição.",
      imageUrl:
        "https://images.unsplash.com/photo-1603680212247-cada9ac8967d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 3,
      name: "Óculos de Sol Gucci GG0061S",
      originalPrice: 350.0,
      discount: 20,
      description: "Óculos de sol com design sofisticado e lentes UV400.",
      imageUrl:
        "https://images.unsplash.com/photo-1603890657475-b2c3ca9f9135?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 4,
      name: "Óculos de Sol Prada",
      originalPrice: 220.0,
      discount: 12,
      description: "Óculos de sol com armação de acetato e lentes espelhadas.",
      imageUrl:
        "https://images.unsplash.com/photo-1601944962471-99a3834fe397?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 5,
      name: "Óculos de Sol Burberry BE 4303",
      originalPrice: 250.0,
      discount: 5,
      description: "Modelo com design clássico e lentes com proteção UV.",
      imageUrl:
        "https://images.unsplash.com/photo-1603955403849-b94d5cc41868?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 6,
      name: "Óculos de Sol Chanel Pilot",
      originalPrice: 300.0,
      discount: 25,
      description: "Design premium com armação de metal e proteção UV400.",
      imageUrl:
        "https://images.unsplash.com/photo-1587024109936-b7bfe23d8c1c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 7,
      name: "Óculos de Sol Dior SoReal",
      originalPrice: 400.0,
      discount: 18,
      description: "Óculos de sol com design icônico e lentes de alta qualidade.",
      imageUrl:
        "https://images.unsplash.com/photo-1566741936560-d62b8dd7b3b9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 8,
      name: "Óculos de Sol Versace VE4361",
      originalPrice: 280.0,
      discount: 10,
      description: "Modelo elegante com logo em metal na armação.",
      imageUrl:
        "https://images.unsplash.com/photo-1589621319127-fd3bd84e83f8?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 9,
      name: "Óculos de Sol Tom Ford FT5550",
      originalPrice: 350.0,
      discount: 15,
      description: "Design atemporal com lentes de cristal polarizadas.",
      imageUrl:
        "https://images.unsplash.com/photo-1592591906075-8cb2ff260022?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 10,
      name: "Óculos de Sol Michael Kors Adrianna",
      originalPrice: 200.0,
      discount: 8,
      description: "Modelo feminino com detalhes dourados e lentes espelhadas.",
      imageUrl:
        "https://images.unsplash.com/photo-1598892855588-411fab6d1871?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 11,
      name: "Óculos de Sol Armani Exchange",
      originalPrice: 180.0,
      discount: 12,
      description: "Armação leve e lentes com tecnologia de proteção contra UV.",
      imageUrl:
        "https://images.unsplash.com/photo-1621623215543-3a89af9f32ed?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 12,
      name: "Óculos de Sol Fossil Female",
      originalPrice: 140.0,
      discount: 20,
      description: "Modelo casual para uso diário com lentes polarizadas.",
      imageUrl:
        "https://images.unsplash.com/photo-1586546739335-cd9991f65b16?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 13,
      name: "Óculos de Sol Ray-Ban Round",
      originalPrice: 210.0,
      discount: 10,
      description: "Armação redonda clássica com lentes espelhadas.",
      imageUrl:
        "https://images.unsplash.com/photo-1592591424899-c4e7f7aa6cb3?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 14,
      name: "Óculos de Sol Polaroid",
      originalPrice: 100.0,
      discount: 5,
      description: "Óculos de sol acessível com lentes polarizadas.",
      imageUrl:
        "https://images.unsplash.com/photo-1599994034707-8709bfb99c19?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      id: 15,
      name: "Óculos de Sol Hugo Boss HB100",
      originalPrice: 260.0,
      discount: 8,
      description: "Modelo premium com estilo executivo.",
      imageUrl:
        "https://images.unsplash.com/photo-1585874875914-898ea1b4852e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwMjV8MHx8b2N1bGFyfGVufDB8fHx8fDE2Mzc1OTMwNzM&ixlib=rb-1.2.1&q=80&w=1080",
    },
  ];
  

  return (
    <Container>
      <div className="h-96">
        <CarouselTransition />
      </div>
      <div>
        <h2 className="mt-5 font-bold text-2xl">Black Friday</h2>
        <div className="">
          <ListCarousel list={products} />
        </div>
      </div>
    </Container>
  );
}