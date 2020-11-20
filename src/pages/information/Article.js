import React from 'react';
import { withRouter } from 'react-router-dom';
import { message } from 'antd';
import SearchForm from '@/components/information/article/Search';
import ArticleTable from '@/components/information/article/Table';
import ArticlePegination from '@/components/information/article/Pegination';

import { queryShopComponentsByPage } from '@/api/information';
import { DEFAULT_PAGENO, DEFAULT_PAGESIZE } from '@/configs/constant/information';

class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: [],
            pageData: {
                pageNo: DEFAULT_PAGENO,
                pageSize: DEFAULT_PAGESIZE,
                totalCount: 0,
            },
            searchData: {
                type: 5,
                isRecommended: '',
                upStatus: '',
                name: '',
                articleType: '',
                materialType: '',
            },
            loading: false,
        };
    }

    getTableList = () => {
        this.setState({
            loading: true,
        });
        const { pageNo, pageSize } = this.state.pageData;
        const payload = {
            pageNo,
            pageSize,
            ...this.state.searchData,
        };
        queryShopComponentsByPage(payload).then((shopComponentInfo) => {
            if (shopComponentInfo.ret !== 0) {
                message.error(shopComponentInfo.msg);
                return;
            }
            const tableResult = shopComponentInfo.result;
            if (tableResult.list && tableResult.list.length) {
                const list = tableResult.list.map((item) => {
                    return {
                        key: item.id,
                        ...item,
                    };
                });
                this.setState({
                    tableData: list,
                    pageData: Object.assign({}, this.state.pageData, {
                        totalCount: tableResult.totalCount,
                    }),
                });
            }
            this.setState({
                loading: false,
            });
        });
    };

    changeSearchData = (params) => {
        this.setState(
            {
                searchData: Object.assign({}, this.state.searchData, params),
                pageData: Object.assign({}, this.state.pageData, {
                    pageNo: DEFAULT_PAGENO,
                    pageSize: DEFAULT_PAGESIZE,
                }),
            },
            () => {
                console.log(this.state.pageData);
                this.getTableList();
            },
        );
    };

    changePageData = (params) => {
        this.setState(
            {
                pageData: Object.assign({}, this.state.pageData, params),
            },
            () => {
                console.log(this.state.pageData);
                this.getTableList();
            },
        );
    };

    componentDidMount() {
        this.getTableList();
    }

    render() {
        return (
            <div>
                <div className="search-container">
                    <SearchForm
                        initialValues={this.state.searchData}
                        changeSearchData={this.changeSearchData.bind(this)}
                    />
                </div>
                <ArticleTable loading={this.state.loading} tableData={this.state.tableData} />
                <div className="pegination-container">
                    <ArticlePegination
                        pageData={this.state.pageData}
                        changePageData={this.changePageData.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Article);
