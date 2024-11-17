import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// Função auxiliar para calcular o preço com desconto
function calculateDiscountedPrice(originalPrice, discount) {
  return (originalPrice - (originalPrice * discount) / 100).toFixed(2);
}


{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product) => (
            <ListCard
              key={product.id}
              name={product.name}
              originalPrice={product.originalPrice}
              discount={product.discount}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
  </div>
  */}

export function ListCard({
  name,
  originalPrice,
  discount,
  description,
  imageUrl,
}) {
  const discountedPrice = calculateDiscountedPrice(originalPrice, discount);

  return (
    <Card className="w-full h-full flex flex-col justify-between">
      <CardHeader shadow={false} floated={false} className="h-48">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover bg-blue-gray-600"
        />
      </CardHeader>
      <CardBody className="flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-4">
        <div className="flex gap-3 items-center">
          <Typography color="red" className="font-medium line-through">
            De ${originalPrice.toFixed(2)}
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
      </CardFooter>
    </Card>
  );
}
