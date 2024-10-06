import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import GetMovies from "./Pages/GetMovies";
import Details from "./Pages/Details";


const App=()=>{
    return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<GetMovies/>}/>
            <Route path="/Details" element={<Details/>}/>
      
    
        </Routes>
        </BrowserRouter>
    )
}
export default App;