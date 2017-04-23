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
    { ID:5,
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
    { ID:3,
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
                "<td>"+ '<input type="checkbox" name="term_id" value="+ID+">'+ID +"</td>"+
                "<td>"+term+"</td>"+
                "<td>"+title+"</td>"+
                "<td>"+grade+"</td>"+
                "<td>"+status+"</td>"+
                "<td>"+create_time+"</td>"+
                "<td>"+admin+"</td>"+
                "<td>"+area+"</td>"+
                "<td>"+"<input type='button' class='btn' value='删除'>"+"</td>"+
                "</tr>"
            )
    }
}

        //sort the data from big to small
        function sorttosmall() {
            var j,k,val;
            for(j=0;j<database.length;j++){
                for(k=j+1;k<database.length;k++){
                    if(database[j].ID>database[k].ID){
                        val = database[j].ID;
                        database[j].ID=database[k].ID;
                        database[k].ID=val;
                    }
                }
            }
        }

        //sort the data form small to big
        function sorttobig() {
            var j,k,val;
            for(j=0;j<database.length;j++){
                for(k=j+1;k<database.length;k++){
                    if(database[j].ID<database[k].ID){
                        val = database[j].ID;
                        database[j].ID=database[k].ID;
                        database[k].ID=val;
                    }
                }
            }
        }

       traverse();
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

   // enter the course information
   $(".button").on("click",function () {
       var ID=$('input[name=ID]').val();
       var term=$('input[name=term]').val();
       var title=$('input[name=title]').val();
       var grade=$('input[name=grade]').val();
       var status=$('input[name=status]').val();
       var create_time=$('input[name=create_time]').val();
       var admin=$('input[name=admin]').val();
       var area=$('input[name=area]').val();
       $("tbody").append("<tr>"+
           "<td>"+ '<input type="checkbox" name="term_id" value="+ID+">'+ID +"</td>"+
           "<td>"+term+"</td>"+
           "<td>"+title+"</td>"+
           "<td>"+grade+"</td>"+
           "<td>"+status+"</td>"+
           "<td>"+create_time+"</td>"+
           "<td>"+admin+"</td>"+
           "<td>"+area+"</td>"+
           "<td>"+"<input type='button' class='btn' value='删除'>"+"</td>"+
           "</tr>"
       )
   })


  // keydown the hover is removing
   $("table").keydown(function (e) {
       var key=e.keyCode;
       switch(key){
           case 38:{

           }

               break;
           case 40:{

           }

               break;

       }



   })




