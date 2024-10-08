
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";
import InventoryTable from './InventoryTable';

function AdminDashboard() {
  const [inventory, setInventory]=useState([]);
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(null);
  const[editingItemId, setEditindItemId]=useState(0); //track the item being edited
  const[editValues, setEditValues]=useState({}); //track edited values

  //fetch inventory data from API when components mounts
  useEffect(()=>{
    const fetchInventory=async () =>{
      try{
        const response=await axios.get('http://localhost:5000/inventory');
        setInventory(response.data);
      }catch(error )
      {
        setError(error.message);
      }finally{
        setLoading(false);
      }
    };
    fetchInventory();
  }, [] )

  if(loading) return <div>Loading ...</div>

  if(error) return <div>Error : {error}</div>

  const handleEdit =(item) =>{
    console.log("Editing item ", item);
    setEditindItemId(item.serialNumber); //set the ID of the row being edited
    setEditValues({...item}); //set initial edit values based on the selected item
  }

  const handleInputChange=(e, key) =>
  {
    setEditValues((prevValues)=>({
      ...prevValues, [key]:e.target.value,
    }));
  };

  const handleSave=()=>{
    const updatedInventory = inventory.map((item) =>
      item.serialNumber === editingItemId ? {...item, ...editValues} :item
    );
    setInventory(updatedInventory);
    setEditindItemId(0); //Reset after saving
  }
  

  const handleDelete=(Id) =>{
    console.log("Deleting item with Id ", Id);
    if(Id>0)
    {
      if(window.confirm("Are you want to sure to delete this item?"))
        {
          
        const data=inventory.filter(item=>item.serialNumber !== Id)
        setInventory(data);

        }
    }
  }

  return (
    <div className='admin-dashboard' >
      <h1>Admin Dashboard</h1>
      {inventory.length>0 ? 
      (<InventoryTable 
      inventoryData={inventory} 
      isAdmin={true}
      onEditClick={handleEdit}
      onSaveClick={handleSave}
      onInputChange={handleInputChange}
      editingItemId={editingItemId}
      editValues={editValues}
      onDeleteClick={handleDelete}/>):(<div>No inventory data available.</div>)}
    </div>
  );
}

export default AdminDashboard;
