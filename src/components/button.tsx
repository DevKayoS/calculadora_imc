interface ButtonProps{
  className: string
  text: string
  action: (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Button({action, className, text}: ButtonProps) {
  const handleAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    action(e)
  }
  return(
    <button onClick={handleAction} className={className} >{text}</button>
  )
}