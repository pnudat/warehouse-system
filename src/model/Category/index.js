const prisma = require('../../config')

async function add_category(c_name, c_description) {
    const category = await prisma.category.create({
        data: {
            name: c_name,
            description: c_description,
        }
    });
};

module.exports = add_category;