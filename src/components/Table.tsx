import Client from "@/core/Client"

interface TableProps {
  clients: Client[]
}

export default function Table(props: TableProps) {

  function renderHeader() {
    return (
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    )
  }

  function renderDatas() {
    return props.clients?.map((client, i) => {
      return(
        <tr key={client.getId}>
          <td>{client.getId}</td>
          <td>{client.getName}</td>
          <td>{client.getAge}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      <thead>
        {renderHeader()}
      </thead>
      <tbody>
        {renderDatas()}
      </tbody>
    </table>
  )
}
