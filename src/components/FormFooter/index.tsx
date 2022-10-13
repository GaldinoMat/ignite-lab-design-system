import { Text } from "../DesignSystem/Text";

export function FormFooter() {
  return (
    <footer className="flex flex-col items-center gap-4 mt-8">
      <Text asChild size="sm">
        <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
      </Text>
      <Text asChild size="sm">
        <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora</a>
      </Text>
    </footer>
  )
}
