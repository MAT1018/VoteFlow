import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import useUserAuth from '../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';
import { API_PATHS } from '../../utils/apiPaths';
import axiosInstance from '../../utils/axiosInstance';
import PollCard from '../../components/PollCards/PollCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import CREATE_ICON from '../../assets/images/auth-card-3.png';
import EmptyCard from '../../components/cards/EmptyCard';

const PAGE_SIZE = 10;

const VotedPolls = () => {
  useUserAuth();
  const navigate = useNavigate();

  const [votedPolls, setVotedPolls] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchAllPolls = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.POLLS.VOTED_POLLS}?page=${page}&limit=${PAGE_SIZE}`
      );

      const newPolls = response.data?.polls || [];

      if (newPolls.length > 0) {
        setVotedPolls(prev => {
          const existingIds = new Set(prev.map(p => p._id));
          const uniquePolls = newPolls.filter(p => !existingIds.has(p._id));
          return [...prev, ...uniquePolls];
        });

        setHasMore(newPolls.length === PAGE_SIZE);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPolls();
  }, [page]);

  const loadMorePolls = () => {
    setPage(prev => prev + 1);
  };

  return (
    <DashboardLayout activeMenu="Voted Polls">
      <div className="my-5 mx-auto">
        <h2 className="text-xl font-medium text-black">Voted Polls</h2>

        {votedPolls.length === 0 && !loading && (
          <EmptyCard
            imgsrc={CREATE_ICON}
            message="You have not voted any polls yet! Start exploring and share your opinion by voting on polls now!"
            btnText="Explore"
            onClick={() => navigate("/dashboard")}
          />
        )}

        <InfiniteScroll
          dataLength={votedPolls.length}
          next={loadMorePolls}
          hasMore={hasMore}
          loader={<h4 className="info-text">Loading...</h4>}
          endMessage={<p className="info-text">No more polls to display.</p>}
        >
          {votedPolls.map((poll) => (
            <PollCard
              key={`dashboard_${poll._id}`}
              pollId={poll._id}
              question={poll.question}
              type={poll.type}
              options={poll.options}
              voters={poll.voters?.length || 0}
              responses={poll.responses || []}
              creatorProfileImg={poll.creator?.profileImageUrl || null}
              creatorName={poll.creator?.fullName || ''}
              creatorUsername={poll.creator?.username || ''}
              userHasVoted={poll.userHasVoted || false}
              isPollClosed={poll.closed || false}
              createdAt={poll.createdAt || ''}
            />
          ))}
        </InfiniteScroll>
      </div>
    </DashboardLayout>
  );
};

export default VotedPolls;