import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
const SingInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google");
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça seu Login na plataforma</DialogTitle>
        <DialogDescription>Conecte-se usando o google</DialogDescription>
      </DialogHeader>
      <Button
        variant="outline"
        className="gap-2 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          src="/google.svg"
          width={18}
          height={18}
          alt="Conectar com o Google"
        />
      </Button>
    </>
  );
};

export default SingInDialog;
