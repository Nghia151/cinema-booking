import React, { Component } from 'react'
import './SeatPlan.scss'
import { connect } from 'react-redux'
import { actDatghe, actFetchAllSeatPlanApi } from './module/actions'
import { StopOutlined } from '@ant-design/icons'
import * as _ from "lodash"
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
class SeatPlan extends Component {
    componentDidMount() {
        const { params } = this.props.match;
        this.props.fetchAllSeatPlan(params.showTimeId)
    }


    render() {
        const { chiTietPhongVe, danhSachGheDangDat } = this.props;
        console.log(danhSachGheDangDat);

        const { thongTinPhim, danhSachGhe } = chiTietPhongVe;



        return (
            <div className="booking-ticket" style={{ backgroundImage: `url(${thongTinPhim.hinhAnh})`, minHeight: '100vh', paddingTop: 93, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <CustomCard
                    style={{ paddingTop: 93, minHeight: '100vh', borderRadius: 0 }}
                    effectColor="#rgba(0, 0, 0, 0.9)" // required
                    color="#rgba(0, 0, 0, 0.9)" // default color is white
                    blur={25} // default blur value is 10px
                >
                    <div className="container seatPlan ">
                        <div className="row">
                            <div className="col-8"  >
                                <div className="screen">Màn hình</div>
                                <div className="seat d-flex">
                                    {danhSachGhe?.map((ghe, idx) => {
                                        let loaiGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
                                        let loaiGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
                                        let loaiGheDangDat = '';
                                        let idxGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe===ghe.maGhe);
                                        if(idxGheDangDat != -1){
                                            loaiGheDangDat = 'gheDangDat';
                                        }
                                        return <div key={idx}>
                                            <button onClick={()=>{
                                                this.props.chonGhe(ghe);
                                            }} disabled={ghe.daDat} className={`ghe ${loaiGheVip} ${loaiGheDaDat} ${loaiGheDangDat} text-center`}> {ghe.daDat ? <StopOutlined style={{ paddingBottom: 7 }} /> : ghe.stt} </button>
                                            {(idx + 1) % 16 === 0 ? <br /> : ''}
                                        </div>

                                    })}
                                </div>
                            </div>
                            <div className="col-4 seat-info text-left">
                                <h3> {thongTinPhim.tenPhim} </h3>
                                <h6> {thongTinPhim.tenCumRap} </h6>
                                <p> {thongTinPhim.diaChi} </p>
                                <hr />
                                <p> Ngày chiếu: {thongTinPhim.ngayChieu} </p>
                                <hr />
                                <p>Giờ chiếu: {thongTinPhim.gioChieu} </p>
                                <hr />
                                <p> {thongTinPhim.tenRap} </p>
                                <hr />
                                <div>
                                    <span>Ghế: </span>
                                   {_.sortBy(danhSachGheDangDat,['stt']).map((gheDangDat,idx)=>{
                                        return <span key={idx}> {gheDangDat.stt} </span>
                                    })}
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-3">
                                        <h3>Tổng:</h3>
                                    </div>
                                    <div className="col-9 text-right">
                                        <h3> <span className="text-danger"> {danhSachGheDangDat.reduce((tongTien, ghe)=>{
                                            return tongTien += ghe.giaVe;
                                        }, 0).toLocaleString()}đ </span></h3>
                                    </div>
                                </div>


                                <button className="btn btn-warning w-100">Đặt vé</button>
                            </div>
                        </div>
                    </div>
                </CustomCard>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    chiTietPhongVe: state.quanLyDatVeReducer.chiTietPhongVe,
    danhSachGheDangDat: state.quanLyDatVeReducer.danhSachGheDangDat
})
const mapDispatchToProps = dispatch => ({
    fetchAllSeatPlan: (showTimeId) => dispatch(actFetchAllSeatPlanApi(showTimeId)),
    chonGhe: (ghe) => dispatch(actDatghe(ghe))
})
export default connect(mapStateToProps, mapDispatchToProps)(SeatPlan);
