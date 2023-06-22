import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ submitPokemon }) {
  const [ name, setName ] = useState("")
  const [ hp, setHp ] = useState(0)
  const [ frontImage, setFrontImage ] = useState("")
  const [ backImage, setBackImage ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    submitPokemon({
      name: name,
      hp: hp,
      sprites: {
        front: frontImage,
        back: backImage
      }
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input type="string" fluid label="Name" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <Form.Input type="number" fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(e) => setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImage}
            onChange={(e) => setFrontImage(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImage}
            onChange={(e) => setBackImage(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
