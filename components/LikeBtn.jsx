import React, { useState, useEffect } from "react";
import { FaSave } from "react-icons/fa";
import useAuthStore from "../store/authStore";

function LikeBtn({ likes, flex, handleLike, handleDislike }) {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile } = useAuthStore();
  let filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

  useEffect(() => {
    if (filterLikes?.length > 0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false);
    }
  }, [filterLikes, likes]);
  return (
    <div className={`${flex} gap-6`}>
      <div className="ml-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLiked ? (
          <div
            className="bg-primary rounded-full p-2 md:p-4 text-[#f02d34;] "
            onClick={handleDislike}
          >
            <FaSave className="text-lg md:text-2xl" />
          </div>
        ) : (
          <div
            className="bg-primary rounded-full p-2 md:p-4 "
            onClick={handleLike}
          >
            <FaSave className="text-lg md:text-2xl" />
          </div>
        )}
      </div>
    </div>
  );
}

export default LikeBtn;
