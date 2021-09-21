import React, { Component } from 'react'

export default class MovieDetail extends Component {
    render() {
        return (
            <div>
                MovieDetail
                MovieDetailMovieDetail
                MovieDetailMovieDetail
                MovieDetail
                MovieDetail
                MovieDetail
                MovieDetail
                MovieDetail
                v
                MovieDetail
                MovieDetail
                MovieDetail
                MovieDetailMovieDetail
                MovieDetail
                MovieDetail
                MovieDetail
                MovieDetail
                MovieDetail
                MovieDetail
                MovieDetail
                
            </div>
        )
    }
}


// import React, { Component } from 'react'
// import { actFetchMovieDetail } from './module/actions';
// import { Link } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';
// import './MovieDetail.scss';
// import { connect } from 'react-redux';

// class MovieDetail extends Component {
//     componentDidMount(){
//         this.props.fetchMovieDetail();
//     }
//     render() {
//         const {movieDetail, loading} = this.props;
//         console.log(movieDetail);
//         if (loading) return <Loader />;
        
//         return (
         
//             movieDetail && (
//                 <div className="container-fluid">
//                     <div className="row bground">
//                         <div className="col-6">
//                             <img
//                                 className="img-fluid"
//                                 src={movieDetail.hinhAnh}
//                                 alt={movieDetail.biDanh}
//                             />
//                         </div>
//                         <div className="col-6">
//                             <h3>{movieDetail.tenPhim}</h3>
//                             <p>{movieDetail.moTa}</p>
//                         </div>
//                     </div>
//                     <hr />
//                     <h2>Showtime Info</h2>
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-3">
//                                 <div
//                                     className="nav flex-column nav-pills text-left"
//                                     id="v-pills-tab"
//                                     role="tablist"
//                                     aria-orientation="vertical"
//                                 >
//                                     {movieDetail.heThongRapChieu?.map((heThongRap, idx) => {
//                                         return (
//                                             <a
//                                                 className={`nav-link ${idx === 0 && 'active'}`}
//                                                 id="v-pills-home-tab"
//                                                 data-toggle="pill"
//                                                 href={`#${heThongRap.maHeThongRap}`}
//                                                 role="tab"
//                                                 aria-controls="v-pills-home"
//                                                 aria-selected="true"
//                                             >
//                                                 <img
//                                                     src={heThongRap.logo}
//                                                     width="40px"
//                                                     className="mr-2"
//                                                 />
//                                                 {heThongRap.tenHeThongRap}
//                                             </a>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                             <div className="col-9">
//                                 <div className="tab-content" id="v-pills-tabContent">
//                                     {movieDetail.heThongRapChieu?.map((heThongRap, idx) => {
//                                         return (
//                                             <div
//                                                 className={`tab-pane fade show ${idx === 0 && 'active'}`}
//                                                 id={heThongRap.maHeThongRap}
//                                                 role="tabpanel"
//                                                 aria-labelledby="v-pills-home-tab"
//                                             >
//                                                 {heThongRap.cumRapChieu.map(cumRap => {
//                                                     return (
//                                                         <div className="text-left">
//                                                             {cumRap.tenCumRap}
//                                                             <div className="row">
//                                                                 {cumRap.lichChieuPhim.map(lichChieu => {
//                                                                     return (
//                                                                         <div className="col-3">
//                                                                             <Link
//                                                                                 to={`/seat-plan/${lichChieu.maLichChieu}`}
//                                                                             >
//                                                                                 {new Date(
//                                                                                     lichChieu.ngayChieuGioChieu
//                                                                                 ).toLocaleTimeString()}
//                                                                             </Link>
//                                                                         </div>
//                                                                     );
//                                                                 })}
//                                                             </div>
//                                                         </div>
//                                                     );
//                                                 })}
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )
//         )
// }
// }
// const mapStateToProps = (state) =>({
//     movieDetail: state.movieDetailReducer.movieDetail,
//     loading: state.movieDetailReducer.loading
// })
// const mapDispatchToProps = (dispatch) => ({
//     fetchMovieDetail: (movieId) => dispatch(actFetchMovieDetail(movieId))
// })
// export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

