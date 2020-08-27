// 沙箱模式
(function (w) {
    let baseURL = 'http://localhost:8080/api/v1' // 测试环境基地址

    let BigNew = {
        user_login: baseURL + '/admin/user/login', // 用户登录
        user_info : baseURL + '/admin/user/info', // 获取用户信息
        user_detail : baseURL + '/admin /user/detail', // 获取用户详情
        user_edit : baseURL + '/admin/user/edit', // 编辑用户信息
        category_list : baseURL + '/admin/category/list', // 文章类别查询
        category_add: baseURL + '/admin/category/add', // 新增文章类别
        category_search: baseURL + '/admin/category/search', // 根据ID查询文章类别
        category_edit : baseURL + '/admin/category/edit', // 编辑文章类别
        category_delete: baseURL + '/admin/category/delete', // 删除文章类别
        article_query : baseURL + '/admin/article/query', // 文章搜索
        article_publish : baseURL + '/admin/article/publish', // 文章发表
        article_search : baseURL + '/admin/article/search', // 根据文章id获取信息
        article_edit : baseURL + '/admin/article/edit', // 文章编辑
    }

})(window)