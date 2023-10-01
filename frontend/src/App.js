import Body from "./components/Body";
import ListAudioMeme from "./components/ListAudioMeme";
import ListImageMeme from "./components/ListImageMeme";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Nav from "./nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-xl">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} >
            <Route index element={<Body />} />
            <Route path="audio-meme" element={<ListAudioMeme />} />
            <Route path="image-meme" element={<ListImageMeme />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
