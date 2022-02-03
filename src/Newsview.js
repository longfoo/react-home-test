import dummy from './NewsData.json';
import { useParams } from 'react-router-dom';

function Newsview() {
    const params = useParams();
    //console.log(params);
    const post = dummy.posts.filter(function(item){
        return item.id == params.id;
    });
    //console.log(post);
    if(post.id == "") {
        console.log("post가 존재하지 않음")
    }

    return (
        <div id="main">
            <h2>News <small>여기는 NewsView페이지입니다.</small></h2>
            
            <ul>
                <li>title : { post[0].title }</li>
                <li>date : { post[0].date }</li>
                <li>text : { post[0].text }</li>
            </ul>
            <div className="button-wrap">
                <a className="button" href="/News">Back</a>
            </div>
        </div>
    )
}

export default Newsview;
