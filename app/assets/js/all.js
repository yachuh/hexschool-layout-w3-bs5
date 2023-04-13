$(function () {
  console.log("Hello Bootstrap5");
});

ClassicEditor.create(document.querySelector("#editor")).catch((error) => {
  console.error(error);
});
