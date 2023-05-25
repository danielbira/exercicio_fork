import styled from 'styled-components'

export const Pesquisa = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    max-width: 90%;
    display: block;
  }
`

export const BotaoPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 1024px) {
    max-width: 80%;
    margin-top: 8px;
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
