import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from '../Summary/style'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="income" />
                </header>
                <strong>R$1000</strong>
            </div>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={outcomeImg} alt="income" />
                </header>
                <strong>R$5000</strong>
            </div>
            <div className="highligth">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="income" />
                </header>
                <strong>R$1000</strong>
            </div>
        </Container>
    )
}