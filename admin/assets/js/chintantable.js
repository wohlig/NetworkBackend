function generatejquery(url)
{
    //console.log("ABCD");
    $(document).ready(function () {

            var search = $(".chintantablesearch").val();
            var pageno = 1;
            var orderby = "";
            var orderorder = "";



            function fillchintandata() {
                $(".drawchintantable .loader").show();
                $.getJSON(url, {
                    search: search,
                    pageno: pageno,
                    orderby: orderby,
                    orderorder: orderorder,
                }, function (data) {

                    $(".drawchintantable table tbody").html("");
                    var result = data.queryresult;
                    for (var i = 0; i < result.length; i++) {
                        $(".drawchintantable table tbody").append(drawtable(result[i]));
                    }




                    $(".chintantablepagination ul.pagination").html("");
                    if (data.pageno != 1) {
                        $(".chintantablepagination ul.pagination").append('<li><a href="#" data-page="' + (data.pageno - 1) + '"><span aria-hidden="true">&laquo;</span></a></li>');
                    } else {
                        $(".chintantablepagination ul.pagination").append('<li class="disabled"><a href="#" data-page="' + (data.pageno) + '"><span aria-hidden="true">&laquo;</span></a></li>');
                    }

                    for (var i = 0; i < data.lastpage; i++) {
                        if ((i + 1) == data.pageno)
                            $(".chintantablepagination ul.pagination").append('<li class="active" ><a href="#" data-page="' + (i + 1) + '">' + (i + 1) + '</a>');
                        else
                            $(".chintantablepagination ul.pagination").append('<li><a href="#" data-page="' + (i + 1) + '">' + (i + 1) + '</a>');
                    }
                    if (data.pageno != data.lastpage) {
                        $(".chintantablepagination ul.pagination").append('<li><a href="#" data-page="' + (data.pageno + 1) + '"><span aria-hidden="true">&raquo;</span></a></li>');
                    } else {
                        $(".chintantablepagination ul.pagination").append('<li class="disabled"><a href="#" data-page="' + (data.pageno) + '"><span aria-hidden="true">&raquo;</span></a></li>');
                    }

                    $(".chintantablepagination ul.pagination li a").click(function () {
                        pageno = parseInt($(this).attr("data-page"));
                        fillchintandata();
                        return false;

                    });
                    var allpages=$(".chintantablepagination ul.pagination li a");
                    var totalwidth=0;
                    console.log("Length: "+allpages.length);
                    for(var i=0;i<allpages.length;i++)
                    {
                        totalwidth+=$(allpages).eq(i).width()+26;
                    }
                    $(".chintantablepagination ul.pagination").width(totalwidth);
                    $(".chintantablepagination").css({"overflow-x": "scroll","height": "72px","overflow-y": "hidden"});

                    for (var i = 0; i < data.elements.length; i++) {
                        var element = data.elements[i];
                        $(".drawchintantable thead tr th[data-field='" + element.alias + "']").html(element.header);

                        if (element.sort == "ASC") {
                            $(".drawchintantable thead tr th[data-field='" + element.alias + "']").append("<button data-sort='DESC' class='pull-right btn btn-xs sortbutton'><span class='glyphicon glyphicon-chevron-up'></span></button>");
                        } else if (element.sort == "DESC") {
                            $(".drawchintantable thead tr th[data-field='" + element.alias + "']").append("<button data-sort='ASC' class='pull-right btn btn-xs sortbutton'><span class='glyphicon glyphicon-chevron-down'></span></button>");
                        } else if (element.sort == "1") {
                            $(".drawchintantable thead tr th[data-field='" + element.alias + "']").append("<button data-sort='ASC' class='pull-right btn btn-xs sortbutton'><span class='glyphicon glyphicon-tasks'></span></button>");
                        }
                    }

                    $(".drawchintantable thead tr th button.sortbutton").click(function () {
                        console.log("Clicked");
                        orderby = $(this).parents("th").attr("data-field");
                        orderorder = $(this).attr("data-sort");
                        fillchintandata();
                    });


                    $(".drawchintantable .loader").hide();

                });




            };

            $(".chintantablesearchgo").click(function () {
                search = $(".chintantablesearch").val();
                pageno = 1;
                fillchintandata();
            });

            $(".chintantablesearchgo").click(function () {
                search = $(".chintantablesearch").val();
                pageno = 1;
                fillchintandata();
            });



            fillchintandata();


        });
}

