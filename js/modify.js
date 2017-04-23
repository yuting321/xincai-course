var database = [
    { ID:6,
        term:"第一学期",
        title:"HTML+CSS",
        grade:"欣才146期",
        status:"已发布",
        create_time:"2016-11-13",
        admin:"三日",
        area:"南京"
    },
    { ID:10,
        term:"第一学期",
        title:"HTML+CSS",
        grade:"欣才146期",
        status:"已发布",
        create_time:"2016-11-13",
        admin:"三日",
        area:"南京"
    },
    { ID:8,
        term:"第一学期",
        title:"HTML+CSS",
        grade:"欣才146期",
        status:"已发布",
        create_time:"2016-11-13",
        admin:"三日",
        area:"南京"
    },
    { ID:4,
        term:"第一学期",
        title:"HTML+CSS",
        grade:"欣才146期",
        status:"已发布",
        create_time:"2016-11-13",
        admin:"三日",
        area:"南京"
    },
    { ID:7,
        term:"第一学期",
        title:"HTML+CSS",
        grade:"欣才146期",
        status:"已发布",
        create_time:"2016-11-13",
        admin:"三日",
        area:"南京"
    },
    { ID:1,
        term:"第一学期",
        title:"HTML+CSS",
        grade:"欣才146期",
        status:"已发布",
        create_time:"2016-11-13",
        admin:"三日",
        area:"南京"
    },
    { ID:15,
        term:"第一学期",
        title:"HTML+CSS",
        grade:"欣才146期",
        status:"已发布",
        create_time:"2016-11-13",
        admin:"三日",
        area:"南京"
    },
    { ID:2,
        term:"第一学期",
        title:"HTML+CSS",
        grade:"欣才146期",
        status:"已发布",
        create_time:"2016-11-13",
        admin:"三日",
        area:"南京"
    },


]
var i;
var sta = 0 ;//unclick  th span
var select_row = 0;

function traverse() {
    for (i = 0; i < database.length; i++) {
        var ID = database[i].ID;
        var term = database[i].term;
        var title = database[i].title;
        var grade = database[i].grade;
        var status = database[i].status;
        var create_time = database[i].create_time;
        var admin = database[i].admin;
        var area = database[i].area;
            $("tbody").append("<tr>"+
                "<td>"+ '<input type="checkbox" name="term_id" value="'+ID+'">'+ID +"</td>"+
                "<td><span data-type='term' data-id='"+ID+"'>"+term+"</span></td>"+
                "<td><span data-type='title' data-id='"+ID+"'>"+title+"</span></td>"+
                "<td><span data-type='grade' data-id='"+ID+"'>"+grade+"</span></td>"+
                "<td><span data-type='status' data-id='"+ID+"'>"+status+"</span></td>"+
                "<td><span data-type='create_time' data-id='"+ID+"'>"+create_time+"</span></td>"+
                "<td><span data-type='admin' data-id='"+ID+"'>"+admin+"</span></td>"+
                "<td><span data-type='area' data-id='"+ID+"'>"+area+"</span></td>"+
                "<td>"+"<input type='button' class='btn' value='删除' onclick='remove_course_single("+ID+",this)'>"+"</td>"+
                "</tr>"
            )
    }
}

       traverse();
       flush_select_row();
       $("td .btn").on("click",function () {
           $(this).parent().parent().remove();
       })

   // sort by ID
   $("th span").on("click",function () {
       switch(sta){
           case 0:
               $("th span").html("&#xe66a;");
               sta= 1;
               sorttosmall();
               break;
           case 1:
               $("th span").html("&#xe63e;");
               sta = 0;
               sorttobig();
               break;
       }
       $("tbody").children().remove();
       traverse();

   })

   // call the allcheck function
   $(".rows1 input").on("click",function () {
       mutiSelect(this,"term_id");
   })


    // get the add's data  id
      var maxid = null;
      $.each(database,function (key,val) {
          if(maxid<val.ID){
              maxid = val.ID;
          }
      })

