app.controller('phController',['$scope',function($scope){
   	 $scope.arr2=[
   	    {name:'个人主页', view:'personal-homepage'},
   	    {name:'个人信息',  view:'personal-homepage.personal-information'},
   	    {name:'安全设置',  view:'personal-homepage.safe-set'},
   	    {name:'关注的圈子',view:'personal-homepage.tab-4'},
   	    {name:'购买记录',  view:'personal-homepage.tab-5'}];
   }])