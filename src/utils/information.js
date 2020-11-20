export function getArticleTypeStr(payload) {
    switch (payload) {
        case 0:
            return '总部';
        case 1:
            return '营业部';
        case 3:
            return '财经内参';
        default:
            return '';
    }
}

export function getMaterialTypeStr(payload) {
    switch (payload) {
        case 'topratednew':
            return '热点聚焦';
        case 'subject':
            return '今日机会';
        case 'tgView':
            return '投顾观点';
        case 'internalReference':
            return '光证内参';
        case 'research':
            return '同步研报';
        default:
            return '';
    }
}
