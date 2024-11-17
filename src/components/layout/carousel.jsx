import { Carousel } from "@material-tailwind/react";
 
export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img
        src="https://st4.depositphotos.com/11133046/28827/v/1600/depositphotos_288273016-stock-illustration-eyeglasses-sale-banner-concept-optical.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/psd-premium/design-de-banner-de-venda-de-verao-psd-modelo-de-promocao-de-compras-com-oculos-e-palmeira_967562-368.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/psd-premium/ofertas-de-oculos-de-sol-de-sexta-feira-negra-de-banner-de-midia-social_318354-858.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}