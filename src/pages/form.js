import { useState } from "react";

export default function Form(){
  const [state, setState] = useState ({
    date : "",
    title : "",
    description : "",
    image : "",
    locationDescription : "",
    locationImage : "",
    gpsCoordinates : "",
  })

  function handleSubmit (e) {
    e.preventDefault();
    alert(state);
  }

  return (
    <form onSubmit={handleSubmit} >


    </form>
  )
}