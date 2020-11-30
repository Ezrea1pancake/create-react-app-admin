import React from 'react';
import { withRouter } from 'react-router-dom';
import { message } from 'antd';
import SearchForm from './components/Search';
import Table from './components/Table';
import Pegination from './components/Pegination';
import FormModal from './components/FormModal';

import { queryShopComponentsByPage } from '@/api/information';
import { DEFAULT_PAGENO, DEFAULT_PAGESIZE } from '@/configs/constant/information';

import './style.less';

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
            visible: false,
            current: {},
            done: false,
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

    addArticle = (visible) => {
        this.setState({
            visible,
        });
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

    showEditModal = (row) => {
        const form = {
            name: row.name,
            profile: row.profile,
            articleType: row.articleType,
            materialType: row.materialType,
        };
        this.setState({
            current: form,
            visible: true,
        });
    };

    setVisible = (value) => {
        this.setState({
            visible: value,
        });
    };

    setDone = (value) => {
        this.setState({
            done: value,
        });
    };

    componentDidMount() {
        this.getTableList();
    }

    render() {
        const { searchData, pageData, tableData, visible, loading, current } = this.state;
        return (
            <div>
                <div className="search-container">
                    <SearchForm
                        initialValues={searchData}
                        changeSearchData={this.changeSearchData}
                        addArticle={this.addArticle}
                    />
                </div>
                <Table loading={loading} tableData={tableData} showEditModal={this.showEditModal} />
                <div className="pegination-container">
                    <Pegination pageData={pageData} changePageData={this.changePageData} />
                </div>
                <FormModal
                    visible={visible}
                    current={current}
                    onDone={() => {
                        this.setDone(false);
                        this.setVisible(false);
                    }}
                    onSubmit={() => this.setVisible(false)}
                    onCancel={() => this.setVisible(false)}
                />
            </div>
        );
    }
}

export default withRouter(Article);
