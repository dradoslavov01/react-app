import style from './Posts.module.css';
import PostItem from './PostItem';

const Posts = ({ posts }) => {
    return (
        <main className={style.main}>
            <h1>Soooooome Heading</h1>
            <div className="posts">
                {posts.map(x => {
                    return (
                        <PostItem 
                        key={x.id}
                        content={x.content}
                        author={x.author}
                        />
                    )
                })}
            </div>
        </main>
    );
}

export default Posts;