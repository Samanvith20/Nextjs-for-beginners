import { NextResponse } from "next/server";
import dummyData from "../../../../../lib/db";

export async function GET(request, par) {
    const id = par.params.id;

    console.log("Received ID:", id);

    // Find data with matching ID
    const singleData = dummyData.find((item) => item.id.toString() === id);

    // Check if data was found
    if (!singleData) {
        return NextResponse.json({ message: "No Data Found" }, { status: 404 });
    }

    return NextResponse.json(singleData);
}
