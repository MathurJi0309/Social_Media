import PropTypes from 'prop-types';
import {Comment} from '../components'

import styles from '../styles/home.module.css';

const Home = ({posts}) => {
  return (
    <div className={styles.postsList}>
      {posts.map((post)=>(
                <div className={styles.postWrapper} key={`post-${post._id}`}>
                <div className={styles.postHeader}>
                  <div className={styles.postAvatar}>
                    <img
                      src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                      alt="user-pic"
                    />
                    <div>
                      <span className={styles.postAuthor}>{post.user.name}</span>
                      <span className={styles.postTime}>a minute ago</span>
                    </div>
                  </div>
                  <div className={styles.postContent}>{post.content}</div>
        
                  <div className={styles.postActions}>
                    <div className={styles.postLike}>
                      <img
                        src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                        alt="likes-icon"
                      />
                      <span>5</span>
                    </div>
        
                    <div className={styles.postCommentsIcon}>
                      <img
                        src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                        alt="comments-icon"
                      />
                      <span>2</span>
                    </div>
                  </div>
                  <div className={styles.postCommentBox}>
                    <input placeholder="Start typing a comment" />
                  </div>
        
                  <div className={styles.postCommentsList}>
                    {post.comments.map((comment)=>{
                      <comment comment={comment}/>
                    })}
                  </div>
                </div>
              </div>
      ))}
      
    </div>
  );
};

Home.propTypes ={
  posts: PropTypes.array.isRequired,
}
export default Home;