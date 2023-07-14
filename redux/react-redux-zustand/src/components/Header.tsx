
interface HeaderProps {
  title: string
  description: string
}

export function Header({ title, description }: HeaderProps) {
  return (
    <div className='flex flex-col gap-1'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <span className='text-sm text-zinc-400'>Módulo "{description}"</span>
    </div>
)
}