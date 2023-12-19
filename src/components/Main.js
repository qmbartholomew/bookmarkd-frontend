import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

function Main(props) {

    const [bookmark, setBookmark] = useState(null)

    const URL = 'https://qb-bookmarkd-backend-96d42c07982c.herokuapp.com/bookmark'

    const getBookmark = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setBookmark(data)
    }

    const createBookmark = async (bookmark) => {
        await fetch(URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookmark)
        })
        getBookmark()
    }

    const updateBookmark = async (bookmark, id) => {
        await fetch(URL + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookmark)
        })
        getBookmark()
    }

    const deleteBookmark = async (id) => {
        await fetch(URL + id, {
            method: 'delete'
        })
        getBookmark()
    }

    useEffect(() => {getBookmark()}, [])

    return (
        <main>
            <Routes>
                <Route path='/' element={<Index bookmark={bookmark} createBookmark={createBookmark} />} />
                <Route path='/bookmarkd/:id' element={<Show bookmark={bookmark} updateBookmark={updateBookmark} deleteBookmark={deleteBookmark} />} />
            </Routes>
        </main>
    )
}

export default Main
