import { Envelope, Lock } from "phosphor-react";
import { FormEvent } from "react";
import { Button } from "../DesignSystem/Button";
import { Checkbox } from "../DesignSystem/Checkbox";
import { Text } from "../DesignSystem/Text";
import { TextInput } from "../DesignSystem/TextInput";

interface IFormBody {
  handleSignIn: (e: FormEvent) => void;
  isUserSignedIn: boolean;
}

export function FormBody({ handleSignIn, isUserSignedIn }: IFormBody) {
  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10">
      {isUserSignedIn && <Text>Usuario logado!</Text>}
      <label htmlFor="email" className="flex flex-col gap-3">
        <Text className="font-semibold">Endereço de email</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
        </TextInput.Root>
      </label>
      <label htmlFor="password" className="flex flex-col gap-3">
        <Text className="font-semibold">Sua Senha</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>
          <TextInput.Input type="password" id="password" placeholder="**************" />
        </TextInput.Root>
      </label>

      <label htmlFor="remember" className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
      </label>

      <Button type="submit" role="button" className="mt-4">Entrar na plataforma</Button>
    </form>
  )
}