import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  console.log(name, message);

  return (
    <div>
      <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
