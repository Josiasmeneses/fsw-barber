"use-client";

// import { useState } from 'react';

import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Josias!</h2>
        <p>09/08/2024</p>
        {/* Busca */}
        <div className="flex items-center gap-3">
          <Input placeholder="Buscar Barbearia/Serviços" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* Banner */}
        <div className="relative mt-6 w-full h-[150px]">
          <Image
            alt="Agende agora"
            src="/Banner Pizza.png"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        {/*Agendamento*/}
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
      </div>
    </div>
  );
};
export default Home;
