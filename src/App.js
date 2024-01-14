import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero min-h-[88vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1 className="text-5xl font-bold">
              Your <span className="text-primary">News</span>, Faster and
              Smarter
            </h1>
            <div className="flex items-center justify-center h-[20vh] w-full">
              <label className="form-control w-full justify-center items-center">
                <div className="label w-3/4">
                  <span className="label-text text-lg text-accent">
                    Enter News Article URL
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-3/4"
                />
              </label>
            </div>
            <button className="btn w-1/2 btn-success h-12 text-lg">
              Summarize Now
            </button>

            <p className="text-lg m-4">
              QuickNews AI simplifies news reading by first{" "}
              <span className="text-success">scraping content</span> from your
              provided article link, then utilizing{" "}
              <span className="text-success">advanced AI</span> to distill the
              essence into a{" "}
              <span className="text-success">concise summary</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
