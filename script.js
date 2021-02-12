document.getElementById("self").addEventListener("click", addSelf);

document.getElementById("other").addEventListener("click", addOther);

document.getElementById("capture").addEventListener("click", capture);
function saveAs(uri, filename) {
  var link = document.createElement("a");

  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
function capture() {
  window.scrollTo(0, 0);
  html2canvas(document.getElementById("chat")).then(function (canvas) {
    //document.body.appendChild(canvas);
    saveAs(canvas.toDataURL(), "file-         name.png");
  });
}
function addSelf() {
  var currentMessage = document.getElementById("message").value;
  if (currentMessage.trim() === "") return;
  document.getElementById("message").value = "";
  var content = document.getElementById("chat").innerHTML;
  document.getElementById("chat").innerHTML =
    '<div\r\n      class="self break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5"\r\n    >\r\n      ' +
    currentMessage +
    "\r\n    </div>" +
    content;
  scrollUp();
}

function addOther() {
  var currentMessage = document.getElementById("message").value;
  if (currentMessage.trim() === "") return;
  document.getElementById("message").value = "";
  var content = document.getElementById("chat").innerHTML;
  document.getElementById("chat").innerHTML =
    '<div\r\n      class="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2"\r\n    >\r\n      ' +
    currentMessage +
    "\r\n    </div>" +
    content;
  scrollUp();
}

function scrollUp() {
  var objDiv = document.getElementById("chat");
  objDiv.scrollTop = objDiv.scrollHeight;
}
