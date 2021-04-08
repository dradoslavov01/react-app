import style from './Posts.module.css';

const PostItem = (props) => {
    return (
        <>
            <div className={style.post}>
                <img src='/blue-origami-bird.png' alt="blue origami" />
                <p className={style.description}>{props.content}</p>
                <div>
                    <span>
                        <small>Author:</small>
                        {props.author}
                    </span>
                </div>

            </div>
        </>
    );
}

export default PostItem