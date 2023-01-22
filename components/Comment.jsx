import React, { Dispatch, SetStateAction } from "react";
import useAuthStore from "../store/authStore";

function Comment({
  comments,
  addComment,
  comment,
  isPostingComment,
  setComment,
}) {
  return (
    <div>
      <div className="">
        <div className="">
          {comments?.length > 0 ? (
            comments?.map((item, idx) => (
              <div key={idx}>
                <p className="">{item.comment}</p>
              </div>
            ))
          ) : (
            <div>no comments</div>
          )}
        </div>

        <div className="absolute bottom-0 left-0  pb-6 px-2 md:px-10 ">
          <form onSubmit={addComment} className="flex gap-4">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value.trim())}
              className="bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg _searchBar"
              placeholder="Add comment.."
            />
            <button className="text-md text-gray-400" onClick={addComment}>
              {isPostingComment ? "Commenting..." : "Comment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comment;
