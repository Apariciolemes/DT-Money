import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface Transaction {
    id: number
    title: string
    category: string
    amount: number
    type: string
    createdAt: Date
}

type TransactionForm = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProps {
    children: ReactNode
}

interface TransactionContextData {
    transactions: Transaction[]
    createTransaction: (transaction: TransactionForm) => Promise<void>
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionProvider(props: TransactionsProps) {


    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then(resp => setTransactions(resp.data.transactions));
    }, [])

    async function createTransaction(newTransaction: TransactionForm) {
        const response = await api.post('/transactions', newTransaction)
        const { transaction } = response.data

        console.log('RESP', response.data);
        console.log('RESP2', [...transactions, transaction]);



        setTransactions([...transactions, { ...transaction, createdAt: new Date() }])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }} >
            {props.children}
        </TransactionsContext.Provider>
    )

}