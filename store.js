import Reflux from 'reflux';
import $ from 'jquery';

import Actions from './Actions';

const Store = Reflux.createStore({
  listenables: [Actions],
  data: {
    photos: [],
    search: "",
    sort: "date-posted-desc"
  },
  init() {
    
  },
  getState() {
    return this.data;
  },
  setSearch(search) {
    this.data.search = search;
    this.trigger(this.data);
  },
  setSort(sort) {
    this.data.sort = sort;
    this.trigger(this.data);
    this.search();
  },
  search() {
    $.getJSON("https://api.flickr.com/services/rest?jsoncallback=?",
      {
        tags: this.data.search,
        sort: this.data.sort,
        format: "json",
        method: "flickr.photos.search",
        api_key: "316e3097104286c8a05570cd0d7ef22d"
      },
      data => {
        this.data.photos = data.photos.photo.map(item => {
            return {
              farm: item.farm,
              id: item.id,
              secret: item.secret,
              server: item.server,
              url: `https://farm${item.farm}.staticflickr.com/` +
                `${item.server}/${item.id}_${item.secret}_m.jpg`
            }              
          });
        this.trigger(this.data);
      }
    );
  }
});

export default Store;

