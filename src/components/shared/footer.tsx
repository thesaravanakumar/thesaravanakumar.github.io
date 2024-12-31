'use client'

import { motion } from 'framer-motion'

import { transitions, variants, whileInView } from '@/utils/animations'

// Footer component
export default function Footer() {
  return (
    <>
      <footer className="border-b border-gray-30 dark:border-gray-500">
        <div className="mx-auto max-w-8xl px-2 xs:px-6 sm:px-10">
          <div className="border-x border-gray-30 p-8 dark:border-gray-500 xs:p-20">
            <motion.div
              {...whileInView}
              transition={transitions.default}
              variants={variants.fadeInDown}
              className="text-center"
            >
              <div className="mb-2 text-gray-50">
                Have an interesting, stupid or crazy idea you&#39;d like some
                help building? {` `}
              </div>
              <div className="mb-2 text-gray-50">
                Let&#39;s talk – saravana.k.manimaran@gmail.com
              </div>
              <div className="mx-auto max-w-2xl text-gray-35 dark:text-gray-300">
                {new Date().getFullYear()} &copy; Saravana Kumar
              </div>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="mx-auto max-w-8xl px-2 xs:px-6 sm:px-10">
        <div className="h-2 border-x border-gray-30 dark:border-gray-500 xs:h-6 sm:h-16"></div>
      </div>
    </>
  )
}
