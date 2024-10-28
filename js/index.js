$(function() {
    load();
    $('.title form input').on('keydown', function(event) {
        if (event.keyCode === 13) {
            if ($(this).val() == '') {
                alert('请输入待办事项');
            } else {
                var local = getDate();
                local.push({ title: $(this).val(), done: false });
                saveDate(local);
                load();
                reload();
            }
        }
    });
    $('ul.banner,ol.banner').on('click', '.menu-top', function() {
        var data = getDate();
        var dataIndex = $(this).attr('data-index');
        data.splice(dataIndex, 1);
        saveDate(data);
        load();
        reload();
    });
    $('ul.banner').on('click', '.menu-bottom', function() {
        var data = getDate();
        var dataIndex = $(this).siblings('.menu-top').attr('data-index');
        data[dataIndex].done = true;
        saveDate(data);
        load();
        reload();
    });
    $('ol.banner').on('click', '.menu-bottom', function() {
        var data = getDate();
        var dataIndex = $(this).siblings('.menu-top').attr('data-index');
        data[dataIndex].done = false;
        saveDate(data);
        load();
        reload();
    });
    // 读取本地数据
    function getDate() {
        var date = localStorage.getItem('todolist');
        if (date !== null) {
            // 字符串转对象
            return JSON.parse(date);
        } else {
            return [];
        }
    }
    // 保存本地数据
    function saveDate(data) {
        localStorage.setItem('todolist', JSON.stringify(data));
    }
    // 渲染加载数据
    function load() {
        var data = getDate();
        $('ul.banner,ol.banner').empty();
        var todoCount = 0;
        var doneCount = 0;
        $.each(data, function(i, n) {
            if (n.done) {
                $('ol.banner').prepend('<li><form><p title="' + n.title + '">' + n.title + '</p><div class="down">···<div class="menu"><div class="menu-top" data-index="' + i + '">删除该事件</div><div class="menu-bottom">标记未完成</div></div></div></form></li>');
                todoCount++;
            } else {
                $('ul.banner').prepend('<li><form><p title="' + n.title + '">' + n.title + '</p><div class="down">···<div class="menu"><div class="menu-top" data-index="' + i + '">删除该待办</div><div class="menu-bottom">标记已完成</div></div></div></form></li>');
                doneCount++
            }
        });
        $('div.top span').text(doneCount);
        $('div.bottom span').text(todoCount);
    }
    // 强制刷新
    function reload() {
        location.reload();
    };
});