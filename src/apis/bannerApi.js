
import callApi from "utils/callApi";

const bannerApi = {
    fecthAllBannerApi(){
        return callApi('QuanLyPhim/LayDanhSachBanner')
    }
}
export default bannerApi;