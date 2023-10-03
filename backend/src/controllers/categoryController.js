import categoryService from "../services/categoryService";




const categoryController = {
    createCategory: async (req, res) => {
        const dataCategory = {
            name: req.body.name == undefined ? '' : req.body.name,
            isActive: req.body.isActive == undefined ? '' : req.body.name
        }
        const createCategoryState = await categoryService.createCategory(dataCategory.name, dataCategory.isActive)
        return res.status(createCategoryState.status).json(createCategoryState)
    },
    getAllCategory: async (req, res) => {

    },
    updateCategory: async (req, res) => {

    },
    getCategoryAndMeme: async (req, res) => {

    },
}

export default categoryController;