"use-client";

// import { useState } from 'react';

import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/Barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Josias!</h2>
        <p>09/08/2024</p>
        {/* Busca */}
        <div className="flex items-center gap-2">
          <Input placeholder="Buscar Barbearia/Serviços" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* Busca Rapida */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageURL}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
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
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-grey-400">
          Agendamento
        </h2>
        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-grey-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-grey-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card className="px-5 py-6">
          <CardContent>
            <p className="text-sm text-gray-400">©2023 Copyright</p>
            <span className="font-bold">FSW Barber</span>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
};
export default Home;
