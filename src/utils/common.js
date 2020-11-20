export function formatDate(date, pattern) {
    if (!pattern) {
        pattern = 'YYYY-MM-DD hh:mm:ss';
    }
    if (!date) {
        return '';
    }
    let d = new Date(date),
        str = pattern,
        types = ['YYYY', 'MM', 'DD', 'hh', 'mm', 'ss'],
        dates = [
            d.getFullYear(),
            d.getMonth() + 1,
            d.getDate(),
            d.getHours(),
            d.getMinutes(),
            d.getSeconds(),
        ];

    for (let i = 0; i < types.length; i++) {
        str = str.replace(types[i], dates[i] < 10 ? '0' + dates[i] : dates[i]);
    }

    return str;
}
