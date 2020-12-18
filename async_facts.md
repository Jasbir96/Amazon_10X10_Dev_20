## Facts
* promise is a future value 
        * states
            * initial -> pending
            * final -> settled
        * values
            * initai-> no val
            * final -> depend on resolve function
* then and catch are synchronous function that can be attched to a promise
* cbs of then and catch are async 
* promise can be resolved once in a lifetime 
* then and catch also returns a promise
                and that promise  state depend upon the cb of then 
                    * value -> resolve with that value
                    * err-> reject with error
                    * promise-> promise

