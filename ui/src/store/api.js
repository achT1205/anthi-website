import axios from "axios";

export const fetchPublications = () =>
    new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_PUBLICATIONS_ENDPOINT).then((resp) => {
            resolve(resp.data)
        })
            .catch(error => {
                console.log(error)
                debugger
                reject(error)
            });
    });