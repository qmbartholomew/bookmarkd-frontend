import {useState} from "react"
import {Link} from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    title: "",
    url: "",
    //countryOfOrigin: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createBookmark(newForm);
    setNewForm({
      title: "",
      url: "",
      //countryOfOrigin: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.bookmark.map((bookmarkon) => (
      <div key={bookmarkon._id} className="bookmarkon">
        <Link to={`/bookmark/${bookmarkon._id}`}>
          <h1>{bookmarkon.title}</h1>
        </Link>
        <img src={bookmarkon.url} alt={bookmarkon.title} />
        <h3>{bookmarkon.countryOfOrigin}</h3>
      </div>
    ));
  };

  const loading = () => {
    if (props.bookmark){
        return props.bookmark.map((bookmarkon) => {
            return <div key={bookmarkon._id} className="bookmarkon">
                <Link to={`/bookmark/${bookmarkon._id}`}>
                    <h1>{bookmarkon.title}</h1>
                </Link>
                <img src={bookmarkon.url} alt={bookmarkon.title}/>
                <h3>{bookmarkon.countryOfOrigin}</h3>
            </div>
        })
    } else {
    return <h1>Loading...</h1>; 
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.url}
          name="url"
          placeholder="url URL"
          onChange={handleChange}
        />
        
        <input type="submit" value="Create Bookmark" />
      </form>
      {props.bookmark ? loaded() : loading()}
    </section>
  );
}

export default Index;