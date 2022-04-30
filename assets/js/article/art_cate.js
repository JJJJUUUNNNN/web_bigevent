$(function(){
    // 获取文章分类的列表
    function initArtCateList(){
        $.ajax({
            method:'GET',
            url:'/my/article/cates',
            success:function(res){
                let htmlStr=template('tpl-table',res)
                $('tbody').html(htmlStr)
            }
        })
    }

})