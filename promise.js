/*

function getTemp(location, callBack){
	callBack(undefined, 78);
	callBack('city not found');

}

getTemp("philadelphia", function(err, temp){
	if(err){
		console.log("error", err);
	}
	else{
		console.log("success", temp);
	}

});

function getTempPromise(location){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(79);
			reject("city not found");
		}, 10000)
		
	})
}
getTempPromise("philadelphia").then(function(temp){
	console.log("success", temp);
	}, 
	function(err){
		console.log("error", err);
	}
);
*/
//----------------------------------------

function addPromise(a,b){
	return new Promise(function(resolve, reject){
		if(typeof a === 'number' && typeof b === 'number'){
			resolve(a + b);
		}else{
			reject("not a number");
		}
	});
}

addPromise(1,"t").then(function(sum){
	console.log('success', sum);

	}, 
	function(err){
		console.log('error', err);

	}
)

/*
1.construct the function that returns a promise object
2.the promise object takes a function which in turn takes two arguments: resolve, reject
3.resolve is called if successful, else reject is called if failed
4.build the functions and insert them via the then method which takes two functions as arguments
which will be the body of resolve and reject
*/