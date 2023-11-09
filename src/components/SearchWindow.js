

const SearchWindow=({data})=>{
    return data && <div className="container" id='popup-2'>
        <button style={{float:'right'}} onClick={()=>document.getElementById('popup-2').style.display='none'} type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
    {Object.keys(data).map(key=>{
        return <div>
            {key} : {data[key]}
            </div>
    })}
      
  </div>
}
export default SearchWindow;