import db from "../models";
import { checkInputNull } from "./checkService";


const categoryService = {
    createCategory: async (name, isActive) => {
        const isNull = checkInputNull([name, isActive]);
        console.log(isNull)
        if (isNull) return {
            message: "Please fill in all information into the field!",
            create: false,
            status: 401
        }
        const category = await db.Category.create({ name, isActive })
        await category.save();
        return {
            message: "Create category successfully!",
            create: true,
            status: 200
        }
    }
}

export default categoryService;