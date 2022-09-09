import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import LogoImg from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt=""></img>
        <NewTransactionButton> Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
