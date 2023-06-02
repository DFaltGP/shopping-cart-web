'use client'

import Image from 'next/image'
import ItemButton from './ItemButton'
import { useEffect, useState } from 'react'

type Item = {
  description: string
  price: string
  imageUrl: string
  quantity: number
}

export default function ShopItem(props: Item) {
  const [imageSrc, setImageSrc] = useState('')
  const [description, setDescription] = useState(props.description)
  // const [itemPrice, setItemPrice] = useState(0)

  // const handleItemPrice = (spend: number) => {
  //   setItemPrice(spend)
  // }

  useEffect(() => {
    if (props.imageUrl) {
      setImageSrc(props.imageUrl)
    }

    const charLimit = 60

    if (props.description.length > charLimit) {
      setDescription(props.description.substring(0, charLimit) + '...')
    }
  }, [props.imageUrl, props.description])

  // function convertPrice(price: string) {
  //   const newPrice = price.replace(',', '.')
  //   return newPrice
  // }

  return (
    <div className="items-center flex w-full justify-between gap-4 p-8">
      <div className="flex h-[104] w-[104]">
        <Image
          src={imageSrc}
          width={104}
          height={104}
          alt="product"
          className="h-full w-full select-none rounded-md"
        />
      </div>
      <div className="flex w-96 flex-col items-start justify-between gap-2 ">
        <p className="line-clamp-2 flex h-12 w-full flex-wrap overflow-x-hidden text-ellipsis  text-[#E4E4E7]">
          {description}
        </p>
        <div className="items-center flex w-full justify-between ">
          <p className="font-semibold text-[#E4E4E7]">R$ {props.price}</p>
          <ItemButton />
        </div>
      </div>
    </div>
  )
}
// handleItemPrice={handleItemPrice}
