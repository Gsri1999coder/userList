import { useRef } from "react";

const ModalPopup=(props)=>{
    const name=useRef()
    const email=useRef();
    const phone=useRef();
    const age=useRef();
    console.log('props->',props);
    //   name.current.value=props.name || ''
    //     email.current.value=props.email|| ''
    //     phone.current.value=props.phone|| ''
    //     age.current.value=props.age|| ''
    const handleAdd=()=>{
        console.log(name.current.value);
        props.addDataToUserData({name:name.current.value,age:age.current.value,email:email.current.value,phone:phone.current.value});
        name.current.value=''
        email.current.value=''
        phone.current.value=''
        age.current.value=''
        document.getElementById('popup').style.display='none';
    }
    return <div className="container" id='popup'>
      <div className="user_details">
        <div className="form_inputs row">
        <div className="col-6">
            <label htmlFor='name' >Name</label>
        <input id='name' ref={name} type="text" placeholder="Name" value={props?.userInfo?.name} />
        </div>
        <div className="col-6">
        <label htmlFor='email'>Email</label>
        <input id='email'ref={email} type="email" placeholder="Email" value={props?.userInfo?.email} />
        </div>
        <div className="col-6 ">
        <label htmlFor='phone'>Phone</label>
        <input id='phone' ref={phone} type="number" placeholder="Phone" value={props?.userInfo?.phone}/>
        </div>
        <div className="col-6">
        <label htmlFor='age'>Age</label>
        <input id='age' min={1} max={100} ref={age} type="number" placeholder="Age" value={props?.userInfo?.age}/>
        </div>
      </div>
      <div>
        <div className="btns">
            <button className="ms-2 btn btn-style btn-primary text-white border-0" onClick={()=>document.getElementById('popup').style.display='none'}>cancel</button>
            <button className="ms-2 btn btn-style btn-primary text-white border-0 " onClick={()=>handleAdd()}>Add</button>
        </div>
      </div>
        </div>
    </div>
}
export default ModalPopup;