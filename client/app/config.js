import Vue from 'vue';
import Resource from 'vue-resource';

Vue.use(Resource);

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');

const {url, uri, auth, scoutDriver} = document.body.dataset;

const config = {
  uri,
  url,
  auth,
  scoutDriver,
  poster: url + '/assets/poster',
  posterTMDB: 'http://image.tmdb.org/t/p/w185',
  api: url + '/api'
};

window.config = config;

export default config;