// enter the course information
$(".button").on("click",function () {
    maxid++;
    var ID= maxid;
    var term=$('input[name=term]').val();
    var title=$('input[name=title]').val();
    var grade=$('input[name=grade]').val();
    var status=$('input[name=status]').val();
    var create_time=$('input[name=create_time]').val();
    var admin=$('input[name=admin]').val();
    var area=$('input[name=area]').val();
    for(var k=0;k<$(".text").length;k++){
        var current_val = trimStr($(".text").eq(k).val());
        if(current_val == ''){
            $(".null").html("不为空").addClass("h");
            return false;
        }
    }

    $(".null").html('').removeClass("h");

        database.push({  
            ID:ID,
            term:term,
            title:title,
            grade:grade,
            status:status,
            create_time:create_time,
            admin:admin,
            area:area
        });

        $("tbody").append("<tr>"+
            "<td>"+ '<input type="checkbox" name="term_id" value="'+ID+'">'+ID +"</td>"+
            "<td><span data-type='term' data-id='"+ID+"'>"+term+"</span></td>"+
            "<td><span data-type='title' data-id='"+ID+"'>"+title+"</span></td>"+
            "<td><span data-type='grade' data-id='"+ID+"'>"+grade+"</span></td>"+
            "<td><span data-type='status' data-id='"+ID+"'>"+status+"</span></td>"+
            "<td><span data-type='create_time' data-id='"+ID+"'>"+create_time+"</span></td>"+
            "<td><span data-type='admin' data-id='"+ID+"'>"+admin+"</span></td>"+
            "<td><span data-type='area' data-id='"+ID+"'>"+area+"</span></td>"+
            "<td>"+"<input type='button' class='btn' value='删除' onclick='remove_course_single("+ID+",this)'>"+"</td>"+
            "</tr>"
        )
})

$(".del").on("click",function () {
    if($(".rows1 input").is(':checked')){
        var all_checkbox = $("input[name=term_id]");
        var arr = $(all_checkbox).length;
        for (var i = 0; i < arr; i++) {
            var current_checkbox = $(all_checkbox).eq(i);
            if ($(current_checkbox).is(':checked')) {
                remove_course_single($(current_checkbox).val(),current_checkbox);
            }
        }
    }else {
        var all_checkbox = $("input[name=term_id]");
        var arr = $(all_checkbox).length;
        for (var i = 0; i < arr; i++) {
            var current_checkbox = $(all_checkbox).eq(i);
            if ($(current_checkbox).is(':checked')) {
                remove_course_single($(current_checkbox).val(),current_checkbox);
            }
        }
    }
})

  // keydown the hover is removing
   $(document).keydown(function (e) {
       var key = e.keyCode;
       switch(key){
           case 38:{ //up

               if(select_row == 0){
                   select_row = database.length;
               }
               select_row--;
               flush_select_row();
           }
               break;

           case 40:{ //down

               select_row++;
               flush_select_row();
               if(select_row == database.length -1){
                   select_row = -1;
               }
           }
               break;

           case 46:{ //delete

               var select_row_checkbox = $('tbody').children('tr').eq(select_row).find('input[name=term_id]');
               var select_id = $(select_row_checkbox).val();
               remove_course_single(select_id,select_row_checkbox);
               if(select_row < database.length){
                   select_row =select_row;
                   flush_select_row();
               }
               if(select_row == database.length ){
                   select_row=0;
                   flush_select_row();
               }
           }
               break;
           case 13:{
               var select_row_checkbox = $('tbody').children('tr').eq(select_row).find('input[type=checkbox]');

               if($(select_row_checkbox).is(':checked')){
                   $(select_row_checkbox).attr("checked",false);
               }else{
                   $(select_row_checkbox).attr("checked",true);
               }
           }
       }
   })
  //fill course attr editable input
   $(document).ready(function(){

       $('td span').each(function(index,element){

           $(element).parent().append("<input class='span_editable' data-type='"+$(element).attr('data-type')+"' data-id='"+$(element).attr('data-id')+"'>");

       });

       $('.span_editable').hide();

       $('.span_editable').bind('blur',function(){

           var input_val= $(this).val();
           var data_id = $(this).attr('data-id');
           var data_type = $(this).attr('data-type');

           //flush dom
           var span_elem = $(this).parent().children('span');
           $(span_elem).html(input_val);
           $(span_elem).show();

           $(this).hide();

           //update database
           $(database).each(function(index,db_item){

               if(db_item.ID  == data_id){

                   switch(data_type){
                       case 'term' :
                           db_item.term = input_val;
                           break;
                       case 'title' :
                           db_item.title = input_val;
                           break;
                       case 'grade' :
                           db_item.grade = input_val;
                           break;
                       case 'status' :
                           db_item.status = input_val;
                           break;
                       case 'create_time' :
                           db_item.create_time = input_val;
                           break;
                       case 'admin' :
                           db_item.admin = input_val;
                           break;
                       case 'area' :
                           db_item.area = input_val;
                           break;
                   }

               }

           });

       });

   });

   //
   $("td span").on("click",function () {

       var current_span_value = $(this).html();

       var span_input = $(this).parent().children('input');
       $(span_input).val(current_span_value);
       $(span_input).show();
       $(span_input).focus();

       $(this).hide();

   });

function trimStr(str){
    return str.replace(/(^\s*)|(\s*$)/g,"");
}

//delete database and dom element
function remove_course_single(course_id, element) {

    for(var i=0;i<database.length;i++){
        if(database[i].ID == course_id){
            database.splice(i,1);
        }
    }
    $(element).parent().parent().remove();
}

//flush select row
function flush_select_row(){
    $('tbody').children('tr').removeClass('bg');
    $('tbody').children('tr').eq(select_row).addClass('bg');
}