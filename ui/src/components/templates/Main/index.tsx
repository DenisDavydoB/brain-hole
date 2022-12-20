import { ReactElement, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function MainTemplate(props: Props): ReactElement {
  const { children } = props

  return <>{children}</>
}
