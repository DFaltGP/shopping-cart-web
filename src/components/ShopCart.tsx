'use client'

import Image from 'next/image'
import ShopItem from './ShopItem'
import { useState } from 'react'
import { ShoppingCartIcon } from 'lucide-react'

export default function Shopbar() {
  const [isBarOpen, setIsBarOpen] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isCupomOpen, setIsCupomOpen] = useState(true)
  function toggleShopBar() {
    setIsBarOpen(!isBarOpen)
  }

  function toggleAddCupomOpen() {
    setIsCupomOpen(!isCupomOpen)
  }

  function handleMouseEnter() {
    setIsHovered(true)
  }

  function handleMouseLeave() {
    setIsHovered(false)
  }

  return (
    <div className="items-center flex h-screen w-full flex-col justify-between transition-all">
      {isBarOpen ? (
        <>
          <header className="items-center flex h-14 w-full select-none justify-between border-2 border-l-0 border-r-0 border-t-0 border-b-[#3F3F46] bg-[#18181B] p-8">
            <p className="leading-loose">
              Seu carrinho tem <strong>5 itens</strong>
            </p>
            <button
              onClick={toggleShopBar}
              className="text-2xl font-light text-[#A1A1AA] "
            >
              {' '}
              <Image src={'/icons/close.svg'} alt="X" height={24} width={24} />
            </button>
          </header>

          <section className="items-center flex  w-full flex-grow flex-col justify-start overflow-y-scroll bg-[#18181B]">
            <ShopItem
              imageUrl="/images/product-image-cadeira.jpg"
              description="Cadeira Gamer  RGB - Preta com Iluminação (Led)"
              price="959,90"
              quantity={0}
            />
            <ShopItem
              imageUrl="/images/product-image-headset.jpg"
              description="Headset Gamer RGB"
              price="99,90"
              quantity={0}
            />
            <ShopItem
              imageUrl="/images/product-image-monitor.jpg"
              description="Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD"
              price="8.599,90"
              quantity={0}
            />
            <ShopItem
              imageUrl="/images/product-image-patinho.jpg"
              description="Patinho de borracha grande"
              price="19,90"
              quantity={0}
            />
            <ShopItem
              imageUrl="/images/product-image-teclado.jpg"
              description="Teclado Gamer Mecânico Low Profile RGB AW510K 580"
              price="102,99"
              quantity={0}
            />
          </section>

          <section className="items-center flex w-full flex-col justify-center gap-6 border-2 border-b-0 border-l-0 border-r-0 border-t-[#3F3F46] bg-[#18181B] p-8">
            <div className="items-center flex w-full justify-between text-2xl">
              <p className="select-none leading-relaxed">Total:</p>
              <p className="text=[#F9FAFB] font-semibold">R$ 10.799,99</p>
            </div>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="items-center flex justify-center gap-2 self-end text-[#A855F7] transition-all hover:text-[#C084FC]"
            >
              {isHovered ? (
                <Image
                  src={'/icons/addCupom-hover.svg'}
                  width={21}
                  height={21}
                  alt="icon"
                  className="select-none"
                />
              ) : (
                <Image
                  src={'/icons/addCupom.svg'}
                  width={21}
                  height={21}
                  alt="icon"
                  className="select-none"
                />
              )}
              {isCupomOpen ? (
                <div>
                  <p onClick={toggleAddCupomOpen} className="select-none">
                    Adicionar cupom
                  </p>
                </div>
              ) : (
                <div className="items-center flex select-none justify-between border border-l-0 border-r-0 border-t-0 border-b-[#A855F7]">
                  <input
                    type="text"
                    className="bg-[#18181B] text-[#C084FC] outline-none"
                  />
                  <Image
                    src={'/icons/close.svg'}
                    alt="X"
                    height={24}
                    width={24}
                    onClick={toggleAddCupomOpen}
                  />
                </div>
              )}
            </button>
            <button className="w-full rounded-md bg-[#9333EA] p-4 transition-all hover:bg-[#A855F7]">
              Finalizar compra
            </button>
          </section>
        </>
      ) : (
        <div className="items-center flex h-screen w-full select-none flex-col justify-center gap-8 border-2 border-b-0 border-r-0 border-t-0 border-l-gray-700">
          <p className="items-center flex w-10/12 justify-center gap-2 rounded-md text-2xl">
            Já vai? Ainda nem chegamos na melhor parte.
          </p>
          <p className="items-center flex w-10/12 justify-center gap-2 rounded-md">
            Experimente agora os nossos cupons de desconto, não irá se
            arrepender...
          </p>
          <button
            onClick={toggleShopBar}
            className="items-center flex w-10/12 justify-center gap-2 rounded-md bg-[#9333EA] p-4 font-semibold uppercase transition-all hover:bg-[#A855F7]"
          >
            {' '}
            <p>Continuar comprando</p>
            <ShoppingCartIcon />
          </button>
        </div>
      )}
    </div>
  )
}
