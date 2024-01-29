import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate =useNavigate();
  return (
   <main className="flex justify-center items-center h-screen ">
    <button className="bg-green-400 px-2 py-1 rounded-xl " onClick={()=>{navigate("/kadai")}}>Kadai</button>
   </main>
  )
}

export default Home