$(document).ready(function () {
    let currentdate = new Date;
    $("#upload").click(function () {
        let title=document.getElementById('blog_title').value;
        let content=document.getElementById('blog_content').value;
        if(title.length == 0 || content.length ==0 ){
            alert('please fill the form')
        }
        else{
       $.post("/uploadblog",
          {   
             title: document.getElementById('blog_title').value,
             content: document.getElementById('blog_content').value,
             create_date:currentdate.toISOString().slice(0, 19).replace('T', ' ')
          },
          function (data, status) {
             console.log(status)
             alert('blog uploaded')
             location.href=("http://localhost:3001/")
          });
        }
    });
 });

 function auto_increase(tb) {
   tb.style.height = "1rem";
   tb.style.height = (tb.scrollHeight)+"px";
}