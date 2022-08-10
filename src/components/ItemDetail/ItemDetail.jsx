import { useState } from "react";

const ItemDetail = ({initial = 1}) => {

    const [count, setCount] = useState(initial);

const increment = () => {

     setCount(count + 1);

     if(count >= 25){
         setCount(25)
     }
     console.log(count);
}

const decrement = () => {
    
    setCount(count - 1);
    if(count <= 1){
        setCount(1)
    }

    console.log(count);
     
}

    return(
        <>
        <div className="p-3">
            <div className="flex col-lg-12 text-center">
                <div className="plantListItem block col-lg-3 col-md-3 col-sm-12 mx-auto">
                        <button>X</button>
                        <img src="data:image/jpeg;base64,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" alt="" />
                        <h4>Price: 2000$</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus voluptatum voluptate perspiciatis recusandae facere aliquid, delectus minus laborum 
                            laboriosam id molestias modi debitis, maiores praesentium sint deserunt corporis libero!
                        </p>
                        <div className="counter d-flex w-50 mx-auto">
                            <button onClick={decrement}>-</button>
                            <p className="w-40 mt-1">{count}</p>
                            <button onClick={increment}>+</button>
                        </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default ItemDetail;