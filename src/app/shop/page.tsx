import ShopCard from '@/components/ShopCard'
import ShopCart from '@/components/ShopCart'

export default function Shop() {
  return (
    <div className="grid h-screen grid-cols-4">
      <div className="col-span-3 flex h-full flex-col gap-8 overflow-y-scroll bg-zinc-950 ">
        <nav className="sticky top-0 flex h-14 items-center border border-l-0 border-r-0 border-t-0 border-b-[#A1A1AA] bg-zinc-950 p-8">
          <label htmlFor="select">Ordenar por</label>
        </nav>
        <div className="flex flex-wrap items-center justify-evenly gap-4  bg-zinc-950">
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
