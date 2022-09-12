import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import LogoImg from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt=""></img>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton> Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
