import list from "../../public/main.json"
import Card from "../components/Card"
import {Link} from  'react-router-dom'

const Course = () => {
  return (
    <>
    <div className="parent max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="mt-20 items-center justify-center text-center bg-">
        <h1 className="text-2xl font-semibold md:text-4xl">We are delighted to have you <span  className="text-pink-500">here! :)</span></h1>
        <p className="mt-12 text-xm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem repudiandae obcaecati incidunt aut explicabo consequuntur, aliquam quod itaque ea corporis illo voluptate magnam quidem praesentium unde ullam officiis nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aliquam. Placeat, id! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad impedit facere praesentium veniam sint rem?</p>

  <Link to={"/"}>
  <button className="btn bg-pink-500 text-white hover:bg-pink-700 duration-300 mt-3">Back</button>
  </Link>
  
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 p-3 ">
       {list.map((item)=>(
        <Card key={item.id} item={item} />
       ))}
      </div>
    </div>
    </>
  )
}

export default Course