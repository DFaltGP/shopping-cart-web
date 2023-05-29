import { useState } from 'react'
import Image from 'next/image'

export default function ItemButton() {
  const [isMinusHovered, setIsMinusHovered] = useState(false)
  const [isPlusHovered, setIsPlusHovered] = useState(false)
  let [quantity, setQuantity] = useState(0)

  function handleMouseMinusEnter() {
    setIsMinusHovered(true)
  }

  function handleMouseMinusLeave() {
    setIsMinusHovered(false)
  }

  function handleMousePlusEnter() {
    setIsPlusHovered(true)
  }

  function handleMousePlusLeave() {
    setIsPlusHovered(false)
  }

  function plusQuantity() {
    setQuantity((quantity += 1))
  }

  function minusQuantity() {
    if (quantity > 0) {
      setQuantity((quantity -= 1))
    }
  }

  return (
    <div className="flex h-[120] w-[120] select-none">
      <div
        onMouseEnter={handleMouseMinusEnter}
        onMouseLeave={handleMouseMinusLeave}
        className="flex h-[120] w-[120] items-center "
      >
        {isMinusHovered ? (
          <button
            onClick={minusQuantity}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#3F3F46] transition-all hover:border-[#A855F7]"
          >
            <Image
              src={'/icons/minus-hover.svg'}
              alt="minus"
              width={16}
              height={16}
              className="rounded-md transition-all"
            />
          </button>
        ) : (
          <button
            onClick={minusQuantity}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#3F3F46] transition-all hover:border-[#A855F7]"
          >
            <Image
              src={'/icons/minus.svg'}
              alt="minus"
              width={16}
              height={16}
              className="rounded-md transition-all"
            />
          </button>
        )}{' '}
      </div>
      <p className="flex h-10 w-10 select-none items-center justify-center">
        {quantity}
      </p>
      <div
        onMouseEnter={handleMousePlusEnter}
        onMouseLeave={handleMousePlusLeave}
      >
        {' '}
        {isPlusHovered ? (
          <button
            onClick={plusQuantity}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#A855F7] transition-all  hover:bg-[#A855F7]  "
          >
            <Image
              src={'/icons/plus-hover.svg'}
              alt="plus"
              width={16}
              height={16}
              className="rounded-md"
            />
          </button>
        ) : (
          <button
            onClick={plusQuantity}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#A855F7] transition-all  hover:bg-[#A855F7]  "
          >
            <Image
              src={'/icons/plus.svg'}
              alt="plus"
              width={16}
              height={16}
              className="rounded-md"
            />
          </button>
        )}
      </div>
    </div>
  )
}
