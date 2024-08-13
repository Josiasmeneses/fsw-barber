"use client";
import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface PhoneItemProps {
  phone: string;
}
const PhoneItem = ({ phone }: PhoneItemProps) => {
  const hanleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone);
    toast.success("Telefonde copiado para área de trabalho!");
  };

  return (
    <div className="flex justify-between" key={phone}>
      {/* Esquerda */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      {/* Dierita */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => hanleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  );
};

export default PhoneItem;
