import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useOnScreen } from '../../customHooks/CustomHooks'
import { useData } from '../WebsiteMainContext'

function UseMe({
  direction,
  position,
  bgColor,
  textColor
}: {
  direction: 'LEFT' | 'RIGHT'
  position: string
  bgColor: string
  textColor: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const onScreen = useOnScreen(ref, '-100px 100px -100px 50px')
  const context = useData()

  return (
    <AnimatePresence>
      <div className='bg-red-700' ref={ref}>
        {onScreen ? (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: [1, 0.5, 1, 0.5, 1],
              scaleX: [1, 1, 1, 1, 1],
              originX: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className={`${bgColor} ${textColor} absolute w-28 h-8 flex justify-center items-center text-white text-xs font-semibold opacity-60 useMeShadow ${
              direction === 'RIGHT'
                ? 'rounded-r-full rounded-t-full'
                : 'rounded-l-full rounded-t-full'
            } ${position}`}
          >
            {context?.data.languageIndex === 0 ? 'Utilisez-moi' : 'Use me'}
          </motion.div>
        ) : null}
      </div>
    </AnimatePresence>
  )
}

export default UseMe
