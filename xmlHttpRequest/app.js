// old way of making Http requests

const requestUrl = "https://api.github.com/users/anushkadeshpande"

const xhr = new XMLHttpRequest()

// open connection
xhr.open("GET", requestUrl)

// These are the states that xhr goes through
/* 
0	UNSENT	              Client has been created. open() not called yet.
1	OPENED	              open() has been called.
2	HEADERS_RECEIVED	    send() has been called, and headers and status are available.
3	LOADING	              Downloading; responseText holds partial data.
4	DONE	                The operation is complete.
*/

// will be invoked everytime the state changes
xhr.onreadystatechange = function() {
  console.log(xhr.readyState)
  if(xhr.readyState === 4) {
    // most of the times, the response returned is a string, not an object
    console.log(typeof this.responseText);
    
    // convert it to json
    const data = JSON.parse(this.responseText)

    console.log(data.login)
  }
}

// send the request
xhr.send()