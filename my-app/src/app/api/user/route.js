import { NextResponse } from "next/server";
import dummyData from "../../../../lib/db";

// READ
export async function GET() {
    try {
        // Return the dummyData as JSON response
        return NextResponse.json(dummyData);
    } catch (error) {
        // If an error occurs while fetching data, return an error response
        console.error("Error:", error);
        return NextResponse.json({ message: "An error occurred while fetching data" }, { status: 500 });
    }
}

// CREATE
export async function POST(req) {
    try {
        // Extract the name from the request body
        const { name } = await req.json();

        // Check if the name is provided
        if (!name) {
            // If name is not provided, return a bad request error response
            return NextResponse.json({ message: "name is required" }, { status: 400 });
        }

        // Create new data object with name and an incremented ID
        const newData = { name: name, id: dummyData.length + 1 };

        // Push the new data object into the dummyData array
        dummyData.push(newData);

        // Return the updated dummyData as JSON response
        return NextResponse.json(dummyData);
    } catch (error) {
        // If an error occurs while creating data, return an error response
        console.error("Error:", error);
        return NextResponse.json({ message: "An error occurred while creating data", error }, { status: 500 });
    }
}

// UPDATE
export async function PUT(req) {
    try {
        // Extract the id and name from the request body
        const { id, name } = await req.json();

        // Check if both id and name are provided
        if (!id || !name) {
            // If id or name is missing, return a bad request error response
            return NextResponse.json({ message: "Both ID and name are required for update" }, { status: 400 });
        }

        // Find the index of the data object with the provided id
        const index = dummyData.findIndex(data => data.id.toString() === id);

        // If data object with provided id is not found, return a not found error response
        if (index === -1) {
            return NextResponse.json({ message: "Data not found for the given ID" }, { status: 404 });
        }

        // Update the name of the data object at the found index
        dummyData[index].name = name;

        // Return the updated dummyData as JSON response
        return NextResponse.json(dummyData);
    } catch (error) {
        // If an error occurs while updating data, return an error response
        console.error("Error:", error);
        return NextResponse.json({ message: "An error occurred while updating data", error }, { status: 500 });
    }
}

// DELETE
export async function DELETE(req) {
    try {
        // Extract the id from the request body
        const { id } = await req.json();

        // Check if id is provided
        if (!id) {
            // If id is missing, return a bad request error response
            return NextResponse.json({ message: "ID is required for delete" }, { status: 400 });
        }

        // Find the index of the data object with the provided id
        const index = dummyData.findIndex(data => data.id.toString() === id);

        // If data object with provided id is not found, return a not found error response
        if (index === -1) {
            return NextResponse.json({ message: "Data not found for the given ID" }, { status: 404 });
        }

        // Remove the data object at the found index from the dummyData array
        dummyData.splice(index, 1);

        // Return the updated dummyData as JSON response
        return NextResponse.json(dummyData);
    } catch (error) {
        // If an error occurs while deleting data, return an error response
        console.error("Error:", error);
        return NextResponse.json({ message: "An error occurred while deleting data", error }, { status: 500 });
    }
}
