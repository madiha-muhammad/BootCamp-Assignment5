### BootCamp-Assignment 5: React Context APi and useReducer React Hoock
 
 http://assignment5_react-context-api_use-reducer-react-hoock.surge.sh/
 
 
 ### State

  a plce where, we put centerilized data. whenever state will change , all the values belongs to state will change in whole website. 


 ### React Hook

   Allows us to use 'state', 'refs' and other React features without writing a class.

 
 ### useState Hook

  allows us to use 'state' in functional components. Takes single-initial-value of state as argument >> returns array of 2 elements. 

    Syntax:   let [state-var, function_state-var_updater] = useState(initial-value);
  
  let [count, setCount] = useState(1);
  
  update variable 'count' by using 'setCount' 


 ### React Context APi 

  Craete CounterContext.js 

  In Context API, create 'counterContext' variable. It will access globaly.  
  
  Manipulate/manage State from Parent level to Child level without having pass 'props' manually at each level  in tree.

 
 ### useReducer React Hoock

  Reducer concept came from Redux. Reducer was introduced to solve the problem of bulk of state values in whole website (big proects have many states, much difficult to send state in tree in whole proj). It was bit difficult.

  useReducer is easy version of Redux.

  Put a state in  a central location (Global). 
  Reducer only to change the 'state' , but it use 'Action' only. (Switch)

  Its difficult for normal components to use Reducer, to solve this problem, we apply 'dispatch'. In it pass the 'Action'. >>> Dispatch(Action). 

  

 ### Errors
  
  CounterContext
  #### Error1
   Solution: Never use .js extension with file name when try to import it gives error.
