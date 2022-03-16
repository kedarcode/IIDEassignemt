let idy=document.getElementById('idy').innerHTML
let currentdate=new Date;   
fetch("http://localhost:3000/blogs/sing_blog?id="+idy)
  .then((response) => response.json())
  .then((data) => {
    loadblogs(data.blogs);
  });
function loadblogs(data){
    console.log(data)
    document.getElementById('date_of').innerText=data[0].date;  
    document.getElementById('blog_title').innerText=data[0].title;
    document.getElementById('blog_content').innerText=data[0].blog;
}
$('#update').click(()=>{
    $('#save').css({"display":"block"});
    $('#blog_title').prop( "contenteditable", true );
    $('#blog_content').prop( "contenteditable", true );
})
$('#save').click(()=>{
    $.post("/blogs/updateblog",
          {   id:idy,
             title: document.getElementById('blog_title').innerText,
             content: document.getElementById('blog_content').innerText,
             create_date:currentdate.toISOString().slice(0, 19).replace('T', ' ')
          },
          function (data, status) {
             console.log(status)
             alert('blog updated')
             location.href=("http://localhost:3000/blogs/openblog?id="+idy);
          });
          $('#save').css({"display":"none"});
          $('#blog_title').prop( "contenteditable", false );
          $('#blog_content').prop( "contenteditable", false );   
        
})
function auto_increase(tb) {
  tb.style.height = "1rem";
  tb.style.height = (tb.scrollHeight)+"px";
}
;