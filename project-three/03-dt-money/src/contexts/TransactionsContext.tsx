import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface createTransactionInput {
  description: string
  price: number
  category: string
  type: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query: string) => Promise<void>
  createTransaction: (data: createTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionContextType>(
  {} as TransactionContextType,
)

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: { q: query, _sort: 'createdAt', _order: 'desc' },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: createTransactionInput) {
    const { description, price, category, type } = data

    const response = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((prevState) => [response.data, ...prevState])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
