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
            value={newForm.name}
            name="name"
            placeholder="name"
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
            value={newForm.countryOfOrigin}
            name="countryOfOrigin"
            placeholder="Origin Country"
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
                       <h1>{bookmark.name}</h1>
                   </Link>
                   <img src={bookmark.image} alt={bookmark.name} />
                   <h3>{bookmark.title}</h3>
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