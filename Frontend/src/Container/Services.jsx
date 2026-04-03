import searchengine  from "../assets/1st.png";
export function Services(){
    return(
        <>
        <div> 
             <div className="flex">
            <h1 className="text-2xl ml-7 bg-[rgba(185,255,102,1)] w-70 text-center h-10"><b>Services</b> </h1>
            <h4 className="ml-10  ">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</h4>
            </div>

           
             <div className="flex gap-20 mt-10 ml-25 ">
             <div className= "flex w-140 h-60 border-2 bg-[rgba(241,235,241,0.9)] rounded-3xl shadow-xl/30 ">
             <div className="ml-10 mt-10 text-center text-2xl w-50 h-18 bg-[rgba(185,255,102,1)]">
              <h1>Search engine </h1>
              <h2>optimization </h2>
             </div>
              <img className="ml-10" src={searchengine} /> 
            </div>

             <div className= "w-140 h-60 border-2 rounded-3xl shadow-xl/30">
              <h1>Search engine optimization</h1>
            </div>
            </div>

             <div className="flex gap-20 mt-10 ml-25">
             <div className= "w-140 h-60 border-2 rounded-3xl shadow-xl/30">
              <h1>Search engine optimization</h1>
            </div>

             <div className= "w-140 h-60 border-2 rounded-3xl shadow-xl/30">
              <h1>Search engine optimization</h1>
            </div>
            </div>

             <div className="flex gap-20 mt-10 ml-25">
             <div className= "w-140 h-60 border-2 rounded-3xl shadow-xl/30">
              <h1>Search engine optimization</h1>
            </div>

             <div className= "w-140 h-60 border-2 rounded-3xl shadow-xl/30">
              <h1>Search engine optimization</h1>
            </div>
            </div>

        </div>
        </>
    )
}