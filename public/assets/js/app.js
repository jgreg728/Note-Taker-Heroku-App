

// SAVE NOTE BUTTON ON-CLICK EVENT
const $submitBtn = $(".submit");

const submitClick = function (event) {
  event.preventDefault();

  // Get note info from the form
  var newNote = {
    title: $(".title-content").val().trim(),
    note: $(".note-content").val().trim(),
  };

  // POST the note to "/api.notes"
  $.ajax({
    url: "/api/notes",
    method: "POST",
    data: newNote
  }).then(function(data) {
    // Alert user when note has been saved
    if (data) {
      alert("Note has been saved!");
    }

    // Clear the form after submitting
    $(".title-content").val("");
    $(".note-content").val("");
  }
  );
};

// Run submitClick whenever the form is submitted
$submitBtn.on("click", submitClick);


// GET the note from "/api.notes"
const showNotes = function (event) {
  event.preventDefault();

  var submittedNote = {
    title: $(".list-group-item").val().trim(),
    note: $(".list-group-item").val().trim(),
  };

  // GET submitted notes saved to "/api.notes"
    $.ajax({
    url: "/api/notes",
    method: "GET",
    data: submittedNote
  }).then(function(data) {
    // Alert user when note has been saved
    if (data) {
      console.log(data)
    }
  });
}

// Run showNotes whenever the form is submitted
// $submitBtn.on("click", showNotes);


// BUTTON TO DELETE NOTE
const $clearBtn = $(".deleteNote");

var clearNote = function () {
  $.ajax({
    url: "/api/notes",
    method: "DELETE"
  }).then(function() {
    $("#noteList").empty();
    console.log("Note deleted.");
  });
};

$clearBtn.on("click", clearNote);

