import axios from "axios";

export const fetchPublications = () =>
    new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_PUBLICATIONS_ENDPOINT).then((resp) => {
            resolve(formatData(resp.data.values))
        })
            .catch(error => reject(error));
    });

const formatData = (rows) => {
    const headerRow = rows[0];
    const dataRows = rows.slice(1);
    const publications = [];
    dataRows.forEach(row => {
        const publication = {};
        headerRow.forEach((column, index) => {
            const value = row[index];
            if (isInt(value))
                publication[column] = parseInt(value);
            else
                publication[column] = value;
        });
        publications.push(publication);
    });
    return publications;
}

const isInt = (value) => {
    return !isNaN(value) && (function (x) { return (x | 0) === x; })(parseFloat(value))
}