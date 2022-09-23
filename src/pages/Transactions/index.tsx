import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  async function LoadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    LoadTransactions()
  }, [])

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td> {transaction.category}</td>
                  <td> {transaction.createdAt}</td>
                </tr>
              )
            })}

            <tr>
              <td width="40%">Desevolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000.00</PriceHighlight>
              </td>
              <td> Venda</td>
              <td> 13/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Desevolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000.00</PriceHighlight>
              </td>
              <td> Venda</td>
              <td> 13/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Hamburger</td>
              <td>
                <PriceHighlight variant="outcome"> - R$ 59,00</PriceHighlight>
              </td>
              <td> Alimentação</td>
              <td> 10/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Desevolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000.00</PriceHighlight>
              </td>
              <td> Venda</td>
              <td> 13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
