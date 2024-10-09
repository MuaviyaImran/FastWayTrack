import type { BaseButtonTypes, BaseButtonVarients } from '@/types'

export const generateBaseButtonClasses = (variant: BaseButtonVarients, type: BaseButtonTypes) => {
  switch (type) {
    case 'primary':
      return variant === 'filled'
        ? 'bg-primary text-white hover:bg-tertiary'
        : 'bg-transparent text-white bg-white hover:border-tertiary'
    case 'secondary':
      return variant === 'filled'
        ? 'bg-secondary text-white hover:bg-tertiary'
        : 'bg-transparent text-secondary bg-white'
    case 'base':
      return variant === 'filled'
        ? 'bg-white text-primary hover:bg-primary hover:text-white'
        : 'bg-transparent text-secondary bg-white'
    case 'ghost':
      return 'bg-transparent text-dark bg-white '
    default:
      return 'bg-primary text-secondary '
  }
}
