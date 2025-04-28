'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import Signature from '@/components/svgs/signature'
import Social from '@/components/shared/social'
import { animate, transitions, variants } from '@/utils/animations'

// About component
export default function AboutMe() {
  return (
    <div className="order-2 col-span-12 flex flex-col justify-between border-x border-gray-30 dark:border-gray-500 md:order-1 md:col-span-6 min-[896px]:col-span-7 xl:col-span-4">
      {/* Intro */}
      <div className="px-4 pt-4 xs:px-10 xs:pt-10">
        <motion.h2
          {...animate}
          transition={transitions.default}
          variants={variants.fadeInDown}
          className="text-5xl font-bold tracking-snug"
        >
          About me
        </motion.h2>
        <motion.div
          {...animate}
          transition={transitions.default}
          variants={variants.staggerChildren}
          className="mt-6 space-y-6 text-lg leading-normal text-gray-50"
        >
          <motion.p
            variants={variants.fadeInDown}
            transition={transitions.default}
          >
            I’m a techie from India working as a Cloud Network Software Engineer, 
            always experimenting with interesting and sometimes ridiculous ideas.
          </motion.p>
          <motion.p
            variants={variants.fadeInDown}
            transition={transitions.default}
          >
            I like to{' '}
            <Link
              target="_blank"
              href="https://www.instagram.com/saravana.m.kumar/"
              className="text-gray-1000 underline decoration-green-400 dark:text-white"
            >
              play with cameras
            </Link>
            , &amp; geek over cool{' '}
            <Link
              target="_blank"
              href="https://youtu.be/T43sbhCKvBY?si=CwAUuNdvOf3efGqi"
              className="text-gray-1000 underline decoration-green-400 dark:text-white"
            >
              space rockets.
            </Link>{' '}
          </motion.p>
        </motion.div>

        <Signature className="mt-8 h-10" delay={2} />
      </div>

      {/* Contact */}
      <div className="px-8 pb-8 text-right">
        <motion.div
          {...animate}
          transition={transitions.default}
          variants={variants.fadeInDown}
          className="mb-2 text-sm font-bold uppercase"
        >
          Find me at
        </motion.div>
        <motion.div
          {...animate}
          transition={transitions.default}
          variants={variants.fadeInDown}
          className="mb-4 font-medium text-gray-50"
        >
          saravana.k.manimaran@gmail.com
        </motion.div>

        {/* Icons */}
        <Social />
      </div>
    </div>
  )
}
