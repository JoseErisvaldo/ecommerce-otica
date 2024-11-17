import { Button, Carousel, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export function ListCarousel({ list }) {
  // Estado para controlar o número de itens por slide
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  // Atualiza o número de itens por slide conforme o tamanho da tela
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(4); // 4 itens no PC
      } else if (window.innerWidth >= 640) {
        setItemsPerSlide(3); // 3 itens em tablets
      } else {
        setItemsPerSlide(1); // 1 item em celulares
      }
    };

    // Chama a função ao carregar o componente
    updateItemsPerSlide();

    // Adiciona event listener para mudanças no tamanho da tela
    window.addEventListener("resize", updateItemsPerSlide);

    // Limpa o event listener quando o componente for desmontado
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Divida os produtos em blocos de acordo com `itemsPerSlide`
  const chunkedList = [];
  for (let i = 0; i < list.length; i += itemsPerSlide) {
    chunkedList.push(list.slice(i, i + itemsPerSlide));
  }

  // Função para calcular o preço com desconto
  function calculateDiscountedPrice(originalPrice, discount) {
    return (originalPrice - (originalPrice * discount) / 100).toFixed(2);
  }

  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      {chunkedList.map((chunk, index) => (
        <div key={index} className="flex ">
          {chunk.map((product) => {
            // Calcula o preço com desconto para cada produto
            const discountedPrice = calculateDiscountedPrice(product.originalPrice, product.discount);

            return (
              <div
                key={product.id}
                className="w-full sm:w-1/3 md:w-1/4 p-2" // Responsividade para itens individuais
              >
                <div className="mb-1 bg-red-500 text-white rounded-xl">
                  BlackFriday {product.discount}%
                </div>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-96 w-full object-cover bg-blue-gray-600 text-white rounded-xl"
                />
                <Typography color="blue-gray" className="font-bold">
                  {product.name}
                </Typography>
                <div className="flex gap-3 items-center">
                  <Typography color="red" className="font-medium line-through">
                    De ${product.originalPrice.toFixed(2)}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    Por ${discountedPrice}
                  </Typography>
                </div>
                <Button
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  Comparar
                </Button>
              </div>
            );
          })}
        </div>
      ))}
    </Carousel>
  );
}
