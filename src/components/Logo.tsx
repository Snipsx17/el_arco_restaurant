import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  logoUrl?: string | null
  alt?: string
  height?: number
  width?: number
}

export default function Logo({ 
  logoUrl, 
  alt = "Logo", 
  height = 40, 
  width = 120 
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      {logoUrl ? (
        <Image
          src={logoUrl}
          alt={alt}
          height={height}
          width={width}
          className="object-contain"
          unoptimized={true}
        />
      ) : (
        <div className="text-white text-xl font-bold">
          Logo
        </div>
      )}
    </Link>
  )
}