import BarberShopItem from "../_components/Barbershop-item";
import Header from "../_components/header";
import Search from "../_components/search";
import { db } from "../_lib/prisma";

interface BarberShopPageProps {
  searchParams: {
    search?: string;
  };
}
const BarberShopsPage = async ({ searchParams }: BarberShopPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchParams?.search,
            mode: "insensitive",
          },
        },
        {
          services: {
            some: {
              name: {
                contains: searchParams?.search,
                mode: "insensitive",
              },
            },
          },
        },
      ],
    },
  });
  return (
    <div>
      <Header />
      <div className="px-5 my-6">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams.search}&quot;
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarberShopsPage;
