(function() {
  "use strict";

  window.addEventListener("DOMContentLoaded", function() {
    var $formSubmit = document.forms["form-submit"];
    var $ulNames = document.querySelector("ul#names");
    var $sortNames = document.querySelector("button#sort");
    var $nameDefault = document.querySelector(".name-default");
    var $lisNames;
    var li;
    var text;

    $formSubmit.addEventListener("submit", formSubmited);
    $sortNames.addEventListener("click", sortingNames);

    function nameDefault() {
      $nameDefault.style.display = "none";
    }

    function formSubmited(e) {
      e.preventDefault();

      var input = $formSubmit.querySelector('input[type="text"]').value;

      if (!!input) {
        nameDefault();
      } else {
        alert("Name is empty");
        return;
      }

      createLi(input);

      $formSubmit.reset();
    }

    function createLi(name) {
      li = document.createElement("li");
      text = document.createTextNode(name);

      li.appendChild(text);
      $ulNames.appendChild(li);
    }

    function sortingNames(e) {
      e.preventDefault();
      var sortNames = [];
      $lisNames = $ulNames.querySelectorAll("li");

      for (var x = 0; x < $lisNames.length; x++) {
        var name = $lisNames[x].textContent.toLowerCase();
        sortNames.push(name);
        sortNames.sort();
      }

      for (var x = 0; x < $lisNames.length; x++) {
        $lisNames[x].parentNode.removeChild($lisNames[x]);
      }

      for (var x = 0; x < sortNames.length; x++) {
        createLi(sortNames[x]);
      }
    }
  });
})();
