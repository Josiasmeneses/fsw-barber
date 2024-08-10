"use-client";

// import { useState } from 'react';

import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Josias!</h2>
        <p>09/08/2024</p>
        <div className="flex items-center gap-3">
          <Input placeholder="Buscar Barbearia/Serviços" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 w-full h-[150px]">
          <Image
            alt="Agende agora"
            src="/Banner Pizza.png"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
