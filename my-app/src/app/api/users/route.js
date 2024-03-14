import { NextResponse } from "next/server";
  // To get a QUERYPARAMS IN THE GIVEN URL
 export async function GET(request){
   const {searchParams}=new URL (request.url)
   console.log(searchParams);
   //  const name = searchParams.get("name")
   //  const age= searchParams.get("age")
   //  console.log(name,age);
  
   const obj = Object.fromEntries(searchParams.entries());
   
  //  const obj = JSON.stringify(params);
   console.log(obj);
   
    return   NextResponse.json(obj)
 }