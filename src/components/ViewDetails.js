
import ColumnData from './ColumnData'
const ViewDetails=({userData, editUser,deleteUser,change})=>{
    return <div>
         <div className='w-100'>
            <button className='float-right add-btn mt-1 mx-2 btn btn-style btn-primary text-white  fs-5 ' onClick={()=>{editUser('',!change);document.getElementById('popup').style.display='block';}}>Add +</button>
            
        </div>
    <div className='row border res-cont p-5 m-5'>
       
        <div className='col-3'>
            <div style={{textAlign:'center'}}>{"Age<18"} </div>
        <ColumnData data={userData?.filter(item=>item.age<=18)} editUser={editUser} deleteUser={deleteUser} change={change}/>
        </div>
        <div className='col-3'>
        <div style={{textAlign:'center'}}>{"Age>18 & Age < 25"} </div>
        <ColumnData data={userData?.filter(item=>item.age>18 && item.age<=25)} editUser={editUser} deleteUser={deleteUser} change={change}/>
        </div>
        <div className='col-3'>
        <div style={{textAlign:'center'}}>{"Age> 25 & Age < 45"} </div>
        <ColumnData data={userData?.filter(item=>item.age>25 && item.age<=45)} editUser={editUser} deleteUser={deleteUser} change={change}/>
        </div>
        <div className='col-3'>
        <div style={{textAlign:'center'}}>{"Age 45+"} </div>
        <ColumnData data={userData?.filter(item=>item.age>45 && item.age<=100)} editUser={editUser} deleteUser={deleteUser} change={change}/>
        </div>
    </div>
    </div>
}
export default ViewDetails;