import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { getPollBookmarked } from '../../utils/helper.js';
import UserProfileInfo from '../cards/UserProfileInfo.jsx';
import PollActions from './PollActions.jsx';
import PollContent from './PollContent.jsx';
import axiosInstance from '../../utils/axiosInstance.js';
import { API_PATHS } from '../../utils/apiPaths.js';


const PollCard = ({
pollId,
question,
type,
options,
voters,
responses,
creatorProfileImg,
creatorName,
creatorUsername,
userHasVoted,
isMyPoll,
isPollClosed,
createdAt,
}) => {

    const {user, onUserVoted, toggleBookmarkId} = useContext(UserContext);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
    const [rating, setRating] = useState(0);
    const [userResponse, setUserResponse] = useState("");

    const [isVoteComplete, setIsVoteComplete] = useState(userHasVoted);

    const [pollResult, setPollResult] = useState({
        options,
        voters,
        responses,
    });

    const isPollBookmarked = getPollBookmarked(
        pollId, 
        user.bookmarkedPolls || []
    );    

    const [pollBookmarked, setPollBookmarked] = useState(isPollBookmarked);
    const [pollClosed, setPollClosed] = useState(isPollClosed || false);
    const [pollDeleted, setPollDeleted] = useState(false);


    // handle user input based on poll type 
    const handleInput = (value) => {
    if (type === "rating") 
        setRating(value);
    else if (type === "open-ended") setUserResponse(value);
    else setSelectedOptionIndex(value);
};

//Toggle the bookmark status of a poll
const toggleBookmark = async () => {
    try{
        const response = await axiosInstance.post(
            API_PATHS.POLLS.BOOKMARK(pollId)
        );
        toggleBookmarkId(pollId);
        setPollBookmarked((prev) => !prev);
        toast.success(response.data.message);
    }catch(error){
        console.error(error.response?.data?.message || "Error bookmarking poll");
    
    }
}
  return (
    !pollDeleted && <div className='bg-slate-100/50 my-5 p-5 rounded-lg border border-slate-100 mx-auto'>
    <div className='flex items-start justify-between'>
        <UserProfileInfo
           imgUrl={creatorProfileImg}
           fullName={creatorName}
           username={creatorUsername}
           createdAt={createdAt}
        />

<PollActions
    pollId={pollId}
    isVoteComplete={isVoteComplete}
    inputCaptured={
    !! (userResponse || selectedOptionIndex >= 0 || rating)
    }
    onVoteSubmit={ () => {}}
    isBookmarked={pollBookmarked}
    toggleBookmark={toggleBookmark}
    isMyPoll={isMyPoll}
    pollClosed={pollClosed}
    onClosePoll={ () => {}}
    onDelete={ ( ) => {}}
/>

    </div>
    <div className='ml-14 mt-3'>
        <p className='text-[15px] text-black leading-8'>{question}</p>
        <div className='mt-4'>
    {isVoteComplete || isPollClosed ? (
        <>Show Results</>
    ) :(
           <PollContent
            type={type}
            options={options}
            selectedOptionIndex={selectedOptionIndex}
            onOptionSelect={handleInput}
            rating={rating}
            onRatingChange={handleInput}
            userResponse={userResponse}
            onUserResponseChange={handleInput}
          />
    )}
           
    </div>
    </div>
 </div>
  );
}

export default PollCard