import React, { useRef } from 'react'

const Pointer = (props) => {
  const { coinsPrice, tree_name } = props
  console.log(coinsPrice, tree_name)
  const pointerRef = useRef()

  useEffect(() => {
    pointerRef.current.classList.add('animate-wiggle-once')
    upDown === '+'
      ? pointerRef.current.classList.add('animate-blink-green')
      : pointerRef.current.classList.add('animate-blink-red')
  }, [coinsPrice.trade_price])

  const anmatieEndHandler = () => {
    pointerRef.current.classList.remove('animate-wiggle-once')
    upDown === '+'
      ? pointerRef.current.classList.remove('animate-blink-green')
      : pointerRef.current.classList.remove('animate-blink-red')
  }

  return (
    <div className="w-8 h-8 rounded-full group">
      <div className="label text-black font-bold text-[15px] w-[88px] bg-white p-1 rounded-lg transition-all opacity-0 group-hover:opacity-100">
        {coinsPrice.exchange}
      </div>
      <div
        className="opacity-80 w-8 h-8 bg-blue-600 rounded-full group "
        ref={pointerRef}
        onAnimationEnd={anmatieEndHandler}
      >
        <div className="opacity-80 w-8 h-8 bg-blue-600 rounded-full animate-ping"></div>
      </div>
    </div>
  )
}

export default React.memo(Pointer)
