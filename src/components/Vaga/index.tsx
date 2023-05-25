// import styles from './Vaga.module.css'

import { VagaLink, VagaTitulo, Vagas } from './styled'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vagas>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <Vagas>Localizacao: {props.localizacao}</Vagas>
      <Vagas>Senioridade: {props.nivel}</Vagas>
      <Vagas>Tipo de contratacao: {props.modalidade}</Vagas>
      <Vagas>
        Salário: {props.salarioMin} - {props.salarioMax}
      </Vagas>
      <Vagas>Requisitos: {props.requisitos.join(', ')}</Vagas>
    </ul>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </Vagas>
)

export default Vaga
