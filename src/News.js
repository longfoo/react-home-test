import dummy from './NewsData.json';


function News() {
    return (
        <div id="main">
            <h2>News <small>여기는 News페이지입니다.</small></h2>
            
            <ul className="news-list">
                {dummy.posts.map((post) => (
                <li key={post.id}><a href={"/News/"+post.id}>{ post.title }</a></li>
                ))}
            </ul>
        </div>
    )
}

export default News;
