

// SAVE NOTE BUTTON ON-CLICK EVENT
const $submitBtn = $(".submit");

const submitClick = function (event) {
  event.preventDefault();

  // Get note info from the form
  var newNote = {
    title: $(".note-title").val().trim(),
    note: $(".note-textarea").val().trim(),
  };
  console.log(newNote)
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

    // call shownotes
    showNotes();
  }
  );
};

// Run submitClick whenever the form is submitted
$submitBtn.on("click", submitClick);


// GET the note from "/api.notes" to show submitted notes
const showNotes = function () {
  // event.preventDefault();
  $(".submitted-notes").empty();
  // var submittedNote = {
  //   title: $(".list-group-item").val().trim(),
  //   note: $(".list-group-item").val().trim(),
  // };

  // GET submitted notes saved to "/api.notes"
    $.ajax({
    url: "/api/notes",
    method: "GET",
  }).then(function(data) {
    if (data) {
      console.log(data)

      for (var i = 0; i < data.length; i++) {
        var note = data[i];
        
        var listItem = $("<li class='list-group-item'>");
        
        var listItemDetail = $("<div>");
        
        var titleDiv = $("<p class = 'titleDiv'>");
        titleDiv.text(note.title);
        var noteDiv = $("<p>");
        noteDiv.text(note.note);
        var deleteButton = $(`<button id=${note.id} class='btn btn-danger float-top-right deleteNote'><i class='fa fa-trash fa-sm'>`);
        deleteButton.button();
        
        listItemDetail.append(titleDiv).append(noteDiv).append(deleteButton);
        listItem.append(listItemDetail);


        $(".submitted-notes").append(listItem);

      }
    }
  });
}

// BUTTON TO DELETE NOTE

var clearNote = function() {
  console.log("Hello", $(this).attr("id"));

  $.ajax({
    url: "/api/notes/" + $(this).attr("id"),
    method: "DELETE",
  }).then(function(data) {
   location.reload();
  });
};

$(document).on("click", ".deleteNote", clearNote);


showNotes();