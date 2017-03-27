$(document).ready(function(){
  $('.generator').on('click', createGroups)
});
//Array of Students
var students = [
  "Charles Orlando",
  "Juliana Michelsen",
  "Ronak Singh",
  "Andrew	Chan",
  "Erik	Morales",
  "Matthew Tan",
  "Daniel	Doherty",
  "Christopher Jauregui",
  "Jon Franchi",
  "Sam Collette",
  "Peter Weyand",
  "Salman	Rana",
  "Matthew Heck",
  "Melissa Pringle",
  "Tanya Selvog",
  "Sarah Goldgar",
  "Jorge Cano",
  "Barbara Boutette",
  "Robert Saunders",
  "Komal Jadvani",
  "Jacob Bodkin",
  "Remington Griffin",
  "Rene	Sanchez"
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
  for (i = groups.length-1; i < groups.length; i--) {
    var groupNumber= i+1
    console.log('group length: ', groups[i].length);
    if (groups[i].length < 3){
      console.log('This is not full');
      var person1 = groups[i][0]
      groups[0].push(person1)
      // console.log('Group 1', groups[0]);
      var person2 = groups[i][1]
      groups[1].push(person2)
      // console.log('Group 2', groups[1]);
    } else {
      // console.log('This group IS full');
      $('#groupPanel').prepend("<div class='col-lg-4 col-md-6 groupBox' id='"+groupNumber+"'><div class='grouptitle'>Group "+groupNumber+"</div></div><hr />");
      _.map(groups[i], function(name){
        $("#"+groupNumber).append('<p>'+name+'</p>')
        console.log('name', name)
      });
    }


  }
}
