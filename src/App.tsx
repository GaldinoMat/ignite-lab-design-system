import { FormBody } from "./components/FormBody"
import { FormFooter } from "./components/FormFooter"
import { FormHeader } from "./components/FormHeader"
import "./styles/global.css"

export function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <FormHeader />
      <FormBody />
      <FormFooter/>
    </div>
  )
}