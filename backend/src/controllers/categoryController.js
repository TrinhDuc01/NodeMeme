import categoryService from "../services/categoryService";




const categoryController = {
    createCategory: async (req, res) => {
        try {
            const dataCategory = {
                name: req.body.name == undefined ? '' : req.body.name,
            }
            const createCategoryState = await categoryService.createCategory(dataCategory.name)
            return res.status(createCategoryState.status).json(createCategoryState)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllCategory: async (req, res) => {
        try {
            const listCategory = await categoryService.getAllCategory();
            res.status(200).json(listCategory)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getUpdateCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const data = await categoryService.getCategoryUpdate(categoryId);
            res.status(data.status).json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateCategory: async (req, res) => {
        try {
            const categoryId = req.body.id == undefined ? '' : req.body.id;
            const categoryName = req.body.name == undefined ? '' : req.body.name;
            const categoryIsActive = req.body.isActive == undefined ? '' : req.body.isActive;
            const data = await categoryService.updateCategory(categoryId, categoryName, categoryIsActive);
            res.status(data.status).json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getCategoryAndMeme: async (req, res) => {

    },
}

export default categoryController;