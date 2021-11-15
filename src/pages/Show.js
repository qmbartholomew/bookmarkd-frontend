import { useState } from "react";
import {useParams, useNavigate} from "react-router-dom"

function Show(props) {
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id;
  const bookmark = props.bookmark;
  const bookmarkon = bookmark.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(bookmarkon);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateBookmark(editForm);
    navigate("/");
  };

  const removeBookmarkon = () => {
    props.deleteBookmark(bookmarkon._id);
    navigate("/");
  };

  return (
    <div className="bookmarkon">
      <h1>{bookmarkon.title}</h1>
      <h2>{bookmarkon.countryOfOrigin}</h2>
      <img src={bookmarkon.url} alt={bookmarkon.title} />
      <button id="delete" onClick={removeBookmarkon}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.url}
          name="url"
          placeholder="url URL"
          onChange={handleChange}
        />
        
        <input type="submit" value="Update Bookmark" />
      </form>
    </div>
  );
}

export default Show;