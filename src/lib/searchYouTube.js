import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {

  var server = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';

  $.ajax({
    url: server,
    type: 'GET',
    data: {q: query},
    contentType: 'application/json',
    success: (data) => {
      callback(data.slice(0, 5));
    },
    error: function(error) {
      console.error('Recastly: Failed to fetch video', error);
    }
  });
};

export default searchYouTube;
