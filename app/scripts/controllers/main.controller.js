"use strict";
var app = angular.module('angularappApp');
app.controller('MainCtrl',['$scope', function ($scope) {
  	$scope.welcometext = "hey..!!";
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $scope.centerAnchor = true;
        $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}
        $scope.draggableObjects = [{name:'cross', location: '/images/cross.png'}, {name:'zero', location: '/images/zero.png'}];
        $scope.droppedObjects1 = [];
        $scope.alldropped = [0,0,0,0,0,0,0,0,0,0];
        $scope.droppedObjects2= [];
        var count = 0;
        updatewelcometext();
        $scope.refreshall = function()
        {
             $scope.alldropped = [0,0,0,0,0,0,0,0,0,0];
             count = 0;
             document.getElementById("cross").style.visibility="visible";
             document.getElementById("zero").style.visibility="visible";
            // document.getElementById("1")
            for(var i = 1;i<=9;i++)
             document.getElementById(String(i)).style.backgroundColor = "initial";

        }
        function checkIfOver(index)
        {	var i=0;

        	var sets = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
        	console.log("sets = " + sets+ "sets[0][0]" + sets[0][0]);

        	for ( i=0;i<8;i++)
        	{	var found = false;
        		if(sets[i].indexOf(index)!=-1)
        		{
        		console.log("going to set" + i);
        		//console.log("sets[0][0] " + sets[i][0] +" "+  $scope.alldropped[sets[i][0]].name);
        		if (($scope.alldropped[sets[i][0]]!=0) && ($scope.alldropped[sets[i][0]].name==$scope.alldropped[sets[i][1]].name) && ($scope.alldropped[sets[i][0]].name==$scope.alldropped[sets[i][2]].name))
        				{
        					console.log('mil gaya!');
        					found = true;
        					return sets[i];
        					break;

        				}
        		}
        		

        		
        	}
            return null;
        }
        $scope.onDropComplete1=function(data,evt){
        	if ($scope.droppedObjects1.length == 0)
        	{
            	
            	$scope.droppedObjects1.push(data);
            	count = count +1;
            	updatewelcometext();
			}			
    		
        }
        $scope.onDropCompletefinal = function(data,evt,index)
        {
        	console.log("the index passed was" + index+ data);
        	if($scope.alldropped[index]==0)
        	{
        		$scope.alldropped[index]= data;
            	count = count +1;
            	if(data.name=="cross")
            	{
            	document.getElementById("cross").style.visibility="hidden";
            	document.getElementById("zero").style.visibility="visible";
              	}
              	else
              	{document.getElementById("cross").style.visibility="visible";
            	document.getElementById("zero").style.visibility="hidden";
              	}
        	}
        	
        		var done = (checkIfOver(index));
        		if(done!=null)
        			{
                        //$scope.welcometext = done;
                        done.forEach(function(entry){
                          document.getElementById(entry).style.backgroundColor= "green";


                        });
                        toastr.options = {
                        "closeButton": false,
                        "debug": false,
                        "newestOnTop": false,
                        "progressBar": false,
                        "positionClass": "toast-top-center",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "5000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                        }
                        if(count%2==0)
                            $scope.winner = " player 2 ";
                        else 
                            $scope.winner = "player 1 ";
                            toastr["success"]( $scope.winner+ "Wins !")

                        

                    }
                else
                    updatewelcometext();


        }
        function updatewelcometext(){
				if(count%2 ==0)
        			$scope.welcometext = "player 1's chance";
        		else 
        			$scope.welcometext = "player 2's chance";
        	 };

  }]);
 app.controller('AboutCtrl', ['$scope', function($scope){
 	  $scope.text1 = "this is the text for the about page..!";
 	}]);

