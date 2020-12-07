import axios from "axios";

export const fetchPublications = () =>
    new Promise((resolve, reject) => {

        axios.get("https://spreadsheets.google.com/feeds/list/1Ek4NLsRKqjjT5lcUhINvHE1QvEv0REU3Ckj0eOYWMJ0/od6/public/values?alt=json").then((resp) => {

            /* const publications = resp.data.feed.entry
             const pubs = [];
             publications.forEach(pub => {
                 pubs.push({
                     all_publications_order_of_appearance: pub.gsx$allpublicationsorderofappearance.$t
                 })
             });*/

            resolve(resp.data.feed.entry)
        })
            .catch(error => reject(error));
    });
