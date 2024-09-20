

const Card = ({item}) => {
    
  return (
   <>
   <div className="mt-4 my-3 h-76 ml-4 w-auto p-5 rounded-md bg-slate-900" >
   <div className="card bg-base-100  h-46 w-full p-5 shadow-xl hover:scale-105 duration-200 ">
  <figure>
    <img
    className="h-46"
      src={item.image}
      alt="books" />
  </figure>
  <div className="card-body h-46 ">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-between">
      <div className="badge badge-outline ">{item.price}</div>
      <div className="badge bg-pink-500 text-white hover:bg-pink-700 px-4 py-3 text-white duration-200">Buy now </div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Card