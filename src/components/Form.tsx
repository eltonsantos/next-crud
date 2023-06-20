import { useState } from "react";
import Input from "./Input";
import Customer from "@/core/Customer";
import Button from "./Button";

interface FormProps {
  customer: Customer
  changeCustomer?: (customer: Customer) => void
  canceled?: () => void
}

export default function Form(props: FormProps) {

  const id = props.customer?.getId
  const [name, setName] = useState(props.customer?.getName ?? '')
  const [age, setAge] = useState(props.customer?.getAge ?? 0)

  return (
    <div>
      {id ? (
        <Input readonly text="ID" value={id} className="mb-5" />
      ) : false}
      <Input text="Name" value={name} changeValue={setName} className="mb-5" />
      <Input text="Age" type="number" value={age} changeValue={setAge} />
      <div className="flex justify-end mt-7">
        <Button color="blue" className="mr-2" onClick={() => props.changeCustomer?.(new Customer(name, +age, id))}>
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={props.canceled}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}
