fetch("http://localhost:3001/getblogs")
  .then((response) => response.json())
  .then((data) => {
    loadblogs(data.blogs);
  });

function loadblogs(data) {
  console.log(data);
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
    cb.append(ct, ctext);
    elem = createblog({ type: "div", cname: "card card_cont", elem: cb });
    elem.append(del_but);
    document.getElementById("blog_cont").append(elem);
  });
}
function delete_call(e) {
  console.log(e.id);
  $.post(
    "/deleteblog",
    {
      id:e.id
    },
    function (data, status) {
      console.log(status);
      alert("blog deleted");
      location.href=("http://localhost:3001/");
    }
  );
}
function openblog(e) {
        location.href=("http://localhost:3001/openblog?id="+e.id);
      }


function createblog(info) {
  fin = document.createElement(info.type);
  fin.className = info.cname;
  if (info.id) fin.id = info.id;

  if (info.elem) fin.append(info.elem);

  return fin;
}
