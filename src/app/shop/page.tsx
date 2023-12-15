import { ShopCard } from '@/components/ShopCard'
import ShopCart from '@/components/ShopCart'

export default function Shop() {
  return (
    <div className="grid h-screen grid-cols-4">
      <div className="col-span-3 flex h-full flex-col overflow-y-scroll bg-neutral-200 ">
        <nav className="sticky top-0 flex h-14 items-center shadow-md bg-[#18181a] p-8">
          <label htmlFor="select">Ordenar por</label>
        </nav>
        <div className="flex flex-wrap items-center justify-evenly gap-4 mt-4 mb-4 bg-neutral-200">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
      <div className="col-span-1 flex h-screen items-center justify-center bg-zinc-950">
        <ShopCart />
      </div>
    </div>
  )
}
