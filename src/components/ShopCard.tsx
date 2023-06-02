import Image from 'next/image'

export default function ShopCard() {
  return (
    <div className="items-center flex w-3/12 flex-col justify-between gap-4 rounded-md bg-[#18181b] p-4">
      <div className="flex w-full flex-col -items-center justify-center gap-4">
        <Image
          src={'/images/jett.jpg'}
          width={384}
          height={160}
          alt="Product"
          className="rounded-sm"
        />
        <p className="line-clamp-5 text-ellipsis">
          Foto tirada pela câmera do cypher com sistema de luminescência a gás
          criado pela kingdom
        </p>
      </div>
      <div className="flex w-full flex-wrap items-start justify-between gap-4  text-white">
        <p className="font-semibold">R$ 19,90</p>
        <div className="items-center flex flex-col flex-wrap gap-4  text-white">
          <button className="w-32 rounded-md bg-[#9333EA] p-2 text-white">
            ADICIONAR
          </button>
          <button className="w-32 rounded-md bg-[#9333EA] p-2 text-white">
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  )
}
