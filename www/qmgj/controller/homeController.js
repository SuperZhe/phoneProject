// 轮播图
app.controller('homeController',['$scope','$interval',function($scope,$interval){
   $scope.arr1=[
       "images/img-show.png","images/show-img2.png"
   ]
   $scope.showIndex=0;
   $scope.next = function(index){
   	  if($scope.showIndex == 0 ){
   	  	$scope.showIndex =index+1;
   	  }
   }
   $scope.prev = function(index){
   	  if($scope.showIndex ==1){
   	  	$scope.showIndex = index-1;
   	  }
   }
   $interval(function(){
   if($scope.showIndex >= $scope.arr1.length-1){
   	   $scope.showIndex = 0;
		return;}
    else{$scope.showIndex++;}	 		
	},3000);		 	
	
	


   

  
   
}]);