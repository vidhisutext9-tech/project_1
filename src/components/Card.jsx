import{Search, UserPlus} from "lucide-react"

const Card = (props) => {
    console.log(props);
  return (
    <>
        <div className="card bg-white w-full h-auto max-w-md rounded-xl border-none shadow-2xl my-5 mx-6 py-4 px-6">
            <div className="flex items-start justify-between">
                <img src="https://i.pinimg.com/736x/e6/91/2f/e6912f709474be6a30a0f70cd84bd423.jpg" alt="img"
                className="w-24 h-24 rounded-full object-cover drop-shadow-2xl" />

                <div className="icon flex items-center gap-5">
                    <div className="bg-gray-100 inline-block rounded-xl text-center p-2">
                        <Search className="font-bold"/>
                        </div>
                <div className="bg-blue-200 inline-block rounded-xl p-2 text-center">
                     <UserPlus className="text-blue-500 font-bold"/>
                </div>
             </div>
        </div>

            <div className="content pt-2 ">
                <h2 className="text-2xl font-bold my-2">{props.data.name}</h2>
                <p className="text-md text-gray-400 font-semibold my-1">@tobias</p>

                <p className="text-md my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. cjnsdcjiwehfkjsdbcjhsdbcuiehckjhsd bjhshjuhkjabjhdiudhx udxuiashbugk</p>
            </div>
            
            <div className="other flex justify-between items-center">
                <p className="text-gray-400"><span className="text-black font-medium">321</span> point</p>
                <p className="text-gray-400"> <span className="text-black font-medium">10</span> Friends</p>
                <p className="text-gray-400">Joined at april</p>


            </div>
        </div>
    
    </>
  );
};

export default Card;
