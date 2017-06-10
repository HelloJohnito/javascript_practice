$(function(){

    var model = {

        // Create an empty array within localStorage
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },

        //
        add: function(obj) {
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },

        // Get all the notes from localStorage
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };


    var octopus = {

        // Called from views onSubmit
        // Takes in the input and sends it to model.
        addNewNote: function(noteStr) {
            model.add({
                content: noteStr
            });
            view.render();
        },

        // Called from views render
        // gets all notes from the model
        getNotes: function() {
            return model.getAllNotes();
        },

        //STARTING POINT
        init: function() {
            model.init();
            view.init();
        }
    };


    var view = {
        init: function() {

            // Select elements and save them into variables
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');

            // Set eventhandler
            // Send the input to controller
            newNoteForm.submit(function(e){
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });

            // Render View
            view.render();
        },

        // Grab all notes from model and render them
        render: function(){
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content +
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

    octopus.init();
});
