import { Card } from "@material-tailwind/react";

export default function LayoutAdmin ({children}) {
  return(
    <Card className="p-5 mt-5">
      {children}
    </Card>
  )
}