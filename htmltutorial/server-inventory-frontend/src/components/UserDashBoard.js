import axios from "axios";
import { useEffect, useState } from "react";
import InventoryTable from "./InventoryTable";
import "../css/UserDashBoard.css"

function UserDashBoard()
{
  const [inventory, setInventory]=useState([]);
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(null);

  //fetch inventory data from API when components mounts
  useEffect(()=>{
    const fetchInevetory=async () =>{
      try{
        const response= await axios.get('http://localhost:5000/inventory');
        setInventory(response.data);
      }catch(error){
        setError(error.message);
      }finally{
        setLoading(false);
      }
    };

    fetchInevetory();

  }, []);

  //show loading indicator while fetching data
  if(loading) return <div>Loading...</div>;

  //Show error message if fetching fails
  if(error) return <div>Error:{error}</div>

  return(
  <div className="user-dashboard">
    <h1>User Dashboard</h1>
    {inventory.length>0?
    (<InventoryTable inventoryData={inventory} isAdmin={false}/>):
    (<div>No inventory data available.</div>)}
  </div>);

}

export default UserDashBoard;