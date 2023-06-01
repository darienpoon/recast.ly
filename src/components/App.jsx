import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '/src/lib/searchYouTube.js';
import Search from './Search.js';

const { useState, useEffect } = React;

var App = ({}) => {
  const [videos, setVideoList] = useState([]); // (exampleVideoData)
  const [video, setCurrentVideo] = useState(exampleVideoData[0]); // (exampleVideoData[0])
  const [input, setInput] = useState('');

  var timeout = null;

  const searchHandler = (e) => {
    var query = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchYouTube(query, (videos => {
        setVideoList(videos);
      }));
    }, 500);
  };

  useEffect(() => {
    searchYouTube(input, setVideoList);
  }, videos);

  const updateVideoPlayer = (video) => setCurrentVideo(video);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchHandler = {searchHandler} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video = {video} />
        </div>
        <div className="col-md-5">
          <VideoList videos = {videos} updateVideoPlayer ={updateVideoPlayer} />
        </div>
      </div>
    </div>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

