import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { TransactionTable } from './components/TransactionsTable';
import { Global } from './styles/global';
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal';


export function App() {
  const [visible, setVisible] = useState(false);

  function handleOpenModal() {
    setVisible(true)
  }
  function handleCloseModal() {
    setVisible(false)
  }

  return (
    <>
      <Global />
      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal visible={visible} handleCloseModal={handleCloseModal} />
      <TransactionTable />
    </>
  );
}

