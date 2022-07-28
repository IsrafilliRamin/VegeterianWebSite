import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleData } from '../Server/server';

const Details = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [activeButton, setActiveButton] = useState(false)

  const fetchData = async () => {
    const response = await getSingleData(id)
    setData([response])
  }

  useEffect(() => {
    fetchData()
  }, [id])
  console.log(data);

  return (
    <div className='mt-40'>
      {
        data?.map(item => (
          <div key={item.id} className="flex justify-between">
            {/*image and name div container start  */}
            <div className='flex flex-col gap-8 flex-1'>
              <h3 className='font-bold '>{item.title}</h3>
              <img className='w-[25vw] h-[15vw] rounded-lg' src={item.image} alt={item.sourceName} />
            </div>
            {/* image and name div container end  */}


            {/* button and text container start */}
            <div className='flex flex-col gap-10 flex-1'>
              {/* button start */}
              <div className='flex gap-10'>
                <button className={`${!activeButton ? "bg-mainBlack text-white" : "bg-white text-mainBlack"} px-8 py-2 border-mainBlack border-2`} onClick={()=>setActiveButton(false)}>Instructions</button>
                <button className={`${activeButton ? "bg-mainBlack text-white" : "bg-white text-mainBlack"} px-8 py-2 border-mainBlack border-2`} onClick={()=>setActiveButton(true)}>Ingredients</button>
              </div>
              {/* button end */}

              {/* text start  */}
              {
                activeButton ? (<ul>
                  {item.extendedIngredients.map(ing => (
                    <li key={ing.id} className="list-disc">{ing.original}</li>
                  ))}
                </ul>) : (
                  <div className='flex flex-col gap-4 '>
                    <h3 className='font-bold' dangerouslySetInnerHTML={{__html:item.summary}}></h3>
                      <ul>
                        {item.analyzedInstructions[0].steps.map(step=>(
                          <li key={step.number} className="list-disc">{step.step}</li>
                        ))}
                      </ul>

                  </div>
                )}
              {/* text end  */}

            </div>
            {/* button and text container end */}
          </div>
        ))
      }
    </div>
  )
}

export default Details