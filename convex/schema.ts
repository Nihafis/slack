
import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";


const schema = defineSchema({
    // Define the schema for your API endpoints
    ...authTables
});

export default schema;