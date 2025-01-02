import Image from 'next/image';

import gcp from '@/components/home/gcp.png'
export const GcpIllustration = () => {
  return (
    <div className="origin-top-left translate-x-2 translate-y-1 rotate-6 overflow-hidden opacity-60 transition-all duration-200 group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:rotate-0 group-hover/card:opacity-100">
      <div className="mt-6 h-24 min-w-[160px] max-w-[200px] rounded-tl-xl border-l border-t border-gray-30 p-4 dark:border-gray-500">
        <Image 
          src={gcp.src}
          alt="Google Cloud"
          width={200}
          height={200}
        />
      </div>
    </div>
  )
}
