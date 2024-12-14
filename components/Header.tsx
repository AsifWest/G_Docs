import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="md:flex-1"> 
        <Image 
          src="/assets/images/logo.png"
          alt="Logo with name"
          width={60}
          height={10}
          className="hidden md:block"
        />
        <Image 
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />G_Docs
      </Link>
      {children}
    </div>
  )
}

export default Header