import { useState } from "react";

export default function Form(){
  const [state, setState] = useState ({
    title : "",
    date : "",
    description : "",
    photo : "",
    locationDescription : "",
    locationImage : "",
    gpsCoordinates : "",
  })

  function handleSubmit (e) {
    e.preventDefault();
    alert(state);
  }

  function handleChange (e) {
    const name =  e.target.name;
    const value = e.target.value;
    setState ({...state, [name] : value});
  }

  return (
    <form onSubmit={handleSubmit} >
      <label for="title">Title: </label>
      <input type="text" id="title" name="title" value={state.title} onChange={handleChange}/>
      <label for="date">Date: </label>
      <input type="date" id="date" name="date" value={state.date} onChange={handleChange}/>
      <label for="description">Description: </label>
      <textarea id="description" name="description" rows="2" cols="70" value={state.description} onChange={handleChange}/>
      <label for="photo">Upload a photo: </label>
      <input type="file" id="photo" name="photo" value={state.photo} onChange={handleChange}/>
      <label for="locationDescription">Location description: </label>
      <textarea id="locationDescription" name="locationDescription" rows="2" cols="70" value={state.locationDescription} onChange={handleChange}/>
      <label for="locationPhoto">Upload a photo of the location: </label>
      <input type="file" id="locationPhoto" name="locationPhoto" value={state.locationPhoto} onChange={handleChange}/>
      <input type="checkbox" id="gpsConfirm" name="gpsConfirm" value="Yes"/>
      <label for="gpsConfirm"> Allow GPS coordinates of device to be recorded</label>
      // Need to figure out how to get gps coordinates from user.
      <input type="hidden" id="gpsCoordinates" name="gpsCoordinates" value={state.gpsCoordinates}/>
    </form>
  )
}