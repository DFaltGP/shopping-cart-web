import ShopCart from '@/components/ShopCart'

export default function Shop() {
  return (
    <div className="grid h-screen grid-cols-4">
      <div className="col-span-3 grid h-screen items-center justify-center bg-zinc-950 text-4xl">
        <p>VENHA CONHECER OS NOSSOS PRODUTOS!</p>
      </div>
      <div className="col-span-1 flex h-screen items-center justify-center bg-zinc-950">
        <ShopCart />
      </div>
    </div>
  )
}
