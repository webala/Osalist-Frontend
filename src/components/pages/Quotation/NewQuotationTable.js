import React,{useState} from 'react'
import data from '../Invoice/mock.json'
function NewQuotationTable() {
   const [items, setItems] = React.useState(data)
    return (
      <div className="container">
      <table>
        <thead>
        <tr>
          <th>Invoice#</th>
          <th>Status</th>
          <th>Client</th>
          <th>Due</th>
          <th>Amount</th>
          <th>Paid</th>
          <th>Balance</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {items && items.map((value) => 
           (
            <tr>
              <td>{value.InvoiceNo}</td>
              <td>{value.status}</td>
              <td>{value.client}</td>
              <td>{value.due}</td>
              <td>{value.Amount}</td>
              <td>{value.Paid}</td>
              <td>{value.Balance}</td>
              <td>{value.Actions}</td>
            </tr>
           )
        )
           }
        </tbody>
      </table>
    </div>
    )
}

export default NewQuotationTable
