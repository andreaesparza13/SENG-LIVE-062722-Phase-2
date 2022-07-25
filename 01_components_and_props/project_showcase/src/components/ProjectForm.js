import React from 'react'

function ProjectForm() {
  return (
    <form className='form'>
        <h2>Add New Project</h2>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />
        <label for="about">About</label>
        <input type="text" name="about" id="about" />
        <button type='submit'>Add Project</button>
    </form>
  )
}

export default ProjectForm;