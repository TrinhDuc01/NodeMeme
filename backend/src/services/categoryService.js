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
    },
    getCategoryUpdate: async (id) => {
        if (id == '') return {
            message: "Get category false!",
            get: false,
            status: 401
        }
        const category = await db.Category.findOne({ where: { id: id } });
        if (!category) return {
            message: "Do not have category for this id!",
            get: false,
            status: 401
        }
        return {
            id: category.id,
            name: category.name,
            message: "Get category successfully!",
            get: true,
            status: 200
        };
    },
    updateCategory: async (id, name) => {
        const isNull = checkInputNull([id, name])
        if (isNull) return {
            message: "Please fill in all information into the field!",
            get: false,
            status: 401
        }
        const category = await db.Category.findOne({ where: { id: id } });
        if (!category) return {
            message: "Category id is not valid!",
            get: true,
            status: 200
        };
        category.name = name;
        await category.save();
        return {
            message: "Update category successfully!",
            get: true,
            status: 200
        };
    }
}

export default categoryService;