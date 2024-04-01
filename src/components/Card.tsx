import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  variant?: 'gray' | 'indigo'
}

export default function Card ({ children, variant = 'gray' }: CardProps) {
  return (
    <div className={clsx('p-6 rounded-lg shadow-md', {
      'bg-gray-100': variant === 'gray',
      'bg-indigo-100': variant === 'indigo',
    })}>
      {children}
    </div>
  )
}