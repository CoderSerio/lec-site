import React from 'react';
import { Comment, Avatar } from '@arco-design/web-react';
import {
  IconHeart,
  IconMessage,
  IconStar,
  IconStarFill,
  IconHeartFill,
} from '@arco-design/web-react/icon';

const CommentCard = () => {
  const [like, setLike] = React.useState(false);
  const [star, setStar] = React.useState(false);
  const actions = [
    <button
      className="custom-comment-action"
      key="heart"
      onClick={() => setLike(!like)}
    >
      {like ? <IconHeartFill style={{ color: '#f53f3f' }} /> : <IconHeart />}
      {83 + (like ? 1 : 0)}
    </button>,
    <button
      className="custom-comment-action"
      key="star"
      onClick={() => setStar(!star)}
    >
      {star ? <IconStarFill style={{ color: '#ffb400' }} /> : <IconStar />}
      {3 + (star ? 1 : 0)}
    </button>,
    <button className="custom-comment-action" key="reply">
      <IconMessage /> Reply
    </button>,
  ];
  return (
    <Comment
      actions={actions}
      author="Socrates"
      avatar={
        <Avatar>
          <img
            alt="avatar"
            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
          />
        </Avatar>
      }
      content={<div>Comment body content.</div>}
      datetime="1 hour"
    />
  );
};

export default CommentCard;
