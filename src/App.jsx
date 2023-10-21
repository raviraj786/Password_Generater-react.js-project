import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const App = () => {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setAchrAllowed] = useState(false);
  const [password, setPassword] = useState("");
  console.log(password)
   
  

  const PasswordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]~`";
    for (let i = 1; i <=lenght; i++) {
       let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char) 
    }
    console.log(pass)
    setPassword(pass)
   
  }, [ lenght,  numberAllowed, charAllowed, setPassword ]);





  useEffect(() => {
    PasswordGenerater();
  }, [lenght, numberAllowed, charAllowed]);


 
 

  return (
    <div className=" bg-black  h-screen w-full ">
      <h1 className="text-3xl font-bold  text-center text-white  py-5 ">
        Password Generator
      </h1>

      <div className=" w-full max-w-md mx-auto shadow-md  rounded-lg px-4 my-8 text-orange-500 bg-gray-700  ">
        <h1 className="text-3xl font-bold  text-center text-white  py-5 ">
          Password Generator
        </h1>
        <div className=" flex shadow rounded-lg overflow-hidden md-4">
          <input
            type="text"
            value={password}
            className=" outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
           
          />
          <button className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  ">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1  p-3 ">
            <input
              type="range"
              min={6}
              max={100}
              value={lenght}
              className="cursor-pointer"
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label> lenght: {lenght}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setAchrAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">CharacterInput</label>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default App;
