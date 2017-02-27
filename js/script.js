$(document).ready(function(){
  $('button').on('click', createGroups)
});

var students = [
        "Dave Thomas",
        "Steve Jobs",
        "Kollin Brandenburg",
        "Dirk Dunn",
        "Mike Dang",
        "Thomas Foster",
        "Homer Simpson",
        "Bart Simpson",
        "Peter Griffin",
        "Brian Griffin",
        "Chris Griffin",
        "Rich Sanchez",
        "Morty Smith",
        "Bird Person",
        "Mr. Goldenfold",
        "Coach Feratu",
        "Toby Matthews",
        "Frank Palicky",
        "Colene Rector"
        ];

function createGroups(){
  $('#groupPanel').empty()
  groupSplit();
}

function groupSplit() {
  for (var i = students.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = students[i];
      students[i] = students[j];
      students[j] = temp;
  }
  console.log('students', students);
  var groupSize = 3
  var groups = _.map(students, function(item, index){
    return index % groupSize === 0 ? students.slice(index, index + groupSize) : null;
    })
    .filter(function(item){ return item;
  });
  console.log("The groups: ", groups);
  displayGroups(groups);
}

function displayGroups(groups) {
  for (i = 0; i < groups.length; i++) {
    var groupNumber= i+1
    console.log('groupNumber', groupNumber);
    $('#groupPanel').append("<div class='col-lg-4 col-md-6 groupBox' id='"+groupNumber+"'>Group "+groupNumber+"</div>");
    _.map(groups[i], function(name){
      $("#"+groupNumber).append('<p>'+name+'</p>')
      console.log('name', name)
    });
  }
}
