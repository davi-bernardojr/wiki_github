import gitLogo from "../assets/github.png"
import { Container } from "./styles"
import { Input } from "../components/Input"
import { ItemRepo } from "../components/ItemRepo"
import React, { useState } from "react"
import { Buton } from "../components/Button"
import { api } from "../services/api"

function App() {

  const [Currentrepos, setCurrentRepos] = useState('')
  const [repos, setRepos] = useState([])

  const HandleSearchRepo = async () => {
    const { data } = await api.get(`repos/${Currentrepos}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.is === data.id)

      if(!isExist){
        setRepos(prev => [...prev, data])
        setCurrentRepos('')
        
        return
      }      
    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo id', id)

    const remove = repos.filter(remid => remid.id === repos.id)

    if (remove) {
      setRepos(remove);
    }
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="gitHub Logo" />
      <Input value={Currentrepos} onChange={(e) => setCurrentRepos(e.target.value)} />
      <Buton onclick={HandleSearchRepo}/>
      {repos.map((repo) => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
