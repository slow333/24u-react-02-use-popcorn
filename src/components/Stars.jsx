import styled from "styled-components";
import {useState} from "react";
import {usePopcorn} from "../context/PopcornContext.jsx";

const StarContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 3px;
`;

const Stars = () => {

  const {userRating, setUserRating} = usePopcorn();

  const [tempRating, setTempRating] = useState(0);
  // console.log(tempRating, rating)

  return (
    <>
      <StarContainer>
        {Array.from({length: 8}, (_, idx) => {
          if (idx < userRating)
            return <FullStar key={idx}
                             setUserRating={setUserRating}
                             index={idx}
                             tempRating={tempRating}
                             setTempRating={setTempRating} />
          else
            return <EmptyStar key={idx}
                              setUserRating={setUserRating}
                              index={idx}
                              tempRating={tempRating}
                              setTempRating={setTempRating} />
        })
        }
        <div className='text-red-600 ms-4 text-3xl italic'>
          {userRating}
        </div>
      </StarContainer>
    </>
  );
};

export default Stars;

function FullStar({setUserRating, index,setTempRating, tempRating}) {
  return (
    <div onMouseEnter={() => setUserRating(index+1)}
         onMouseLeave={() => tempRating ? setUserRating(tempRating) : setUserRating(0)}
         onClick={() =>  setTempRating(index+1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#f00"
        stroke="none"
        width="30px"
        height="30px"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </div>
  )
}

function EmptyStar({setUserRating, index, setTempRating}) {
  return (
    <div onMouseEnter={() => setUserRating(index+1)}
         onMouseLeave={() => setUserRating(0)}
         onClick={() => setTempRating(index+1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fee"
        viewBox="0 0 24 24"
        stroke="none"
        width="30px"
        height="30px"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </div>
  )
}

/*FULL STAR

<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="#000"
stroke="#000" >
  <path
d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR

<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="#000" >
  <path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="{2}"
d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>
 */