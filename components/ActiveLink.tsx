import { useRouter } from "next/router"
import Link from "next/link"
import { CSSProperties, FC } from "react"

interface Props {
  href: string
  text: string
}

const style:CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink:FC<Props> = ({ href, text }) => {

    const { asPath } = useRouter();
    
  return (
    <Link  style={ asPath === href ? style : undefined } href={ href } >{ text }</Link>
  )
}
