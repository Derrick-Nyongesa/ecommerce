import React, { Dispatch, SetStateAction } from "react";
import useAuthStore from "../store/authStore";
import { BiCommentX } from "react-icons/bi";

function Comment({
  comments,
  addComment,
  comment,
  isPostingComment,
  setComment,
}) {
  const { allUsers, userProfile } = useAuthStore();
  return (
    <div>
      <div className=" mt-4    lg:pb-0 pb-[100px] flex flex-col justify-center items-center h-full w-full card ">
        <div className="overflow-scroll lg:h-[230px] ">
          {comments?.length > 0 ? (
            comments?.map((item, idx) => (
              <>
                {allUsers?.map(
                  (user) =>
                    user._id === (item.postedBy._ref || item.postedBy._id) && (
                      <div className=" p-2 items-center" key={idx}>
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12">
                            <img
                              src={user.image}
                              alt="user-profile"
                              className="rounded-full cursor-pointer"
                              layout="responsive"
                            />
                            {/* <Image
                              width={48}
                              height={48}
                              className="rounded-full cursor-pointer"
                              src={user.image}
                              alt="user-profile"
                              layout="responsive"
                            /> */}
                          </div>

                          <p className="flex cursor-pointer gap-1 items-center text-[18px] lowercase _name text-xs italic">
                            {user.userName}
                          </p>
                        </div>

                        <div>
                          <p className="-mt-5 ml-16 text-[16px] mr-8">
                            {item.comment}
                          </p>
                        </div>
                      </div>
                    )
                )}
              </>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center h-full w-full">
              <p className="text-8xl">
                <BiCommentX></BiCommentX>
              </p>
              <p className="text-2xl text-center">
                No Reviews Yet! Be First to do add a review.
              </p>
            </div>
          )}
        </div>
        {userProfile && (
          <div className="flex flex-col justify-center items-center h-full w-full pb-7 ">
            <form onSubmit={addComment} className="flex gap-4">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg _searchBar"
                placeholder="Review this product.."
              />
              <button className="text-md text-gray-400" onClick={addComment}>
                {isPostingComment ? "Posting..." : "Post"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
