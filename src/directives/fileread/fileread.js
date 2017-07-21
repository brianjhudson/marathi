function fileread(lessonService) {
  return {
    restrict: "A",
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
        var reader = new FileReader();

        reader.onloadend = function (loadEvent) {
          var fileread = loadEvent.target.result;
          const fileName = elem[0].files[0].name.split('.')[0];

        //   var tempArray = elem['context'].value.split('\\');
        //   var fileName = tempArray[tempArray.length - 1];

          lessonService.storeImage(fileread, fileName)
          .then(function (result) {
              scope.newLesson.image = result.data.location;
          })
          .catch(function (err) {
            console.error(err);
          });
        }

        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }    

  }
}

fileread.$inject = ['lessonService']
export default fileread;
// angular.module('marathiApp').directive('fileread', fileread)