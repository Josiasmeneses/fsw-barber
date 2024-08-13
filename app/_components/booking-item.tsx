import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
//TODO receber o agendamento como PROP
const BookingItem = () => {
  return (
    <Card className="mt-6">
      <CardContent className="flex justify-between p-0">
        {/* Esquerda */}
        <div className="flex flex-col gap-2 py-5 pl-5">
          <Badge className="w-fit">Confirmado</Badge>
          <h3 className="font-semibold">Corte de Cabelo</h3>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-4">
              <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
            </Avatar>
            <p className="text-sm">Barbearia Rodiguin</p>
          </div>
        </div>
        {/* Direita */}
        <div className="flex flex-col items-center justify-center px-5 borderl-2 border-solid ">
          <p className="text-sm">Agosto</p>
          <p className="text-2xl">10</p>
          <p className="text-sm">20:00</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
