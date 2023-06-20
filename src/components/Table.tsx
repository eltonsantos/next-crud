import Customer from "@/core/Customer"
import { EditIcon, RemoveIcon } from "./Icons"

interface TableProps {
  customers: Customer[]
  selectedCustomer?: (customer: Customer) => void
  removedCustomer?: (customer: Customer) => void
}

export default function Table(props: TableProps) {

  const showActions = props.selectedCustomer || props.removedCustomer

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {showActions ? <th className="p-4">Actions</th> : false }
        
      </tr>
    )
  }

  function renderDatas() {
    return props.customers?.map((customer, i) => {
      return(
        <tr key={customer.getId} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{customer.getId}</td>
          <td className="text-left p-4">{customer.getName}</td>
          <td className="text-left p-4">{customer.getAge}</td>
          {showActions ? renderActions(customer) : false}
        </tr>
      )
    })
  }

  function renderActions(customer: Customer) {
    return(
      <td className="flex justify-center">
        {props.selectedCustomer ? (
          <button onClick={() => props.selectedCustomer?.(customer)} className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1">{EditIcon}</button>
        ) : false}
        {props.removedCustomer ? (
          <button onClick={() => props.removedCustomer?.(customer)}  className="flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2 m-1">{RemoveIcon}</button>
        ) : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800">
        {renderHeader()}
      </thead>
      <tbody>
        {renderDatas()}
      </tbody>
    </table>
  )
}
