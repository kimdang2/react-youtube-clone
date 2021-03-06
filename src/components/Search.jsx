var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.myChangeHandler}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

// input text value from search bar will be passed in to getYouTubeVideos as query
