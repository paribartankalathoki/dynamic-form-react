import './App.css';
import React, {useState, Fragment } from "react";

function App() {
  const [inputFields, setInputFields] = useState([
    { content: '' }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", JSON.stringify(inputFields));
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "content") {
      values[index].content = event.target.value;
    }
    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ content: ''});
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  
  return (
      <>
      <div className="container">
      <h1>Dynamic form field example</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label htmlFor="content">Content</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="content"
                  name="content" onChange={event => handleInputChange(index, event)}
                  value={inputField.content}
                ></textarea>
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button" onClick={() => handleRemoveFields(index)}
                >
                  Remove row
                </button>
                <button
                  className="btn btn-link"
                  type="button" onClick={() => handleAddFields()}
                >
                  Add row
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      </div>
      </>
  )
}

export default App;
