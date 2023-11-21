import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {

  const posicoes = [
    'Goleiro',
    'Lateral-esquerdo',
    'Lateral-direito',
    'Zagueiro',
    'Volante',
    'Meio-Campo',
    'Atacante',
    'Tecnico',
    'outros...'
  ]

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [posicionamento, setPosicionamento] = useState('')
  
  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      posicionamento
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
          />

        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          />

        <CampoTexto 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
          />

        <ListaSuspensa 
          obrigatorio={true} 
          label="Posicao" 
          itens={posicoes}
          valor={posicionamento}
          aoAlterado={valor => setPosicionamento(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario