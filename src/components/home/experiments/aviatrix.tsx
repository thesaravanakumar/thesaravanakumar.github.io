import aviatrix from '@/components/home/aviatrix.png'
export const AviatrixIllustration = () => {
  return (
    <div className="origin-top-left translate-x-2 translate-y-1 rotate-6 overflow-hidden opacity-60 transition-all duration-200 group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:rotate-0 group-hover/card:opacity-100">
      <div className="mt-6 h-24 min-w-[160px] max-w-[200px] rounded-tl-xl border-l border-t border-gray-30 p-4 dark:border-gray-500">
        <img 
          src={aviatrix.src} 
          alt="Google Cloud"
        />
      </div>
    </div>
  )
}