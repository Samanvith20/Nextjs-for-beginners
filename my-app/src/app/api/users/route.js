import { NextResponse } from "next/server";
import dummyData from "../../../../lib/db";
 export async function GET(){
    return   NextResponse.json(dummyData)
 }