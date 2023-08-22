export const sortArrayObject = (data, field) => {
    data.sort((a, b) => {
        if (b[field] < a[field]) {
            return -1;
        }

        if (b[field] > a[field]) {
            return 1;
        }

        return 0;
    });
    return data;
}

export function isJson(str) {
    let extract = false
    try {
        extract = JSON.parse(str);
    } catch (e) {
        return false;
    }
    return (extract) ? true : false;
}

export function TotalPriceCart(data) {
    try {
        let total = 0
        data?.map((item) => {
            total += item.total * item.price;
        })
        return Number(total);
    } catch (e) {
        return 0;
    }
}

export function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
