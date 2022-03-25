import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

type ActiveLinkProps = LinkProps & {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const router = useRouter()

  let isActive = false

  if (shouldMatchExactHref && router.asPath === rest.href) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'orange.500' : 'gray.50',
      })}
    </Link>
  )
}
