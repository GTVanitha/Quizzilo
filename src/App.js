import { useState } from "react";
import JoinScreen  from "./components/JoinScreen.js"
import Navbar from "./components/Navbar.js";
import QuizScreen from "./components/QuizScreen.js";

function App()
{
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <>
    <Navbar/>
    <div className="quiz-container" >
      {
        isQuizStarted ? (
          <QuizScreen retry={()=> setIsQuizStarted(false)} />
        ) : (
          <JoinScreen retry={() => setIsQuizStarted(true)} />
        )
      }
    </div>
    </>
  )
}

export default App;
