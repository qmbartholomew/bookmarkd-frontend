import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Show(props) {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const bookmarks = props.bookmark
    const [editForm, setEditForm] = useState({})
    
    useEffect(() => {
        if(props.bookmark) {
        const bookmark = bookmarks.find((c) => c._id === id)
        setEditForm(bookmark)
        }
    }, [props.bookmark])

    if(props.bookmark) {
        const bookmark = bookmarks.find((c) => c._id === id)

        const handleChange = (event) => {
            const newState = {...editForm}
            newState[event.target.name] = event.target.value
            setEditForm(newState)
        }
        
        const handleSubmit = (event) => {
            event.preventDefault()
            props.updateBookmark(editForm, bookmark._id)
            navigate('/')
        }

        const removeBookmark= () => {
            props.deleteBookmark(bookmark._id)
            navigate('/')
        }

        const form = (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={editForm.title}
                name="title"
                placeholder="Bookmark Title"
                onChange={handleChange}
              />
              <input
                type="text"
                value={editForm.image}
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
              />
              <input
                type="text"
                value={editForm.url}
                name="url"
                placeholder="Website Link"
                onChange={handleChange}
              />
              <input type="submit" value="Update Bookmark" />
            </form>
          );
    

        return (
            <div className='bookmark'>
              <a href={bookmark.url}>
                <img src={bookmark.image} alt={bookmark.name} />
                <h1>{bookmark.name}</h1>
              </a>
              {form}
              <button onClick={removeBookmark}>DELETE BOOKMARK</button>
            </div>
        )
    } else {
        return <h1>No Bookmark :(</h1>
    }


}

export default Show
