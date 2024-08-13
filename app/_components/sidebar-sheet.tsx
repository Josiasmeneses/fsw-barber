"use client";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import Link from "next/link";
import Image from "next/image";
// import { Avatar, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { signIn, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
const SidebarSheet = () => {
  const handleLoginWithGoogleClick = () => signIn("google");
  const { data } = useSession();
  const handleLogoutClick = () => singOut();

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between py-5 border-b border-solid">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} />
            </Avatar>
            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-gray-500 text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Olá faça seu login!</h2>
            <Dialog>
              <DialogTrigger>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <DialogHeader>
                  <DialogTitle>Faça seu Login na plataforma</DialogTitle>
                  <DialogDescription>
                    Conecte-se usando o google
                  </DialogDescription>
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
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>

      <div className="flex flex-col p-5 gap-2 py-5 border-b border-solid">
        <SheetClose asChild>
          <Button variant="ghost" className="justify-start gap-2">
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col p-5 gap-2 py-5 border-b border-solid">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            variant="ghost"
            className="justify-start gap-2"
          >
            <Image
              src={option.imageURL}
              alt={option.title}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col p-5 gap-2 py-5">
        <Button
          variant="ghost"
          className="justify-start gap-2"
          onClick={handleLogoutClick}
        >
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
function singOut() {
  throw new Error("Function not implemented.");
}
