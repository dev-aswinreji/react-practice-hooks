import { ArrayWithProps } from "./arrayProps";

export function LearningProps({ name ,age, arr}) {
  console.log(name, "props is showing");
  console.log(arr,'array is showing');
  const array = [2,3,4,5,6]
  return (
    <>
  <h1>Hello World , {name} and age is {age}</h1>
  < ArrayWithProps arr={array}/> 
    </>
  )
}
