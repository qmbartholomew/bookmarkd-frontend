import { useState } from 'react'
import { Link } from 'react-router-dom'

const Index = (props) => {

    const [newForm, setNewForm] = useState({
        name: '',
        image: '',
        title: ''
    })

    const handleChange = (event) => {
        const newState = {...newForm}
        newState[event.target.name] = event.target.value
        setNewForm(newState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createBookmark(newForm)
        setNewForm({
            name: '',
            image: '',
            title: ''
        })
    }

    const form = (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.title}
            name="title"
            placeholder="Bookmark Title"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.url}
            name="url"
            placeholder="Website URL"
            onChange={handleChange}
          />
          <input type="submit" value="Create Bookmark" />
        </form>
      );

    if(props.bookmark){
        return (
            <section>
                {form}
            {props.bookmark.map((bookmark) => {
               return <div key={bookmark._id} className='bookmark'>
                   <Link to={`/bookmarkd/${bookmark._id}`}>
                   <h3>{bookmark.title}</h3>
                   <img src={bookmark.image} alt={bookmark.name} />
                   </Link>
               </div> 
            })}
            </section>
            )
    } else {
        return (
        <section>
            {form}
            <h1>Loading...</h1>
        </section>
            )
    }
}

export default Index
