// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    // Defines the third table needed to store the foreign keys
  through: {
    model: ProductTag,
  },
  // Defines an alias for when data is retrieved
  as: 'related_tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  }, 
  as: 'related_products'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
