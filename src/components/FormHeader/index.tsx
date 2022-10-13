import { Heading } from '../DesignSystem/Heading'
import { Logo } from '../DesignSystem/Logo'
import { Text } from '../DesignSystem/Text'

export function FormHeader() {
  return (
    <header className="flex flex-col items-center">
      <Logo />
      <Heading size="lg" className="mt-4">
        Ignite Lab
      </Heading>
      <Text size="lg" className="text-gray-400 mt-1">Faça login a começe a usar</Text>
    </header>
  )
}