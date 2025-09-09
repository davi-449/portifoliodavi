import { BackgroundPaths } from '@/components/ui/background-paths'
import codeBgDark from '@/assets/code-bg-dark.png'

const Home = () => {
  return (
    <div className="relative">
      {/* Background code icon for dark mode */}
      <div className="fixed inset-0 dark:flex hidden items-center justify-center pointer-events-none z-0">
        <div className="opacity-5">
          <img 
            src={codeBgDark} 
            alt="" 
            className="w-96 h-96 rounded-3xl object-contain"
          />
        </div>
      </div>
      <div className="relative z-10">
        <BackgroundPaths title="David Silveira" compactTop />
      </div>
    </div>
  )
};

export default Home;
