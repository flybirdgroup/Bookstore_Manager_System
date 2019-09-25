$(function () {
    $('.checkBook').click(function () {
            $('.checkBook').addClass("active");
            $('.addBook').removeClass("active");
            $('.delBook').removeClass("active");
            $('.updateBook').removeClass("active");
            $('.booklist').show();
            $('.bookadd').hide();
            $('.bookdel').hide();
            $('.bookupdate').hide();
        }
    );
    $('.addBook').click(function () {
            $('.checkBook').removeClass("active");
            $('.addBook').addClass("active");
            $('.delBook').removeClass("active");
            $('.updateBook').removeClass("active");
            $('.booklist').hide();
            $('.bookadd').show();
            $('.bookdel').hide();
            $('.bookupdate').hide();
        }
    );
    $('.delBook').click(function () {
            $('.checkBook').removeClass("active");
            $('.addBook').removeClass("active");
            $('.delBook').addClass("active");
            $('.updateBook').removeClass("active");
            $('.booklist').hide();
            $('.bookadd').hide();
            $('.bookdel').show();
            $('.bookupdate').hide();
        }
    );
    $('.updateBook').click(function () {
            $('.checkBook').removeClass("active");
            $('.addBook').removeClass("active");
            $('.delBook').removeClass("active");
            $('.updateBook').addClass("active");
            $('.booklist').hide();
            $('.bookadd').hide();
            $('.bookdel').hide();
            $('.bookupdate').show();
        }
    );
});

function addBook(_this) {
    var book= $(_this).parent().parent();
    var book_id = book.find("[name='id']").val();
    var btitle = book.find("[name='btitle']").val();
    var bauthor = book.find("[name='bauthor']").val();
    var bperson = book.find("[name='bperson']").val();
    var bpub_date = book.find("[name='bpub_date']").val();
    var bread = book.find("[name='bread']").val();
    var bcomment = book.find("[name='bcomment']").val();
    $.ajax({
        url: "",
        type: "post",
        data: {
            btitle: btitle,
            bauthor: bauthor,
            bperson: bperson,
            bpub_date: bpub_date,
            bread: bread,
            bcomment: bcomment
        },
        success: function (result) {
            alert(result.data);
            location.reload()
        },
        error: function () {
            alert("数据发送失败!");
        }
    });
}

function delBook(_this) {
    var book= $(_this).parent().parent();
    var book_id = book.find("[name='id']").val();
    $.ajax({
        url: "",
        type: "delete",
        data: JSON.stringify({
            id: book_id
        }),
        success: function (result) {
            alert(result.data);
            location.reload()
        },
        error: function () {
            alert("数据发送失败!");
        }
    });
}

function putBook(_this) {
    var book= $(_this).parent().parent();
    var book_id = book.find("[name='id']").val();
    var btitle = book.find("[name='btitle']").val();
    var bauthor = book.find("[name='bauthor']").val();
    var bperson = book.find("[name='bperson']").val();
    var bpub_date = book.find("[name='bpub_date']").val();
    var bread = book.find("[name='bread']").val();
    var bcomment = book.find("[name='bcomment']").val();
    $.ajax({
        url: "",
        type: "put",
        data: JSON.stringify({
            id:book_id,
            btitle: btitle,
            bauthor: bauthor,
            bperson: bperson,
            bpub_date: bpub_date,
            bread: bread,
            bcomment: bcomment
        }),
        success: function (result) {
            alert(result.data);
            location.reload()
        },
        error: function () {
            alert("数据发送失败!");
        }
    });
}