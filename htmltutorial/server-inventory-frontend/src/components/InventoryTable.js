import React, { lazy } from "react";
import "../css/InventoryTable.css"


function InventoryTable({ 
  inventoryData, 
  isAdmin, 
  onEditClick, 
  onDeleteClick,
  onSaveClick,
  onInputChange,
  editingItemId,
  editValues }) {
    // Define all the field headings in the first column
    const fieldHeadings = [
        { label: "Serial Number", key: "serialNumber" }, 
        { label: "AWS Account ID", key: "awsAccountId" },
        { label: "Region", key: "region" },
        { label: "Instance Created Date", key:"instanceCreatedDate"},
        { label:"Host Name", key:"hostName"},
        { label:"Public IP Address", key:"publicIpAddress"},
        { label:"Private IP Address", key:"privateIpAddress"},
        { label:"CIDR Network", key:"cidrNetwork"},
        
        { label: "Registered Email Account", key: "registeredEmail" },
        { label: "User Name", key: "userName" },
        { label: "User ID", key: "userId" },
        { label: "User Password", key: "userPassword" }, // For display, we’ll show ***
        { label:"PassPhrase", key:"passPhrase"},

        { label:"Primary Group Name", key:"primaryGroupName"},
        { label:"Group ID", key:"groupId"},
        { label:"Secondary Group", key:"secondaryGroup"},

        { label: "Sudo Access", key: "sudoAccess" },
        
        { label: "Group Add command", key: "groupAddCommand" },
        { label: "User Add command", key: "userAddCommand" },
        { label: "PPK File", key: "ppkFile" },
        { label: "Installed Packages", key: "installedPackages" },
        { label: "Ports Enabled", key: "portsEnabled" },
        { label: "Comments", key: "comments" }
    ];

    return (
      <div className="inventory-table">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              {inventoryData.map((_, index) => (
                <th key={index}>Inventory {index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* For each field, display the values horizontally */}
            {fieldHeadings.map((field, index) => (
              <tr key={index}>
                <td><strong>{field.label}</strong></td>
                {inventoryData.map((inventoryItem) => (
                  <td key={inventoryItem.serialNumber}>
                    {editingItemId === inventoryItem.serialNumber ? 
                    (<input type="text"
                      value={editValues[field.key] || ''}
                      onChange={(e) =>onInputChange(e, field.key)}>
                    </input>):
                    (
                    field.key === "userPassword" 
                    ? "***" 
                    : field.key === "sudoAccess" 
                    ? inventoryItem.sudoAccess ? 'Yes' : 'No'
                    :inventoryItem[field.key]
                    )}
                  </td>

                ))}
              </tr>
            ))}
           {isAdmin && (
            <tr>
              <td><strong>Actions</strong></td>
              {inventoryData.map((inventoryItem)=>(
                <td key={inventoryItem.serialNumber}>
                  {editingItemId===inventoryItem.serialNumber?
                  (<button 
                    style={{marginRight:10}} 
                    className="btn btn-outline-success btn-sm"
                    onClick={onSaveClick}>Save</button>)
                  :
                  (<button 
                    style={{marginRight:10}} 
                    className="btn btn-outline-primary btn-sm" 
                    onClick={()=>onEditClick(inventoryItem)}>Edit
                    </button>)}
                    
                 <button style={{marginLeft:10}} 
                 className="btn btn-outline-danger btn-sm"
                 onClick={()=>onDeleteClick(inventoryItem.serialNumber)}>Delete
                 </button>
                </td>
              ))}
            </tr>
           )}
          </tbody>
        </table>
      </div>
    );
}

export default InventoryTable;
