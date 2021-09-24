import callApi from "utils/callApi";
class DatVeApi extends callApi {
    fecthAllSeatPlanApi(showTimeId) {
        return this.getApi(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`);
    }
}
export const datVeApi = new DatVeApi();