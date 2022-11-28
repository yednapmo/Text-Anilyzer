import React from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";


function App(){
return(
  <>
<Navbar title="Text Analyzer" navHeading1="Home" navHeading2="About"/>
<TextForm/>
  </>
)
}

export default App;