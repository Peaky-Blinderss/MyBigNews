// 沙箱模式
// (function (w) {
//     let baseURL = 'http://localhost:8080/api/v1' // 测试环境基地址

//     let BigNew = {
//         user_login: baseURL + '/admin/user/login', // 用户登录
//         user_info: baseURL + '/admin/user/info', // 获取用户信息
//         user_detail: baseURL + '/admin /user/detail', // 获取用户详情
//         user_edit: baseURL + '/admin/user/edit', // 编辑用户信息
//         category_list: baseURL + '/admin/category/list', // 文章类别查询
//         category_add: baseURL + '/admin/category/add', // 新增文章类别
//         category_search: baseURL + '/admin/category/search', // 根据ID查询文章类别
//         category_edit: baseURL + '/admin/category/edit', // 编辑文章类别
//         category_delete: baseURL + '/admin/category/delete', // 删除文章类别
//         article_query: baseURL + '/admin/article/query', // 文章搜索
//         article_publish: baseURL + '/admin/article/publish', // 文章发表
//         article_search: baseURL + '/admin/article/search', // 根据文章id获取信息
//         article_edit: baseURL + '/admin/article/edit', // 文章编辑
//         article_delete: baseURL + '/admin/article/delete', // 删除文章
//         data_info: baseURL + '/admin/data/info', // 获取统计数据
//         data_article: baseURL + '/admin/data/article', // 日新增文章数量统计
//         data_category: baseURL + '/admin/data/category', // 各类型文章数量统计
//         data_visit: baseURL + '/admin/data/visit', // 日文章访问量
//         comment_search: baseURL + '/admin/comment/search', // 文章评论搜索
//         comment_pass: baseURL + '/admin/comment/pass', // 评论审核通过

//     }

// })(window)


let baseURL = 'http://localhost:8080/api/v1'; // 测试环境基地址
let apiMap = {
    //用户   登录     信息     详情    信息编辑
    user: ['login', 'info', 'detail', 'edit'],
    //种类    所有类别 新增类别 查询指定类别 编辑    删除
    category: ['list', 'add', 'search', 'edit', 'delete'],
    //文章     查询      发表   根据id获取信息 编辑      删除
    article: ['query', 'publish', 'search', 'edit', 'delete'],
    //数据 获取数据 新增文章统计 各类型文章统计 文章访问量
    data: ['info', 'article', 'category', 'visit'],
    //评论      搜索    审核通过  不通过    评论删除
    comment: ['search', 'pass', 'reject', 'delete']
};
let API = {};
for (let key in apiMap) {
    API[key] = API[key] || {}
    for (let method of apiMap[key]) {
        API[key][method] = `${baseURL}/admin/${key}/${method}`
    }
} // 用法API.key.method