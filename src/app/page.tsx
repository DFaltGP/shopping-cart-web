import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen flex-1 items-center justify-center bg-[#09090B]">
      <div className="flex h-1/4 w-5/12 flex-col items-center justify-evenly gap-4 rounded-md border-2 border-purple-700 pt-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="flex select-none flex-row items-center  justify-center gap-1 text-3xl font-semibold">
            Bora-Codar: Carrinho de compras <ShoppingCart />
          </p>
          <p className="select-none">
            Com base no layout disponibilizado pela equipe de Devs da
            Rocketseat💜
          </p>
        </div>
        <Link
          href={'/shop'}
          className="flex w-72 items-center justify-center rounded-md bg-purple-700 p-3 font-semibold transition-all hover:bg-purple-600"
        >
          VAMOS ÀS COMPRAS!
        </Link>
      </div>
    </div>
  )
}
