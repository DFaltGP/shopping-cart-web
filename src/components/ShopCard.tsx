import Image from 'next/image'
import { useState } from 'react'

export const ShopCard: React.FC = () => {

  interface Item {
    id: string;
    name: string;
    description: string;
    imgSrc: string;
    price: string
  }

  const [itemInCard, setItemInCard] = useState<Item[]>([])

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
        Segundo melhor duelista do Valorant atualmente. Apesar dos seus nerfs, continua desempenhando muito bem em mapas que exigem o uso de OP
        </p>
      </div>
      <div className="flex flex-col w-full flex-wrap items-start justify-between gap-4  text-white">
        <div className='flex w-full flex-col items-center'>
        <div className='flex w-full items-center justify-evenly'> 
        <p className="font-semibold">R$ 1108,32</p> <p className='font-thin leading-relaxed'>28% OFF</p>
        </div>
        <p className='font-thin leading-relaxed'>12x Sem juros de 92,36</p>
        </div>
        <div className="items-center select-none flex w-full flex-wrap gap-4 justify-center text-white">
        <div className="items-center flex justify-evenly w-full flex-wrap gap-4  text-white">
          <button className="w-32 rounded-md bg-[#9333EA] p-2 font-semibold text-white">
            ADICIONAR
          </button>
          <button className="w-32 rounded-md text-[#9333EA] p-2 font-semibold bg-white">
            COMPRAR
          </button>
        </div>
      </div>
    </div>
    </div>
  )
 }    
  

