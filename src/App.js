import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import {useEffect, useState} from "react"
import AddItems from "./AddItems";
import Searchitems from "./Searchitems";


function App() {
  ///input
  const [groceryitems,setGroceryItems] = useState(JSON.parse(localStorage.getItem("malligaiporul"))||[])
  const [additems,SetAddItems]=useState("")
  const [search,SetSearh] = useState("")

//////function
  useEffect(()=>{
    localStorage.setItem("malligaiporul",JSON.stringify(groceryitems))
  },[groceryitems])



	const handleClick = (id)=>{
		const  itemgroup = groceryitems.map((el)=> el.id===id ? {...el,checked:!el.checked}:el)
		setGroceryItems(itemgroup)
		
	}


	const handledelete = (id)=>{
		const itemgroup = groceryitems.filter((el)=>el.id !== id)
		setGroceryItems(itemgroup)
		
	}

  const plusItems = (item)=>{
    let id = groceryitems.length?groceryitems[groceryitems.length-1].id+1 : 1
    let puthugroceryitems = {id,checked:false,item}
    let itemgroup = [...groceryitems,puthugroceryitems]
    setGroceryItems(itemgroup)
		
  }

  const handlesubmit = (e)=>{
    e.preventDefault()
   //console.log(additems);
    //add items
    plusItems(additems)
    SetAddItems("")

  }
      return (
        <div className="App">
          
          <Header title={"grocery items"}/>
          <AddItems additems={additems} SetAddItems={SetAddItems}  handlesubmit={handlesubmit}/>
          <Searchitems search={search} SetSearh={SetSearh} />
          <Content groceryitems={groceryitems.filter((el)=>((el.item).toLowerCase()).includes(search.toLowerCase()))}
           handleClick={handleClick} handledelete={handledelete} />
          <Footer length={groceryitems.length}/>
        </div>
      );
    }
    
    export default App;  