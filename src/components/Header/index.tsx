import logoImg from '../../assets/logo.svg'
import { Container, Content } from './style'

interface HeaderProps {
    handleOpenModal: () => void
}

export function Header({ handleOpenModal}: HeaderProps) {
  
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt logo" />
                <button type="button"
                    onClick={handleOpenModal}
                >
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}