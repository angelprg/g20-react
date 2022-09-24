import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Tags from "@yaireo/tagify/dist/react.tagify"; // React-wrapper file
import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

const baseTagifySettings = {
  blacklist: ["xxx", "yyy", "zzz"],
  maxTags: 4,
  //backspace: "edit",
  placeholder: "Ingresa hasta 4 etiquetas",
}

const PostForm = () => {
  const [tags, setTags] = useState('[]');
  const [values, setValues] = useState({
    title: '',
    imgUrl: '',
  });

  console.log('tags', JSON.parse(tags).map(t => t.value))
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      ...values,
      tags: JSON.parse(tags).map(t => t.value),
    }
    //fetch('', {body, method: 'POST'})
    console.log('', {body, method: 'POST'})
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" />
          <Form.Text className="text-muted">
            Debes utilizar un correo de empresa.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Tags:</Form.Label>
          <Tags
            settings={baseTagifySettings} // tagify settings object
            defaultValue=""
            onChange={(e)=>{setTags(e.detail.value)}}
          />
        </Form.Group>
        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
};

export default PostForm;
