import axios from "axios";
const newsApi = "/api/nc/article/headline/data/10-20.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore"

export default {
    getNews(){
        return axios.get(newsApi)
    },
    getNewsDetail(id){
        return axios.get(`/api/nc/article/${id}/full.html`)
    },
    getGame(){
        return axios.get(`/hupunews.json`)
    },
    getJrs(){
        return axios.get(`/bxj2.json`)
    }
}