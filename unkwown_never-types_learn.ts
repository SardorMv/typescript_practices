
{/*
    The Unknown and Never Types explained: 
        - Everything assigned to this type will result in a error 
          unless uou assign it to another type. 
        - When we conmpare the uknown to any type, the unknown
          type is more restrictive. 
*/}

let loginInput: unknown;     
let userName: string;

loginInput = 5;
loginInput = "Steve";

if (typeof loginInput === "string") {
    userName=loginInput;
}

// ---------------------------------------------------------------

{/*
    Never type explained: 
      - Below example, if we dont pass string or boolean as parameter
       in the neverSampleMethod , it will always throws an error. 
      - Never type is used when the function/method  never returns any 
       value while it has a return type. 
      
*/}

 export class NeverExample {
    neverSampleMethod(x : any): boolean {
      if (typeof x === 'string') {
        return true;
      } else if (typeof x === 'bolean') {
          return false;
      }

      return this.throwError('This method nevers ends');
    }
    throwError(text: string) : never {
      throw new Error(text);
    }
 }