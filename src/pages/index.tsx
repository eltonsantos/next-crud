import Button from "@/components/Button";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Customer from "@/core/Customer";
import { useState } from "react";

export default function Home() {

  const customers = [
    new Customer("Ana", 34, "1"),
    new Customer("Bia", 45, "2"),
    new Customer("Carlos", 23, "3"),
    new Customer("Daniel", 12, "4")
  ]

  const [visible, setVisible] = useState<'table' | 'form'>('table')

  function selectedCustomer(customer: Customer) {
    console.log(customer.getName)
  }

  function removedCustomer(customer: Customer) {
    console.log(customer.getName)
  }

  function saveCustomer(customer: Customer) {
    console.log(customer)
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Cadastro simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={() => setVisible('form')}>New Customer</Button>
            </div>
            <Table customers={customers} selectedCustomer={selectedCustomer} removedCustomer={removedCustomer}></Table>
          </>
        ) : (
          <Form customer={customers[0]} changeCustomer={saveCustomer} canceled={() => setVisible('table')} />
        )}
      </Layout>
    </div>
  )
}
