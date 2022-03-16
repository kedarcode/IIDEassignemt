fetch("http://localhost:3000/blogs/getblogs")
  .then((response) => response.json())
  .then((data) => {
    loadblogs(data.blogs);
  });
//load blogs on home page
function loadblogs(data) {
  data.forEach((element) => {
    ctext = document.createElement("div");
    ctext.append(
      createblog({
        type: "p",
        cname: "card-text text_cont",
        elem: element.blog,
      })
    );
    title_head = document.createElement("h3");
    title_head.append(element.title);
    ct = createblog({ type: "div", cname: "card-body", elem: title_head });
    cb = createblog({ type: "div", cname: "card-body" });
    del_but = createblog({
      type: "div",
      cname: "delete",
      elem: "delete",
      id: element.id,
    });
    del_but.setAttribute("onClick", "delete_call(this)");

    open_but = createblog({
      type: "button",
      cname: "btn btn-primary",
      elem: "open blog",
      id: element.id
    });
    open_but.setAttribute("onClick", "openblog(this)");

    ctext.append(open_but);
    cb.append(ct, ctext,del_but);
    elem = createblog({ type: "div", cname: "card card_cont", elem: cb });
    document.getElementById("blog_cont").append(elem);
  });
}
//delete blog from home page
function delete_call(e) {
  $.post(
    "/blogs/deleteblog",
    {
      id:e.id
    },
    function (data, status) {
      alert("blog deleted");
      location.href=("http://localhost:3000/blogs");
    }
  );
}
//open blog 
function openblog(e) {
        location.href=("http://localhost:3000/blogs/openblog?id="+e.id);
      }
//create blog
function createblog(info) {
  fin = document.createElement(info.type);
  fin.className = info.cname;
  if (info.id) fin.id = info.id;
  if (info.elem) fin.append(info.elem);

  return fin;
}
