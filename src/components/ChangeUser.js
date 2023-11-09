import { useEffect, useRef } from "react";

const ChangeUser=(props)=>{
    const name=useRef()
    const email=useRef();
    const phone=useRef();
    const age=useRef();
    console.log('props->',props);
    //   name.current.value=props.name || ''
    //     email.current.value=props.email|| ''
    //     phone.current.value=props.phone|| ''
    //     age.current.value=props.age|| ''
    const handleChange=()=>{
        console.log(name.current.value);
        props.changeDataToUserData({name:name.current.value,age:age.current.value,email:email.current.value,phone:phone.current.value});
        name.current.value=''
        email.current.value=''
        phone.current.value=''
        age.current.value=''
        document.getElementById('popup-1').style.display='none';
    }
    useEffect(()=>{
        name.current.value=props?.userInfo?.name
        email.current.value=props?.userInfo?.email
        phone.current.value=props?.userInfo?.phone
        age.current.value=props?.userInfo?.age
    },[props.userInfo])
    return <div className="container" id='popup-1'>
      <div className="user_details">
        <div className="form_inputs row">
        <div className="col-6">
            <label htmlFor='name'>Name</label>
        <input id='name'ref={name} type="text" placeholder="name" />
        </div>
        <div className="col-6">
        <label htmlFor='email'>Email</label>
        <input id='email'ref={email} type="email" placeholder="Email" />
        </div>
        <div className="col-6 ">
        <label htmlFor='phone'>Phone</label>
        <input id='phone' ref={phone} type="number" placeholder="Phone" />
        </div>
        <div className="col-6">
        <label htmlFor='age'>Age</label>
        <input id='age' min={1} max={100} ref={age} type="number" placeholder="Age" />
        </div>
      </div>
      <div>
        <div className="btns">
            <button className="ms-2 btn btn-style btn-primary text-white border-0" onClick={()=>document.getElementById('popup-1').style.display='none'}>cancel</button>
            <button className="ms-2 btn btn-style btn-primary text-white border-0" onClick={()=>handleChange()}>Edit User</button>
        </div>
      </div>
        </div>
    </div>
}
export default ChangeUser;