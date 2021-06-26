import Modal from 'react-modal'
import { useState, useContext, FormEvent } from 'react'
import { TransactionsContext } from '../../TransactionsContext'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

import { Container, TransactionTypeContainer, RadioBox } from './style'


Modal.setAppElement('#root')

interface NewTransactionModalProps {
    visible: boolean
    handleCloseModal: () => void
}

export function NewTransactionModal({ visible, handleCloseModal }: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext);
    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        createTransaction({
            title,
            category,
            type,
            amount: Number(amount),
        })

        handleCloseModal()
        clearModal()
    }

    function clearModal() {
        setTitle('')
        setType('')
        setAmount('')
        setCategory('')
    }
    return (
        <Modal
            isOpen={visible}
            onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={handleCloseModal}
                className="react-modal-close">
                <img src={closeImg} alt="Close Modal" />
            </button>
            <Container onSubmit={handleSubmit}>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    placeholder="Valor"
                    type="number"
                    value={amount}
                    onChange={event => setAmount(event.target.value)}
                />

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}