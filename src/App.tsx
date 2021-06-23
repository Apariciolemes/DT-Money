import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { TransactionTable } from './components/TransactionsTable';
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

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
      <GlobalStyle />
      <Header  handleOpenModal={handleOpenModal}/>
      <Dashboard />
      <Modal
        isOpen={visible}
        onRequestClose={handleCloseModal}>
        <h2>Transação</h2>
      </Modal>
      <TransactionTable />
    </>
  );
}

