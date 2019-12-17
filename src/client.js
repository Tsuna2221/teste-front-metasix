import axios from "axios"

const headers = {
    "X-Parse-Application-Id": "br.com.metasix.poc"
}

export const getFaq = () => {
    let url = "https://poc.metasix.solutions/parse/classes/FAQ";
    return axios.get(url, { headers }).then(({data}) => data)
}