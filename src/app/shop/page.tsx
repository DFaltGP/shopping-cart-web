import ShopCard from '@/components/ShopCard'
import ShopCart from '@/components/ShopCart'

export default function Shop() {
  return (
    <div className="grid h-screen grid-cols-4">
      <div className="col-span-3 flex h-full flex-col overflow-y-scroll bg-zinc-950 ">
        <nav className="flex h-14 items-center  p-8">
          <label htmlFor="select">Ordenar por</label>
        </nav>
        <div className="flex flex-wrap items-center justify-evenly gap-4  bg-emerald-700">
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
